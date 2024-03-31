RegisterTableGoal(GOAL_NPC_Eileen, "GOAL_NPC_Eileen")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_NPC_Eileen, true)

-------------------------
-- Initialize
-------------------------
Goal.Initialize = function (self, ai, goal, arg3)
    return 
end

-------------------------
-- Activate
-------------------------
Goal.Activate = function (self, ai, goal)
    Init_Pseudo_Global(ai, goal)
    
    ai:SetStringIndexedNumber("Dist_Rolling", 3.0)      -- Distance to roll at
    ai:SetStringIndexedNumber("Dist_BackStep", 2.0)     -- Distance to backstep at
    ai:SetStringIndexedNumber("AddDistWalk", 0)
    ai:SetStringIndexedNumber("AddDistRun", 0.2)
    
    local actChanceList = {}
    local actFuncList = {}
    local actTblList = {}
    
    Common_Clear_Param(actChanceList, actFuncList, actTblList)
    
    local roll      = ai:GetRandam_Int(1, 100)
    local distance  = ai:GetDist(TARGET_ENE_0)
    local stamina   = ai:GetSp(TARGET_SELF)
    local hp_rate   = ai:GetHpRate(TARGET_SELF)
    
    local speffect_no_invalid_item = ai:HasSpecialEffectId(TARGET_SELF, 5111)
    
    -- Friendly Mode
    if ai:HasSpecialEffectId(TARGET_SELF, 160803050) then
        goal:AddSubGoal(GOAL_NPC_WhiteGhost_Battle, 2)
    end
    
    ----------------------------------
    -- Act Distribution
    ----------------------------------
    if distance >= 2 then
        actChanceList[1] = 0 -- Right Light Attack + Approach
        actChanceList[2] = 0 -- Right Heavy Attack + Approach
        actChanceList[3] = 0 -- Kick + Approach
        actChanceList[4] = 20 -- Jump Attack + Approach
        actChanceList[5] = 0 -- WA: Quickstep
        
        actChanceList[10] = 20 -- Approach + Running Attack
        actChanceList[11] = 0 -- Backstep Roll
        actChanceList[12] = 0 -- Forward Roll + Run + Basic Light Attack
        actChanceList[13] = 0 -- Side Roll + Run + Basic Light Attack
        actChanceList[14] = 0 -- Back Roll + Basic Light Attack
        actChanceList[15] = 0 -- Strafe
        actChanceList[16] = 0 -- Backstep Walk
        actChanceList[17] = 20 -- Approach
        
        actChanceList[20] = 0 -- Use Item (Slot 0) - Undead Hunter Charm
        actChanceList[21] = 0 -- Use Item (Slot 0) - Black Firebomb
        
        actChanceList[30] = 0 -- Cast Spell (Slot 0) - Vow of Silence
        actChanceList[31] = 5 -- Cast Spell (Slot 1) - Gnaw
        actChanceList[32] = 0 -- Cast Spell (Slot 2) - Deep Protection
    else
        actChanceList[1] = 20 -- Right Light Attack + Approach
        actChanceList[2] = 20 -- Right Heavy Attack + Approach
        actChanceList[3] = 10 -- Kick + Approach
        actChanceList[4] = 0 -- Jump Attack + Approach
        actChanceList[5] = 0 -- WA: Quickstep
        
        actChanceList[10] = 0 -- Approach + Running Attack
        actChanceList[11] = 10 -- Backstep Roll
        actChanceList[12] = 10 -- Forward Roll + Run + Basic Light Attack
        actChanceList[13] = 10 -- Side Roll + Run + Basic Light Attack
        actChanceList[14] = 10 -- Back Roll + Basic Light Attack
        actChanceList[15] = 5 -- Strafe
        actChanceList[16] = 0 -- Backstep Walk
        actChanceList[17] = 0 -- Approach
        
        actChanceList[20] = 5 -- Use Item (Slot 0) - Undead Hunter Charm
        actChanceList[21] = 5 -- Use Item (Slot 0) - Black Firebomb
        
        actChanceList[30] = 0 -- Cast Spell (Slot 0) - Vow of Silence
        actChanceList[31] = 5 -- Cast Spell (Slot 1) - Gnaw
        actChanceList[32] = 0 -- Cast Spell (Slot 2) - Deep Protection
    end
    
    ----------------------------------
    -- Act Modifiers
    ----------------------------------
    -- Enable Deep Protection if the AI doesn't have it applied
    ai:AddObserveSpecialEffectAttribute(TARGET_SELF, 103770000)
    
    if not ai:HasSpecialEffectId(TARGET_SELF, 103770000) then
        actChanceList[32] = 20 -- Cast Spell (Slot 2) - Deep Protection
    end
    
    -- Enable Vow of Silence if the player doesn't have it applied
    ai:AddObserveSpecialEffectAttribute(TARGET_ENE_0, 103581000)
    ai:AddObserveSpecialEffectAttribute(TARGET_SELF, 103581000)
    
    if not ai:HasSpecialEffectId(TARGET_ENE_0, 103581000) then
        actChanceList[30] = 20 -- Cast Spell (Slot 0) - Vow of Silence
    end
    
    -- Remove spells while Vow of Silence is active
    if ai:HasSpecialEffectId(TARGET_ENE_0, 103581000) then
        actChanceList[30] = 0 -- Cast Spell (Slot 0) - Vow of Silence
        actChanceList[31] = 0 -- Cast Spell (Slot 1) - Gnaw
        actChanceList[32] = 0 -- Cast Spell (Slot 2) - Deep Protection
    end
    
    -- Invalid Item check
    if speffect_no_invalid_item then
        actChanceList[20] = 0 -- Use Item (Slot 0) - Undead Hunter Charm
        actChanceList[21] = 0 -- Use Item (Slot 0) - Black Firebomb
    end
    
    -- Roll against guarded player
    if ai:IsTargetGuard(TARGET_ENE_0) then
        actChanceList[13] = actChanceList[13] + 20 -- Side Roll + Run + Basic Light Attack
    end
    

    ----------------------------------
    -- Movement Checks
    ----------------------------------
    -- Block backstep if there is an obstacle behind the AI within 2.6 meters
    if SpaceCheck(ai, goal, 180, ai:GetStringIndexedNumber("Dist_BackStep")) == false then
        actChanceList[11] = 0 -- Backstep Roll
    end
    
    -- Block forward roll if there is an obstacle +/- 45 degrees in front the AI within 4.4 meters
    if SpaceCheck(ai, goal, -45, ai:GetStringIndexedNumber("Dist_Rolling")) == false and SpaceCheck(ai, goal, 45, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[12] = 0 -- Forward Roll + Run + Basic Light Attack
    end
    
    -- Block side roll if there is an obstacle +/- 90 degrees to the side of the AI within 4.4 meters
    if SpaceCheck(ai, goal, -90, ai:GetStringIndexedNumber("Dist_Rolling")) == false and SpaceCheck(ai, goal, 90, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[13] = 0 -- Side Roll + Run + Basic Light Attack
    end
    
    -- Block back roll if there is an obstacle +/- 135 degrees to the side of the AI within 4.4 meters
    if SpaceCheck(ai, goal, -135, ai:GetStringIndexedNumber("Dist_Rolling")) == false and SpaceCheck(ai, goal, 135, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[14] = 0 -- Back Roll + Basic Light Attack
    end
    
    -- Block back roll if there is an obstacle behind the AI within 4.4 meters
    if SpaceCheck(ai, goal, 180, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[14] = 0 -- Back Roll + Basic Light Attack
    end

    -- Block backstep walk if there is an obstacle behind the AI within 1 meters
    if SpaceCheck(ai, goal, 180, 1) == false then
        actChanceList[16] = 0 -- Backstep Walk
    end
    
    -- Block strafe if there is an obstacle +/- 90 degrees to the side of the AI within 1 meters
    if SpaceCheck(ai, goal, -90, 1) == false and SpaceCheck(ai, goal, 90, 1) == false then
        actChanceList[15] = 0 -- Strafe
    end
    
    ----------------------------------
    -- Acts
    ----------------------------------
    -- Attacks
    actFuncList[1] = REGIST_FUNC(ai, goal, NPC_Eileen_Act01) -- Right Light Attack + Approach
    actFuncList[2] = REGIST_FUNC(ai, goal, NPC_Eileen_Act02) -- Right Heavy Attack + Approach
    actFuncList[3] = REGIST_FUNC(ai, goal, NPC_Eileen_Act03) -- Kick + Approach
    actFuncList[4] = REGIST_FUNC(ai, goal, NPC_Eileen_Act04) -- Jump Attack + Approach
    actFuncList[5] = REGIST_FUNC(ai, goal, NPC_Eileen_Act05) -- WA: Quickstep
    
    -- Utility
    actFuncList[10] = REGIST_FUNC(ai, goal, NPC_Eileen_Act10) -- Approach + Running Attack
    actFuncList[11] = REGIST_FUNC(ai, goal, NPC_Eileen_Act11) -- Backstep Roll
    actFuncList[12] = REGIST_FUNC(ai, goal, NPC_Eileen_Act12) -- Forward Roll + Run + Basic Light Attack
    actFuncList[13] = REGIST_FUNC(ai, goal, NPC_Eileen_Act13) -- Side Roll + Run + Basic Light Attack
    actFuncList[14] = REGIST_FUNC(ai, goal, NPC_Eileen_Act14) -- Back Roll + Basic Light Attack
    actFuncList[15] = REGIST_FUNC(ai, goal, NPC_Eileen_Act15) -- Strafe
    actFuncList[16] = REGIST_FUNC(ai, goal, NPC_Eileen_Act16) -- Backstep Walk
    actFuncList[17] = REGIST_FUNC(ai, goal, NPC_Eileen_Act17) -- Approach
    
    -- Items
    actFuncList[20] = REGIST_FUNC(ai, goal, NPC_Eileen_Act20)   -- Use Item (Slot 0) - Undead Hunter Charm
    actFuncList[21] = REGIST_FUNC(ai, goal, NPC_Eileen_Act21)   -- Use Item (Slot 1) - Black Firebomb
    
    -- Spells
    actFuncList[30] = REGIST_FUNC(ai, goal, NPC_Eileen_Act30) -- Cast Spell (Slot 0) - Vow of Silence
    actFuncList[31] = REGIST_FUNC(ai, goal, NPC_Eileen_Act31) -- Cast Spell (Slot 1) - Gnaw
    actFuncList[32] = REGIST_FUNC(ai, goal, NPC_Eileen_Act32) -- Cast Spell (Slot 2) - Deep Protection
    
    Common_Battle_Activate(ai, goal, actChanceList, actFuncList, REGIST_FUNC(ai, goal, NPC_Eileen_ActAfter_AdjustSpace), actTblList)
    return 
end

-------------------------
-- Functions
-------------------------
-- Right Light Attack + Approach
function NPC_Eileen_Act01(self, ai, goal)
    local roll_a    = self:GetRandam_Int(1, 100)
    local distance  = self:GetDist(TARGET_ENE_0)
    local stamina   = self:GetSp(TARGET_SELF)
    
    local max_attack_distance = 1.4
    local roll_b   = 100
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 1.4
        roll_b = 0
    end
    
    if self:GetEquipWeaponIndex(ARM_L) ~= WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    if 1 <= distance then
        if not self:IsBothHandMode(TARGET_SELF) then
            local roll_c = 25
            
            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_c = roll_c + 25
            end
            
            if roll_a <= roll_c then
                roll_b = 0
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        elseif self:IsBothHandMode(TARGET_SELF) then
            local roll_c = 50
            
            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_c = roll_c - 25
            end
            
            if roll_a <= roll_c then
                roll_b = 100
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        end
    end
    
    if stamina < 60 then
        roll_b = 0
    end
    
    -- Approach
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_b, 1.8, 2)
    
    if self:GetRandam_Int(1, 100) <= 50 and 0 < roll_b and max_attack_distance <= distance then
        if self:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_L, 180) then
            ai:AddSubGoal(GOAL_COMMON_SidewayMove, 0.3, TARGET_ENE_0, 0, self:GetRandam_Int(75, 90), true, true, NPC_ATK_L1Hold) -- Move and Guard
        else
            ai:AddSubGoal(GOAL_COMMON_SidewayMove, 0.3, TARGET_ENE_0, 1, self:GetRandam_Int(75, 90), true, true, NPC_ATK_L1Hold) -- Move and Guard
        end
    end
    
    if 120 <= stamina then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R1, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Light Attack + Approach
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack + Approach
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack + Approach
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack + Approach
    elseif 60 <= stamina then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R1, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Light Attack + Approach
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack + Approach
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack + Approach
    else
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Light Attack + Approach
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack + Approach
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Right Heavy Attack + Approach
function NPC_Eileen_Act02(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    local max_attack_distance = 1.4
    local roll_c = 100
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 1.4
        roll_c = 0
    end
    
    if self:GetEquipWeaponIndex(ARM_L) ~= WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    if 1 <= distance then
        if not self:IsBothHandMode(TARGET_SELF) then
            local roll_d = 25
            
            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_d = roll_d + 25
            end
            
            if roll_a <= roll_d then
                roll_c = 0
                
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        elseif self:IsBothHandMode(TARGET_SELF) then
            local roll_d = 50

            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_d = roll_d - 25
            end
            
            if roll_a <= roll_d then
                roll_c = 100
                
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        end
    end
    
    if stamina < 60 then
        roll_c = 0
    end
    
    -- Approach
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_c, 1.8, 2)
    
    if roll_b <= 50 and 0 < roll_c and max_attack_distance <= distance then
        if self:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_L, 180) then
            ai:AddSubGoal(GOAL_COMMON_SidewayMove, 0.3, TARGET_ENE_0, 0, self:GetRandam_Int(75, 90), true, true, NPC_ATK_L1Hold) -- Move and Guard
        else
            ai:AddSubGoal(GOAL_COMMON_SidewayMove, 0.3, TARGET_ENE_0, 1, self:GetRandam_Int(75, 90), true, true, NPC_ATK_L1Hold) -- Move and Guard
        end
    end
    
    if 60 <= stamina and 67 < roll_a then
        if roll_b <= 50 then
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R2, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Heavy Attack + Approach
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0) -- Right Heavy Attack + Approach
        elseif roll_b <= 75 then
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R2, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Heavy Attack + Approach
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2_Hold, TARGET_ENE_0, 999, 0, 0) -- Right Heavy Attack + Approach
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R2_Hold, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Heavy Attack + Approach
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0) -- Right Heavy Attack + Approach
        end
    elseif roll_b <= 50 then
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2_Hold, TARGET_ENE_0, max_attack_distance, 0, 0)
    else
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, max_attack_distance, 0, 0)
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Kick + Approach
function NPC_Eileen_Act03(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local max_attack_distance = 1.6
    local roll_c = 0
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 1.6
        roll_c = 0
    end
    
    if self:GetEquipWeaponIndex(ARM_L) ~= WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    if self:GetSp(TARGET_SELF) < 50 then
        roll_c = 0
    end
    
    -- Approach
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_c, 1.8, 2)
    
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_Up_R1, TARGET_ENE_0, 999, 0, 0) -- Kick
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Jump Attack + Approach
function NPC_Eileen_Act04(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local max_attack_distance = 3.0
    local roll_c = 100
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 3.0
        roll_c = 0
    end
    
    if self:GetEquipWeaponIndex(ARM_L) ~= WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    if self:GetSp(TARGET_SELF) < 60 then
        roll_c = 0
    end
    
    -- Approach
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_c, 1.8, 2)
    
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_Up_R2, TARGET_ENE_0, 999, 0, 0) -- Jump Attack + Approach
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- WA: Quickstep
function NPC_Eileen_Act05(self, ai, goal)
    local max_attack_distance = 2.6
    local distance = self:GetDist(TARGET_ENE_0)
    local roll_a = self:GetRandam_Int(1, 100)
    
    if not self:IsBothHandMode(TARGET_SELF) then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
    end
    
    -- Approach
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, 100, 1.8, 2)
    
    -- Stance -> Light or Heavy attack
    if roll_a <= 50 then
        ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, max_attack_distance, TARGET_SELF, false, NPC_ATK_L2Hold)
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L2Hold_R1, TARGET_ENE_0, 999, 0, 0)
    else
        ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, max_attack_distance, TARGET_SELF, false, NPC_ATK_L2Hold)
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L2Hold_R2, TARGET_ENE_0, 999, 0, 0)
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Approach + Running Attack
function NPC_Eileen_Act10(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local max_attack_distance = 2.8
    local const_a = 4
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 3.2
        const_a = -1
    end
    
    if self:GetEquipWeaponIndex(ARM_L) ~= WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    if 1 <= self:GetDist(TARGET_ENE_0) then
        if not self:IsBothHandMode(TARGET_SELF) then
            local roll_c = 25
            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_c = roll_c + 25
            end
            if roll_a <= roll_c then
                const_a = -1
                max_attack_distance = 3.2
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        elseif self:IsBothHandMode(TARGET_SELF) then
            local roll_c = 50
            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_c = roll_c - 25
            end
            if roll_a <= roll_c then
                const_a = 4
                max_attack_distance = 2.8
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        end
    end
    
    if self:GetSp(TARGET_SELF) < 60 then
        const_a = -1
    end
    
    if roll_a <= 50 then
        ai:AddSubGoal(GOAL_COMMON_DashTarget, 3, TARGET_ENE_0, max_attack_distance, TARGET_SELF, const_a)   -- Dash to Enemy
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0)               -- Right Light Attack + Approach
    else
        ai:AddSubGoal(GOAL_COMMON_DashTarget, 3, TARGET_ENE_0, max_attack_distance, TARGET_SELF, const_a)   -- Dash to Enemy
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0)               -- Right Heavy Attack + Approach
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Backstep Roll
function NPC_Eileen_Act11(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    -- Skip if already distant from the target
    if distance >= 6.0 then
        GetWellSpace_Odds = 100
        return GetWellSpace_Odds
    end
    
    if SpaceCheck(self, ai, 180, self:GetStringIndexedNumber("Dist_BackStep")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Roll
    end
    
    if stamina >= 60 and distance <= 2.0 then
        local max_attack_distance = 2.8
        local spin_time = 0.8
        
        if self:GetEquipWeaponIndex(ARM_R) == WEP_Primary and self:IsBothHandMode(TARGET_SELF) then
            max_attack_distance = 3.2
            spin_time = 1
        end
        
        ai:AddSubGoal(GOAL_COMMON_NPCStepAttack, 10, TARGET_ENE_0, max_attack_distance, spin_time, 50) -- Roll Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Forward Roll + Run + Basic Light Attack
function NPC_Eileen_Act12(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    -- Skip if already next to the target
    if distance <= 1.0 then
        GetWellSpace_Odds = 100
        return GetWellSpace_Odds
    end
    
    if distance >= 5 and SpaceCheck(self, ai, 0, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Up_ButtonXmark, TARGET_ENE_0, 3.0, 0, 0) -- Forward Roll
    end
    
    if stamina >= 60 and distance <= 3.0 then
        local max_attack_distance = 5.8
        local spin_time = 5.4
        
        if self:GetEquipWeaponIndex(ARM_R) == WEP_Primary and self:IsBothHandMode(TARGET_SELF) then
            max_attack_distance = 5.4
            spin_time = 4.6
        end
        
        ai:AddSubGoal(GOAL_COMMON_NPCStepAttack, 10, TARGET_ENE_0, max_attack_distance, spin_time, 50) -- Roll Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Side Roll + Run + Basic Light Attack
function NPC_Eileen_Act13(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    if SpaceCheck(self, ai, -90, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        if SpaceCheck(self, ai, 90, self:GetStringIndexedNumber("Dist_Rolling")) == true then
            if self:GetRandam_Int(1, 100) <= 50 then
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Left_ButtonXmark, TARGET_ENE_0, 999, 0, 0)  -- Left Roll
            else
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Right_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Right Roll
            end
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Left_ButtonXmark, TARGET_ENE_0, 999, 0, 0)  -- Left Roll
        end
    elseif SpaceCheck(self, ai, 90, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Right_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Right Roll
    end
    
    if stamina >= 60 and distance <= 3.0 then
        local max_attack_distance = 3.8
        local spin_time = 3.4
        
        if self:GetEquipWeaponIndex(ARM_R) == WEP_Primary and self:IsBothHandMode(TARGET_SELF) then
            max_attack_distance = 3.4
            spin_time = 2.6
        end
        
        ai:AddSubGoal(GOAL_COMMON_NPCStepAttack, 10, TARGET_ENE_0, max_attack_distance, spin_time, R1Fate)
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Back Roll + Basic Light Attack
function NPC_Eileen_Act14(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    local retreat_distance = 3.0
    
    -- Skip if already distant from the target
    if distance >= 10.0 then
        GetWellSpace_Odds = 100
        return GetWellSpace_Odds
    end
    
    if distance >= 1 then
        if SpaceCheck(self, ai, 180, self:GetStringIndexedNumber("Dist_Rolling")) == true then
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Down_ButtonXmark, TARGET_ENE_0, retreat_distance, 0, 0)
        end
    elseif SpaceCheck(self, ai, -135, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        if SpaceCheck(self, ai, 135, self:GetStringIndexedNumber("Dist_Rolling")) == true then
            if self:GetRandam_Int(1, 100) <= 50 then
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownLeft_ButtonXmark, TARGET_ENE_0, retreat_distance, 0, 0) -- Left Back Roll
            else
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownRight_ButtonXmark, TARGET_ENE_0, retreat_distance, 0, 0) -- Right Back Roll
            end
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownLeft_ButtonXmark, TARGET_ENE_0, retreat_distance, 0, 0) -- Left Back Roll
        end
    elseif SpaceCheck(self, ai, 135, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownRight_ButtonXmark, TARGET_ENE_0, retreat_distance, 0, 0) -- Right Back Roll
    end
    
    -- Step Attack
    if stamina >= 60 then
        local max_attack_distance = 1.8
        local spin_time = 1.4
        
        if self:GetEquipWeaponIndex(ARM_R) == WEP_Primary and self:IsBothHandMode(TARGET_SELF) then
            max_attack_distance = 1.4
            spin_time = 0.6
        end
        
        ai:AddSubGoal(GOAL_COMMON_NPCStepAttack, 10, TARGET_ENE_0, max_attack_distance, spin_time, 50)
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Strafe
function NPC_Eileen_Act15(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    local duration = 1.8
    local run_start_distance = 5.0
    local animation = NPC_ATK_L1Hold
    
    -- Change to no guard if stamina is low
    if stamina <= 30 then
        animation = -1
    end
    
    local direction = 0
    
    -- Adjust direction based on location, or end early if colliding
    if SpaceCheck(self, ai, -90, 1) == true then
        if SpaceCheck(self, ai, 90, 1) == true then
            if self:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_R, 180) then
                direction = 0
            else
                direction = 1
            end
        else
            direction = 0
        end
    elseif SpaceCheck(self, ai, 90, 1) == true then
        direction = 1
    else
        GetWellSpace_Odds = 100
        return GetWellSpace_Odds
    end
    
    if distance >= run_start_distance then
        ai:AddSubGoal(GOAL_COMMON_SidewayMove, duration, TARGET_ENE_0, direction, self:GetRandam_Int(75, 90), false, true, animation) -- Guard with Left Weapon
    else
        ai:AddSubGoal(GOAL_COMMON_SidewayMove, duration, TARGET_ENE_0, direction, self:GetRandam_Int(75, 90), true, true, animation)  -- Guard with Left Weapon
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Backstep
function NPC_Eileen_Act16(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local duration = 1.8
    local backstep_start_distance = 3.0
    local run_start_distance = 5.0
    local animation = -1
    
    if distance >= run_start_distance then
        ai:AddSubGoal(GOAL_COMMON_LeaveTarget, duration, TARGET_ENE_0, backstep_start_distance, TARGET_ENE_0, false, animation) -- Backstep
    else
        ai:AddSubGoal(GOAL_COMMON_LeaveTarget, duration, TARGET_ENE_0, backstep_start_distance, TARGET_ENE_0, true, animation) -- Backstep
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Approach
function NPC_Eileen_Act17(self, ai, goal)
    local end_approach_distance = 5.0
    
    if self:IsBothHandMode(TARGET_SELF) then
        ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, end_approach_distance, TARGET_SELF, false, -1)
    else
        ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, end_approach_distance, TARGET_SELF, false, NPC_ATK_L1Hold)
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Use Item (Slot 0) - Undead Hunter Charm
function NPC_Eileen_Act20(self, ai, goal)
    self:ChangeEquipItem(0) 
    self:SetStringIndexedNumber("Undead Hunter Charm", self:GetStringIndexedNumber("Undead Hunter Charm") - 1)
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_ButtonSquare, TARGET_ENE_0, 999, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Use Item (Slot 1) - Black Firebomb
function NPC_Eileen_Act21(self, ai, goal)
    self:ChangeEquipItem(1) 
    self:SetStringIndexedNumber("Black Firebomb", self:GetStringIndexedNumber("Black Firebomb") - 1)
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_ButtonSquare, TARGET_ENE_0, 999, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 0) - Vow of Silence
function NPC_Eileen_Act30(self, ai, goal)
    self:ChangeEquipMagic(0) 
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    if not not self:IsBothHandMode(TARGET_SELF) or self:GetEquipWeaponIndex(ARM_L) == WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    -- Cast Spell with Left Light Attack
    local subgoal = ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 1, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0)
    subgoal = subgoal:TimingSetTimer(0, self:GetRandam_Int(0.5, 1), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 0.25, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 1) - Gnaw
