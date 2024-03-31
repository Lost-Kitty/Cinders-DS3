RegisterTableGoal(GOAL_MoujaSoldier_BrokenSword_110050_Battle, "MoujaSoldier_BrokenSword_110050_Battle")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_MoujaSoldier_BrokenSword_110050_Battle, true)
Goal.Initialize = function (arg0, arg1, arg2, arg3)
    return 
end

Goal.Activate = function (arg0, arg1, arg2)
    local local0 = {}
    local local1 = {}
    local local2 = {}
    Common_Clear_Param(local0, local1, local2)
    Init_Pseudo_Global(arg1, arg2)
    arg1:SetStringIndexedNumber("Dist_SideStep", 2.7 + 1)
    arg1:SetStringIndexedNumber("Dist_BackStep", 2.5 + 1)
    local local3 = arg1:GetDist(TARGET_ENE_0)
    local local4 = arg1:GetEventRequest(0)
    local local5 = arg1:GetExcelParam(AI_EXCEL_THINK_PARAM_TYPE__thinkAttr_doAdmirer)
    local local6 = arg1:GetRandam_Int(1, 100)
    local local7 = arg1:GetRandam_Int(1, 100)
    local local8 = 0
    if arg1:GetNpcThinkParamID() == 144040 then
        local8 = 1
    end
    if arg1:GetEventRequest(1) == 100 then
        local0[20] = 100
    elseif arg1:GetNpcThinkParamID() == 110054 then
        Approach_Act(arg1, arg2, 1, 9999, 0, 3)
    elseif local5 == 1 and arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Kankyaku then
        local0[11] = 60
        local0[12] = 40
    elseif local5 == 1 and arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Torimaki then
        if 5.5 <= local3 then
            local0[6] = 20
        end
        local0[11] = 50
        local0[12] = 30
    elseif InsideRange(arg1, arg2, 90, 90, -999, 2) then
        local0[2] = 30
        local0[5] = 15
        local0[13] = 55
    elseif InsideRange(arg1, arg2, -90, 90, -999, 2) then
        local0[1] = 30
        local0[5] = 15
        local0[13] = 55
    elseif InsideRange(arg1, arg2, 180, 240, -999, 10) then
        local0[13] = 100
    elseif arg1:GetNpcThinkParamID() == 144041 then
        if 13 <= local3 then
            local0[20] = 100
        else
            local0[21] = 100
        end
    elseif arg1:GetNpcThinkParamID() == 144040 and arg1:GetHpRate(TARGET_SELF) <= 0.8 then
        if 13 <= local3 then
            local0[20] = 100
        else
            local0[21] = 100
        end
    elseif 10 <= local3 then
        local0[1] = 15
        local0[2] = 10
        local0[5] = 10
        local0[6] = 45
        local0[12] = 20
        local0[20] = 20 * local8
        local0[21] = 10 * local8
    elseif 5.5 <= local3 then
        local0[1] = 15
        local0[2] = 10
        local0[5] = 10
        local0[6] = 45
        local0[12] = 20
        local0[20] = 10 * local8
        local0[21] = 20 * local8
    elseif 1.5 <= local3 then
        local0[1] = 20
        local0[2] = 20
        local0[4] = 15
        local0[5] = 35
        local0[12] = 10
        local0[20] = 0 * local8
        local0[21] = 30 * local8
    else
        local0[1] = 25
        local0[2] = 15
        local0[4] = 15
        local0[5] = 45
        local0[12] = 0
        local0[20] = 0 * local8
        local0[21] = 0 * local8
    end
    local0[5] = SetCoolTime(arg1, arg2, 3003, 20, local0[5], 0)
    local1[1] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act01)
    local1[2] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act02)
    local1[4] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act04)
    local1[5] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act05)
    local1[6] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act06)
    local1[11] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act11)
    local1[12] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act12)
    local1[13] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act13)
    local1[20] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act20)
    local1[21] = REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_Act21)
    Common_Battle_Activate(arg1, arg2, local0, local1, REGIST_FUNC(arg1, arg2, MoujaSoldier_BrokenSword_110050_ActAfter_AdjustSpace), local2)
    return 
end

