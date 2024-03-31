RegisterTableGoal(GOAL_LothricKnight_801000_Battle, "GOAL_LothricKnight_801000_Battle")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_LothricKnight_801000_Battle, true)
Goal.Initialize = function (arg0, arg1, arg2, arg3)
    return 
end

Goal.Activate = function (arg0, arg1, arg2)
    arg2:AddSubGoal(GOAL_NPC_WhiteGhost_Battle, 2) 
    
    if arg1:HasSpecialEffectId(TARGET_SELF, 5406) then
        arg2:AddSubGoal(GOAL_LothricKnight_Archer_Battle, -1)
    elseif arg1:HasSpecialEffectId(TARGET_SELF, 5405) then
        arg2:AddSubGoal(GOAL_LothricKnight_Greatsword_Battle, -1)
    elseif arg1:HasSpecialEffectId(TARGET_SELF, 5404) then
        arg2:AddSubGoal(GOAL_LothricKnight_Lance_Battle, -1)
    else
        arg2:AddSubGoal(GOAL_LothricKnight_Sword_Battle, -1)
    end
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    return Update_Default_NoSubGoal(arg0, arg1, arg2)
end

return 
