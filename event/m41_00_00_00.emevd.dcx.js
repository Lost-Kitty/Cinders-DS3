// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

//---------------------------------------------
// Constructor
//---------------------------------------------
$Event(0, Default, function() {
    // Core
    InitializeEvent(0, 14107000, 0);

    InitializeEvent(0, 14100100, 0); // Fire Keeper - Setup
    InitializeEvent(0, 14100101, 0); // Fire Keeper - Setup
    InitializeEvent(0, 14105500, 0); // Warp to Kiln path
    InitializeEvent(0, 14105200, 0); // Toggle Cutscene Hollow

    // Soul of Cinder
    InitializeEvent(0, 14100800, 0); // Boss Kill
    InitializeEvent(0, 14105810, 0); // Setup
    InitializeEvent(0, 14105811, 0); // Switch Fighting Style
    InitializeEvent(0, 14105812, 0); // Sitting Animation
    InitializeEvent(0, 14005829, 0); // Common Setup

    InitializeCommonEvent(20005840, 4101800); // Handle Fog Wall for Player
    InitializeCommonEvent(20005841, 4101800); // Handle Fog Wall for Client Player
    InitializeEvent(1, 14105520, 10012051, 4101521);
    InitializeEvent(2, 14105520, 10012052, 4101522);
    InitializeEvent(3, 14105520, 10012053, 4101523);
    InitializeEvent(4, 14105520, 10012054, 4101524);
    InitializeEvent(5, 14105520, 10012055, 4101525);

    // Yuria of Londor - Summon
    InitializeCommonEvent(20005700, 14100800, 14104190, 14105190, 4100190, 4102190);
    InitializeCommonEvent(20005720, 14104190, 14105190, 14100800, 4100190);
    InitializeCommonEvent(20005711, 14104190, 14105805, 4100190, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005713, 74000640, 14100800, 14104190, 14105190, 4100190);
    InitializeCommonEvent(20005714, 14104190, 14105805, 4100190, 4102806, 14100801);

    // Londor Pale Shade - Summon
    InitializeCommonEvent(20005700, 14100800, 14104191, 14105191, 4100191, 4102191);
    InitializeCommonEvent(20005720, 14104191, 14105191, 14100800, 4100191);
    InitializeCommonEvent(20005711, 14104191, 14105805, 4100191, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005714, 14104191, 14105805, 4100191, 4102806, 14100801);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
$Event(50, Default, function() {
    SetMapSoundState(4104800, Disabled);
    SetMapSoundState(4104801, Disabled);
    SetMapSoundState(4104802, Disabled);
    SetEventFlag(14105100, OFF);

    InitializeEvent(0, 14105510, 0);
});

// Fire Keeper - Setup
$Event(14100100, Default, function() {
    ActivateHit(4104101, Disabled);
    ChangeCharacterEnableState(4100100, Disabled);
    SetCharacterAnimationState(4100100, Disabled);
    SetEventFlag(74100100, OFF);
    SetEventFlag(100, OFF);
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(AnyBatchEventFlags(9920, 9923));
    WaitFor(!EventFlag(50006020) && EventFlag(14101100));
    if (!EventFlag(14105100)) {
        CreateObjectfollowingSFX(4101100, 0, 30001);
    }
    WaitFor(
        !EventFlag(101)
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && ActionButtonInArea(9341, 4101100));
    DisplayGenericDialogAndSetEventFlags(10012020, PromptType.YESNO, NumberofOptions.TwoButtons, 4101100, 3, 100, 14105100, 14105100);
    RestartIf(!EventFlag(100));
    SetEventFlag(100, ON);
    SetEventFlag(101, OFF);
    SetSpEffect(10000, 4900);
    SetSpEffect(10000, 4901);
    SetCharacterImmortality(10000, Enabled);
    SetCharacterImmortality(4100100, Enabled);
    DeleteObjectfollowingSFX(4101100, true);
    ActivateHit(4104100, Disabled);
    ActivateHit(4104103, Enabled);
    WaitFixedTimeFrames(1);
    PlayOngoingCutsceneAndWarpPlayer(41000060, CutscenePlayMode.Skippable, 4102110, 41, 0, 10000, 0, 0);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(4100100, Enabled);
    SetCharacterAnimationState(4100100, Enabled);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    DeactivateObject(4101952, Disabled);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    ActivateHit(4104103, Disabled);
    ActivateHit(4104101, Enabled);
    ActivateHit(4104102, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    WaitFor(OngoingCutsceneFinished(4102110));
    dmg = HasDamageType(4100100, 10000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(10));
    if (!dmg.Passed) {
        SetEventFlag(74100100, ON);
    }
    SetSpEffect(10000, 4902);
    if (!dmg.Passed) {
        WaitFixedTimeSeconds(4.2);
        AwardAchievement(2);
        DisableLoadingScreenTips(true);
        HideHud(true);
        SetNetworkInteractionState(Enabled);
        SetEventFlag(110, ON);
        SetEventFlag(9922, ON);
        SetEventFlag(22, ON);
        SetEventFlag(6400, ON);
        ClearSpEffect(10000, 4902);
        EndEvent();
    }
L0:
    PlayCutsceneToPlayer(41000070, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    HideHud(true);
    SetNetworkInteractionState(Enabled);
    DisableLoadingScreenTips(true);
    SetEventFlag(110, ON);
    SetEventFlag(9923, ON);
    SetEventFlag(23, ON);
    SetEventFlag(6400, ON);
    ClearSpEffect(10000, 4902);
    EndEvent();
    InitializeCommonEvent(20011400, 0);
});

// Fire Keeper - Setup
$Event(14100101, Default, function() {
    SetEventFlag(101, OFF);
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(AnyBatchEventFlags(9920, 9923));
    WaitFor(EventFlag(14101100));
    DeactivateObject(4101952, Enabled);
    ForceAnimationPlayback(4101952, 11, true, false, false, 0, 1);
    WaitFor(
        !EventFlag(100)
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && ActionButtonInArea(9342, 4101952));
    DisplayGenericDialogAndSetEventFlags(10012021, PromptType.YESNO, NumberofOptions.TwoButtons, 4101952, 3, 101, 14105101, 14105101);
    RestartIf(!EventFlag(101));
    SetEventFlag(101, ON);
    SetEventFlag(100, OFF);
    ForceAnimationPlayback(4101952, 1, false, false, false, 0, 1);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 490, 9230, 4);
    WaitFixedTimeFrames(1);
    if (EventValue(9230, 4) != 8) {
        PlayCutsceneToPlayer(41000000, CutscenePlayMode.Unskippable, 10000);
        WaitFixedTimeFrames(1);
        AwardAchievement(1);
        DisableLoadingScreenTips(true);
        SetEventFlag(9920, ON);
        SetEventFlag(20, ON);
        SetEventFlag(110, ON);
        SetEventFlag(6400, ON);
        EndEvent();
    }
L0:
    if (EventFlag(9013)) {
        PlayCutsceneToPlayer(41000050, CutscenePlayMode.Unskippable, 10000);
    } else {
        PlayCutsceneToPlayer(41000051, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    AwardAchievement(3);
    DisableLoadingScreenTips(true);
    SetEventFlag(9921, ON);
    SetEventFlag(21, ON);
    SetEventFlag(110, ON);
    SetEventFlag(6400, ON);
    EndEvent();
});

$Event(14105520, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(9356, X4_4));
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Warp to Kiln path
$Event(14105500, Default, function() {
    WaitFor(ActionButtonInArea(9343, 4101101));
    RotateCharacter(10000, 4101101, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(41, 0, 4100120);
});

$Event(14105510, Restart, function() {
    DeactivateObject(4106102, Disabled);
    EndIf(!EventFlag(14100511));
    DeactivateObject(4106102, Enabled);
    EndIf(PlayerIsNotInOwnWorld());
    if (!EventFlag(14100512)) {
        SetEventFlag(14100512, ON);
    }
    WaitFor(
        !PlayerIsNotInOwnWorld()
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && ActionButtonInArea(9344, 4101102));
    SendAllPhantomsHome(0);
    RotateCharacter(10000, 4101102, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(50, 0, 5002110);
    SetEventFlag(14100510, ON);
});

// Toggle Cutscene Hollow
$Event(14105200, Restart, function() {
    ChangeCharacterEnableState(4100200, Disabled); // Hollow
});

// Soul of Cinder Kill
$Event(14100800, Default, function() {
    EndIf(EventFlag(14100800));
    WaitFor(HPRatio(4100800) <= 0);
    WaitFixedTimeSeconds(3);
    PlaySE(4100800, SoundType.s_SFX, 777777777);
    WaitFor(CharacterDead(4100800));
    HandleBossDefeatAndDisplayBanner(4100800, TextBannerType.LordofCinderFallen);
    SetEventFlag(14100800, ON);
    SetEventFlag(14101100, ON);
    SetEventFlag(9321, ON);
    SetEventFlag(6321, ON);
    SpawnOneshotSFX(TargetEntityType.Object, 4101952, 200, 1060);
    
    // Boss Kill
    InitializeCommonEvent(20020000, 25001019, 25002019, 260150007, 120180); 
});

// Soul of Cinder - Setup
$Event(14105810, Restart, function() {
    if (EventFlag(14100800)) {
        ForceCharacterDeath(4100800, false);
        ChangeCharacterEnableState(4100800, Disabled);
        SetCharacterAIState(4100800, Disabled);
        EndEvent();
    }

L0:
    SetCharacterAIState(4100800, Disabled);
    if (!EventFlag(14100801)) {
        onlineAreaFlag &= !PlayerIsNotInOwnWorld() && EntityInRadiusOfEntity(4100800, 10000, 40, 1);
        WaitFor(onlineAreaFlag);
        SetNetworkconnectedEventFlag(14100801, ON);
        ForceAnimationPlayback(4100800, 1700, false, true, false, 0, 1);
    } else {

L1:
        onlineAreaFlag &= EventFlag(14105805) && InArea(10000, 4102800);
        WaitFor(onlineAreaFlag);
    }

L2:
    SetNetworkconnectedEventFlag(14100801, ON);
    SetNetworkconnectedEventFlag(14105807, ON);
    SetCharacterAIState(4100800, Enabled);
    DisplayBossHealthBar(Enabled, 4100800, 0, 905280);
    SetNetworkUpdateRate(4100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    
    EndIf(PlayerIsNotInOwnWorld());
    SetNetworkUpdateAuthority(4100800, AuthorityLevel.Forced);
});

// Soul of Cinder - Switch Fighting Style
$Event(14105811, Restart, function() {
    EndIf(EventFlag(14100800));
    EndIf(EventFlag(14105802));
    SetCharacterImmortality(4100800, Enabled);
    WaitFor(HPRatio(4100800) <= 0.05 && HasDamageType(4100800, 10000, DamageType.Unspecified));
    SetNetworkconnectedEventFlag(14105803, ON);
    ForceAnimationPlayback(4100800, 20010, false, true, false, 0, 1);
    ForceAnimationPlayback(4100800, 20005, false, true, false, 0, 1);
    SetNetworkconnectedEventFlag(14105802, ON);
    SetCharacterImmortality(4100800, Disabled);
});

// Soul of Cinder - Sitting Animation
$Event(14105812, Restart, function() {
    EndIf(EventFlag(14100800));
    if (!EventFlag(14100801)) {
        if (!EventFlag(14100801)) {
            ForceAnimationPlayback(4100800, 700, false, false, false, 0, 1);
        }
    }
L0:
    WaitFor(ObjectBackread(4101952));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4101952, 100000, false, false, false, 0, 1);
});

$Event(14105813, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X16_4, Disabled);
    SetMapSoundState(X20_4, Disabled);
    EndIf(EventFlag(X0_4));
    flagArea &= EventFlag(X4_4);
    if (NumberOfClientsOfType(ClientType.Coop) != 0) {
        flagArea &= EventFlag(X8_4);
    }
    flagArea &= InArea(10000, X12_4);
    WaitFor(flagArea);
    EnableBossMapSound(X16_4, Enabled);
    Unknown201007(X20_4);
    WaitFor(EventFlag(X24_4) || EventFlag(X0_4));
    if (!EventFlag(X0_4)) {
        EnableBossMapSound(X20_4, Enabled);
        WaitFor(EventFlag(X0_4));
    }
L0:
    EnableBossMapSound(-1, Disabled);
});

// Soul of Cinder - Common Setup
$Event(14005829, Restart, function() {
    InitializeCommonEvent(20005800, 14100800, 4101800, 4102800, 14105805, 4101800, 4100800, 14100801, 0);
    InitializeCommonEvent(20005801, 14100800, 4101800, 4102800, 14105805, 4101800, 14105806);
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        InitializeCommonEvent(20001836, 14100800, 14105805, 14105806, 14105807, 4104800, 4104801, 14105802); // Sound State
    } else {
        InitializeCommonEvent(20005831, 14100800, 14105805, 14105806, 4102800, 4104800, 4104801, 14105802);
    }
    InitializeCommonEvent(20005820, 14100800, 4101800, 4, 14100801);
    InitializeCommonEvent(20005810, 14100800, 4101800, 4102800, 10000);
});

$Event(14005900, Restart, function() {
    SetEventFlag(74000120, ON);
    SetEventFlag(14101100, ON);
    ClearSpEffect(10000, 4900);
    ClearSpEffect(10000, 4901);
    SetNetworkInteractionState(Enabled);
    HideHud(true);
    WaitFor(EventFlag(100) || EventFlag(101));
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAnimationState(4100800, Disabled);
});

//----------------------------------------
// Core
// -- Initialization commands go here.
//----------------------------------------
$Event(14107000, Default, function() {
    
    //# Bonfires
    InitializeEvent(0, 14107010, 0); 
    
    //# Treasure
    InitializeEvent(0, 14107011, 0); 
    
    //# Mimics
    InitializeEvent(0, 14107012, 0);
    
    //# Scripted Treasure
    InitializeEvent(0, 14107013, 0); 
    
    //# Scripted Enemies
    InitializeEvent(0, 14107014, 0);
    
    //# Interactables
    InitializeEvent(0, 14107015, 0);
    
    //# Friendly Characters
    InitializeEvent(0, 14107050, 0);
    
    //# Intruders
    InitializeEvent(0, 14107051, 0);
    
    //# Summons
    InitializeEvent(0, 14107052, 0); 
    
    //# Conjurations
    InitializeEvent(0, 14107053, 0);
    
    //# Bosses
    InitializeEvent(0, 14107060, 0);
    
    //# Gauntlet
    InitializeEvent(0, 14107070, 0);
    
    //# Ceremony
    InitializeEvent(0, 14107200, 0);
    
    //# Forgotten Catacombs
    InitializeEvent(0, 14107250, 0);
    
    //# Forgotten Menargerie
    InitializeEvent(0, 14107300, 0);
});

//----------------------------------------
// Bonfires
// -- Bonfire commands go here.
//----------------------------------------
$Event(14107010, Default, function() {

    // Bonfires - Skip if in Flameless
    if (!EventFlag(25000110)) 
    {
        RegisterBonfire(14100000, 4101950, 5, 180, 0); // Flameless Shrine
        RegisterBonfire(14100001, 4101951, 5, 180, 0); // Soul of Cinder
    } 
    else 
    {
        DeactivateObject(4101950, Disabled);
        DeactivateObject(4101951, Disabled);
    }
});

//----------------------------------------
// Treasure
// -- Basic treasure commands go here.
//----------------------------------------
$Event(14107011, Default, function() {
    
    // Chests
    InitializeCommonEvent(20005520, 14101200, 4101200, 4104300);
});


//----------------------------------------
// Mimics
// -- Mimic commands go here.
//----------------------------------------
$Event(14107012, Default, function() {
    
});


//----------------------------------------
// Scripted Treasure
// -- Complex treasure commands go here.
//----------------------------------------
$Event(14107013, Default, function() {
    
    
});


//----------------------------------------
// Scripted Enemies
// -- Commands involving enemy appearance go here.
//----------------------------------------
$Event(14107014, Default, function() {
    
});


//----------------------------------------
// Interactables
// -- Commands dealing with environmental hazards and interactables go here.
//----------------------------------------
$Event(14107015, Default, function() {
    // Catacomb Doors
    InitializeCommonEvent(20008200, 4101210, 30005, 31, 3100975, 91040, 3102150); // Catacomb: To Undead Settlement
    InitializeCommonEvent(20008200, 4101212, 30005, 33, 3304000, 91040, 3302959); // Catacomb: To Road of Sacrifices
    InitializeCommonEvent(20008200, 4101211, 30005, 38, 3804001, 91040, 3802960); // Catacomb: To Carthus
    
    // Forgotten Colosseum
    InitializeCommonEvent(20008230, 4101213, 30007, 40, 4000988, 91040, 4002973, 25009600); // Catacomb: To Firelink Shrine
});

//----------------------------------------
// Friendly Characters
// -- Commands involving friendly characters go here. 
//----------------------------------------
$Event(14107050, Default, function() {
    // Lonesome Gavlan
    //InitializeCommonEvent(20081200, 14100850, 4100850, 0); // Idle
    InitializeCommonEvent(20081210, 14100850, 4100850); // Hostility
    
    // Gavlan Need
    BatchSetEventFlags(74100510, 74100519, OFF);
    RandomlySetEventFlagInRange(74100510, 74100519, ON);
});

//----------------------------------------
// Intruders
// -- Commands involving hostile intruder characters go here. 
//----------------------------------------
$Event(14107051, Default, function() {
    
    // Lord Zakar
    InitializeCommonEvent(20090010, 4100810, 4102810, 30310, 63010, 13400, 99005400, 99005401, 14100810, 131001, 203000); // Setup
    InitializeCommonEvent(20090020, 4100810, 85700); // Kill Taunt
});

//----------------------------------------
// Summons
// -- Commands involving friendly summonable characters go here. 
//----------------------------------------
$Event(14107052, Default, function() {
    
});

//----------------------------------------
// Conjurations
// -- Commands involving conjurations go here. 
//----------------------------------------
$Event(14107053, Default, function() {
    
    // Skeleton
    InitializeCommonEvent(20080000, 4100750); // Setup
    InitializeCommonEvent(20080001, 4100750); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100750); // Tools
    InitializeCommonEvent(20080003, 4100750); // Effects
    InitializeCommonEvent(20080004, 4100750, 160760000, 160760211, 41, 0); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 4100751); // Setup
    InitializeCommonEvent(20080001, 4100751); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100751); // Tools
    InitializeCommonEvent(20080003, 4100751); // Effects
    InitializeCommonEvent(20080004, 4100751, 160760001, 160760211, 41, 0); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 4100752); // Setup
    InitializeCommonEvent(20080001, 4100752); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100752); // Tools
    InitializeCommonEvent(20080003, 4100752); // Effects
    InitializeCommonEvent(20080004, 4100752, 160760002, 160760211, 41, 0); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 4100753); // Setup
    InitializeCommonEvent(20080001, 4100753); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100753); // Tools
    InitializeCommonEvent(20080003, 4100753); // Effects
    InitializeCommonEvent(20080004, 4100753, 160760003, 160760211, 41, 0); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 4100754); // Setup
    InitializeCommonEvent(20080001, 4100754); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100754); // Tools
    InitializeCommonEvent(20080003, 4100754); // Effects
    InitializeCommonEvent(20080004, 4100754, 160760004, 160760211, 41, 0); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 4100755); // Setup
    InitializeCommonEvent(20080001, 4100755); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100755); // Tools
    InitializeCommonEvent(20080003, 4100755); // Effects
    InitializeCommonEvent(20080004, 4100755, 160760005, 160760211, 41, 0); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 4100756); // Setup
    InitializeCommonEvent(20080001, 4100756); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100756); // Tools
    InitializeCommonEvent(20080003, 4100756); // Effects
    InitializeCommonEvent(20080004, 4100756, 160760006, 160760211, 41, 0); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 4100757); // Setup
    InitializeCommonEvent(20080001, 4100757); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100757); // Tools
    InitializeCommonEvent(20080003, 4100757); // Effects
    InitializeCommonEvent(20080004, 4100757, 160760007, 160760211, 41, 0); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 4100758); // Setup
    InitializeCommonEvent(20080001, 4100758); // Bonfire Rest
    InitializeCommonEvent(20080002, 4100758); // Tools
    InitializeCommonEvent(20080003, 4100758); // Effects
    InitializeCommonEvent(20080004, 4100758, 160760008, 160760211, 41, 0); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 4100750);
    InitializeCommonEvent(20080011, 4100750);
    InitializeCommonEvent(20080012, 4100750);

    // Hollow Unique
    InitializeCommonEvent(20080020, 4100751);
    InitializeCommonEvent(20080021, 4100751);
    InitializeCommonEvent(20080022, 4100751);

    // Hound Unique
    InitializeCommonEvent(20080030, 4100752);
    InitializeCommonEvent(20080031, 4100752);
    InitializeCommonEvent(20080032, 4100752);

    // Warrior Unique
    InitializeCommonEvent(20080040, 4100753);
    InitializeCommonEvent(20080041, 4100753);
    InitializeCommonEvent(20080042, 4100753);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 4100754);
    InitializeCommonEvent(20080051, 4100754);
    InitializeCommonEvent(20080052, 4100754);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 4100755);
    InitializeCommonEvent(20080061, 4100755);
    InitializeCommonEvent(20080062, 4100755);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 4100756);
    InitializeCommonEvent(20080071, 4100756);
    InitializeCommonEvent(20080072, 4100756);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 4100757);
    InitializeCommonEvent(20080081, 4100757);
    InitializeCommonEvent(20080082, 4100757);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 4100758);
    InitializeCommonEvent(20080091, 4100758);
    InitializeCommonEvent(20080092, 4100758);
});

