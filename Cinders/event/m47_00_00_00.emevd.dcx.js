// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

//---------------------------------------------
// Constructor
//---------------------------------------------
Event(0, Default, function() {
    // Local Companion
    InitializeCommonEvent(20080000, 4700750); // Setup
    InitializeCommonEvent(20080001, 4700750); // Bonfire Rest
    InitializeCommonEvent(20080002, 4700750); // Tools
    InitializeCommonEvent(20080003, 4700750); // Effects
    InitializeCommonEvent(20080004, 4700750, 160760000, 160760216, 47, 0); // Summoning
    
    // General
    //InitializeEvent(0, 14701000, 0); // Return Bonfire
    InitializeEvent(0, 14701001, 0); // Enemy Effect
    
    SetMapCeremony(40, 0, 0); // Revert Firelink back to normal
    SetMapCeremony(47, 0, 10); // Set Night skybox
    
    // On map reload, warp player back to Firelink Shrine
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009699);
    WarpPlayer(40, 0, 4000970);
    
    SetEventFlag(25009699, OFF);
    
    BatchSetEventFlags(25009680, 25009689, OFF); // Announcer flags
    
    // Player has used prompt to start memory
    IfActionButtonInArea(MAIN, 40010, 4702936);
    CreateObjectfollowingSFX(4701950, 0, 30001);
    WaitFixedTimeSeconds(0.5);
    DeactivateObject(4701950, Disabled);
    
    // Memory of the Crypts
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009600)
    InitializeEvent(0, 14700000, 0);
    
    // Memory of the Swamp
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009601)
    InitializeEvent(0, 14700010, 0);
    
    // Memory of the Wall
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009602)
    InitializeEvent(0, 14700020, 0);
    
    // Memory of the Cathedral
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009603)
    InitializeEvent(0, 14700030, 0);
    
    // Memory of the Settlement
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009604)
    InitializeEvent(0, 14700040, 0);
    
    // Announcer
    SetCharacterAIState(4700900, Disabled);
    ChangeCharacterEnableState(4700900, Disabled);
    SetCharacterAnimationState(4700900, Disabled);
    
    // Disable - Memory of the Crypts
    DeactivateGenerator(4709000, Disabled);
    DeactivateGenerator(4709001, Disabled);
    DeactivateGenerator(4709002, Disabled);
    DeactivateGenerator(4709003, Disabled);
    
    SetCharacterAIState(4700800, Disabled);
    ChangeCharacterEnableState(4700800, Disabled);
    SetCharacterAnimationState(4700800, Disabled);
    
    // Disable - Memory of the Swamp
    DeactivateGenerator(4709010, Disabled);
    DeactivateGenerator(4709011, Disabled);
    DeactivateGenerator(4709012, Disabled);
    DeactivateGenerator(4709013, Disabled);
    
    SetCharacterAIState(4700810, Disabled);
    ChangeCharacterEnableState(4700810, Disabled);
    SetCharacterAnimationState(4700810, Disabled);
    
    // Disable - Memory of the Wall
    DeactivateGenerator(4709020, Disabled);
    DeactivateGenerator(4709021, Disabled);
    DeactivateGenerator(4709022, Disabled);
    DeactivateGenerator(4709023, Disabled);
    
    SetCharacterAIState(4700820, Disabled);
    ChangeCharacterEnableState(4700820, Disabled);
    SetCharacterAnimationState(4700820, Disabled);
    
    // Disable - Memory of the Cathedral
    DeactivateGenerator(4709030, Disabled);
    DeactivateGenerator(4709031, Disabled);
    DeactivateGenerator(4709032, Disabled);
    DeactivateGenerator(4709033, Disabled);
    
    SetCharacterAIState(4700830, Disabled);
    ChangeCharacterEnableState(4700830, Disabled);
    SetCharacterAnimationState(4700830, Disabled);
    
    // Disable - Memory of the Settlement
    DeactivateGenerator(4709040, Disabled);
    DeactivateGenerator(4709041, Disabled);
    DeactivateGenerator(4709042, Disabled);
    DeactivateGenerator(4709043, Disabled);
    
    SetCharacterAIState(4700840, Disabled);
    ChangeCharacterEnableState(4700840, Disabled);
    SetCharacterAnimationState(4700840, Disabled);
    
    WaitFixedTimeSeconds(2.0);
    
    SetEventFlag(25009680, ON); // Announcer - Survive!
});
    