function MoujaSoldier_BrokenSword_110050_Act01(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2.5 - arg0:GetMapHitRadius(TARGET_SELF), 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 0.7, 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 2.5, 100, 0, 4, 8)
    local local0 = 3000
    local local1 = 3001
    local local2 = 2.2 - arg0:GetMapHitRadius(TARGET_SELF) + 1
    local local3 = 5 - arg0:GetMapHitRadius(TARGET_SELF)
    local local4 = 0
    local local5 = 0
    if arg0:GetRandam_Int(1, 100) <= 25 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, local1, TARGET_ENE_0, local3, 0, 0)
    else
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3002, TARGET_ENE_0, local3, 0, 0)
    end
    GetWellSpace_Odds = 50
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act02(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2.2 - arg0:GetMapHitRadius(TARGET_SELF), 2.2 - arg0:GetMapHitRadius(TARGET_SELF) + 0.7, 2.2 - arg0:GetMapHitRadius(TARGET_SELF) + 2.5, 100, 0, 4, 8)
    local local0 = 3001
    local local1 = 3002
    local local2 = 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 1
    local local3 = 5 - arg0:GetMapHitRadius(TARGET_SELF)
    local local4 = 0
    local local5 = 0
    if arg0:GetRandam_Int(1, 100) <= 25 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, local1, TARGET_ENE_0, local3, 0, 0)
    else
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3000, TARGET_ENE_0, local3, 0, 0)
    end
    GetWellSpace_Odds = 50
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act04(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2.5 - arg0:GetMapHitRadius(TARGET_SELF), 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 0.7, 2.5 - arg0:GetMapHitRadius(TARGET_SELF) + 2.5, 100, 0, 4, 8)
    arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, 3002, TARGET_ENE_0, 2.2 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0, 0, 0)
    arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3001, TARGET_ENE_0, 5 - arg0:GetMapHitRadius(TARGET_SELF), 0, 0)
    GetWellSpace_Odds = 50
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act05(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2 - arg0:GetMapHitRadius(TARGET_SELF), 2 - arg0:GetMapHitRadius(TARGET_SELF) + 0.7, 2 - arg0:GetMapHitRadius(TARGET_SELF) + 2, 100, 0, 4, 8)
    local local0 = arg0:GetRandam_Int(1, 100)
    arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, 3003, TARGET_ENE_0, 5 - arg0:GetMapHitRadius(TARGET_SELF), 0, 0, 0, 0)
    GetWellSpace_Odds = 50
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act06(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 7.2 - arg0:GetMapHitRadius(TARGET_SELF), 7.2 - arg0:GetMapHitRadius(TARGET_SELF) + 0.7, 7.2 - arg0:GetMapHitRadius(TARGET_SELF) + 2, 100, 0, 4, 8)
    arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, 3007, TARGET_ENE_0, 5 - arg0:GetMapHitRadius(TARGET_SELF), 0, 0, 0, 0)
    GetWellSpace_Odds = 50
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act11(arg0, arg1, arg2)
    local local0 = arg0:GetDist(TARGET_ENE_0)
    local local1 = 10
    if local1 <= arg0:GetDist(TARGET_ENE_0) then
        Approach_Act(arg0, arg1, local1, 12, 0, 3)
    end
    arg1:AddSubGoal(GOAL_COMMON_LeaveTarget, 4, TARGET_ENE_0, 10, TARGET_ENE_0, true, -1)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act12(arg0, arg1, arg2)
    local local0 = -1
    if arg0:GetRandam_Int(1, 100) <= 0 then
        local0 = 9910
    end
    if 5.5 <= arg0:GetDist(TARGET_ENE_0) then
        arg1:AddSubGoal(GOAL_COMMON_SidewayMove, 2, TARGET_ENE_0, arg0:GetRandam_Int(0, 1), arg0:GetRandam_Int(30, 45), true, true, local0)
    else
        local local1 = arg1:AddSubGoal(GOAL_COMMON_SidewayMove, 2, TARGET_ENE_0, arg0:GetRandam_Int(0, 1), arg0:GetRandam_Int(30, 45), true, true, local0)
        local1:SetTargetRange(0, -999, 5.5)
    end
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act13(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_COMMON_Turn, 3, TARGET_ENE_0, arg0:GetRandam_Int(15, 20))
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act20(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 20 - arg0:GetMapHitRadius(TARGET_SELF), 20 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 20 - arg0:GetMapHitRadius(TARGET_SELF) + 10, 50, 100, 4, 8)
    local local0 = arg0:GetRandam_Int(1, 100)
    arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, 20005, TARGET_ENE_0, 999, -1, 90, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_Act21(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 15 - arg0:GetMapHitRadius(TARGET_SELF), 15 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 15 - arg0:GetMapHitRadius(TARGET_SELF) + 10, 50, 100, 4, 8)
    local local0 = arg0:GetRandam_Int(1, 100)
    arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, 20006, TARGET_ENE_0, 999, -1, 90, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function MoujaSoldier_BrokenSword_110050_ActAfter_AdjustSpace(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_MoujaSoldier_BrokenSword_110050_AfterAttackAct, 10)
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    return Update_Default_NoSubGoal(arg0, arg1, arg2)
end