//----------------------------------------
// Bosses
// -- Commands that deal with new Bosses go here.
//----------------------------------------
$Event(14107060, Default, function() {

});

//----------------------------------------
// Gauntlet
// -- Commands that deal with the Gauntlet journey type go here.
//----------------------------------------
$Event(14107070, Default, function() {
    
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 4102050);
});

//----------------------------------------
// Misc
// -- Niche events go here.
//----------------------------------------
// Ceremony
$Event(14107200, Restart, function() {
    // Forgotten Colosseum
    DeleteObjectfollowingSFX(4101250, false);
    DeleteObjectfollowingSFX(4101251, false);
    DeleteObjectfollowingSFX(4101252, false);
    DeleteObjectfollowingSFX(4101253, false);
    DeleteObjectfollowingSFX(4101254, false);
    DeleteObjectfollowingSFX(4101255, false);
    CreateObjectfollowingSFX(4101250, 210, 838041);
    CreateObjectfollowingSFX(4101251, 210, 838041);
    CreateObjectfollowingSFX(4101252, 210, 838041);
    CreateObjectfollowingSFX(4101253, 210, 838041);
    CreateObjectfollowingSFX(4101254, 210, 838041);
    CreateObjectfollowingSFX(4101255, 210, 838041);
    
    // Forgotten Catacombs
    DeleteObjectfollowingSFX(4101260, false);
    DeleteObjectfollowingSFX(4101261, false);
    DeleteObjectfollowingSFX(4101262, false);
    DeleteObjectfollowingSFX(4101263, false);
    DeleteObjectfollowingSFX(4101264, false);
    DeleteObjectfollowingSFX(4101265, false);
    DeleteObjectfollowingSFX(4101266, false);
    DeleteObjectfollowingSFX(4101267, false);
    DeleteObjectfollowingSFX(4101268, false);
    DeleteObjectfollowingSFX(4101269, false);
    DeleteObjectfollowingSFX(4101270, false);
    DeleteObjectfollowingSFX(4101271, false);
    DeleteObjectfollowingSFX(4101272, false);
    DeleteObjectfollowingSFX(4101273, false);
    DeleteObjectfollowingSFX(4101274, false);
    DeleteObjectfollowingSFX(4101275, false);
    DeleteObjectfollowingSFX(4101276, false);
    DeleteObjectfollowingSFX(4101277, false);
    DeleteObjectfollowingSFX(4101278, false);
    DeleteObjectfollowingSFX(4101279, false);
    DeleteObjectfollowingSFX(4101280, false);
    DeleteObjectfollowingSFX(4101281, false);
    DeleteObjectfollowingSFX(4101282, false);
    DeleteObjectfollowingSFX(4101283, false);
    DeleteObjectfollowingSFX(4101284, false);
    DeleteObjectfollowingSFX(4101285, false);
    DeleteObjectfollowingSFX(4101286, false);
    DeleteObjectfollowingSFX(4101287, false);
    DeleteObjectfollowingSFX(4101288, false);
    DeleteObjectfollowingSFX(4101289, false);
    DeleteObjectfollowingSFX(4101290, false);
    DeleteObjectfollowingSFX(4101291, false);
    DeleteObjectfollowingSFX(4101292, false);
    DeleteObjectfollowingSFX(4101293, false);
    DeleteObjectfollowingSFX(4101294, false);
    DeleteObjectfollowingSFX(4101295, false);
    DeleteObjectfollowingSFX(4101296, false);
    DeleteObjectfollowingSFX(4101297, false);
    DeleteObjectfollowingSFX(4101298, false);
    DeleteObjectfollowingSFX(4101299, false);
    DeleteObjectfollowingSFX(4101270, false);
    DeleteObjectfollowingSFX(4101301, false);
    DeleteObjectfollowingSFX(4101302, false);
    DeleteObjectfollowingSFX(4101303, false);
    DeleteObjectfollowingSFX(4101304, false);
    DeleteObjectfollowingSFX(4101305, false);
    DeleteObjectfollowingSFX(4101306, false);
    DeleteObjectfollowingSFX(4101307, false);
    DeleteObjectfollowingSFX(4101308, false);
    DeleteObjectfollowingSFX(4101309, false);
    DeleteObjectfollowingSFX(4101310, false);
    DeleteObjectfollowingSFX(4101311, false);
    DeleteObjectfollowingSFX(4101312, false);
    DeleteObjectfollowingSFX(4101313, false);
    DeleteObjectfollowingSFX(4101314, false);
    DeleteObjectfollowingSFX(4101315, false);
    CreateObjectfollowingSFX(4101260, 210, 838041);
    CreateObjectfollowingSFX(4101261, 210, 838041);
    CreateObjectfollowingSFX(4101262, 210, 838041);
    CreateObjectfollowingSFX(4101263, 210, 838041);
    CreateObjectfollowingSFX(4101264, 210, 838041);
    CreateObjectfollowingSFX(4101265, 210, 838041);
    CreateObjectfollowingSFX(4101266, 210, 838041);
    CreateObjectfollowingSFX(4101267, 210, 838041);
    CreateObjectfollowingSFX(4101268, 210, 838041);
    CreateObjectfollowingSFX(4101269, 210, 838041);
    CreateObjectfollowingSFX(4101270, 210, 838041);
    CreateObjectfollowingSFX(4101271, 210, 838041);
    CreateObjectfollowingSFX(4101272, 210, 838041);
    CreateObjectfollowingSFX(4101273, 210, 838041);
    CreateObjectfollowingSFX(4101274, 210, 838041);
    CreateObjectfollowingSFX(4101275, 210, 838041);
    CreateObjectfollowingSFX(4101276, 210, 838041);
    CreateObjectfollowingSFX(4101277, 210, 838041);
    CreateObjectfollowingSFX(4101278, 210, 838041);
    CreateObjectfollowingSFX(4101279, 210, 838041);
    CreateObjectfollowingSFX(4101280, 210, 838041);
    CreateObjectfollowingSFX(4101281, 210, 838041);
    CreateObjectfollowingSFX(4101282, 210, 838041);
    CreateObjectfollowingSFX(4101283, 210, 838041);
    CreateObjectfollowingSFX(4101284, 210, 838041);
    CreateObjectfollowingSFX(4101285, 210, 838041);
    CreateObjectfollowingSFX(4101286, 210, 838041);
    CreateObjectfollowingSFX(4101287, 210, 838041);
    CreateObjectfollowingSFX(4101288, 210, 838041);
    CreateObjectfollowingSFX(4101289, 210, 838041);
    CreateObjectfollowingSFX(4101290, 210, 838041);
    CreateObjectfollowingSFX(4101291, 210, 838041);
    CreateObjectfollowingSFX(4101292, 210, 838041);
    CreateObjectfollowingSFX(4101293, 210, 838041);
    CreateObjectfollowingSFX(4101294, 210, 838041);
    CreateObjectfollowingSFX(4101295, 210, 838041);
    CreateObjectfollowingSFX(4101296, 210, 838041);
    CreateObjectfollowingSFX(4101297, 210, 838041);
    CreateObjectfollowingSFX(4101298, 210, 838041);
    CreateObjectfollowingSFX(4101299, 210, 838041);
    CreateObjectfollowingSFX(4101300, 210, 838041);
    CreateObjectfollowingSFX(4101301, 210, 838041);
    CreateObjectfollowingSFX(4101302, 210, 838041);
    CreateObjectfollowingSFX(4101303, 210, 838041);
    CreateObjectfollowingSFX(4101304, 210, 838041);
    CreateObjectfollowingSFX(4101305, 210, 838041);
    CreateObjectfollowingSFX(4101306, 210, 838041);
    CreateObjectfollowingSFX(4101307, 210, 838041);
    CreateObjectfollowingSFX(4101308, 210, 838041);
    CreateObjectfollowingSFX(4101309, 210, 838041);
    CreateObjectfollowingSFX(4101310, 210, 838041);
    CreateObjectfollowingSFX(4101311, 210, 838041);
    CreateObjectfollowingSFX(4101312, 210, 838041);
    CreateObjectfollowingSFX(4101313, 210, 838041);
    CreateObjectfollowingSFX(4101314, 210, 838041);
    CreateObjectfollowingSFX(4101315, 210, 838041);
});

