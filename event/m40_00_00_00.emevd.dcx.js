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
    // Bonfires - Skip if in Flameless
    if (!EventFlag(25000141)) {
        RegisterBonfire(14000001, 4001951, 5, 180, 0);
        //RegisterBonfire(14000003, 4001953, 5, 180, 0);
        InitializeCommonEvent(20005500, 14000830, 14000004, 4000954, 4001954); // Champion Gundyr
    } else {
        DeactivateObject(4001951, Disabled);
        //DeactivateObject(4001953, Disabled);
        DeactivateObject(4001954, Disabled);
    }

    //----------------------------------------
    // Champion Gundyr
    //----------------------------------------
    InitializeEvent(0, 14005830, 0); // Champion Gundyr Kill
    InitializeEvent(0, 14005840, 0); // Champion Gundyr - Setup Boss
    InitializeEvent(0, 14005841, 0); // Champion Gundur - Phase Change
    InitializeEvent(0, 14000859, 0); // Champion Gundyr - Fogwalls

    InitializeCommonEvent(20005840, 4001800); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005841, 4001800); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005840, 4001810); // Fogwall - Firelink Side
    InitializeCommonEvent(20005841, 4001810); // Fogwall - Firelink Side

    //----------------------------------------
    // The Marauder
    //----------------------------------------
    InitializeEvent(0, 14005890, 0); // Setup
    InitializeEvent(0, 14005891, 0); // Kill
    InitializeEvent(0, 14005892, 0); // Fogwalls
    InitializeEvent(0, 14005893, 0); // Invalidation

    //----------------------------------------
    // Treasure
    //----------------------------------------
    // One-time Loot
    InitializeCommonEvent(20005351, 4000860, 4002000, 54002000, 1); // Black Knight Greatsword

    // FFX Treasure - Andre - Untended Graves
    InitializeCommonEvent(20005525, 54000900, 4000900, 4001728, 62);

    // FFX Treasure - Untended Graves Bonfire
    InitializeCommonEvent(20005525, 54000910, 4000910, 4001222, 62);

    // Sword Master - Show Treasure if Killed but Treasure missed
    InitializeCommonEvent(20005342, 9500, 4000500);

    // Chests
    InitializeCommonEvent(20005520, 14000600, 4001600, 4004600);
    InitializeCommonEvent(20005520, 14000601, 4001601, 4004601);
    InitializeCommonEvent(20005520, 14000602, 4001602, 4004602);
    InitializeCommonEvent(20005520, 14000603, 4001603, 4004603);
    InitializeCommonEvent(20005520, 14000604, 4001604, 4004604);
    InitializeCommonEvent(20005520, 14000605, 4001605, 4004605);
    InitializeCommonEvent(20005520, 14000606, 4001606, 4004606);
    InitializeCommonEvent(20005520, 14000607, 4001607, 4004607);
    InitializeCommonEvent(20005520, 14000608, 4001608, 4004608);
    InitializeCommonEvent(20005520, 14000610, 4001610, 4004610);
    InitializeCommonEvent(20005520, 14000611, 4001611, 4004611);
    InitializeCommonEvent(20005520, 14000612, 4001612, 4004612);
    InitializeCommonEvent(20005520, 14000613, 4001613, 4004613);
    InitializeCommonEvent(20005520, 14000614, 4001614, 4004614);
    InitializeCommonEvent(20005520, 14000615, 4001615, 4004615);
    InitializeCommonEvent(20005520, 14000616, 4001616, 4004616);

    //----------------------------------------
    // Friendly NPCs
    //----------------------------------------
    // Domhnall of Zena
    InitializeCommonEvent(20081200, 14000662, 4000662, 90850); // Domhnall of Zena - Idle
    InitializeCommonEvent(20081210, 14000662, 4000662); // Domhnall of Zena - Hostility

    //----------------------------------------
    // Enemies
    //----------------------------------------
    // Crystal Lizard
    InitializeCommonEvent(20008150, 14000390, 4000390);

    // Daughter of Crystal Kriemhild
    InitializeCommonEvent(20090010, 4000197, 4002198, 30310, 63010, 58120, 99005720, 99005721, 14000197); // Setup
    InitializeCommonEvent(20090020, 4000197, 80300); // Kill Taunt

    // Blacksmith's Nightmare
    InitializeCommonEvent(20090010, 4000890, 4002890, 30310, 63010, 14700, 99005500, 99005501, 14000890); // Setup
    InitializeCommonEvent(20090020, 4000890, 84200); // Kill Taunt

    // Ashen Keeper Sofija
    InitializeCommonEvent(20090010, 4000892, 4002892, 30310, 63010, 15400, 99005570, 99005571, 14000892); // Setup
    InitializeCommonEvent(20090020, 4000892, 84200); // Kill Taunt

    // Pot King Greg
    InitializeCommonEvent(20090010, 4000893, 4002893, 30310, 63010, 15800, 99005670, 99005671, 14000893); // Setup
    InitializeCommonEvent(20090020, 4000893, 84200); // Kill Taunt

    // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000202, 1091043328);
    InitializeCommonEvent(20005210, 4000204, 703, 1703, 1091043328); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000205, 1092616192, 4002205); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000207, 1065353216, 4002207); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000211, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000212, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000213, 705, 1705, 4002213); // Enemy - Wake-up
    InitializeCommonEvent(20005150, 4000215); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000216, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000217, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000218, 706, 1706, 4002218); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000219, 706, 1706, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000239, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000240, 1097859072); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000241, 706, 1706); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000242, 705, 1705); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000243, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000244, 4002244); // Enemy - Wake-up
    InitializeCommonEvent(20005292, 4000245, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000246, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000247, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000251, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000252, 705, 1705, 1073741824); // Enemy - Wake-up 
    InitializeCommonEvent(20005210, 4000253, 703, 1703, 1095761920); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000255, 703, 1703, 1084227584, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005415, 14000290, 4000250, 4000290, 703, 1703, 4002290, 14004290, 14005290); // Pus of Man Setup
    InitializeCommonEvent(20005416, 14000290, 4000250, 4000290); // Pus of Man
    InitializeCommonEvent(20005110, 4000320, 4002320); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000341, 702, 1702, 12140); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000342, 702, 1702, 12140); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000343, 701, 1701, 12140); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000346, 1087373312); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000349, 700, 1700, 12140); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000350, 700, 1700, 12140); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000351, 700, 1700, 12140); // Enemy - Wake-up

    //----------------------------------------
    // Phantoms
    //----------------------------------------
    InitializeEvent(0, 14007000, 0);

    //----------------------------------------
    // Spell Summons
    //----------------------------------------
    InitializeEvent(0, 14007100, 0);

    //----------------------------------------
    // Interactions
    //----------------------------------------
    // Illusory Walls
    InitializeCommonEvent(20005650, 14000430, 4001430);
    InitializeCommonEvent(20005650, 14000431, 4001431);
    InitializeCommonEvent(20005650, 14000432, 4001432);
    InitializeCommonEvent(20005650, 14000433, 4001433);
    InitializeCommonEvent(20005650, 14000434, 4001434);
    InitializeCommonEvent(20005650, 14000435, 4001435);

    // Secret Warp
    InitializeEvent(0, 14005800, 0);
    InitializeEvent(0, 14005801, 0);

    // Secret Path
    InitializeEvent(0, 14005810, 0);
    InitializeEvent(0, 14005811, 0);

    // Pot King Greg's Door
    InitializeEvent(0, 14005825, 0);

    // Firekeeper Jail
    InitializeEvent(0, 14000056, 0);

    // Ladders
    InitializeEvent(0, 14005420, 0); // Setup Ladders
    InitializeCommonEvent(20005640, 14000426, 4001426, 14005426, 14005427); // Setup Kick Ladder

    // Lifts
    InitializeCommonEvent(20005620, 14000400, 14001400, 4001400, 4001401, 4001402, 14001401); // Bell Tower Lift
    InitializeEvent(0, 14005401, 0); // Setup Bell Tower Lift

    // Doors
    InitializeCommonEvent(20005610, 14000410, 4002410, 4002411);
    InitializeCommonEvent(20005613, 14000425, 4003250, 4001250, 3400340, 10010873);

    //----------------------------------------
    // NG+
    //----------------------------------------
    InitializeCommonEvent(20008001, 4005775, 1);
    InitializeCommonEvent(20008001, 4005776, 2);
    InitializeCommonEvent(20008001, 4005777, 3);

    //----------------------------------------
    // Misc
    //----------------------------------------
    // Throne prompts
    InitializeEvent(1, 14005484, 10012051, 4001141);
    InitializeEvent(2, 14005484, 10012052, 4001142);
    InitializeEvent(3, 14005484, 10012053, 4001143);
    InitializeEvent(4, 14005484, 10012054, 4001144);
    InitializeEvent(5, 14005484, 10012055, 4001145);

    // Crow Trades
    InitializeEvent(0, 14005821, 0);

    // Giant Tree Seed Drop
    InitializeEvent(0, 14005460, 0);

    // Firelink Shrine Music
    InitializeEvent(0, 14005450, 0);

    // Disable Map Sound States
    InitializeEvent(0, 1405451, 0);

    // Area Welcome Message - Untended Graves
    InitializeEvent(0, 14005470, 0);

    // Area Welcome Message - Disable
    InitializeEvent(0, 14005471, 0);

    // Area Welcome Message - Enable
    InitializeEvent(0, 14005472, 0);

    // Area Welcome Message - Enable
    InitializeEvent(0, 14005473, 0);

    // Area Welcome Message - Enable
    InitializeEvent(0, 14005474, 0);

    // Area Welcome Message - The Abyss
    InitializeEvent(0, 14005475, 0);

    // Toggle Message Visbility
    InitializeEvent(0, 14005445, 0);

    // Setup Light Sources
    InitializeEvent(0, 14005441, 0);

    // Debug Character (for AI testing)
    InitializeEvent(0, 14006000, 0);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
