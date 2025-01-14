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
    InitializeEvent(0, 15117000, 0);

    //----------------------------------------
    // Slave Knight Gael
    //----------------------------------------
    // Slave Knight Gael - Kill
    InitializeEvent(0, 15115800, 0);

    // Slave Knight Gael - Boss Start
    InitializeEvent(0, 15115810, 0);

    // Slave Knight Gael - 2nd Phase Transition
    InitializeEvent(0, 15115811, 0);

    // Slave Knight Gael - 2nd Phase VFX Handler
    InitializeEvent(0, 15115812, 0);

    // Slave Knight Gael - Handle AI State in Filianore's temple area
    InitializeEvent(0, 15115847, 0);

    // Slave Knight Gael - Setup
    InitializeEvent(0, 15115849, 0);

    // Slave Knight Gael - Handle Fog Wall for Player
    InitializeCommonEvent(20005840, 5111800);

    // Slave Knight Gael - Handle Fog Wall for Client Player
    InitializeCommonEvent(20005841, 5111800);

    //----------------------------------------
    // Shira
    //----------------------------------------
    // Shira - Handle Flags
    InitializeEvent(0, 15115850, 0);

    // Shira - Handle Spawn State
    InitializeEvent(0, 15115860, 0);

    // Shira - Setup
    InitializeEvent(0, 15115889, 0);

    // Shira - Handle Fog Wall for Player
    InitializeCommonEvent(20005840, 5111850);

    // Shira - Handle Fog Wall for Client Player
    InitializeCommonEvent(20005841, 5111850);

    //----------------------------------------
    // Misc
    //----------------------------------------
    // Flag Handler - Gael + Shria dead
    InitializeEvent(0, 15115890, 0);

    // Filianore - Play Animation
    InitializeEvent(0, 15115201, 0);

    // Mad Pilgrim - Enable AI upon area/attack trigger
    InitializeCommonEvent(20005110, 5110300, 5112800);

    // Mad Pilgrim - Handle State
    InitializeEvent(0, 15115300, 0);

    // Ringed Knight - Award Itemlot
    InitializeCommonEvent(20005351, 5110240, 62600240, 55110981, 1073741824);

    // Handle ? State
    InitializeEvent(0, 15115891, 0);

    // Shira - Set Flags if Dead
    InitializeCommonEvent(20006002, 5110850, 1838, 1835, 1839);

    // Area - Flag set if within
    InitializeCommonEvent(20006031, 75110180, 5112801);
});

//---------------------------------------------
// Pre-constructor
//---------------------------------------------
$Event(50, Default, function() {
    //----------------------------------------
    // Filianore
    //----------------------------------------
    // Setup
    InitializeEvent(0, 15115200, 0);

    //----------------------------------------
    // Slave Knight Gael
    //----------------------------------------
    // Setup
    InitializeEvent(0, 15115100, 0);

    //----------------------------------------
    // Misc
    //----------------------------------------
    SetMapSoundState(5114801, Disabled);
    SetMapSoundState(5114802, Disabled);
    SetMapSoundState(5114803, Disabled);

});

//----------------------------------------
// Slave Knight Gael - Setup
//----------------------------------------
$Event(15115100, Restart, function() {
    EndIf(EventFlag(15110800));
    SetCurrentMapCeremony(0);
});

//----------------------------------------
// Filianore - Setup
//----------------------------------------
$Event(15115200, Restart, function() {
    SetCharacterGravity(5110200, Disabled);
    SetCharacterMaphit(5110200, true);
});

//----------------------------------------
// Filianore - Play Animation
//----------------------------------------
$Event(15115201, Restart, function() {
    WaitFor(CharacterBackreadStatus(5110200));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(5110200, 30000, true, false, true, 0, 1);
});

//----------------------------------------
// Mad Pilgrim - Handle State
//----------------------------------------
$Event(15115300, Restart, function() {
    if (!(!EventFlag(15110801) && !EventFlag(15110300))) {
        ChangeCharacterEnableState(5110300, Disabled);
        SetCharacterBackreadState(5110300, true);
        SetCharacterAnimationState(5110300, Disabled);
        EndEvent();
    }
L0:
    SetCharacterTalkRange(5110300, 100);
    SetEventFlag(75110200, OFF);
    WaitFor(EventFlag(15110800) || InArea(5110300, 5112300) || CharacterDead(5110300));
    if (!CharacterDead(5110300)) {
        ForceCharacterDeath(5110300, false);
    }
    SetEventFlag(15110300, ON);
});