//----------------------------------------
//  Forgotten Catacombs
// -- Level stuff goes here.
//----------------------------------------
$Event(14107250, Default, function() {
    if(InArea(10000, 4102056, 1) && MapCeremony(41, 0, 0))
    {
        SetMapCeremony(41, 0, 100);
    }
    
    // Hurtboxes - Lava
    InitializeEvent(10, 14107320, 4102065);
    
    // Bewitched Alonne Sword
    InitializeEvent(0, 14107251, 4101150);
    
    // Skeleton Gank on Bewitched Alonne Sword pickup
    InitializeCommonEvent(20005209, 4100370, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100371, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100372, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100373, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100374, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100375, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100376, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100377, 700, 1700, 4102601, 0, 54100410);
    InitializeCommonEvent(20005209, 4100378, 700, 1700, 4102601, 0, 54100410);
    
    // Skeleton Gank
    InitializeCommonEvent(20005208, 4100380, 700, 1700, 4102602);
    InitializeCommonEvent(20005208, 4100381, 700, 1700, 4102602);
    InitializeCommonEvent(20005208, 4100382, 700, 1700, 4102602);
    
    InitializeCommonEvent(20005208, 4100383, 700, 1700, 4102603);
    InitializeCommonEvent(20005208, 4100384, 700, 1700, 4102603);
    InitializeCommonEvent(20005208, 4100385, 700, 1700, 4102603);
    InitializeCommonEvent(20005208, 4100386, 700, 1700, 4102603);
    
    InitializeCommonEvent(20005208, 4100387, 700, 1700, 4102604);
    InitializeCommonEvent(20005208, 4100388, 700, 1700, 4102604);
    InitializeCommonEvent(20005208, 4100389, 700, 1700, 4102604);
    
    InitializeCommonEvent(20005208, 4100390, 700, 1700, 4102605);
    InitializeCommonEvent(20005208, 4100391, 700, 1700, 4102605);
    InitializeCommonEvent(20005208, 4100392, 700, 1700, 4102605);
    InitializeCommonEvent(20005208, 4100393, 700, 1700, 4102605);
    InitializeCommonEvent(20005208, 4100394, 700, 1700, 4102605);
    
});