$Event(50, Default, function() {
    // Toggle Firelink Floor Hit 
    InitializeEvent(0, 14005103, 0);
    // Set Event Flag
    InitializeEvent(0, 14005618, 0);

    // Set Event Flag 
    InitializeEvent(0, 14000401, 0);
    // Player Start Sequence
    InitializeEvent(0, 14000100, 0);

    SetMapSoundState(4004800, Disabled);
    SetMapSoundState(4004801, Disabled);
    SetMapSoundState(4004830, Disabled);
    SetMapSoundState(4004831, Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);
    SetMapSoundState(4004820, Disabled);
    SetMapSoundState(4004825, Disabled);
});

// Horny Jail
$Event(14000056, Default, function() {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 25008903);
    WarpPlayer(39, 0, 3904001); // Irithyll Dungeon
});

// Player Start Sequence
$Event(14000100, Default, function() {
    EndIf(ThisEventSlot());
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(!PlayerInMap(40, 0));
    EndIf(!MapCeremony(40, 0, 0));
    
    // Warp to new shrine
    WarpPlayer(51, 1, 5110973);
    SetPlayerRespawnPoint(5112953);
    SetNetworkInteractionState(Enabled);
    SaveRequest(0);
    SetEventFlag(14000100, ON);
});

// Toggle Firelink Floor Hit
$Event(14005103, Default, function() {
    WaitFor(!PlayerIsNotInOwnWorld() && !EventFlag(131));

    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Toggle Firelink Floor Hit (Untended Graves)
$Event(14005104, Default, function() {
    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Unknown
$Event(14000401, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlag(14000400, ON);
    EndEvent();
});

// Setup Bell Tower Lift
$Event(14005401, Restart, function() {
    InitializeCommonEvent(20005621, 14000400, 14001400, 4001400, 4001401, 4003401, 4001402, 4003402, 4002401, 4002402, 14001401, 14004400, 0);
});

// Setup Ladders
$Event(14005420, Restart, function() {
    RegisterLadder(14000420, 14000421, 4001420);
});

// Setup Light Sources
$Event(14005441, Restart, function() {
    DeleteObjectfollowingSFX(4001500, false);
    DeleteObjectfollowingSFX(4001501, false);
    DeleteObjectfollowingSFX(4001502, false);
    DeleteObjectfollowingSFX(4001503, false);
    DeleteObjectfollowingSFX(4001510, false);
    DeleteObjectfollowingSFX(4001511, false);
    DeleteObjectfollowingSFX(4001512, false);
    DeleteObjectfollowingSFX(4001513, false);
    DeleteObjectfollowingSFX(4001514, false);
    DeleteObjectfollowingSFX(4001515, false);
    DeleteObjectfollowingSFX(4001516, false);
    DeleteObjectfollowingSFX(4001517, false);
    DeleteObjectfollowingSFX(4001518, false);
    DeleteObjectfollowingSFX(4001519, false);
    DeleteObjectfollowingSFX(4001520, false);
    DeleteObjectfollowingSFX(4001521, false);
    DeleteObjectfollowingSFX(4001522, false);
    DeleteObjectfollowingSFX(4001523, false);
    DeleteObjectfollowingSFX(4001524, false);
    DeleteObjectfollowingSFX(4001525, false);
    DeleteObjectfollowingSFX(4001526, false);
    DeleteObjectfollowingSFX(4001527, false);
    DeleteObjectfollowingSFX(4001528, false);
    DeleteObjectfollowingSFX(4001529, false);
    DeleteObjectfollowingSFX(4001530, false);
    DeleteObjectfollowingSFX(4001531, false);
    DeleteObjectfollowingSFX(4001532, false);
    DeleteObjectfollowingSFX(4001533, false);
    DeleteObjectfollowingSFX(4001534, false);
    DeleteObjectfollowingSFX(4001535, false);
    DeleteObjectfollowingSFX(4001536, false);
    DeleteObjectfollowingSFX(4001537, false);
    DeleteObjectfollowingSFX(4001538, false);
    DeleteObjectfollowingSFX(4001539, false);
    DeleteObjectfollowingSFX(4001540, false);
    DeleteObjectfollowingSFX(4001541, false);
    DeleteObjectfollowingSFX(4001542, false);
    DeleteObjectfollowingSFX(4001543, false);
    DeleteObjectfollowingSFX(4001544, false);
    DeleteObjectfollowingSFX(4001545, false);
    DeleteObjectfollowingSFX(4001546, false);
    DeleteObjectfollowingSFX(4001547, false);
    DeleteObjectfollowingSFX(4001548, false);
    DeleteObjectfollowingSFX(4001549, false);
    DeleteObjectfollowingSFX(4001550, false);
    DeleteObjectfollowingSFX(4001551, false);
    DeleteObjectfollowingSFX(4001552, false);
    DeleteObjectfollowingSFX(4001553, false);
    DeleteObjectfollowingSFX(4001554, false);
    DeleteObjectfollowingSFX(4001555, false);
    DeleteObjectfollowingSFX(4001556, false);
    DeleteObjectfollowingSFX(4001557, false);
    DeleteObjectfollowingSFX(4001558, false);
    DeleteObjectfollowingSFX(4001559, false);
    DeleteObjectfollowingSFX(4001560, false);
    DeleteObjectfollowingSFX(4001561, false);
    DeleteObjectfollowingSFX(4001562, false);
    DeleteObjectfollowingSFX(4001563, false);
    DeleteObjectfollowingSFX(4001564, false);
    DeleteObjectfollowingSFX(4001565, false);
    DeleteObjectfollowingSFX(4001566, false);
    DeleteObjectfollowingSFX(4001567, false);
    DeleteObjectfollowingSFX(4001568, false);
    DeleteObjectfollowingSFX(4001569, false);
    DeleteObjectfollowingSFX(4001570, false);
    DeleteObjectfollowingSFX(4001571, false);
    DeleteObjectfollowingSFX(4001572, false);
    CreateObjectfollowingSFX(4001500, 200, 800022);
    CreateObjectfollowingSFX(4001501, 200, 800022);
    CreateObjectfollowingSFX(4001502, 200, 800022);
    CreateObjectfollowingSFX(4001503, 200, 800022);
    CreateObjectfollowingSFX(4001510, 200, 839010);
    CreateObjectfollowingSFX(4001511, 200, 839010);
    CreateObjectfollowingSFX(4001512, 200, 839010);
    CreateObjectfollowingSFX(4001513, 200, 839010);
    CreateObjectfollowingSFX(4001514, 200, 839010);
    CreateObjectfollowingSFX(4001515, 200, 839010);
    CreateObjectfollowingSFX(4001516, 200, 839010);
    CreateObjectfollowingSFX(4001517, 200, 839010);
    CreateObjectfollowingSFX(4001518, 200, 839010);
    CreateObjectfollowingSFX(4001519, 200, 839010);
    CreateObjectfollowingSFX(4001520, 200, 839010);
    CreateObjectfollowingSFX(4001521, 200, 839010);
    CreateObjectfollowingSFX(4001522, 200, 839010);
    CreateObjectfollowingSFX(4001523, 200, 839010);
    CreateObjectfollowingSFX(4001524, 200, 839010);
    CreateObjectfollowingSFX(4001525, 200, 839010);
    CreateObjectfollowingSFX(4001526, 200, 839010);
    CreateObjectfollowingSFX(4001527, 200, 839010);
    CreateObjectfollowingSFX(4001528, 200, 839010);
    CreateObjectfollowingSFX(4001529, 200, 839010);
    CreateObjectfollowingSFX(4001530, 200, 839010);
    CreateObjectfollowingSFX(4001531, 200, 839010);
    CreateObjectfollowingSFX(4001532, 200, 839010);
    CreateObjectfollowingSFX(4001533, 200, 839010);
    CreateObjectfollowingSFX(4001534, 200, 839010);
    CreateObjectfollowingSFX(4001535, 200, 839010);
    CreateObjectfollowingSFX(4001536, 200, 839010);
    CreateObjectfollowingSFX(4001537, 200, 839010);
    CreateObjectfollowingSFX(4001538, 200, 839010);
    CreateObjectfollowingSFX(4001539, 200, 839010);
    CreateObjectfollowingSFX(4001540, 200, 839010);
    CreateObjectfollowingSFX(4001541, 200, 839010);
    CreateObjectfollowingSFX(4001542, 200, 839010);
    CreateObjectfollowingSFX(4001543, 200, 839010);
    CreateObjectfollowingSFX(4001544, 200, 839010);
    CreateObjectfollowingSFX(4001545, 200, 839010);
    CreateObjectfollowingSFX(4001546, 200, 839010);
    CreateObjectfollowingSFX(4001547, 200, 839010);
    CreateObjectfollowingSFX(4001548, 200, 839010);
    CreateObjectfollowingSFX(4001549, 200, 839010);
    CreateObjectfollowingSFX(4001550, 200, 839010);
    CreateObjectfollowingSFX(4001551, 200, 839010);
    CreateObjectfollowingSFX(4001552, 200, 839010);
    CreateObjectfollowingSFX(4001553, 200, 839010);
    CreateObjectfollowingSFX(4001554, 200, 839010);
    CreateObjectfollowingSFX(4001555, 200, 839010);
    CreateObjectfollowingSFX(4001556, 200, 839010);
    CreateObjectfollowingSFX(4001557, 200, 839010);
    CreateObjectfollowingSFX(4001558, 200, 839010);
    CreateObjectfollowingSFX(4001559, 200, 839010);
    CreateObjectfollowingSFX(4001560, 200, 839010);
    CreateObjectfollowingSFX(4001561, 200, 839010);
    CreateObjectfollowingSFX(4001562, 200, 839010);
    CreateObjectfollowingSFX(4001563, 200, 839010);
    CreateObjectfollowingSFX(4001564, 200, 839010);
    CreateObjectfollowingSFX(4001565, 200, 839010);
    CreateObjectfollowingSFX(4001566, 200, 839010);
    CreateObjectfollowingSFX(4001567, 200, 839010);
    CreateObjectfollowingSFX(4001568, 200, 839010);
    CreateObjectfollowingSFX(4001569, 200, 839010);
    CreateObjectfollowingSFX(4001570, 200, 839010);
    CreateObjectfollowingSFX(4001571, 200, 839010);
    CreateObjectfollowingSFX(4001572, 200, 839010);
});

// Toggle Message Visbility
$Event(14005445, Restart, function() {
    EndIf(!EventFlag(131));

    SetVisibilityOfMessage(4004222, Disabled);
});

// Firelink Shrine Music
$Event(14005450, Default, function() {
    SetNetworkSyncState(Disabled);

    EndIf(PlayerIsNotInOwnWorld());

    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);

    WaitFixedTimeSeconds(0.5);

    WaitFor(
        (PlayerStandingOnHit(4004100)
            || PlayerStandingOnHit(4004101)
            || PlayerStandingOnHit(4004102)
            || PlayerStandingOnHit(4004103)
            || PlayerStandingOnHit(4004104)
            || PlayerStandingOnHit(4004109))
            && !EventFlag(74000122));

    if (EventFlag(50006020)) {
        EnableMapSoundWithFade(4004450, Enabled, 5);
    } else {
        EnableMapSoundWithFade(4004460, Enabled, 5);
    }

    WaitFixedTimeSeconds(0.5);

    hit = PlayerStandingOnHit(4004100)
        || PlayerStandingOnHit(4004101)
        || PlayerStandingOnHit(4004102)
        || PlayerStandingOnHit(4004103)
        || PlayerStandingOnHit(4004104)
        || PlayerStandingOnHit(4004109);
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 50006020);
    WaitFor(!hit || flag);
    RestartIf(!flag.Passed);

    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);

    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Disable Map Sound States
$Event(1405451, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
});

// Giant Tree Seed Drop
$Event(14005460, Default, function() {
    if (!ThisEventSlot()) {
        if (EventFlag(9400)) {

            WaitFor(ActionButtonInArea(9350, 4001460));
            RotateCharacter(10000, 4001460, 60070, true);
            AwardItemLot(4000);
            SetEventFlag(9400, OFF);

            WaitFixedTimeSeconds(3);

            RestartEvent();
        }
    }

    // 
L0:
    WaitFor(ActionButtonInArea(9350, 4001460));
    DisplayGenericDialog(10012010, PromptType.OKCANCEL, NumberofOptions.OneButton, 4001460, 3);

    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Way of White Circlet Apperance
$Event(14005461, Restart, function() {
    SetNetworkSyncState(Disabled);

    EndIf(PlayerIsNotInOwnWorld());

    DeleteObjectfollowingSFX(4001461, true);

    EndIf(PlayerHasItem(ItemType.Goods, 119) || MultiplayerNetworkPenalized());

    CreateObjectfollowingSFX(4001461, 90, 62);

    WaitFor(ActionButtonInArea(4000, 4001461));
    RotateCharacter(10000, 4001461, 60070, true);
    AwardItemLot(4020);
    DeleteObjectfollowingSFX(4001461, true);
});

// Area Welcome Message - Untended Graves
$Event(14005470, Default, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(!(PlayerStandingOnHit(4004120) || PlayerStandingOnHit(4004140)) && PlayerInMap(40, 0));

    if (!PlayerIsNotInOwnWorld()) {

        EndIf(!EventFlag(743));
    }

    // 
L0:
    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(4010);
    SetEventFlag(743, OFF);
});

// Area Welcome Message - Disable
$Event(14005471, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(
        !EventFlag(74000013)
            && PlayerInMap(40, 0)
            && !PlayerStandingOnHit(4004120)
            && !CharacterDead(10000));

    SetAreaWelcomeMessageState(Disabled);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Area Welcome Message - Enable
$Event(14005472, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerInMap(40, 0) && CharacterDead(10000));

    WaitFixedTimeFrames(1);
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
$Event(14005473, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerInMap(40, 0) && CharacterHasSpEffect(10000, 3220));

    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
$Event(14005474, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerInMap(40, 0) && EventFlag(74000013));

    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - The Abyss
$Event(14005475, Default, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerStandingOnHit(4004140));

    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(3017);
});


// Throne Back messages
$Event(14005484, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);

    WaitFor(ActionButtonInArea(9356, X4_4));
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Crows - 
$Event(14000490, Default, function() {
    InitializeCrowTradeArea(4002796);
    InitializeCrowTradeArea(4002797);

    SetEventFlag(2040, OFF);
    SetEventFlag(2041, OFF);
    SetEventFlag(2042, OFF);
    SetEventFlag(74000990, OFF);
});

// Crows -  
$Event(14000491, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(74000995, OFF);

    WaitFor(InArea(10000, 4002795));
    SetEventFlag(74000995, ON);
    WaitFixedTimeSeconds(1);

    WaitFor(!InArea(10000, 4002795));
    SetEventFlag(74000995, OFF);
    WaitFixedTimeSeconds(1);

    RestartEvent();
});