//----------------------------------------
// Slave Knight Gael Kill
//----------------------------------------
$Event(15115800, Restart, function() {
    EndIf(EventFlag(15110800));
    WaitFor(HPRatio(5110800) == 0);
    WaitFixedTimeSeconds(2.67);
    PlaySE(5110800, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(5110800, TextBannerType.HeirofFireDestroyed);
    DeleteMapSFX(5113820, true);
    DeleteMapSFX(5113821, true);
    DeleteMapSFX(5113822, true);
    DeleteMapSFX(5113823, true);
    SetEventFlag(15110800, ON);
    SetEventFlag(6327, ON);
    SetEventFlag(9327, ON);
    
    // Boss Kill
    InitializeCommonEvent(20020000, 25001024, 25002024, 260150008, 120220); 
});

//----------------------------------------
// Slave Knight Gael - Boss Start
//----------------------------------------
$Event(15115810, Restart, function() {
    if (EventFlag(15110800)) {
        ChangeCharacterEnableState(5115800, Disabled);
        SetCharacterAnimationState(5115800, Disabled);
        ForceCharacterDeath(5115800, false);
        DeleteMapSFX(5113820, false);
        DeleteMapSFX(5113821, false);
        DeleteMapSFX(5113822, false);
        DeleteMapSFX(5113823, false);
        DeleteMapSFX(5113830, false);
        DeleteMapSFX(5113831, false);
        DeleteMapSFX(5113832, false);
        DeleteMapSFX(5113833, false);
        DeactivateObject(5116820, Disabled);
        DeactivateObject(5116821, Enabled);
        EndEvent();
    }

L0:
    DeleteMapSFX(5113820, false);
    DeleteMapSFX(5113821, false);
    DeleteMapSFX(5113822, false);
    DeleteMapSFX(5113823, false);
    DeleteMapSFX(5113830, false);
    DeleteMapSFX(5113831, false);
    DeleteMapSFX(5113832, false);
    DeleteMapSFX(5113833, false);
    DeactivateObject(5116820, Enabled);
    DeactivateObject(5116821, Disabled);
    SetCharacterAIState(5115800, Disabled);
    ChangeCharacterEnableState(5110801, Disabled);
    SetCharacterAnimationState(5110801, Disabled);
    SetCharacterAnimationState(5110800, Disabled);
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterInvadeType(10000, 7)
            || CharacterInvadeType(10000, 21)
            || CharacterInvadeType(10000, 4));
    if (!EventFlag(15110801)) {
        WarpCharacterAndCopyFloor(5110801, TargetEntityType.Area, 5112804, -1, 5110801);
        DeactivateObject(5111810, Disabled);
        WaitFor(
            (!PlayerIsNotInOwnWorld()
                && EntityInRadiusOfEntity(10000, 5110801, 120, 1)
                && InArea(10000, 5112801)
                && !EventFlag(15115852))
                || HasDamageType(5110801, -1, DamageType.Unspecified));
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SendInvadingPhantomsHome(0);
        }
        if (!HasMultiplayerState(MultiplayerState.TryingtoCreateSession)) {
            PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.SkippableWithFadeOut, 5112802, 51, 1, 10000);
        } else if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.UnskippableWithFadeOut, 5112802, 51, 1, 10000);
        } else if (!InArea(10000, 5112815)) {
            PlayCutsceneToPlayer(51010005, CutscenePlayMode.Unskippable, 10000);
        } else {
            PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.UnskippableWithFadeOut, 5112816, 51, 1, 10000);
        }
        WaitFixedTimeFrames(1);
    } else {

L1:
        WaitFor(EventFlag(15115805) && InArea(10000, 5112800));
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SendInvadingPhantomsHome(0);
        }
    }

L2:
    DeactivateObject(5111810, Enabled);
    ChangeCharacterEnableState(5110801, Enabled);
    SetCharacterAnimationState(5110801, Enabled);
    SetCharacterAIState(5110801, Enabled);
    SetNetworkUpdateRate(5110801, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5110801, 3035, false, false, false, 0, 1);
    CreateReferredDamagePair(5110801, 5110800);
    SetCharacterHPBarDisplay(5110801, Disabled);
    DisplayBossHealthBar(Enabled, 5110800, 0, 906200);
    SetNetworkconnectedEventFlag(15110801, ON);
});

