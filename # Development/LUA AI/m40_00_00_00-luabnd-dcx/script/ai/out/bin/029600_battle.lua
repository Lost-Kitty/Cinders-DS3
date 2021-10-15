RegisterTableGoal(GOAL_NPC_SpurnedShade, "GOAL_NPC_SpurnedShade")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_NPC_SpurnedShade, true)

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
    local local0 = ai:GetEventRequest(2)

    Init_Pseudo_Global(ai, goal)
    
    ai:SetStringIndexedNumber("Dist_Rolling", 4.4)      -- Distance to roll att
    ai:SetStringIndexedNumber("Dist_BackStep", 2.6)     -- Distance to backstep at
    ai:SetStringIndexedNumber("AddDistWalk", 0)
    ai:SetStringIndexedNumber("AddDistRun", 0.2)
    
    local actChanceList = {}
    local actFuncList = {}
    local actTblList = {}
    
    Common_Clear_Param(actChanceList, actFuncList, actTblList)
    
    local roll      = ai:GetRandam_Int(1, 100)
    local distance  = ai:GetDist(TARGET_ENE_0)
    local stamina   = ai:GetSp(TARGET_SELF)
    local number    = ai:GetNumber(0)
    local hp_rate   = ai:GetHpRate(TARGET_SELF)
    
    local speffect_no_drink = ai:HasSpecialEffectId(TARGET_SELF, 5110)
    local speffect_no_invalid_item = ai:HasSpecialEffectId(TARGET_SELF, 5111)
    
    if distance >= 7 then
        actChanceList[1] = 0        -- Right Light Attack
        actChanceList[2] = 0        -- Right Heavy Attack
        actChanceList[3] = 0        -- Light Kick
        actChanceList[4] = 0        -- Heavy Kick
        actChanceList[5] = 0        -- Hold Stance and Attack
        
        actChanceList[10] = 0       -- Dash and Attack
        actChanceList[11] = 0      -- Forward Roll / Roll Attack
        actChanceList[12] = 0       -- Forward Angled Directional Roll / Roll Attack
        actChanceList[13] = 0       -- Side Directional Roll / Roll Attack
        actChanceList[14] = 0       -- Back Angled Roll / Roll Attack
        
        actChanceList[15] = 0       -- Strafe
        actChanceList[16] = 0       -- Leave Target and Guard
        actChanceList[17] = 50      -- Approach
        
        actChanceList[20] = 0       -- Use Item (Slot 0) - Duel Charm
        actChanceList[21] = 0       -- Use Item (Slot 1) - Undead Hunter Charm
        
        actChanceList[30] = 0       -- Cast Spell (Slot 0) - Halo
        actChanceList[31] = 20      -- Cast Spell (Slot 1) - Lothric's Holy Spear
        actChanceList[32] = 60      -- Cast Spell (Slot 2) - Divine Arrow
        actChanceList[33] = 0       -- Cast Spell (Slot 3) - Holy Schism
        actChanceList[34] = 0       -- Cast Spell (Slot 4) - Wrathful Orbs
    -- 5 metres (mid-far range)
    elseif distance >= 5 then
        actChanceList[1] = 0        -- Right Light Attack
        actChanceList[2] = 0        -- Right Heavy Attack
        actChanceList[3] = 0        -- Light Kick
        actChanceList[4] = 0        -- Heavy Kick
        actChanceList[5] = 0        -- Hold Stance and Attack
        
        actChanceList[10] = 0       -- Dash and Attack
        actChanceList[11] = 5       -- Forward Roll / Roll Attack
        actChanceList[12] = 5       -- Forward Angled Directional Roll / Roll Attack
        actChanceList[13] = 5       -- Side Directional Roll / Roll Attack
        actChanceList[14] = 5       -- Back Angled Roll / Roll Attack
        
        actChanceList[15] = 0       -- Strafe
        actChanceList[16] = 0       -- Leave Target and 
        actChanceList[17] = 10      -- Approach
        
        actChanceList[20] = 10      -- Use Item (Slot 0) - Duel Charm
        actChanceList[21] = 10      -- Use Item (Slot 1) - Undead Hunter Charm
        
        actChanceList[30] = 0       -- Cast Spell (Slot 0) - Halo
        actChanceList[31] = 20      -- Cast Spell (Slot 1) - Lothric's Holy Spear
        actChanceList[32] = 60      -- Cast Spell (Slot 2) - Divine Arrow
        actChanceList[33] = 0       -- Cast Spell (Slot 3) - Holy Schism
        actChanceList[34] = 20      -- Cast Spell (Slot 4) - Wrathful Orbs
    -- 3 metres (mid-range)
    elseif distance >= 3 then
        actChanceList[1] = 0        -- Right Light Attack
        actChanceList[2] = 0        -- Right Heavy Attack
        actChanceList[3] = 0        -- Light Kick
        actChanceList[4] = 0        -- Heavy Kick
        actChanceList[5] = 0        -- Hold Stance and Attack
        
        actChanceList[10] = 10      -- Dash and Attack
        actChanceList[11] = 5       -- Forward Roll / Roll Attack
        actChanceList[12] = 5       -- Forward Angled Directional Roll / Roll Attack
        actChanceList[13] = 5       -- Side Directional Roll / Roll Attack
        actChanceList[14] = 5       -- Back Angled Roll / Roll Attack
        
        actChanceList[15] = 0       -- Strafe
        actChanceList[16] = 0       -- Leave Target and Guard
        actChanceList[17] = 0       -- Approach
        
        actChanceList[20] = 20      -- Use Item (Slot 0) - Duel Charm
        actChanceList[21] = 20      -- Use Item (Slot 1) - Undead Hunter Charm
        
        actChanceList[30] = 20      -- Cast Spell (Slot 0) - Halo
        actChanceList[31] = 10      -- Cast Spell (Slot 1) - Lothric's Holy Spear
        actChanceList[32] = 30      -- Cast Spell (Slot 2) - Divine Arrow
        actChanceList[33] = 20      -- Cast Spell (Slot 3) - Holy Schism
        actChanceList[34] = 10      -- Cast Spell (Slot 4) - Wrathful Orbs
    -- 1 metres (close range)
    elseif distance >= 1 then
        actChanceList[1] = 10       -- Right Light Attack
        actChanceList[2] = 10       -- Right Heavy Attack
        actChanceList[3] = 0        -- Light Kick
        actChanceList[4] = 0        -- Heavy Kick
        actChanceList[5] = 0        -- Hold Stance and Attack
        
        actChanceList[10] = 0       -- Dash and Attack
        actChanceList[11] = 0       -- Forward Roll / Roll Attack
        actChanceList[12] = 0       -- Forward Angled Directional Roll / Roll Attack
        actChanceList[13] = 0       -- Side Directional Roll / Roll Attack
        actChanceList[14] = 10      -- Back Angled Roll / Roll Attack
        
        actChanceList[15] = 0       -- Strafe
        actChanceList[16] = 0       -- Leave Target and Guard
        actChanceList[17] = 0       -- Approach
        
        actChanceList[20] = 5       -- Use Item (Slot 0) - Duel Charm
        actChanceList[21] = 5       -- Use Item (Slot 1) - Undead Hunter Charm
        
        actChanceList[30] = 10      -- Cast Spell (Slot 0) - Halo
        actChanceList[31] = 5       -- Cast Spell (Slot 1) - Lothric's Holy Spear
        actChanceList[32] = 10      -- Cast Spell (Slot 2) - Divine Arrow
        actChanceList[33] = 10      -- Cast Spell (Slot 3) - Holy Schism
        actChanceList[34] = 0       -- Cast Spell (Slot 4) - Wrathful Orbs
    -- 0 metres (touching)
    else
        actChanceList[1] = 10       -- Right Light Attack
        actChanceList[2] = 10       -- Right Heavy Attack
        actChanceList[3] = 0        -- Light Kick
        actChanceList[4] = 0        -- Heavy Kick
        actChanceList[5] = 0        -- Hold Stance and Attack
        
        actChanceList[10] = 0       -- Dash and Attack
        actChanceList[11] = 0       -- Forward Roll / Roll Attack
        actChanceList[12] = 0       -- Forward Angled Directional Roll / Roll Attack
        actChanceList[13] = 0       -- Side Directional Roll / Roll Attack
        actChanceList[14] = 10      -- Back Angled Roll / Roll Attack
        
        actChanceList[15] = 0       -- Strafe
        actChanceList[16] = 0       -- Leave Target and Guard
        actChanceList[17] = 0       -- Approach
        
        actChanceList[20] = 5       -- Use Item (Slot 0) - Duel Charm
        actChanceList[21] = 5       -- Use Item (Slot 1) - Undead Hunter Charm
        
        actChanceList[30] = 0       -- Cast Spell (Slot 0) - Halo
        actChanceList[31] = 0       -- Cast Spell (Slot 1) - Lothric's Holy Spear
        actChanceList[32] = 0       -- Cast Spell (Slot 2) - Divine Arrow
        actChanceList[33] = 30      -- Cast Spell (Slot 3) - Holy Schism
        actChanceList[34] = 0       -- Cast Spell (Slot 4) - Wrathful Orbs
    end
    
    -- Invalid Item check
    if speffect_no_invalid_item then
        actChanceList[20] = 0       -- Use Item (Slot 0) - Duel Charm
        actChanceList[21] = 0       -- Use Item (Slot 1) - Undead Hunter Charm
    end
    
    -- Block spell 1 if it has not finished
    if ai:IsFinishTimer(0) == false then
        actChanceList[30] = 0   -- Cast Spell (Slot 0) - Halo
    end
    
    -- Block spell 2 if it has not finished
    if ai:IsFinishTimer(1) == false then
        actChanceList[31] = 0   -- Cast Spell (Slot 1) - Lothric's Holy Spear
    end
    
    -- Block spell 3 if it has not finished
    if ai:IsFinishTimer(2) == false then
        actChanceList[32] = 0   -- Cast Spell (Slot 2) - Divine Arrow
    end

    -- Block spell 4 if it has not finished
    if ai:IsFinishTimer(3) == false then
        actChanceList[33] = 0   -- Cast Spell (Slot 3) - Holy Schism
    end
    
    -- Block spell 5 if it has not finished
    if ai:IsFinishTimer(4) == false then
        actChanceList[34] = 0   -- Cast Spell (Slot 4) - Wrathful Orbs
    end
    
    -- Increase ranged spells if enemy is guarding
    if ai:IsTargetGuard(TARGET_ENE_0) and distance >= 3 then
        actChanceList[31] = actChanceList[31] + 25 -- Cast Spell (Slot 1) - Lothric's Holy Spear
        actChanceList[32] = actChanceList[32] + 25 -- Cast Spell (Slot 2) - Divine Arrow
    end
    
    -- Block forward roll if space check is invalid
    if SpaceCheck(ai, goal, 180, ai:GetStringIndexedNumber("Dist_BackStep")) == false then
        actChanceList[11] = 0   -- Foward Roll / Roll Attack
    end
    
    -- Block forward directional roll if space check is invalid
    if SpaceCheck(ai, goal, -45, ai:GetStringIndexedNumber("Dist_Rolling")) == false and SpaceCheck(ai, goal, 45, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[12] = 0   -- Forward Angled Directional Roll / Roll Attack
    end
    
    -- Block side roll if space check is invalid
    if SpaceCheck(ai, goal, -90, ai:GetStringIndexedNumber("Dist_Rolling")) == false and SpaceCheck(ai, goal, 90, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[13] = 0   -- Side Directional Roll / Roll Attack
    end
    
    -- Block back directional roll if space check is invalid
    if SpaceCheck(ai, goal, -135, ai:GetStringIndexedNumber("Dist_Rolling")) == false and SpaceCheck(ai, goal, 135, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[14] = 0   -- Back Angled Roll / Roll Attack
    end
    
    -- Block back directional roll if space check is invalid
    if SpaceCheck(ai, goal, 180, ai:GetStringIndexedNumber("Dist_Rolling")) == false then
        actChanceList[14] = 0   -- Back Angled Roll / Roll Attack
    end
    
    --  
    if SpaceCheck(ai, goal, 180, 1) == false then
        actChanceList[16] = 0   -- Leave Target and Guard
    end
    
    -- 
    if SpaceCheck(ai, goal, -90, 1) == false and SpaceCheck(ai, goal, 90, 1) == false then
        actChanceList[15] = 0   -- Move and Guard
    end
    
    -- Block dash and rolls when low on stamina
    if stamina < 20 then
        actChanceList[10] = 0   -- Dash and Attack
        actChanceList[11] = 0   -- Forward Roll / Roll Attack
        actChanceList[12] = 0   -- Forward Angled Directional Roll / Roll Attack
        actChanceList[13] = 0   -- Side Directional Roll / Roll Attack
        actChanceList[14] = 0   -- Back Angled Roll / Roll Attack
    end
    
    -- Attacks
    actFuncList[1] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act01)    -- Right Light Attack
    actFuncList[2] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act02)    -- Right Heavy Attack
    actFuncList[3] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act03)    -- Light Kick
    actFuncList[4] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act04)    -- Heavy Kick
    actFuncList[5] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act05)    -- Hold Stance and Attack
    
    -- Utility
    actFuncList[10] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act10)   -- Dash and Attack
    actFuncList[11] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act11)   -- Forward Roll / Roll Attack
    actFuncList[12] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act12)   -- Forward Angled Directional Roll / Roll Attack
    actFuncList[13] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act13)   -- Side Directional Roll / Roll Attack
    actFuncList[14] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act14)   -- Back Angled Roll / Roll Attack
    actFuncList[15] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act15)   -- Strafe
    actFuncList[16] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act16)   -- Leave Target and Guard
    actFuncList[17] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act17)   -- Approach
    
    -- Items
    actFuncList[20] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act20)   -- Use Item (Slot 0) - Duel Charm
    actFuncList[21] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act21)   -- Use Item (Slot 1) - Undead Hunter Charm
    
    -- Spells
    actFuncList[30] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act30)   -- Cast Spell (Slot 0) - Halo
    actFuncList[31] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act31)   -- Cast Spell (Slot 1) - Lothric's Holy Spear
    actFuncList[32] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act32)   -- Cast Spell (Slot 2) - Divine Arrow
    actFuncList[33] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act33)   -- Cast Spell (Slot 3) - Holy Schism
    actFuncList[34] = REGIST_FUNC(ai, goal, NPC_SpurnedShade_Act34)   -- Cast Spell (Slot 4) - Wrathful Orbs
    
    Common_Battle_Activate(ai, goal, actChanceList, actFuncList, REGIST_FUNC(ai, goal, NPC_SpurnedShade_ActAfter_AdjustSpace), actTblList)
    return 