// Champion Gundyr Kill
$Event(14005830, Default, function() {
    EndIf(EventFlag(14000830));

    WaitFor(HPRatio(4000830) <= 0);
    WaitFixedTimeSeconds(1);

    PlaySE(4000830, SoundType.s_SFX, 777777777);

    WaitFor(CharacterDead(4000830));

    HandleBossDefeat(4000830);
    SetEventFlag(14000830, ON);
    SetEventFlag(9320, ON);
    SetEventFlag(6320, ON);
    ChangeCamera(-1, -1);

    InitializeCommonEvent(20020000, 25001017, 25002017, 800300020, 800300030, 120160, 121160); // Boss Kill
});

// Champion Gundyr - Setup Boss
$Event(14005840, Restart, function() {
    SetEventFlag(14000832, OFF); // Phantom Progress Flag

    if (EventFlag(14000830)) {

        ForceCharacterDeath(4000830, false);
        SetCharacterAnimationState(4000830, Disabled);
        ChangeCharacterEnableState(4000830, Disabled);
        EndEvent();
    }

    //
L0:
    SetCharacterInvincibility(4000830, Enabled);
    SetCharacterAIState(4000830, Disabled);
    SetLockOnPoint(4000830, 221, Disabled);
    ChangeCharacterHitmask(4000830, 0, ON);
    ForceAnimationPlayback(4000830, 30002, true, false, false, 0, 1);

    if (!EventFlag(14000831)) {

        areaFlag &= InArea(10000, 4002831);
        WaitFor(areaFlag);
    } else {

        //
L1:
        areaFlag &= EventFlag(14005835) && InArea(10000, 4002800);
        WaitFor(areaFlag);
    }

    //
L2:
    ForceAnimationPlayback(4000830, 20002, false, false, false, 0, 1);
    SetCharacterAIState(4000830, Enabled);
    SetCharacterImmortality(4000830, Disabled);
    SetCharacterInvincibility(4000830, Disabled);
    SetNetworkUpdateRate(4000830, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4000830, 0, 905115);
    SetEventFlag(14000831, ON);
    SetEventFlag(14000832, ON); // Phantom Progress Flag
    InitializeCommonEvent(20020116, 0); // Boss Start
});