//----------------------------------------
// Slave Knight Gael - 2nd Phase Transition
//----------------------------------------
$Event(15115811, Restart, function() {
    EndIf(EventFlag(15110800));
    WaitFor((HPRatio(5110800) < 0.65 || HPRatio(5110801) == 0) && !PlayerIsNotInOwnWorld());
    if (!HasMultiplayerState(MultiplayerState.TryingtoCreateSession)) {
        PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.SkippableWithFadeOut, 10, 1, 5112805, 51, 1, 10000);
    } else {
L1:
        if (!PlayerIsNotInOwnWorld()) {
            GotoIf(L2, CharacterHPValue(10000) <= 0);
            PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 5112805, 51, 1, 10000);
            Goto(L9);
L2:
            PlayCutsceneToPlayerAndChangeCurrentMapCeremony(51010010, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 10000);
        } else {
L3:
            if (!InArea(10000, 5112810)) {
                if (CharacterHPValue(10000) > 0) {
                    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.Unskippable, 10, 1, 5112806, 51, 1, 10000);
                    Goto(L9);
                }
            }
L4:
            PlayCutsceneToPlayerAndChangeCurrentMapCeremony(51010010, CutscenePlayMode.Unskippable, 10, 1, 10000);
        }
    }
L9:
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(5110801, Disabled);
    SetCharacterAnimationState(5110801, Disabled);
    WarpCharacterAndCopyFloor(5110800, TargetEntityType.Area, 5112807, -1, 5110800);
    ChangeCharacterEnableState(5110800, Enabled);
    SetCharacterAnimationState(5110800, Enabled);
    SetCharacterAIState(5110800, Enabled);
    SetNetworkUpdateRate(5110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5110800, 3037, false, false, false, 0, 1);
    SetEventFlag(15115802, ON);
    DeactivateObject(5116820, Disabled);
    DeactivateObject(5116821, Enabled);
    SpawnMapSFX(5113830);
    SpawnMapSFX(5113831);
    SpawnMapSFX(5113832);
    SpawnMapSFX(5113833);
});

//----------------------------------------
// Slave Knight Gael - 2nd Phase VFX Handler
//----------------------------------------
$Event(15115812, Restart, function() {
    EndIf(EventFlag(15110800));
    WaitFor(EventFlag(15115802) && CharacterHasSpEffect(5110800, 16207));
    SetEventFlag(15115803, ON);
    DeleteMapSFX(5113830, true);
    DeleteMapSFX(5113831, true);
    DeleteMapSFX(5113832, true);
    DeleteMapSFX(5113833, true);
    SpawnMapSFX(5113820);
    SpawnMapSFX(5113821);
    SpawnMapSFX(5113822);
    SpawnMapSFX(5113823);
});

//----------------------------------------
// Handle AI State in Filianore's temple area
//----------------------------------------
$Event(15115847, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(15110800));
    SetSpEffect(10000, 16189);
    WaitFixedTimeSeconds(0.3);
    WaitFor(!InArea(10000, 5112830));
    ClearSpEffect(10000, 16189);
    WaitFixedTimeSeconds(0.3);
    WaitFor(InArea(10000, 5112830));
    RestartEvent();
});