end

-------------------------
-- Functions
-------------------------
-- Right Light Attack
function NPC_SpurnedShade_Act01(self, ai, goal)
    local roll_a    = self:GetRandam_Int(1, 100)
    local distance  = self:GetDist(TARGET_ENE_0)
    local stamina   = self:GetSp(TARGET_SELF)
    
    local max_attack_distance = 2.1
    local roll_b   = 100
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 2.1
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
                max_attack_distance = 2.1
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        elseif self:IsBothHandMode(TARGET_SELF) then
            local roll_c = 50
            
            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_c = roll_c - 25
            end
            
            if roll_a <= roll_c then
                roll_b = 100
                max_attack_distance = 2.1
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        end
    end
    
    if stamina < 60 then
        roll_b = 0
    end
    
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_b, 1.8, 2)
    
    if self:GetRandam_Int(1, 100) <= 50 and 0 < roll_b and max_attack_distance <= distance then
        if self:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_L, 180) then
            ai:AddSubGoal(GOAL_COMMON_SidewayMove, 0.3, TARGET_ENE_0, 0, self:GetRandam_Int(75, 90), true, true, NPC_ATK_L1Hold) -- Move and Guard
        else
            ai:AddSubGoal(GOAL_COMMON_SidewayMove, 0.3, TARGET_ENE_0, 1, self:GetRandam_Int(75, 90), true, true, NPC_ATK_L1Hold) -- Move and Guard
        end
    end
    
    if 120 <= stamina then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R1, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Light Attack
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack
    elseif 60 <= stamina then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R1, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Light Attack
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0) -- Right Light Attack
    else
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Light Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Right Heavy Attack
function NPC_SpurnedShade_Act02(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    local max_attack_distance = 2.2
    local roll_c = 100
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 2.2
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
                max_attack_distance = 2.2
                
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        elseif self:IsBothHandMode(TARGET_SELF) then
            local roll_d = 50

            if self:IsTargetGuard(TARGET_ENE_0) then
                roll_d = roll_d - 25
            end
            
            if roll_a <= roll_d then
                roll_c = 100
                max_attack_distance = 2.2
                
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
            end
        end
    end
    
    if stamina < 60 then
        roll_c = 0
    end
    
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
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R2, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Heavy Attack
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0) -- Right Heavy Attack
        elseif roll_b <= 75 then
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R2, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Heavy Attack
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2_Hold, TARGET_ENE_0, 999, 0, 0) -- Right Heavy Attack
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_R2_Hold, TARGET_ENE_0, max_attack_distance, 0, 0) -- Right Heavy Attack
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0) -- Right Heavy Attack
        end
    elseif roll_b <= 50 then
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2_Hold, TARGET_ENE_0, max_attack_distance, 0, 0)
    else
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, max_attack_distance, 0, 0)
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Light Kick
function NPC_SpurnedShade_Act03(self, ai, goal)
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
    
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_c, 1.8, 2)
    
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_Up_R1, TARGET_ENE_0, 999, 0, 0) -- Kick
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Heavy Kick
function NPC_SpurnedShade_Act04(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local max_attack_distance = 4.8
    local roll_c = 100
    
    if self:IsBothHandMode(TARGET_SELF) then
        max_attack_distance = 5.6
        roll_c = 0
    end
    
    if self:GetEquipWeaponIndex(ARM_L) ~= WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    if self:GetSp(TARGET_SELF) < 60 then
        roll_c = 0
    end
    
    NPC_Approach_Act_Flex(self, ai, max_attack_distance, max_attack_distance + 0, max_attack_distance + 2, 100, roll_c, 1.8, 2)
    
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_Up_R2, TARGET_ENE_0, 999, 0, 0) -- Heavy Kick
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Hold Stance and Attack
function NPC_SpurnedShade_Act05(self, ai, goal)
    local roll_a = 2.6
    local max_attack_distance = KMorlianBlade_BOTH_ArtR2_DIST_MAX
    local distance = self:GetDist(TARGET_ENE_0)
    
    if not self:IsBothHandMode(TARGET_SELF) then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonTriangle, TARGET_ENE_0, 999, 0, 0) -- Toggle 2H state of Weapon
    end
    
    if self:GetRandam_Int(1, 100) <= 50 then
        if roll_a < distance then
            ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, roll_a, TARGET_SELF, false, NPC_ATK_L2Hold) -- Hold Stance and Approach
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L2Hold_R1, TARGET_ENE_0, 999, 0, 0)  -- Hold Stance into Stance Light Attack
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_UpHold_L2Hold, TARGET_ENE_0, 999, 0, 0) -- Hold Stance with Up
            ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L2Hold_R1, TARGET_ENE_0, 999, 0, 0)  -- Hold Stance into Stance Light Attack
        end
    elseif max_attack_distance < distance then
        ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, max_attack_distance, TARGET_SELF, false, NPC_ATK_L2Hold) -- Hold Stance and Approach
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L2Hold_R2, TARGET_ENE_0, 999, 0, 0)  -- Hold Stance into Stance Heavy Attack
    else
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_UpHold_L2Hold, TARGET_ENE_0, 999, 0, 0)  -- Hold Stance with Up
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_L2Hold_R1, TARGET_ENE_0, 999, 0, 0)  -- Hold Stance into Stance Light Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Dash and Attack
function NPC_SpurnedShade_Act10(self, ai, goal)
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
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0)               -- Right Light Attack
    else
        ai:AddSubGoal(GOAL_COMMON_DashTarget, 3, TARGET_ENE_0, max_attack_distance, TARGET_SELF, const_a)   -- Dash to Enemy
        ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0)               -- Right Heavy Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Forward Roll / Roll Attack