// Champion Gundur - Phase Change
$Event(14005841, Default, function() {
    EndIf(EventFlag(14000830));

    WaitFor(HPRatio(4000830) <= 0.5);
    SetEventFlag(14005832, ON);
});

// Champion Gundyr door
$Event(14000842, Restart, function() {
    WaitFixedTimeFrames(1);

    SetObjactState(4001260, -1, Disabled);
    SetObjactState(4001261, -1, Disabled);

    EndIf(EventFlag(64000261));

    WaitFor(EventFlag(14000830));
    SetObjactState(4001261, 400005, Enabled);
});

// Champion Gundyr - Fog Wall Handler
$Event(14000859, Restart, function() {
    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, 14000830, 4001800, 4002800, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001800, 4002800, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001800, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001800, 4002800, 10000);

    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, 14000830, 4001810, 4002810, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001810, 4002810, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001810, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001810, 4002810, 10000);

    if (EventFlag(14000831)) {
        InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002800, 4004830, 4004831, 14005832);
        InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002810, 4004830, 4004831, 14005832);
        EndEvent();
    }

    InitializeCommonEvent(20001836, 14000830, 14005835, 14005836, 14000831, 4004830, 4004831, 14005832);
});

// Unknown
$Event(14005618, Default, function() {
    EndIf(!EventFlag(14005617));
    SetEventFlag(14000618, ON);
});