//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    
});

//---------------------------------------------
// Setup - Memory of the Crypts
//---------------------------------------------
Event(14700000, Default, function() {
    SetEventFlag(25009600, OFF);

    InitializeEvent(0, 14700001, 0); // Round Loop
    InitializeEvent(0, 14700002, 0); // Twisted Knight
});

// ----------------------------------------
// Loop - Memory of the Crypts
// ----------------------------------------
Event(14700001, Default, function() {
    var generator_BasicMix1 = 4709000;
    var generator_BasicMix2 = 4709001;
    var generator_ToughMix1 = 4709002;
    var generator_ToughMix2 = 4709003;
    var entity_Miniboss     = 4700800;
    
    WaitFixedTimeSeconds(5.0);
    
    // Round 1
    SetEventFlag(25009681, ON); // Announcer - Round 1
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(0, 14702000, generator_BasicMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 2
    SetEventFlag(25009682, ON); // Announcer - Round 2
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(1, 14702000, generator_BasicMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 3
    SetEventFlag(25009683, ON); // Announcer - Round 3
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(2, 14702000, generator_ToughMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 4
    SetEventFlag(25009684, ON); // Announcer - Round 4
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(3, 14702000, generator_ToughMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 5
    SetEventFlag(25009685, ON); // Announcer - Round 5
    
    WaitFixedTimeSeconds(5.0);
    
    SetCharacterAIState(entity_Miniboss, Enabled);
    ChangeCharacterEnableState(entity_Miniboss, Enabled);
    SetCharacterAnimationState(entity_Miniboss, Enabled);
    
    IfCharacterDeadalive(MAIN, entity_Miniboss, DeathState.Dead, ComparisonType.Equal, 1);
    
    SetEventFlag(25009686, ON); // Announcer - Cycle Complete
    
    AwardItemLot(110000); // Rewards
    
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});
    
// ----------------------------------------
// Twisted Knight - Visage
// ----------------------------------------
Event(14700002, Restart, function() {
    var entity_Miniboss     = 4700800;
    
    var param_SpEffect_PhysicalWeakness  = 160741300;
    var param_SpEffect_FireWeakness      = 160741301;
    var param_SpEffect_MagicWeakness     = 160741302;
    var param_SpEffect_LightningWeakness = 160741303;
    var param_SpEffect_DarkWeakness      = 160741304;
    
    SetSpEffect(entity_Miniboss, param_SpEffect_PhysicalWeakness);
    
    WaitFixedTimeSeconds(20);
    
    SetSpEffect(entity_Miniboss, param_SpEffect_FireWeakness);
    
    WaitFixedTimeSeconds(20);
    
    SetSpEffect(entity_Miniboss, param_SpEffect_MagicWeakness);
    
    WaitFixedTimeSeconds(20);
    
    SetSpEffect(entity_Miniboss, param_SpEffect_LightningWeakness);
    
    WaitFixedTimeSeconds(20);
    
    SetSpEffect(entity_Miniboss, param_SpEffect_DarkWeakness);
    
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Setup - Memory of the Swamp
//---------------------------------------------
Event(14700010, Default, function() {
    SetEventFlag(25009601, OFF);
    
    InitializeEvent(0, 14700011, 0); // Round Loop
});

// ----------------------------------------
// Loop - Memory of the Swamp
// ----------------------------------------
Event(14700011, Default, function() {
    var generator_BasicMix1 = 4709010;
    var generator_BasicMix2 = 4709011;
    var generator_ToughMix1 = 4709012;
    var generator_ToughMix2 = 4709013;
    var entity_Miniboss     = 4700810;
    
    WaitFixedTimeSeconds(5.0);
    
    // Round 1
    SetEventFlag(25009681, ON); // Announcer - Round 1
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(0, 14702000, generator_BasicMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 2
    SetEventFlag(25009682, ON); // Announcer - Round 2
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(1, 14702000, generator_BasicMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 3
    SetEventFlag(25009683, ON); // Announcer - Round 3
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(2, 14702000, generator_ToughMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 4
    SetEventFlag(25009684, ON); // Announcer - Round 4
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(3, 14702000, generator_ToughMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 5
    SetEventFlag(25009685, ON); // Announcer - Round 5
    
    WaitFixedTimeSeconds(5.0);
    
    SetCharacterAIState(entity_Miniboss, Enabled);
    ChangeCharacterEnableState(entity_Miniboss, Enabled);
    SetCharacterAnimationState(entity_Miniboss, Enabled);
    
    IfCharacterDeadalive(MAIN, entity_Miniboss, DeathState.Dead, ComparisonType.Equal, 1);
    
    SetEventFlag(25009686, ON); // Announcer - Cycle Complete
    
    AwardItemLot(110010); // Rewards
    
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});

//---------------------------------------------
// Setup - Memory of the Wall
//---------------------------------------------
Event(14700020, Default, function() {
    SetEventFlag(25009602, OFF);
    
    InitializeEvent(0, 14700021, 0); // Round Loop
});

// ----------------------------------------
// Loop - Memory of the Wall
// ----------------------------------------
Event(14700021, Default, function() {
    var generator_BasicMix1 = 4709020;
    var generator_BasicMix2 = 4709021;
    var generator_ToughMix1 = 4709022;
    var generator_ToughMix2 = 4709023;
    var entity_Miniboss     = 4700820;
    
    WaitFixedTimeSeconds(5.0);
    
    // Round 1
    SetEventFlag(25009681, ON); // Announcer - Round 1
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(0, 14702000, generator_BasicMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 2
    SetEventFlag(25009682, ON); // Announcer - Round 2
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(1, 14702000, generator_BasicMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 3
    SetEventFlag(25009683, ON); // Announcer - Round 3
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(2, 14702000, generator_ToughMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 4
    SetEventFlag(25009684, ON); // Announcer - Round 4
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(3, 14702000, generator_ToughMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 5
    SetEventFlag(25009685, ON); // Announcer - Round 5
    
    WaitFixedTimeSeconds(5.0);
    
    SetCharacterAIState(entity_Miniboss, Enabled);
    ChangeCharacterEnableState(entity_Miniboss, Enabled);
    SetCharacterAnimationState(entity_Miniboss, Enabled);
    
    IfCharacterDeadalive(MAIN, entity_Miniboss, DeathState.Dead, ComparisonType.Equal, 1);
    
    SetEventFlag(25009686, ON); // Announcer - Cycle Complete
    
    AwardItemLot(110020); // Rewards
    
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});

//---------------------------------------------
// Setup - Memory of the Cathedral
//---------------------------------------------
Event(14700030, Default, function() {
    SetEventFlag(25009603, OFF);
    
    InitializeEvent(0, 14700031, 0); // Round Loop
});

// ----------------------------------------
// Loop - Memory of the Cathedral
// ----------------------------------------
Event(14700031, Default, function() {
    var generator_BasicMix1 = 4709030;
    var generator_BasicMix2 = 4709031;
    var generator_ToughMix1 = 4709032;
    var generator_ToughMix2 = 4709033;
    var entity_Miniboss     = 4700830;
    
    WaitFixedTimeSeconds(5.0);
    
    // Round 1
    SetEventFlag(25009681, ON); // Announcer - Round 1
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(0, 14702000, generator_BasicMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 2
    SetEventFlag(25009682, ON); // Announcer - Round 2
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(1, 14702000, generator_BasicMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 3
    SetEventFlag(25009683, ON); // Announcer - Round 3
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(2, 14702000, generator_ToughMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 4
    SetEventFlag(25009684, ON); // Announcer - Round 4
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(3, 14702000, generator_ToughMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 5
    SetEventFlag(25009685, ON); // Announcer - Round 5
    
    WaitFixedTimeSeconds(5.0);
    
    SetCharacterAIState(entity_Miniboss, Enabled);
    ChangeCharacterEnableState(entity_Miniboss, Enabled);
    SetCharacterAnimationState(entity_Miniboss, Enabled);
    
    IfCharacterDeadalive(MAIN, entity_Miniboss, DeathState.Dead, ComparisonType.Equal, 1);
    
    SetEventFlag(25009686, ON); // Announcer - Cycle Complete
    
    AwardItemLot(110030); // Rewards
    
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});

//---------------------------------------------
// Setup - Memory of the Settlement
//---------------------------------------------
Event(14700040, Default, function() {
    SetEventFlag(25009604, OFF);
    
    InitializeEvent(0, 14700041, 0); // Round Loop
    InitializeEvent(0, 14700042, 0); // Curse-rotted Greatwood
});

// ----------------------------------------
// Loop - Memory of the Settlement
// ----------------------------------------
Event(14700041, Default, function() {
    var generator_BasicMix1 = 4709040;
    var generator_BasicMix2 = 4709041;
    var generator_ToughMix1 = 4709042;
    var generator_ToughMix2 = 4709043;
    var entity_Miniboss     = 4700840;
    
    WaitFixedTimeSeconds(5.0);
    
    // Round 1
    SetEventFlag(25009681, ON); // Announcer - Round 1
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(0, 14702000, generator_BasicMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 2
    SetEventFlag(25009682, ON); // Announcer - Round 2
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(1, 14702000, generator_BasicMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 3
    SetEventFlag(25009683, ON); // Announcer - Round 3
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(2, 14702000, generator_ToughMix1);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 4
    SetEventFlag(25009684, ON); // Announcer - Round 4
    WaitFixedTimeSeconds(5.0);
    
    InitializeEvent(3, 14702000, generator_ToughMix2);
    
    WaitFixedTimeSeconds(180.0);
    
    // Round 5
    SetEventFlag(25009685, ON); // Announcer - Round 5
    
    WaitFixedTimeSeconds(5.0);
    
    SetCharacterAIState(entity_Miniboss, Enabled);
    ChangeCharacterEnableState(entity_Miniboss, Enabled);
    SetCharacterAnimationState(entity_Miniboss, Enabled);
    
    IfCharacterDeadalive(MAIN, entity_Miniboss, DeathState.Dead, ComparisonType.Equal, 1);
    
    SetEventFlag(25009686, ON); // Announcer - Cycle Complete
    
    AwardItemLot(110040); // Rewards
    
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});

// ----------------------------------------
// Return Bonfire
// ----------------------------------------
Event(14701000, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    //IfActionButtonInArea(MAIN, 30002, 4701950);
    //WarpPlayer(40, 0, 4000972);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Enemy Effect
// ----------------------------------------
Event(14701001, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);

    InitializeCommonEvent(20081010, 4705761, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 4705761, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 4705761, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 4705761, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 4705761, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 4705761, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 4705761, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 4705761, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 4705761, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 4705761, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 4705761, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 4705761, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 4705761, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 4705761, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 4705761, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 4705761, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 4705761, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 4705761, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 4705761, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 4705761, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 4705761, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 4705761, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 4705761, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 4705761, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 4705761, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 4705761, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 4705761, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 4705761, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 4705761, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 4705761, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 4705761, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 4705761, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 4705761, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 4705761, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 4705761, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 4705761, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 4705761, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 4705761, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 4705761, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 4705761, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 4705750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 4705761, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 4705770, 250002220, 25000510);  // Curse of Valor
    
    // Company of Champions
    InitializeCommonEvent(20081020, 4705760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 4705760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 4705760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 4705760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 4705760, 160101542, 160101543); // V
    
    // Soul Level scaling
    IfPlayersSoulLevel(AND_01, ComparisonType.Greater, 50);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpEffect(4705761, 260200100);
    
    IfPlayersSoulLevel(AND_02, ComparisonType.Greater, 100);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_02);
    SetSpEffect(4705761, 260200101);
    
    IfPlayersSoulLevel(AND_03, ComparisonType.Greater, 150);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    SetSpEffect(4705761, 260200102);
    
    IfPlayersSoulLevel(AND_04, ComparisonType.Greater, 200);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_04);
    SetSpEffect(4705761, 260200103);
    
    SetSpeffect(4705761, 260200410); // General Scaling
    
    EndUnconditionally(EventEndType.Restart);
});


// ----------------------------------------
// Round Loop
// ----------------------------------------
Event(14702000, Default, function(X0_4) {
    DeactivateGenerator(X0_4, Enabled); // ON
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Disabled); // OFF
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Enabled); // ON
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Disabled); // OFF
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Enabled); // ON
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Disabled); // OFF
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Enabled); // ON
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Disabled); // OFF
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Enabled); // ON
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Disabled); // OFF
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Enabled); // ON
    
    WaitFixedTimeSeconds(15);
    
    DeactivateGenerator(X0_4, Disabled); // OFF
    
    WaitFixedTimeSeconds(15);
});
