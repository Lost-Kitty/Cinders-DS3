LuaP		Ά	hηυ}A       =(none)                              RegisterTableGoal !       GOAL_ProtoSkeleton_107000_Battle        ProtoSkeleton_107000_Battle        REGISTER_GOAL_NO_UPDATE        Goal        Initialize 	       Activate        ProtoSkeleton_107000_Act01        ProtoSkeleton_107000_Act02        ProtoSkeleton_107000_Act03        ProtoSkeleton_107000_Act04        ProtoSkeleton_107000_Act05        ProtoSkeleton_107000_Act06        ProtoSkeleton_107000_Act10        ProtoSkeleton_107000_Act11        ProtoSkeleton_107000_Act20 *       ProtoSkeleton_107000_ActAfter_AdjustSpace        Update 
       Terminate 
       Interrupt )       GOAL_ProtoSkeleton_107000_AfterAttackAct $       ProtoSkeleton_107000_AfterAttackAct        REGISTER_GOAL_NO_SUB_GOAL            :                                      @                 1          Init_Pseudo_Global        SetStringIndexedNumber        Dist_SideStep       @       Dist_BackStep        Common_Clear_Param        GetDist        TARGET_ENE_0        GetRandam_Int       π?      Y@       GetExcelParam /       AI_EXCEL_THINK_PARAM_TYPE__thinkAttr_doAdmirer        GetEventRequest 
       GetNumber                GetTeamOrder        ORDER_TYPE_Role        ROLE_TYPE_Kankyaku       $@      I@      &@       ROLE_TYPE_Torimaki        @      D@       IsInsideTarget        AI_DIR_TYPE_B      V@      4@       AI_DIR_TYPE_F       @      N@      @      i@     @`@      @      @       REGIST_FUNC        ProtoSkeleton_107000_Act01        ProtoSkeleton_107000_Act02        ProtoSkeleton_107000_Act03        ProtoSkeleton_107000_Act04        ProtoSkeleton_107000_Act05        ProtoSkeleton_107000_Act06        ProtoSkeleton_107000_Act10        ProtoSkeleton_107000_Act11        ProtoSkeleton_107000_Act20 *       ProtoSkeleton_107000_ActAfter_AdjustSpace        Common_Battle_Activate     Ϋ         YΛΎ   Α  Y ΛΎ  Α  Y 
  
  
  E     	Y ΐ Ε ΐ A 	 
 KΑ  
ΛΑ 	 	Β 
Α 
Υ@  Β E     ΓΓ Υ@  Β E    IΓIΓΔΔΤ ΛΔ Ε  Α T  	A ΛΔ Ε E Α  Χ@  Δ   IFΔ   ΙΖ	Η	Α~IB	ΑIΒΤ   ΙΖ	Η	Α~IB	Α	Α   ΙΖ	Η	Α~IB	Α	ΑT ΙΖ	Η	Α~IB	Α	ΑΥ@ Τ  ΖΐΦ   ΙΐUD Τ  FΔΦ   ΙΐU? Τ  FΏΦ   Ιΐ~F Τ  ΖΦ   Ι@F Τ  ΖΦ   Ι@UG Τ  FΗΦ   ΙΐE	     	  ΙE	     Ε	  ΙE	     
  Ι~E	     E
  ΙE	     
  ΙE	     Ε
  ΙE	       ΙE	     E  ΙE	       ΙE	     Ε            Y          Σ                     ffffff
@       GetMapHitRadius        TARGET_SELF ΝΜΜΜΜΜμ?      @      I@               @       Approach_Act_Flex      p§@     r§@     t§@ffffff@      π?ω?       @      @     V@       GetRandam_Int       Y@      >@       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0      A@       fate2 #       GOAL_COMMON_ComboAttackTunableSpin        GOAL_COMMON_ComboFinal        GOAL_COMMON_ComboRepeat 
       SetNumber        GetWellSpace_Odds        Λ>   Ν }Λ>   }L?Λ>   M}ΏA   Α 	 
               Y 
A 
 Α Λ>   MΜΑΛ>   ΜAΛ>   Ν A C A Α  C	 Τ ΛΓ  Α          YT ΧD	   ΧΏ	  ΛΓ Ε Α          YΛΓ  Α      YΤ ΛΓ Ε Α          YΛΓ  Α       Y ΛΓ Ε Α          YΛΓ E Α          YΛΓ  Α       YF  A Y Α Η Ε                               ω?       GetMapHitRadius        TARGET_SELF ΝΜΜΜΜΜμ?      @      I@               @       Approach_Act_Flex      v§@       @      @     V@       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0 
       SetNumber        GetWellSpace_Odds       Y@    8   Λ>   Ν }Λ>   }L?Λ>   M}ΏA   Α 	 
               Y 
A 
Λ>   ΝΑ  ΛΑ  Α          YΛB   Y Α              +                   ρ?       GetMapHitRadius        TARGET_SELF ΝΜΜΜΜΜμ?      @      I@               @       Approach_Act_Flex      x§@       @      @     V@       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0 
       SetNumber        GetWellSpace_Odds       Y@    8   Λ>   Ν }Λ>   }L?Λ>   M}ΏA   Α 	 
               Y 
A 
Λ>   ΝΑ  ΛΑ  Α          YΛB  Α Y Α              H                   ΝΜΜΜΜΜτ?       GetMapHitRadius        TARGET_SELF      8@     8ΐ              @       @       Approach_Act_Flex      z§@       @      @     V@       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0 
       SetNumber        GetWellSpace_Odds       Y@    3   Λ>   Ν } Λ>   M}A A  Α 	 
               Y 
A 
Λ>   ΝΑ  ΛΑ  Α        A A YΛB A  Y Α              f                   ΝΜΜΜΜΜ @       GetMapHitRadius        TARGET_SELF       ψ?      @      I@               @       Approach_Act_Flex        AppDist        ForceWalkDist        ForceRunDist      |§@     ~§@       @      @     V@       GetRandam_Int       π?      Y@       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0 
       SetNumber       @       GetWellSpace_Odds     Y   Λ>   Ν }Λ>   }L?Λ>   M}ΏΛ>   }Λ>   	Ν}LΏΛ>   
}?A 	 
 Α       E  Ε       Y  A Λ>   ΝΑ  ΛB  Α  Χ?	 Τ Γ E   Ε       Y Γ E    Ε       YD  A Y Α                                 333333@       GetMapHitRadius        TARGET_SELF       π?      @      I@               @       Approach_Act_Flex      §@       @       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0 
       SetNumber       @       GetWellSpace_Odds       Y@    8   Λ>   Ν }Λ>   }L?Λ>   M}ΏA   Α 	 
               Y 
A 
Λ>   Ν  KΑ  A          YKB   Y  G E            ¬                          GetDist        TARGET_ENE_0       $@      (@               Approach_Act       @       AddSubGoal        GOAL_COMMON_LeaveTarget       @      π?      πΏ       > E    Α   Χ  Τ E      	  
    YKΐ  	A 
E    E   Α Y          Ώ                
          GetRandam_Int               π?       AddSubGoal        GOAL_COMMON_SidewayMove       @       TARGET_ENE_0       >@     F@      πΏ       > A     KΏ  A   	> 
Α   
  A Y           Λ                          AddSubGoal        GOAL_COMMON_Turn        @       TARGET_ENE_0                GetWellSpace_Odds        Ύ E    Ε    	 
Y  G E            Χ                          AddSubGoal        GOAL_COMMON_AfterAttackAct       $@       Ύ E    Y           α                          Update_Default_NoSubGoal                              ι                                     ς                          IsLadderAct        TARGET_SELF ΝΜΜΜΜΜ@      >@       GuardBreak_Act        AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@     |§@       TARGET_ENE_0        DIST_Middle               π?      πΏ       Ύ E  T       Α          	 Λ? Α  	E 
 Α A Y                   	            !          GetDist        TARGET_ENE_0        GetToTargetAngle        SetStringIndexedNumber        DistMin_AAA        @       DistMax_AAA       @       BaseDir_AAA        AI_DIR_TYPE_F 
       Angle_AAA      f@       DistMin_Inter_AAA       @       DistMax_Inter_AAA        @       BaseAng_Inter_AAA                Ang_Inter_AAA       @       Odds_Guard_AAA        Odds_NoAct_AAA        Odds_BackAndSide_AAA       >@       Odds_Back_AAA       $@       Odds_Backstep_AAA       .@       Odds_Sidestep_AAA        Odds_BsAndSide_AAA       4@       AddSubGoal        GOAL_COMMON_AfterAttackAct     m   Ύ E  Ώ E  KΏ  A Y KΏ  Α Y KΏ  E Y KΏ  Α Y KΏ  A Y KΏ  Α Y KΏ  A Y KΏ  Α Y Χ  KΏ  A Y KΏ A A Y KΏ  Α Y  Χ  KΏ  A Y KΏ A A Y KΏ  Α Y KΏ  A Y KΏ  A Y Τ KΏ  A Y KΏ A A Y KΏ  A Y KΏ  Α Y KΏ  Α Y KΏ  Α Y KΏ A  Y KF A Y           H                          Update_Default_NoSubGoal                      :      E    Y Ε   E   Y   "  I   b  I  ’   Η  β     "  G  b    ’  Η  β    "  G  b    ’  Η  β      " I   b I    ’ I     A Y     Y   β I    " I   