// Unused
$Event(14005625, Restart, function(X0_4) {
    WaitFor(InArea(10000, X0_4));
    SetSpEffect(10000, 4150);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Andre - Spawn State
$Event(14005660, Default, function(X0_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1175, 1179)) {
            BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
            SetNetworkconnectedEventFlag(1175, ON); // Hostility
        }


        if (EventFlag(1176) && EventFlag(70000060)) {
            BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
            SetNetworkconnectedEventFlag(1175, ON); // Hostility
            SetEventFlag(74000200, ON);
        }


        if (EventFlag(1178) && !CharacterDead(X0_4)) {
            BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
            SetNetworkconnectedEventFlag(1176, ON); // Hostility
        }

        if (!AnyBatchEventFlags(1160, 1174)) {
            BatchSetNetworkconnectedEventFlags(1160, 1174, OFF);
            SetNetworkconnectedEventFlag(1160, ON); // Died
        }

        SetEventFlag(70000060, OFF);
    }

    // Disabled
L9:
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    if (!EventFlag(1160)) { // Died
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }

    // Passthrough
L0:
    if (!EventFlag(1178)) { // Was killed

        // Enabled
L1:
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004710, -1);
        ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
        EndEvent();
    }

    // Disabled + Force Treasure
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Andre - Smithing State Monitor
$Event(14005661, Default, function(X0_4) {
    // Disable if not in region
    WaitFor(
        !(!InArea(10000, 4002709)
            && (PlayerStandingOnHit(4004100)
                || PlayerStandingOnHit(4004101)
                || PlayerStandingOnHit(4004102)
                || PlayerStandingOnHit(4004103)
                || PlayerStandingOnHit(4004104)
                || PlayerStandingOnHit(4004109)))
            && HPRatio(X0_4) != 0
            && EventFlag(1160));

    ChangeCharacterEnableState(X0_4, Disabled);

    WaitFixedTimeSeconds(1);
    ClearCompiledConditionGroupState(0);

    // Enable if in region
    WaitFor(
        (!InArea(10000, 4002709)
            && (PlayerStandingOnHit(4004100)
                || PlayerStandingOnHit(4004101)
                || PlayerStandingOnHit(4004102)
                || PlayerStandingOnHit(4004103)
                || PlayerStandingOnHit(4004104)
                || PlayerStandingOnHit(4004109)))
            && HPRatio(X0_4) != 0
            && EventFlag(1160));

    ChangeCharacterEnableState(4000710, Enabled);
    ForceAnimationPlayback(4000710, 700, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);

    RestartEvent();
});