Goal.Terminate = function (arg0, arg1, arg2)
    return 
end

Goal.Interrupt = function (arg0, arg1, arg2)
    if arg1:IsInterupt(INTERUPT_TargetOutOfRange) and arg1:IsTargetOutOfRangeInterruptSlot(0) then
        arg2:ClearSubGoal()
    end
    return 
end

RegisterTableGoal(GOAL_MoujaSoldier_BrokenSword_110050_AfterAttackAct, "MoujaSoldier_BrokenSword_110050_AfterAttackAct")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_MoujaSoldier_BrokenSword_110050_AfterAttackAct, true)
Goal.Activate = function (arg0, arg1, arg2)
    local local0 = arg1:GetDist(TARGET_ENE_0)
    local local1 = arg1:GetRandam_Int(1, 100)
    local local2 = arg1:GetRandam_Float(2.5, 4.5)
    local local3 = arg1:GetRandam_Int(0, 1)
    local local4 = arg1:GetRandam_Int(30, 45)
    local local5 = arg1:GetRandam_Float(2.5, 4.5)
    local local6 = local0 + arg1:GetRandam_Float(2.5, 4.5)
    local local7 = -1
    if arg1:GetRandam_Int(1, 100) <= 0 then
        local7 = 9910
    end
    if arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Kankyaku then
        if local0 <= 6 then
            arg2:AddSubGoal(GOAL_COMMON_LeaveTarget, local5, TARGET_ENE_0, 8, TARGET_ENE_0, true, local7)
        else
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
        end
    elseif arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Torimaki then
        if local0 <= 6 then
            arg2:AddSubGoal(GOAL_COMMON_LeaveTarget, local5, TARGET_ENE_0, 8, TARGET_ENE_0, true, local7)
        else
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
        end
    elseif 6 <= local0 then
        if local1 <= 25 then
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
        else
            arg2:AddSubGoal(GOAL_COMMON_ApproachTarget, 10, TARGET_ENE_0, 5.5, TARGET_SELF, false, -1)
        end
    elseif 4 <= local0 then
        if local1 <= 30 then
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
        end
    elseif 2 <= local0 then
        if local1 <= 15 then
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
        elseif local1 <= 25 then
            arg2:AddSubGoal(GOAL_COMMON_LeaveTarget, local5, TARGET_ENE_0, local6, TARGET_ENE_0, true, local7)
        end
    elseif 0.5 <= local0 then
        if local1 <= 5 then
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
        elseif local1 <= 20 then
            arg2:AddSubGoal(GOAL_COMMON_LeaveTarget, local5, TARGET_ENE_0, local6, TARGET_ENE_0, true, local7)
        end
    elseif local1 <= 0 then
        arg2:AddSubGoal(GOAL_COMMON_SidewayMove, local2, TARGET_ENE_0, local3, local4, true, true, local7)
    elseif local1 <= 15 then
        arg2:AddSubGoal(GOAL_COMMON_LeaveTarget, local5, TARGET_ENE_0, local6, TARGET_ENE_0, true, local7)
    end
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    return Update_Default_NoSubGoal(arg0, arg1, arg2)
end

return 