// Betwitched Alonne Sword - Treasure Pickup
$Event(14107251, Default, function(X0_4) {
    // Hide if already picked up
    if(EventFlag(54100410))
    {
        DeactivateObject(X0_4, Disabled);
        EndEvent();
    }
    
    WaitFor(ActionButtonInArea(4001, 4101214));
    
    AwardItemLot(4100410);
    
    DeactivateObject(X0_4, Disabled);
});

//----------------------------------------
//  Forgotten Colosseum
// -- Trial stuff goes here.
//----------------------------------------
$Event(14107300, Default, function() {
    
    // If player has quit and loaded back, force map reset so enemies respawn properly
    if(EventFlag(25009613) && InArea(10000, 4102055, 1))
    {
        SetEventFlag(25009612, ON);
        SetEventFlag(25009613, OFF);
        WarpPlayer(41, 0, 4100963);
        SetPlayerRespawnPoint(4102963);
        EndEvent();
    }
    
    // Twisted Knight
    SetEventFlag(25009600, OFF); // Boss Fight active
    InitializeEvent(0, 14107400, 0); // Boss Setup
    InitializeEvent(0, 14107401, 0); // Visage Mechanic
    
    // Hurtboxes
    InitializeEvent(0, 14107320, 4102060);
    InitializeEvent(1, 14107320, 4102061);
    InitializeEvent(2, 14107320, 4102062);
    InitializeEvent(3, 14107320, 4102063);
    InitializeEvent(4, 14107320, 4102064);
    
    // Disable all Wave Enemies
    InitializeEvent(0, 14107301, 4105800);
    InitializeEvent(1, 14107301, 4105801);
    InitializeEvent(2, 14107301, 4105802);
    InitializeEvent(3, 14107301, 4105803);
    InitializeEvent(4, 14107301, 4105804);
    InitializeEvent(5, 14107301, 4105805);
    InitializeEvent(6, 14107301, 4105806);
    InitializeEvent(7, 14107301, 4105807);
    InitializeEvent(8, 14107301, 4105808);
    InitializeEvent(9, 14107301, 4105809);
    InitializeEvent(10, 14107301, 4105810);
    
    // Wave System
    WaitFor(InArea(10000, 4102055, 1));
    
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 1020);
    SetSpEffect(10000, 112001); // Block movement for 2.3 seconds
    
    SetEventFlag(25009612, ON); // In Forgotten Menargerie, set ceremony again on death
    SetEventFlag(25009613, ON); // In Forgotten Menargerie, force proper map reset if player quits out and the reloads
    
    WaitFixedTimeSeconds(10);
    
    InitializeEvent(0, 14107310, 0);
});