// ----------------------------------------
// Secret Warp - Fogwall
// ----------------------------------------
$Event(14005800, Restart, function() {
    DeleteObjectfollowingSFX(4001840, true);
    CreateObjectfollowingSFX(4001840, 101, 3);
});

// ----------------------------------------
// Secret Warp - Gesture
// ----------------------------------------
$Event(14005801, Restart, function() {
    WaitFor(InArea(10000, 4002927) && CharacterHasSpEffect(10000, 12511));
    WarpPlayer(40, 0, 4000985);
    EndEvent();
});

// ----------------------------------------
// Secret Path - Cemetery of Ash
// ----------------------------------------
$Event(14005810, Restart, function() {
    const obj_Path1 = 4001841;
    const obj_Path2 = 4001842;
    const obj_Path3 = 4001843;

    const ffxID = 302020;

    DeleteObjectfollowingSFX(obj_Path1, true);
    CreateObjectfollowingSFX(obj_Path1, 101, ffxID);

    DeleteObjectfollowingSFX(obj_Path2, true);
    CreateObjectfollowingSFX(obj_Path2, 101, ffxID);

    DeleteObjectfollowingSFX(obj_Path3, true);
    CreateObjectfollowingSFX(obj_Path3, 101, ffxID);

    WaitRandomTimeSeconds(3, 6);

    DeleteObjectfollowingSFX(obj_Path1, true);
    DeleteObjectfollowingSFX(obj_Path2, true);
    DeleteObjectfollowingSFX(obj_Path3, true);

    WaitRandomTimeSeconds(15, 30);

    RestartEvent();
});

// ----------------------------------------
// Secret Path - Untended Graves
// ----------------------------------------
$Event(14005811, Restart, function() {
    const obj_Path1 = 4001841;
    const obj_Path2 = 4001842;
    const obj_Path3 = 4001843;

    DeactivateObject(obj_Path1, Disabled);
    DeactivateObject(obj_Path2, Disabled);
    DeactivateObject(obj_Path3, Disabled);
});

// ----------------------------------------
// Crow Trade
// ----------------------------------------
$Event(14005821, Restart, function() {
    // Stones
    InitializeCrowTrade(ItemType.Goods, 2300, 200000, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2301, 200010, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2302, 200020, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2303, 200030, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2304, 200040, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2305, 200050, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2306, 200060, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2307, 200070, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2308, 200080, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2309, 200090, -1, 74000996);

    // Specific
    InitializeCrowTrade(ItemType.Goods, 2141, 200100, -1, 74000996); // Estus Shard
    InitializeCrowTrade(ItemType.Goods, 2143, 200110, -1, 74000996); // Undead Bone Shard
    InitializeCrowTrade(ItemType.Ring, 20430, 200120, -1, 74000996); // Skull Ring
    InitializeCrowTrade(ItemType.Goods, 380, 200130, -1, 74000996); // Rubbish

});

// ----------------------------------------
// Pot King Greg - Door
// ----------------------------------------
$Event(14005825, Restart, function() {
    // IfCharacterHasSpeffect(AND_01, 10000, 12526, true, ComparisonType.Equal, 1); // Toast
    WaitFor(InArea(10000, 4002200) && CharacterHasSpEffect(10000, 12514));

    ForceAnimationPlayback(4001251, 0, false, false, false, 0, 1);

    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
});

// ----------------------------------------
// Starting Cell - Door
// ----------------------------------------
$Event(14005826, Restart, function() {
    WaitFor(EventFlag(25009800));

    ForceAnimationPlayback(4001252, 0, false, false, false, 0, 1);

    DeactivateObjactAssignIdx(4001252, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 3, Disabled);
});