function NPC_Eileen_Act31(self, ai, goal)
    self:ChangeEquipMagic(1) 
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    if not not self:IsBothHandMode(TARGET_SELF) or self:GetEquipWeaponIndex(ARM_L) == WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    -- Cast Spell with Left Light Attack
    local subgoal = ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 1, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0)
    subgoal = subgoal:TimingSetTimer(1, self:GetRandam_Int(2, 5), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 2.0, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 2) - Deep Protection
function NPC_Eileen_Act32(self, ai, goal)
    self:ChangeEquipMagic(2) 
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    if not not self:IsBothHandMode(TARGET_SELF) or self:GetEquipWeaponIndex(ARM_L) == WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    -- Cast Spell with Left Light Attack
    local subgoal = ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 1, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0)
    subgoal = subgoal:TimingSetTimer(2, self:GetRandam_Int(3, 5), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 2.0, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-------------------------
-- Act After
-------------------------
function NPC_Eileen_ActAfter_AdjustSpace(self, ai, goal)
    return 
end

-------------------------
-- Update
-------------------------
Goal.Update = function (self, ai, goal)
    return Update_Default_NoSubGoal(self, ai, goal)
end

-------------------------
-- Terminate
-------------------------
Goal.Terminate = function (self, ai, goal)
    return 
end

-------------------------
-- Interrupt
-------------------------
Goal.Interrupt = function (self, ai, goal)
    local stamina   = ai:GetSp(TARGET_SELF)
    local distance  = ai:GetDist(TARGET_ENE_0)
    local roll      = ai:GetRandam_Int(1, 100)
    
     -- Occurs if the player has been guard broken
    if ai:IsInterupt(INTERUPT_GuardBreak) and distance < 3 then
        goal:ClearSubGoal()
        
        local subgoal = goal:AddSubGoal(GOAL_COMMON_ApproachTarget, 1, TARGET_ENE_0, -1, TARGET_SELF, false, 0)
        subgoal:SetLifeEndSuccess(true)
        
        goal:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, -1) -- Right Light Attack + Approach
        
        return true
    -- Occurs when the AI looks for an attack
    elseif ai:IsInterupt(INTERUPT_FindAttack) then
        if distance < 1.8 and roll <= 80 then
            if roll <= 60 and 30 <= stamina then
                goal:ClearSubGoal()
                NPC_Eileen_Act15(ai, goal, paramTbl) -- Strafe
                return true
            elseif stamina <= 35 and 0 <= stamina then
                goal:ClearSubGoal()
                NPC_Eileen_Act12(ai, goal, paramTbl) -- Forward Roll + Run + Basic Light Attack
                return true
            end
        elseif distance <= 3 and 20 <= stamina and roll <= 60 then
            goal:ClearSubGoal()
            NPC_Eileen_Act10(ai, goal, paramTbl) -- Approach + Running Attack
            return true
        end
    -- Occurs if a ranged attack occurs
    elseif ai:IsInterupt(INTERUPT_Shoot) and roll <= 33 and 20 <= stamina then
        goal:ClearSubGoal()
        NPC_Eileen_Act13(ai, goal) -- Side Roll + Run + Basic Light Attack
        return true
    else
        return false
    end
end

-------------------------
-- End
-------------------------
return 