//----------------------------------------
// Slave Knight Gael - Fogwall Handler
//----------------------------------------
$Event(15115848, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    WaitFor(
        ((EventFlag(X12_4) || X12_4 == 0) && PlayerIsNotInOwnWorld())
            || ((EventFlag(X12_4) || X12_4 == 0) && !EventFlag(X0_4))
            || ((HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
                || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
                && EventFlag(X0_4)));
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    WaitFor(
        !((EventFlag(X12_4) || X12_4 == 0) && PlayerIsNotInOwnWorld())
            && !((EventFlag(X12_4) || X12_4 == 0) && !EventFlag(X0_4))
            && !((HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
                || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
                && EventFlag(X0_4)));
    RestartEvent();
});

//----------------------------------------
// Slave Knight Gael - Setup
//----------------------------------------
$Event(15115849, Restart, function() {
    // Boss - Enter Boss Room 
    InitializeCommonEvent(20005800, 15110800, 5111800, 5112800, 15115805, 5111800, 5115800, 15110801, 0);

    // Slave Knight Gael - Fogwall Handler
    InitializeEvent(0, 15115895, 15110800, 5111800, 5112800, 15115805, 5111800, 15115806, 15110801, 0, 5112810);

    // Boss Sound
    if (!EventFlag(15110801)) {
        InitializeCommonEvent(20001838, 15110800, 15115805, 15115806, 15115810, 5114801, 5114802, 5114803, 15115802, 15115803);
    } else {
        InitializeCommonEvent(20005833, 15110800, 15115805, 15115806, 5112800, 5114801, 5114802, 5114803, 15115802, 15115803);
    }

    // Slave Knight Gael - Fogwall Handler
    InitializeEvent(0, 15115848, 15110800, 5111800, 4, 15110801);

    // Boss - Enter Fogwall
    InitializeCommonEvent(20005810, 15110800, 5111800, 5112800, 10000);
});

//----------------------------------------
// Shira - Handle Flags
//----------------------------------------
$Event(15115850, Restart, function() {
    EndIf(EventFlag(15110850));
    WaitFor(CharacterDead(5110850));
    SetEventFlag(15110850, ON);
    SetEventFlag(65100604, ON);
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(15115852, OFF);
});

//----------------------------------------
// Shira - Handle Spawn State
//----------------------------------------
$Event(15115860, Restart, function() {
    if (EventFlag(15110850)) {
        ChangeCharacterEnableState(5110850, Disabled);
        SetCharacterAnimationState(5110850, Disabled);
        ForceCharacterTreasure(5110850);
        SetCharacterBackreadState(5110850, true);
        EndEvent();
    }
L0:
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetEventFlag(15115851, OFF);
        SetEventFlag(15115852, OFF);
    }
    SetCharacterAIState(5110850, Disabled);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterBackreadState(5110850, true);
    SetCharacterAnimationState(5110850, Disabled);
    SetCharacterTalkRange(5110850, 100);
    SetEventFlag(75110150, OFF);
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterInvadeType(10000, 7)
            || CharacterInvadeType(10000, 21));
    if (!EventFlag(15115851)) {
        WaitFor(
            (((EventFlag(15110800) && EventFlag(15110801)) || !EventFlag(15110801))
                && EntityInRadiusOfEntity(10000, 5110850, 60, 1)
                && InArea(10000, 5112851)
                && !PlayerIsNotInOwnWorld())
                || HasDamageType(5102850, -1, DamageType.Unspecified));
    } else {
L1:
        WaitFor(EventFlag(15115855));
    }
L2:
    SetEventFlag(15115851, ON);
    SetEventFlag(15115852, ON);
    ChangeCharacterEnableState(5110850, Enabled);
    SetCharacterBackreadState(5110850, false);
    SetCharacterAnimationState(5110850, Enabled);
    SetNetworkUpdateRate(5110850, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(5110850);
    SetCharacterAIState(5110850, Enabled);
    ForceAnimationPlayback(5110850, 63010, false, false, false, 0, 1);
    SetEventFlag(15115855, ON);
});

//----------------------------------------
// Unused
//----------------------------------------
$Event(15115861, Restart, function() {
    EndIf(EventFlag(15110850));
    EndIf(EventFlag(15110801));
    WaitFor(EventFlag(15115852) && EventFlag(15110801));
    ForceAnimationPlayback(5110850, 91030, false, false, false, 0, 1);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterAnimationState(5110850, Disabled);
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(15110800) && InArea(10000, 5112850));
    ChangeCharacterEnableState(5110850, Enabled);
    SetCharacterAnimationState(5110850, Enabled);
    WarpCharacterAndCopyFloor(5110850, TargetEntityType.Area, 5112852, -1, 5110850);
    RequestCharacterAnimationReset(5110850, Interpolation.Interpolated);
    ForceAnimationPlayback(5110850, 63010, false, false, false, 0, 1);
});