// ----------------------------------------
// The Marauder - Setup
// ----------------------------------------
$Event(14005890, Restart, function() {
    const entity_Marauder = 4000850;

    const trigger_Marauder_FogwallZone = 4002821;
    const trigger_Marauder_StartZone   = 4002822;

    const flag_Marauder_Defeated   = 14000850;
    const flag_Marauder_InBattle   = 14005855;
    const flag_Marauder_InProgress = 14000851;

    const name_Marauder = 207100;

    // Disable at init
    ChangeCharacterEnableState(entity_Marauder, Disabled);
    SetCharacterAnimationState(entity_Marauder, Disabled);
    SetCharacterAIState(entity_Marauder, Disabled);

    // End function if The Marauder has already been defeated
    EndIf(EventFlag(flag_Marauder_Defeated));

    // Enable entities
    ChangeCharacterEnableState(entity_Marauder, Enabled);
    SetCharacterAnimationState(entity_Marauder, Disabled);

    // Play initial pose
    ForceAnimationPlayback(entity_Marauder, 700, true, false, false, 0, 1);

    // Play rise up pose once player enters arena
    WaitFor(EventFlag(flag_Marauder_InBattle) && InArea(10000, trigger_Marauder_StartZone));

    SetEventFlag(flag_Marauder_InProgress, ON);

    ForceAnimationPlayback(entity_Marauder, 1700, false, false, false, 0, 1);

L0:
    // Setup entities fully
    SetCharacterGravity(entity_Marauder, Enabled);
    SetCharacterAnimationState(entity_Marauder, Enabled);
    SetCharacterAIState(entity_Marauder, Enabled);
    SetNetworkUpdateRate(entity_Marauder, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_Marauder);

    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetNetworkUpdateAuthority(entity_Marauder, AuthorityLevel.Forced);
    }

    InitializeCommonEvent(20020134, 0); // Boss Start

    WaitFixedTimeSeconds(2.0);

    DisplayBossHealthBar(Enabled, entity_Marauder, 0, name_Marauder);
});

// ----------------------------------------
// The Marauder - Kill
// ----------------------------------------
$Event(14005891, Default, function() {
    const entity_Marauder = 4000850;

    const obj_Marauder_Fogwall = 4001822;

    const flag_Marauder_Defeated   = 14000850;
    const flag_Marauder_InProgress = 14000851;

    // End function if The Marauder has already been defeated
    EndIf(EventFlag(flag_Marauder_Defeated));

    WaitFor(HPRatio(entity_Marauder) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(entity_Marauder, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_Marauder_Fogwall, Disabled);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_Marauder);
    SetEventFlag(flag_Marauder_Defeated, ON);
    SetEventFlag(flag_Marauder_InProgress, OFF);
    SetEventFlag(9348, ON);
    SetEventFlag(6348, ON);

    InitializeCommonEvent(20020000, 25001035, 25002035, 800300020, 800300030, 120320, 121320); // Boss Kill
});


// ----------------------------------------
// The Marauder - Fogwalls
// ----------------------------------------
$Event(14005892, Restart, function() {
    const obj_Marauder_Fogwall = 4001822;

    const sound_Marauder_BGM = 4004820;

    const trigger_Marauder_FogwallZone = 4002821;

    const flag_Marauder_Defeated    = 14000850;
    const flag_Marauder_InBattle    = 14005855;
    const flag_Marauder_ClientEnter = 14005856;
    const flag_Marauder_BossStart   = 14005890; // Event ID flag

    const param_Marauder_ActionButton = 4001850;

    //  Enter Boss Room
    InitializeCommonEvent(20005800, flag_Marauder_Defeated, obj_Marauder_Fogwall, trigger_Marauder_FogwallZone, flag_Marauder_InBattle, param_Marauder_ActionButton, 0, 0, trigger_Marauder_FogwallZone);

    // Enter Boss Room (Client)
    InitializeCommonEvent(20005801, flag_Marauder_Defeated, obj_Marauder_Fogwall, trigger_Marauder_FogwallZone, flag_Marauder_InBattle, param_Marauder_ActionButton, flag_Marauder_ClientEnter);

    // Boss Sound State
    InitializeCommonEvent(20001834, flag_Marauder_Defeated, flag_Marauder_InBattle, flag_Marauder_BossStart, sound_Marauder_BGM);

    // Toggle Fogwall State
    InitializeCommonEvent(20005822, flag_Marauder_Defeated, obj_Marauder_Fogwall, 3);

    // Enter Fogwall
    InitializeCommonEvent(20005810, flag_Marauder_Defeated, obj_Marauder_Fogwall, trigger_Marauder_FogwallZone, 10000);
});

// ----------------------------------------
// The Marauder - Invalidation
// ----------------------------------------
$Event(14005893, Restart, function() {
    const trigger_Marauder_FogwallZone = 4002821;

    const entity_PlayerPoint = 4000987;
    const entity_SpawnPoint  = 4002972;

    const flag_Marauder_Defeated   = 14000850;
    const flag_Marauder_InProgress = 14000851;

    const mapID   = 40;
    const blockID = 0;
    const ceremonyID = 0

    // End function if boss has already been defeated
    EndIf(EventFlag(flag_Marauder_Defeated));
    // End function if not started
    EndIf(!EventFlag(flag_Marauder_InProgress));

    // Warp player outside of arena if in invalidation zone
    if (EventFlag(flag_Marauder_InProgress) && InArea(10000, trigger_Marauder_FogwallZone)) {

        SetEventFlag(flag_Marauder_InProgress, OFF);
        SetPlayerRespawnPoint(entity_SpawnPoint);
        SetMapCeremony(mapID, blockID, ceremonyID);
        WaitFixedTimeFrames(1);
        SaveRequest(0);
        WaitFixedTimeFrames(1);
        WarpPlayer(mapID, blockID, entity_PlayerPoint);
    }

    // Fallback
    SetEventFlag(flag_Marauder_InProgress, OFF);

    EndEvent();
});

// ----------------------------------------
// Debug
// ----------------------------------------
$Event(14006000, Restart, function() {
    ChangeCharacterEnableState(4000899, Disabled);
    SetCharacterAnimationState(4000899, Disabled);

    EndEvent();
});