function NPC_SpurnedShade_Act11(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
    local roll_a = self:GetRandam_Int(1, 100)
    
    if SpaceCheck(self, ai, 180, self:GetStringIndexedNumber("Dist_BackStep")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Roll
    end
    
    if self:GetRandam_Int(1, 100) <= 80 and 60 < self:GetSp(TARGET_SELF) then
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

-- Forward Angled Directional Roll / Roll Attack
function NPC_SpurnedShade_Act12(self, ai, goal)
    if 5 <= self:GetDist(TARGET_ENE_0) and SpaceCheck(self, ai, 0, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Up_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Forward Roll
    elseif SpaceCheck(self, ai, -45, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        if SpaceCheck(self, ai, 45, self:GetStringIndexedNumber("Dist_Rolling")) == true then
            if self:GetRandam_Int(1, 100) <= 50 then
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_UpLeft_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Left Forward Roll
            else
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_UpRight_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Right Forward Roll
            end
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_UpLeft_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Left Forward Roll
        end
    elseif SpaceCheck(self, ai, 45, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_UpRight_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Right Forward Roll
    end
    
    if self:GetRandam_Int(1, 100) <= 100 and 60 < self:GetSp(TARGET_SELF) then
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

-- Side Directional Roll / Roll Attack
function NPC_SpurnedShade_Act13(self, ai, goal)
    local distance = self:GetDist(TARGET_ENE_0)
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
    
    if self:GetRandam_Int(1, 100) <= 100 and 60 < self:GetSp(TARGET_SELF) then
        local max_attack_distance = 5.8 - 2
        local spin_time = 5.4 - 2
        
        if self:GetEquipWeaponIndex(ARM_R) == WEP_Primary and self:IsBothHandMode(TARGET_SELF) then
            max_attack_distance = 5.4 - 2
            spin_time = 4.6 - 2
        end
        
        ai:AddSubGoal(GOAL_COMMON_NPCStepAttack, 10, TARGET_ENE_0, max_attack_distance, spin_time, R1Fate) -- Roll Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Back Angled Roll / Roll Attack
function NPC_SpurnedShade_Act14(self, ai, goal)
    if self:GetDist(TARGET_ENE_0) <= 1 and SpaceCheck(self, ai, 180, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_Down_ButtonXmark, TARGET_ENE_0, 999, 0, 0)
    elseif SpaceCheck(self, ai, -135, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        if SpaceCheck(self, ai, 135, self:GetStringIndexedNumber("Dist_Rolling")) == true then
            if self:GetRandam_Int(1, 100) <= 50 then
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownLeft_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Left Back Roll
            else
                ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownRight_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Right Back Roll
            end
        else
            ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownLeft_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Left Back Roll
        end
    elseif SpaceCheck(self, ai, 135, self:GetStringIndexedNumber("Dist_Rolling")) == true then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_DownRight_ButtonXmark, TARGET_ENE_0, 999, 0, 0) -- Right Back Roll
    end
    
    if self:GetRandam_Int(1, 100) <= 100 and 60 < self:GetSp(TARGET_SELF) then
        local max_attack_distance = 5.8 - 4
        local spin_time = 5.4 - 4
        
        if self:GetEquipWeaponIndex(ARM_R) == WEP_Primary and self:IsBothHandMode(TARGET_SELF) then
            max_attack_distance = 5.4 - 4
            spin_time = 4.6 - 4
        end
        ai:AddSubGoal(GOAL_COMMON_NPCStepAttack, 10, TARGET_ENE_0, max_attack_distance, spin_time, 50) -- Roll Attack
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Use Item (Slot 0) - Duel Charm
function NPC_SpurnedShade_Act20(self, ai, goal)
    self:ChangeEquipItem(0) 
    self:SetStringIndexedNumber("Duel Charm", self:GetStringIndexedNumber("Duel Charm") - 1)
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_ButtonSquare, TARGET_ENE_0, 999, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Use Item (Slot 1) - Undead Hunter Charm
function NPC_SpurnedShade_Act21(self, ai, goal)
    self:ChangeEquipItem(1) 
    self:SetStringIndexedNumber("Undead Hunter Charm", self:GetStringIndexedNumber("Undead Hunter Charm") - 1)
    ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_ButtonSquare, TARGET_ENE_0, 999, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Move and Guard
function NPC_SpurnedShade_Act15(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local stamina = self:GetSp(TARGET_SELF)
    local duration = 1.8
    local animation = NPC_ATK_L1Hold    -- Guard with Left Weapon
    
    if self:IsBothHandMode(TARGET_SELF) then
        if 40 <= stamina and roll_a <= 50 then
            animation = NPC_ATK_L1Hold
        end
    elseif self:GetEquipWeaponIndex(ARM_L) == WEP_Primary and 40 <= stamina and roll_a <= 100 then
        animation = NPC_ATK_L1Hold
    end
    
    local roll_b = 0
    
    if SpaceCheck(self, ai, -90, 1) == true then
        if SpaceCheck(self, ai, 90, 1) == true then
            if self:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_R, 180) then
                roll_b = 0
            else
                roll_b = 1
            end
        else
            roll_b = 0
        end
    elseif SpaceCheck(self, ai, 90, 1) == true then
        roll_b = 1
    else
        GetWellSpace_Odds = 100
        return GetWellSpace_Odds
    end
    
    if self:GetDist(TARGET_ENE_0) < 5 then
        ai:AddSubGoal(GOAL_COMMON_SidewayMove, duration, TARGET_ENE_0, roll_b, self:GetRandam_Int(75, 90), false, true, animation) -- Guard with Left Weapon
    else
        ai:AddSubGoal(GOAL_COMMON_SidewayMove, duration, TARGET_ENE_0, roll_b, self:GetRandam_Int(75, 90), true, true, animation)  -- Guard with Left Weapon
    end
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Leave Target and Guard
function NPC_SpurnedShade_Act16(self, ai, goal)
    local roll_a = self:GetRandam_Int(1, 100)
    local stamina = self:GetSp(TARGET_SELF)
    local duration = 1.8
    local max_attack_distance = 3.2
    
    if self:GetDist(TARGET_ENE_0) < 5 then
        ai:AddSubGoal(GOAL_COMMON_LeaveTarget, duration, TARGET_ENE_0, max_attack_distance, TARGET_ENE_0, false, NPC_ATK_L1Hold)    -- Leave Target and Guard
    else
        ai:AddSubGoal(GOAL_COMMON_LeaveTarget, duration, TARGET_ENE_0, max_attack_distance, TARGET_ENE_0, true, NPC_ATK_L1Hold)     -- Leave Target and Guard
    end
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Approach
function NPC_SpurnedShade_Act17(self, ai, goal)
    ai:AddSubGoal(GOAL_COMMON_ApproachTarget, 3, TARGET_ENE_0, 999, TARGET_SELF, false, -1)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 0) - Halo
function NPC_SpurnedShade_Act30(self, ai, goal)
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
    subgoal = subgoal:TimingSetTimer(0, self:GetRandam_Int(3, 5), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 1.0, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 1) - Lothric's Holy Spear
function NPC_SpurnedShade_Act31(self, ai, goal)
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
    subgoal = subgoal:TimingSetTimer(1, self:GetRandam_Int(2, 3), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 0.5, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 2) - Divine Arrow
function NPC_SpurnedShade_Act32(self, ai, goal)
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
    subgoal = subgoal:TimingSetTimer(2, self:GetRandam_Int(1, 2), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 0.5, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 3) - Holy Schism
function NPC_SpurnedShade_Act33(self, ai, goal)
    self:ChangeEquipMagic(3) 
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    if not not self:IsBothHandMode(TARGET_SELF) or self:GetEquipWeaponIndex(ARM_L) == WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    -- Cast Spell with Left Light Attack
    local subgoal = ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 1, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0)
    subgoal = subgoal:TimingSetTimer(3, self:GetRandam_Int(3, 5), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 1.0, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-- Cast Spell (Slot 4) - Wrathful Orbs
function NPC_SpurnedShade_Act34(self, ai, goal)
    self:ChangeEquipMagic(4) 
    local roll_a = self:GetRandam_Int(1, 100)
    local roll_b = self:GetRandam_Int(1, 100)
    local distance = self:GetDist(TARGET_ENE_0)
    local stamina = self:GetSp(TARGET_SELF)
    
    if not not self:IsBothHandMode(TARGET_SELF) or self:GetEquipWeaponIndex(ARM_L) == WEP_Primary then
        ai:AddSubGoal(GOAL_COMMON_ComboTunable_SuccessAngle180, 10, NPC_ATK_ArrowKeyLeft, TARGET_ENE_0, 999, 0, 0) -- Switch Weapon (Left)
    end
    
    -- Cast Spell with Left Light Attack
    local subgoal = ai:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 1, NPC_ATK_L1, TARGET_ENE_0, 999, 0, 0)
    subgoal = subgoal:TimingSetTimer(4, self:GetRandam_Int(1, 2), UPDATE_SUCCESS)
    subgoal:SetLifeEndSuccess(true)
    
    ai:AddSubGoal(GOAL_COMMON_Wait, 0.25, TARGET_ENE_0, 0, 0, 0)
    
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

-------------------------
-- Act After
-------------------------
function NPC_SpurnedShade_ActAfter_AdjustSpace(self, ai, goal)
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
    
    if ai:IsInterupt(INTERUPT_GuardBreak) and distance < 3 then
        goal:ClearSubGoal()
        
        local subgoal = goal:AddSubGoal(GOAL_COMMON_ApproachTarget, 1, TARGET_ENE_0, -1, TARGET_SELF, false, 0)
        subgoal:SetLifeEndSuccess(true)
        
        goal:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, -1) -- Right Light Attack
        
        return true
    elseif ai:IsInterupt(INTERUPT_FindAttack) then
        if distance < 1.8 and roll <= 80 then
            if roll <= 60 and 30 <= stamina then
                goal:ClearSubGoal()
                NPC_SpurnedShade_Act16(ai, goal, paramTbl) -- Leave Target and Guard
                return true
            elseif stamina <= 35 and 0 <= stamina then
                goal:ClearSubGoal()
                NPC_SpurnedShade_Act12(ai, goal, paramTbl) -- Forward Angled Directional Roll / Roll Attack
                return true
            end
        elseif distance <= 3 and 20 <= stamina and roll <= 60 then
            goal:ClearSubGoal()
            NPC_SpurnedShade_Act15(ai, goal, paramTbl) -- Move and Guard
            return true
        end
    end
    if ai:IsInterupt(INTERUPT_Shoot) and roll <= 33 and 20 <= stamina then
        goal:ClearSubGoal()
        NPC_SpurnedShade_Act13(ai, goal) -- Side Directional Roll / Roll Attack
        return true
    else
        return false
    end
end

-------------------------
-- End
-------------------------
return 