//----------------------------------------
// Shira - Fogwall Handler
//----------------------------------------
$Event(15115888, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    EndEvent();
    flagOnline = (!EventFlag(X12_4) || EventFlag(X24_4)) && PlayerIsNotInOwnWorld();
    flagCmp = (EventFlag(X16_4) || X16_4 == 0) && !EventFlag(X12_4);
    flagCmp2 = (EventFlag(X24_4) || X24_4 == 0) && !EventFlag(X20_4);
    onlineFlag = (HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
        || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
        && EventFlag(X0_4);
    WaitFor(flagOnline || flagCmp);
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    flagOnline2 = (!EventFlag(X12_4) || EventFlag(X24_4)) && PlayerIsNotInOwnWorld();
    flagCmp3 = (EventFlag(X16_4) || X16_4 == 0) && !EventFlag(X12_4);
    flagCmp4 = (EventFlag(X24_4) || X24_4 == 0) && !EventFlag(X20_4);
    onlineFlag2 = (HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
        || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
        && EventFlag(X0_4);
    WaitFor(!flagOnline2 && !flagCmp3);
    RestartEvent();
});

//----------------------------------------
// Shira - Setup
//----------------------------------------
$Event(15115889, Restart, function() {
    // Shira - Fogwall Handler
    InitializeEvent(0, 15115888, 15110890, 5111850, 2, 15110850, 15115851, 15110800, 15110801);

    // Shira - Enter Fogwall
    InitializeCommonEvent(20005810, 15110890, 5111850, 5112850, 10000);
});

//----------------------------------------
// Flag Handler - Gael + Shria dead
//----------------------------------------
$Event(15115890, Restart, function() {
    EndIf(EventFlag(15110890));
    WaitFor(EventFlag(15110800) && EventFlag(15110850));
    SetEventFlag(15110890, ON);
});

//----------------------------------------
// Handle ? State
//----------------------------------------
$Event(15115891, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    ClearSpEffect(10000, 4700);
    WaitFor(PlayerInMap(51, 1));
    SetSpEffect(10000, 4700);
});

//----------------------------------------
// Slave Knight Gael - Fogwall Handler
//----------------------------------------
$Event(15115895, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetEventFlag(X12_4, OFF);
    }
    if (X24_4 != 0) {
        GotoIf(L0, EventFlag(X24_4));
        if (X28_4 != 0) {
            areaFlag |= InArea(10000, X28_4);
        }
        areaFlag |= EventFlag(X24_4);
        WaitFor(
            areaFlag && PlayerIsNotInOwnWorld() && CharacterType(10000, TargetType.WhitePhantom));
        GotoIf(L0, InArea(10000, X32_4));
    } else {
L0:
        WaitFor(
            !EventFlag(X0_4)
                && EventFlag(X12_4)
                && CharacterType(10000, TargetType.WhitePhantom)
                && ActionButtonInArea(X16_4, X4_4));
        RotateCharacter(10000, X8_4, 60060, true);
        time = ElapsedSeconds(3);
        WaitFor(CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, X8_4) || time));
        RestartIf(time.Passed);
    }
L1:
    SetEventFlag(X20_4, ON);
    RestartEvent();
});

//----------------------------------------
// Unused
//----------------------------------------
$Event(15115896, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(!PlayerIsNotInOwnWorld());
    WaitFor(
        PlayerIsNotInOwnWorld()
            && EventFlag(X0_4)
            && (HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
                || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
            && ActionButtonInArea(X12_4, X4_4));
    RotateCharacter(10000, X8_4, 60060, true);
    RestartEvent();
});

//----------------------------------------
// Unused
//----------------------------------------
$Event(15115700, Default, function() {
    if (!PlayerIsNotInOwnWorld()) {
        if (!AnyBatchEventFlags(1835, 1839)) {
            BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
            SetNetworkconnectedEventFlag(1835, ON);
        }
        if (EventFlag(1836) && EventFlag(70001074)) {
            BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
            SetNetworkconnectedEventFlag(1835, ON);
        }
        if (!AnyBatchEventFlags(1820, 1834)) {
            BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
            SetNetworkconnectedEventFlag(1820, ON);
        }
        if (EventFlag(1835)) {
            if (AnyBatchEventFlags(1820, 1822)) {
                BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
                SetNetworkconnectedEventFlag(1823, ON);
                BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
                SetNetworkconnectedEventFlag(1837, ON);
            }
        }
L9:
        SetEventFlag(70001074, OFF);
        if (!EventFlag(1838)) {
            SetEventFlag(75110150, OFF);
        }
    }
L10:
    NoOp();
});