// ----------------------------------------
// Phantoms
// ----------------------------------------
$Event(14007000, Default, function() {
    // Sword Master
    ChangeCharacterEnableState(4000190, Disabled);
    SetCharacterAnimationState(4000190, Disabled);
    SetCharacterAIState(4000190, Disabled);

    InitializeCommonEvent(20090100, 4002190, 14000190, -1, 60002); // Interaction State
    InitializeCommonEvent(20090101, 4000190, 14000190, 99071210, -1); // Character State
    InitializeCommonEvent(20090102, 14000190, 14000832, 4000190, 4002113); // Boss Warp - Champion Gundyr
    InitializeCommonEvent(20090103, 14000190, 4000190, 4002840, 4002841); // Collision Transition Warp 1
    InitializeCommonEvent(20090103, 14000190, 4000190, 4002842, 4002843); // Collision Transition Warp 2
    InitializeCommonEvent(20090103, 14000190, 4000190, 4002844, 4002845); // Collision Transition Warp 3
    InitializeCommonEvent(20090103, 14000190, 4000190, 4002846, 4002847); // Collision Transition Warp 4
    InitializeCommonEvent(20090103, 14000190, 4000190, 4002848, 4002849); // Collision Transition Warp 5
    InitializeCommonEvent(20090103, 14000190, 4000190, 4002850, 4002851); // Collision Transition Warp 6
    
    // Sellsword Luet
    ChangeCharacterEnableState(4000960, Disabled);
    SetCharacterAnimationState(4000960, Disabled);
    SetCharacterAIState(4000960, Disabled);

    InitializeCommonEvent(20090100, 4002960, 14000960, -1, 60000); // Interaction State
    InitializeCommonEvent(20090101, 4000960, 14000960, 99071010, 160737100); // Character State
    InitializeCommonEvent(20090102, 14000960, 14000832, 4000960, 4002113); // Boss Warp - Champion Gundyr
    InitializeCommonEvent(20090102, 14000960, 14000851, 4000960, 4002112); // Boss Warp - Marauder
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002840, 4002841); // Collision Transition Warp 1
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002842, 4002843); // Collision Transition Warp 2
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002844, 4002845); // Collision Transition Warp 3
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002846, 4002847); // Collision Transition Warp 4
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002848, 4002849); // Collision Transition Warp 5
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002850, 4002851); // Collision Transition Warp 6
});

// ----------------------------------------
// Spell Summons
// ----------------------------------------
$Event(14007100, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 4000990); // Setup
    InitializeCommonEvent(20080001, 4000990); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000990); // Spell Effects
    InitializeCommonEvent(20080003, 4000990); // Item Effects
    InitializeCommonEvent(20080004, 4000990, 160760000, 160760200, 40, 0); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 4000991); // Setup
    InitializeCommonEvent(20080001, 4000991); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000991); // Spell Effects
    InitializeCommonEvent(20080003, 4000991); // Item Effects
    InitializeCommonEvent(20080004, 4000991, 160760001, 160760200, 40, 0); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 4000992); // Setup
    InitializeCommonEvent(20080001, 4000992); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000992); // Spell Effects
    InitializeCommonEvent(20080003, 4000992); // Item Effects
    InitializeCommonEvent(20080004, 4000992, 160760002, 160760200, 40, 0); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 4000993); // Setup
    InitializeCommonEvent(20080001, 4000993); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000993); // Spell Effects
    InitializeCommonEvent(20080003, 4000993); // Item Effects
    InitializeCommonEvent(20080004, 4000993, 160760003, 160760200, 40, 0); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 4000994); // Setup
    InitializeCommonEvent(20080001, 4000994); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000994); // Spell Effects
    InitializeCommonEvent(20080003, 4000994); // Item Effects
    InitializeCommonEvent(20080004, 4000994, 160760004, 160760200, 40, 0); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 4000995); // Setup
    InitializeCommonEvent(20080001, 4000995); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000995); // Spell Effects
    InitializeCommonEvent(20080003, 4000995); // Item Effects
    InitializeCommonEvent(20080004, 4000995, 160760005, 160760200, 40, 0); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 4000996); // Setup
    InitializeCommonEvent(20080001, 4000996); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000996); // Spell Effects
    InitializeCommonEvent(20080003, 4000996); // Item Effects
    InitializeCommonEvent(20080004, 4000996, 160760006, 160760200, 40, 0); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 4000997); // Setup
    InitializeCommonEvent(20080001, 4000997); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000997); // Spell Effects
    InitializeCommonEvent(20080003, 4000997); // Item Effects
    InitializeCommonEvent(20080004, 4000997, 160760007, 160760200, 40, 0); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 4000998); // Setup
    InitializeCommonEvent(20080001, 4000998); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000998); // Spell Effects
    InitializeCommonEvent(20080003, 4000998); // Item Effects
    InitializeCommonEvent(20080004, 4000998, 160760008, 160760200, 40, 0); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 4000990);
    InitializeCommonEvent(20080011, 4000990);
    InitializeCommonEvent(20080012, 4000990);

    // Hollow Unique
    InitializeCommonEvent(20080020, 4000991);
    InitializeCommonEvent(20080021, 4000991);
    InitializeCommonEvent(20080022, 4000991);

    // Hound Unique
    InitializeCommonEvent(20080030, 4000992);
    InitializeCommonEvent(20080031, 4000992);
    InitializeCommonEvent(20080032, 4000992);

    // Warrior Unique
    InitializeCommonEvent(20080040, 4000993);
    InitializeCommonEvent(20080041, 4000993);
    InitializeCommonEvent(20080042, 4000993);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 4000994);
    InitializeCommonEvent(20080051, 4000994);
    InitializeCommonEvent(20080052, 4000994);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 4000995);
    InitializeCommonEvent(20080061, 4000995);
    InitializeCommonEvent(20080062, 4000995);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 4000996);
    InitializeCommonEvent(20080071, 4000996);
    InitializeCommonEvent(20080072, 4000996);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 4000997);
    InitializeCommonEvent(20080081, 4000997);
    InitializeCommonEvent(20080082, 4000997);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 4000998);
    InitializeCommonEvent(20080091, 4000998);
    InitializeCommonEvent(20080092, 4000998);
});