// Disable Wave Enemies
$Event(14107301, Restart, function(X0_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
});

// Enable Wave Enemies
$Event(14107302, Restart, function(X0_4) {
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
});

// Wave System
$Event(14107310, Restart, function(X0_4) {
    // Wave 1 - Skeletons
    InitializeEvent(0, 14107302, 4105800);
    
    WaitFixedTimeSeconds(30);
    
    // Wave 2 - Carthus Swordsmen / Skeletons
    InitializeEvent(1, 14107302, 4105801);
    
    WaitFixedTimeSeconds(60);
    
    // Wave 3 - Gyrm / Hounds
    InitializeEvent(2, 14107302, 4105802);
    
    WaitFixedTimeSeconds(60);
    AwardItemLot(110000); // Titanite Shards
    
    // Wave 4 - Gargoyles
    InitializeEvent(3, 14107302, 4105803);
    
    WaitFixedTimeSeconds(60);
    
    // Wave 5 - Ghru
    InitializeEvent(4, 14107302, 4105804);
    
    WaitFixedTimeSeconds(30);
    
    // Wave 6 - Mad Ghru
    InitializeEvent(5, 14107302, 4105805);
    
    WaitFixedTimeSeconds(60);
    AwardItemLot(110010); // Large Titanite Shards
    
    // Wave 7 - Skeleton
    InitializeEvent(6, 14107302, 4105806);
    
    WaitFixedTimeSeconds(30);
    
    // Wave 8 - Demon
    InitializeEvent(7, 14107302, 4105807);
    
    WaitFixedTimeSeconds(30);
    
    // Wave 9 - Black Knight
    InitializeEvent(8, 14107302, 4105808);
    
    WaitFixedTimeSeconds(30);
    AwardItemLot(110020); // Titanite Chunk
    
    // Wave 10 - Stray Demon
    InitializeEvent(9, 14107302, 4105809);
    
    WaitFixedTimeSeconds(30);
    
    // Wave 11 - Dogs
    InitializeEvent(10, 14107302, 4105810);
    
    WaitFixedTimeSeconds(30);
    
    // Wave 12 - Boss
    SetEventFlag(25009600, ON); // Boss Fight active
});