//----------------------------------------
// Core
// -- Initialization commands go here.
//----------------------------------------
$Event(15117000, Default, function() {
    
    //# Bonfires
    InitializeEvent(0, 15117010, 0); 
    
    //# Treasure
    InitializeEvent(0, 15117011, 0); 
    
    //# Mimics
    InitializeEvent(0, 15117012, 0);
    
    //# Scripted Treasure
    InitializeEvent(0, 15117013, 0); 
    
    //# Scripted Enemies
    InitializeEvent(0, 15117014, 0);
    
    //# Interactables
    InitializeEvent(0, 15117015, 0);
    
    //# Friendly Characters
    InitializeEvent(0, 15117050, 0);
    
    //# Intruders
    InitializeEvent(0, 15117051, 0);
    
    //# Summons
    InitializeEvent(0, 15117052, 0); 
    
    //# Conjurations
    InitializeEvent(0, 15117053, 0);
    
    //# Bosses
    InitializeEvent(0, 15117060, 0);
    
    //# Gauntlet
    InitializeEvent(0, 15117070, 0);
    
    //# Ceremony
    InitializeEvent(0, 15117200, 0);
});

//----------------------------------------
// Bonfires
// -- Bonfire commands go here.
//----------------------------------------
$Event(15117010, Default, function() {

    // Bonfire: Filianore's Rest
    RegisterBonfire(15110001, 5111951, 5, 180, 0);

    // Bonfire: Slave Knight Gael
    if (!CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1)) { // Skip in Gauntlet mode
        InitializeCommonEvent(20005500, 15110800, 15110000, 5110950, 5111950);
    }
});

//----------------------------------------
// Treasure
// -- Basic treasure commands go here.
//----------------------------------------
$Event(15117011, Default, function() {
    
});


//----------------------------------------
// Mimics
// -- Mimic commands go here.
//----------------------------------------
$Event(15117012, Default, function() {
    
});


//----------------------------------------
// Scripted Treasure
// -- Complex treasure commands go here.
//----------------------------------------
$Event(15117013, Default, function() {
    
    // Crown of Filianore
    InitializeEvent(0, 15117101, 0);
});


//----------------------------------------
// Scripted Enemies
// -- Commands involving enemy appearance go here.
//----------------------------------------
$Event(15117014, Default, function() {
    
    // Fallen Abominations
    InitializeEvent(0, 15117100, 5110350);
    InitializeEvent(1, 15117100, 5110351);
    InitializeEvent(2, 15117100, 5110352);
    InitializeEvent(3, 15117100, 5110353);
    InitializeEvent(4, 15117100, 5110354);
    
    InitializeCommonEvent(20005351, 5110350, 5112000, 55112000, 1); // Titanite Catch Pole
    InitializeCommonEvent(20005351, 5110351, 5112000, 55112000, 1); // Titanite Catch Pole
    InitializeCommonEvent(20005351, 5110352, 5112000, 55112000, 1); // Titanite Catch Pole
    InitializeCommonEvent(20005351, 5110353, 5112000, 55112000, 1); // Titanite Catch Pole
    InitializeCommonEvent(20005351, 5110354, 5112000, 55112000, 1); // Titanite Catch Pole
    
    // Sounds
    ChangeCharacterEnableState(5110360, Disabled);
    SetCharacterAnimationState(5110360, Disabled);
    SetCharacterAIState(5110360, Disabled);
    
    // NG+
    InitializeCommonEvent(20008001, 5115775, 1);
    InitializeCommonEvent(20008001, 5115776, 2);
    InitializeCommonEvent(20008001, 5115777, 3);
});


//----------------------------------------
// Interactables
// -- Commands dealing with environmental hazards and interactables go here.
//----------------------------------------
$Event(15117015, Default, function() {
    
});

//----------------------------------------
// Friendly Characters
// -- Commands involving friendly characters go here. 
//----------------------------------------
$Event(15117050, Default, function() {
    
});

//----------------------------------------
// Intruders
// -- Commands involving hostile intruder characters go here. 
//----------------------------------------
$Event(15117051, Default, function() {
    

});

//----------------------------------------
// Summons
// -- Commands involving friendly summonable characters go here. 
//----------------------------------------
$Event(15117052, Default, function() {
    
});