// Hurtboxes
$Event(14107320, Restart, function(X0_4) {
    WaitFor(InArea(10000, X0_4, 1));
    
    SetSpEffect(10000, 4023);
    
    WaitFixedTimeSeconds(0.3);
    
    RestartEvent();
});

// ----------------------------------------
// Twisted Knight - Setup
// ----------------------------------------
$Event(14107400, Restart, function() {
    // Disable at init
    //SetMapSoundState(10000, Disabled);
    
    ChangeCharacterEnableState(4100840, Disabled);
    SetCharacterAnimationState(4100840, Disabled);
    SetCharacterAIState(4100840, Disabled);

    WaitFor(EventFlag(25009600));
    
    // Move to Player
    WarpCharacterAndSetFloor(4100840, TargetEntityType.Character, 10000, 200, 10000);
    
    WaitFixedTimeSeconds(0.1);
    
    ChangeCharacterEnableState(4100840, Enabled);
    SetCharacterAnimationState(4100840, Enabled);
    
    ForceAnimationPlayback(4100840, 1700, false, false, false, 0, 1);
    
    // Setup entities fully
    SetCharacterAIState(4100840, Enabled);

    DisplayBossHealthBar(Enabled, 4100840, 0, 207070);

    WaitFor(HPRatio(4100840) <= 0);
    
    WaitFixedTimeSeconds(1);
    
    PlaySE(4100840, SoundType.s_SFX, 777777777);
    
    DisplayBossHealthBar(Disabled, 4100840, 0, 207070);
    
    WaitFixedTimeSeconds(4);
    
    HandleBossDefeat(4100840);
    
    EnableBossMapSound(-1, Disabled);
    
    SetEventFlag(14100850, ON);
    SetEventFlag(9345, ON);
    SetEventFlag(6345, ON);
    
    // Boss Kill
    InitializeCommonEvent(20020001, 25001032, 25002032, 260150004, 120300); 
    
    AwardItemLot(2420);
    AwardItemLot(110030); // Titanite Slab
    
    SetEventFlag(25009600, OFF); // Boss Fight inactive
    
    WaitFixedTimeSeconds(2.0);
    
    DisplayMessage(99100001, 0);
});


// ----------------------------------------
// Twisted Knight - Visage
// ----------------------------------------
$Event(14107401, Restart, function() {
    WaitFor(EventFlag(25009600));
    
    SetSpEffect(4100840, 160741300);

    WaitFixedTimeSeconds(20);

    SetSpEffect(4100840, 160741301);

    WaitFixedTimeSeconds(20);

    SetSpEffect(4100840, 160741302);

    WaitFixedTimeSeconds(20);

    SetSpEffect(4100840, 160741303);

    WaitFixedTimeSeconds(20);

    SetSpEffect(4100840, 160741304);

    WaitFixedTimeSeconds(20);

    RestartEvent();
});