//----------------------------------------
// Conjurations
// -- Commands involving conjurations go here. 
//----------------------------------------
$Event(15117053, Default, function() {
    
    // Skeleton
    InitializeCommonEvent(20080000, 5110750); // Setup
    InitializeCommonEvent(20080001, 5110750); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110750); // Tools
    InitializeCommonEvent(20080003, 5110750); // Effects
    InitializeCommonEvent(20080004, 5110750, 160760000, 160760215, 51, 1); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 5110751); // Setup
    InitializeCommonEvent(20080001, 5110751); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110751); // Tools
    InitializeCommonEvent(20080003, 5110751); // Effects
    InitializeCommonEvent(20080004, 5110751, 160760001, 160760215, 51, 1); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 5110752); // Setup
    InitializeCommonEvent(20080001, 5110752); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110752); // Tools
    InitializeCommonEvent(20080003, 5110752); // Effects
    InitializeCommonEvent(20080004, 5110752, 160760002, 160760215, 51, 1); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 5110753); // Setup
    InitializeCommonEvent(20080001, 5110753); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110753); // Tools
    InitializeCommonEvent(20080003, 5110753); // Effects
    InitializeCommonEvent(20080004, 5110753, 160760003, 160760215, 51, 1); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 5110754); // Setup
    InitializeCommonEvent(20080001, 5110754); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110754); // Tools
    InitializeCommonEvent(20080003, 5110754); // Effects
    InitializeCommonEvent(20080004, 5110754, 160760004, 160760215, 51, 1); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 5110755); // Setup
    InitializeCommonEvent(20080001, 5110755); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110755); // Tools
    InitializeCommonEvent(20080003, 5110755); // Effects
    InitializeCommonEvent(20080004, 5110755, 160760005, 160760215, 51, 1); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 5110756); // Setup
    InitializeCommonEvent(20080001, 5110756); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110756); // Tools
    InitializeCommonEvent(20080003, 5110756); // Effects
    InitializeCommonEvent(20080004, 5110756, 160760006, 160760215, 51, 1); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 5110757); // Setup
    InitializeCommonEvent(20080001, 5110757); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110757); // Tools
    InitializeCommonEvent(20080003, 5110757); // Effects
    InitializeCommonEvent(20080004, 5110757, 160760007, 160760215, 51, 1); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 5110758); // Setup
    InitializeCommonEvent(20080001, 5110758); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110758); // Tools
    InitializeCommonEvent(20080003, 5110758); // Effects
    InitializeCommonEvent(20080004, 5110758, 160760008, 160760215, 51, 1); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 5110750);
    InitializeCommonEvent(20080011, 5110750);
    InitializeCommonEvent(20080012, 5110750);

    // Hollow Unique
    InitializeCommonEvent(20080020, 5110751);
    InitializeCommonEvent(20080021, 5110751);
    InitializeCommonEvent(20080022, 5110751);

    // Hound Unique
    InitializeCommonEvent(20080030, 5110752);
    InitializeCommonEvent(20080031, 5110752);
    InitializeCommonEvent(20080032, 5110752);

    // Warrior Unique
    InitializeCommonEvent(20080040, 5110753);
    InitializeCommonEvent(20080041, 5110753);
    InitializeCommonEvent(20080042, 5110753);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 5110754);
    InitializeCommonEvent(20080051, 5110754);
    InitializeCommonEvent(20080052, 5110754);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 5110755);
    InitializeCommonEvent(20080061, 5110755);
    InitializeCommonEvent(20080062, 5110755);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 5110756);
    InitializeCommonEvent(20080071, 5110756);
    InitializeCommonEvent(20080072, 5110756);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 5110757);
    InitializeCommonEvent(20080081, 5110757);
    InitializeCommonEvent(20080082, 5110757);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 5110758);
    InitializeCommonEvent(20080091, 5110758);
    InitializeCommonEvent(20080092, 5110758);
});

//----------------------------------------
// Bosses
// -- Commands that deal with new Bosses go here.
//----------------------------------------
$Event(15117060, Default, function() {

});

//----------------------------------------
// Gauntlet
// -- Commands that deal with the Gauntlet journey type go here.
//----------------------------------------
$Event(15117070, Default, function() {
    
});

//----------------------------------------
// Misc
// -- Niche events go here.
//----------------------------------------
// Setup Fallen Abomination
$Event(15117100, Restart, function(X0_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);

    // End if Gael hasn't been killed
    EndIf(!EventFlag(15110800));

    // Spawn the Abomination once Gael has been defeated
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
});

// Crown of Filianore - Puzzle
$Event(15117101, Restart, function() {
    EndIf(EventFlag(55110800));

    WaitFor(CharacterHasSpEffect(10000, 12518) && InArea(10000, 5112831)); // Prayer gesture

    AwardItemLot(5110800);
});

// Ceremony
$Event(15117200, Restart, function() {
    
});
