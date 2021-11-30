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
    RegisterBonfire(13900000, 3901950, 5, 180, 0); // Irithyll Dungeon
    RegisterBonfire(13900002, 3901952, 5, 180, 0); // Profaned Capital
    RegisterBonfire(13900001, 3901951, 5, 180, 0); // Church of Sin
    InitializeCommonEvent(20005780, 3901780, 2);  // Handle Transition Fog Wall - Irithyll Link

    InitializeEvent(0, 13905900, 0); // Path of the Dragon - Warp to Archdragon Peak
    
    //-----------------------------
    // Fallen Protector
    //-----------------------------
    InitializeEvent(0, 13905910, 0); // Fallen Protector - Setup
    InitializeEvent(0, 13905911, 0); // Fallen Protector - Kill
    InitializeEvent(0, 13905912, 0); // Fallen Protector - Fogwalls
    InitializeEvent(0, 13905913, 0); // Fallen Protector - Invalidation
    InitializeEvent(0, 13905914, 0); // Maiden - Gravity/Animation State
    InitializeEvent(0, 13905915, 0); // Warp Maiden to Fallen Protector
    InitializeEvent(0, 13905916, 0); // Maiden Revival
    InitializeEvent(0, 13905917, 0); // Fogwall Monitor
    InitializeEvent(0, 13905918, 0); // Fallen Protector Corpse
    
    InitializeCommonEvent(20005119, 3900200, 3902200, 3902201, 3902206, 0, 0, 0, 0); // Patrol Leader - Jailer
    InitializeCommonEvent(20005110, 3900203, 3902202); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3900206, 3902202); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3900207, 3902202); // Enemy - Wake-up
    InitializeCommonEvent(20005203, 3900220, 30000, 20000, 3902220, 3902221, 3902222, 0, 0, 0); // Enemy - Wake-up
    InitializeCommonEvent(20005203, 3900221, 30000, 20000, 3902220, 3902221, 3902222, 0, 0, 0); // Enemy - Wake-up
    InitializeCommonEvent(20005203, 3900222, 30000, 20000, 3902220, 3902221, 3902222, 0, 0, 0); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3900223, 30000, 20000, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3900225, 3902228); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3900226, 3902228); // Enemy - Wake-up
    InitializeEvent(0, 13905220, 3900225, 3902227, 13905225); // Jailer - Wake-up State
    InitializeEvent(1, 13905220, 3900226, 3902227, 13905226); // Jailer - Wake-up State
    InitializeEvent(0, 13905225, 3900225, 3902228, 13905220); // Jailer - Wake-up State
    InitializeEvent(1, 13905225, 3900226, 3902228, 13905221); // Jailer - Wake-up State
    InitializeEvent(0, 13905230, 3900204, 3904240, 53900020); // Jailer - Running State
    InitializeEvent(1, 13905230, 3900205, 3904240, 53900020); // Jailer - Running State
    InitializeCommonEvent(20005119, 3900390, 3902390, 3902391, 0, 0, 0, 0, 0); // Patrol Leader - Jailer
    InitializeCommonEvent(20005119, 3900391, 3902390, 3902391, 0, 0, 0, 0, 0); // Patrol Leader - Jailer
    InitializeCommonEvent(20005119, 3900392, 3902392, 3902391, 3902390, 0, 0, 0, 0); // Patrol Leader - Jailer
    InitializeCommonEvent(20005119, 3900393, 3902392, 3902391, 0, 0, 0, 0, 0); // Patrol Leader - Jailer
    InitializeCommonEvent(20005119, 3900394, 3902392, 3902391, 0, 0, 0, 0, 0); // Patrol Leader - Jailer
    InitializeCommonEvent(20005120, 3900395, 1089470464); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 3900230, 30001, -1); // Enemy - Wake-up when attacked
    InitializeCommonEvent(20005212, 3900231, 30000, 20003, 1084227584, 3902231);
    InitializeCommonEvent(20005111, 3900233, 3008, 3902233); // Enemy - Wake-up
    InitializeCommonEvent(20005133, 3900234, 3001, 1077936128, 3902234); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 3900240, 30000, 20003); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 3900241, 702, 1702); // Enemy - Wake-up
    InitializeCommonEvent(20005260, 3900242, 700, 1700, 3900241); // Enemy - Wake-up
    InitializeCommonEvent(20005260, 3900243, 700, 1700, 3900241); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 3900244, 30000, 20003); // Enemy - Wake-up
    InitializeCommonEvent(20005134, 3900250, 3006, 1069547520, 3902253); // Enemy - Wake-up
    InitializeEvent(0, 13905251, 0); // Enemy - Wake-up
    InitializeEvent(0, 13905255, 3900257, 700, 1700, 1069547520, 0, 3901200, 3901201, 3901205, 0, 0); // Enemy - Wake-up with Object Restoration
    InitializeEvent(1, 13905255, 3900267, 701, 3001, 1069547520, 0, 3901202, 3901203, 3901204, 3901206, 0); // Enemy - Wake-up with Object Restoration
    InitializeEvent(2, 13905255, 3900268, 702, 1702, 1069547520, 1045220557, 3901202, 3901203, 3901204, 3901206, 0); // Enemy - Wake-up with Object Restoration
    InitializeEvent(3, 13905255, 3900269, 700, 1700, 1069547520, 0, 3901202, 3901203, 3901204, 3901206, 0); // Enemy - Wake-up with Object Restoration
    InitializeCommonEvent(20005210, 3900252, 702, 1702, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 3900253, 700, 1700, 1069547520, 3902258); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 3900255, 702, 1702, 1069547520, 3902258); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 3900256, 700, 1700, 1069547520, 3902258); // Enemy - Wake-up
    InitializeCommonEvent(20005114, 3900257, 3902256, 1065353216); // Enemy - Toggle Gravity
    InitializeCommonEvent(20005121, 3900258, 1084227584, 1086324736); // Enemy - Delayed wake-up
    InitializeCommonEvent(20005119, 3900260, 3902252, 3902260, 0, 0, 0, 0, 0); // Patrol Leader
    InitializeCommonEvent(20005204, 3900261, 700, 1700, 3902250, 1073741824, 1700, 3902252, 1073741824); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3900262, 1084227584, 3902257); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3900263, 702, 1702, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005114, 3900264, 3902257, 1090519040); // Enemy - Toggle Gravity
    InitializeCommonEvent(20005120, 3900264, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3900265, 702, 1702, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 3900266, 700, 1700, 1082130432, 3902254); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3900268, 3902255); // Enemy - Wake-up
    InitializeEvent(0, 13900260, 3900254, 703, 1703); // Enemy - Sitting
    InitializeCommonEvent(20005122, 3900270, 3000, 1073741824);
    InitializeCommonEvent(20005122, 3900271, 3000, 1073741824);
    InitializeCommonEvent(20005122, 3900272, 3000, 1069547520);
    InitializeCommonEvent(20005122, 3900273, 3000, 1077936128);
    InitializeCommonEvent(20005122, 3900274, 3000, 1077936128);
    InitializeCommonEvent(20005122, 3900275, 3000, 1077936128);
    InitializeCommonEvent(20005131, 3900276, 3000, 1075838976, 3902270);
    InitializeCommonEvent(20005131, 3900277, 3000, 1073741824, 3902270);
    InitializeCommonEvent(20005114, 3900280, 3902291, 1086324736);
    InitializeCommonEvent(20005190, 3900290, 1101529088);
    InitializeCommonEvent(20005220, 3900291, 706, 1706);
    InitializeCommonEvent(20005110, 3900292, 3902291);
    InitializeCommonEvent(20005110, 3900293, 3902291);
    InitializeCommonEvent(20005130, 3900294, 1106247680, 3902291);
    InitializeCommonEvent(20005110, 3900296, 3902291);
    InitializeCommonEvent(20005110, 3900297, 3902291);
    InitializeCommonEvent(20005114, 3900298, 3902291, 1086324736);
    InitializeCommonEvent(20005110, 3900299, 3902290);
    DeactivateGenerator(3904300, Enabled);
    InitializeCommonEvent(20005320, 3900310, 3902310, 3904310);
    InitializeCommonEvent(20005330, 3900311, 3902311, 13905300);
    InitializeCommonEvent(20005330, 3900312, 3902311, 13905301);
    InitializeCommonEvent(20005330, 3900313, 3902311, 13905302);
    InitializeCommonEvent(20005330, 3900314, 3902311, 13905303);
    InitializeCommonEvent(20005110, 3900315, 3902312);
    InitializeCommonEvent(20005110, 3900316, 3902312);
    InitializeCommonEvent(20005192, 3900317, 3902310);
    InitializeCommonEvent(20005192, 3900318, 3902310);
    InitializeEvent(0, 13905320, 3900321, 13905325);
    InitializeEvent(1, 13905320, 3900322, 13905326);
    InitializeEvent(2, 13905320, 3900323, 13905327);
    InitializeEvent(3, 13905320, 3900324, 13905328);
    InitializeEvent(4, 13905320, 3900325, 13905329);
    InitializeCommonEvent(20005111, 3900321, 20000, 3902321);
    InitializeCommonEvent(20005111, 3900322, 20000, 3902321);
    InitializeCommonEvent(20005111, 3900323, 20000, 3902321);
    InitializeCommonEvent(20005111, 3900324, 20000, 3902321);
    InitializeCommonEvent(20005111, 3900325, 20000, 3902321);
    InitializeCommonEvent(20005212, 3900330, 700, 1700, 1090519040, 3902330);
    InitializeCommonEvent(20005212, 3900331, 700, 1700, 1090519040, 3902330);
    InitializeCommonEvent(20005212, 3900332, 700, 1700, 1085276160, 3902330);
    InitializeCommonEvent(20005211, 3900333, 700, 1700, 1088421888, 0);
    InitializeCommonEvent(20005211, 3900334, 700, 1700, 1085276160, 0);
    InitializeCommonEvent(20005211, 3900335, 700, 20000, 1090519040, 0);
    InitializeCommonEvent(20005211, 3900336, 700, 1700, 1087373312, 1065353216);
    InitializeCommonEvent(20005211, 3900337, 700, 20000, 1082130432, 1065353216);
    InitializeCommonEvent(20005211, 3900338, 700, 20000, 1094713344, 1065353216);
    InitializeCommonEvent(20005211, 3900339, 700, 1700, 1090519040, 1065353216);
    InitializeEvent(0, 13905360, 0);
    InitializeEvent(0, 13905361, 0);
    InitializeEvent(0, 13905363, 0);
    InitializeEvent(0, 13905364, 0);
    InitializeCommonEvent(20005132, 3900362, 1101004800, 3902362);
    InitializeCommonEvent(20005220, 3900370, 700, 1700);
    InitializeCommonEvent(20005220, 3900371, 700, 1700);
    InitializeCommonEvent(20005220, 3900372, 700, 1700);
    InitializeCommonEvent(20005340, 13900370, 3900370);
    InitializeCommonEvent(20005340, 13900371, 3900371);
    InitializeCommonEvent(20005340, 13900372, 3900372);
    InitializeEvent(0, 13905380, 0);
    InitializeEvent(0, 13905381, 0);
    InitializeCommonEvent(20005340, 13900380, 3900380);
    InitializeCommonEvent(20005110, 3900399, 3902280); // Court Sorcerer - Wake-up
    InitializeCommonEvent(20005342, 13900360, 3900399);
    InitializeEvent(0, 13905810, 0); // Yhorm - Siegward
    InitializeEvent(0, 13905811, 0); // Yhorm - Kill
    InitializeEvent(0, 13905815, 0); // Yhorm - Event Message
    InitializeEvent(0, 13905816, 0); // Yhorm - Map SFX
    InitializeEvent(0, 13905820, 0); // Yhorm - Boss Setup
    InitializeEvent(0, 13905840, 0); // Yhorm - Apply SpEffect upon entry
    InitializeEvent(0, 13905850, 0); // Yhorm - Handle Storm Ruler Stagger
    InitializeEvent(0, 13905860, 0); // Yhorm - Handle Storm Ruler Damage
    InitializeEvent(0, 13905861, 0); // Yhorm - Handle Clients
    InitializeEvent(0, 13905830, 196618, 3000, 10, 20000); // Yhorm's Body - Stagger State
    InitializeEvent(1, 13905830, 393236, 3000, 20, 20002); // Yhorm's Head - Stagger State
    InitializeEvent(0, 13905835, 0); // Yhorm - Walk toward Player upon entry
    InitializeEvent(0, 13905500, 13900500, 3901500, 3903500, 3903600); 
    InitializeEvent(2, 13905500, 13900502, 3901502, 3903502, 3903602);
    InitializeEvent(3, 13905500, 13900503, 3901503, 3903503, 3903603);
    InitializeEvent(4, 13905500, 13900504, 3901504, 3903504, 3903604);
    InitializeEvent(5, 13905500, 13900505, 3901505, 3903505, 3903605);
    InitializeEvent(6, 13905500, 13900510, 3901510, 3903510, 3903610);
    InitializeEvent(7, 13905500, 13900511, 3901511, 3903511, 3903611);
    InitializeEvent(8, 13905500, 13900512, 3901512, 3903512, 3903612);
    InitializeEvent(9, 13905500, 13900513, 3901513, 3903513, 3903613);
    InitializeEvent(10, 13905500, 13900514, 3901514, 3903514, 3903614);
    InitializeEvent(11, 13905500, 13900515, 3901515, 3903515, 3903615);
    InitializeEvent(12, 13905500, 13900516, 3901516, 3903516, 3903616);
    InitializeEvent(13, 13905500, 13900517, 3901517, 3903517, 3903617);
    InitializeEvent(16, 13905500, 13900520, 3901520, 3903520, 3903620);
    InitializeEvent(17, 13905500, 13900521, 3901521, 3903521, 3903621);
    InitializeEvent(18, 13905500, 13900522, 3901522, 3903522, 3903622);
    InitializeEvent(21, 13905500, 13900525, 3901525, 3903525, 3903625);
    InitializeEvent(22, 13905500, 13900526, 3901526, 3903526, 3903626);
    InitializeEvent(24, 13905500, 13900528, 3901528, 3903528, 3903628);
    InitializeEvent(25, 13905500, 13900530, 3901530, 3903530, 3903630);
    InitializeEvent(27, 13905500, 13900532, 3901532, 3903532, 3903632);
    InitializeEvent(28, 13905500, 13900533, 3901533, 3903533, 3903633);
    InitializeEvent(29, 13905500, 13900534, 3901534, 3903534, 3903634);
    InitializeEvent(30, 13905500, 13900535, 3901535, 3903535, 3903635);
    InitializeEvent(0, 13905420, 0);
    InitializeEvent(0, 13905425, 0);
    InitializeEvent(0, 13905430, 0);
    InitializeEvent(0, 13905435, 0);
    InitializeEvent(0, 13905440, 0);
    InitializeEvent(0, 13905445, 0);
    InitializeEvent(0, 13905450, 0);
    InitializeEvent(0, 13905460, 0);
    InitializeEvent(0, 13905480, 0);
    InitializeCommonEvent(20005613, 13900550, 3903550, 3901550, 390350, 10010868);
    InitializeCommonEvent(20005613, 13900551, 3903551, 3901551, 390350, 10010868);
    InitializeEvent(0, 13905415, 13900552, 3903552, 3903557, 3901552, 390350, 390360, 10010868);
    InitializeEvent(1, 13905415, 13900553, 3903553, 3903558, 3901553, 390350, 390360, 10010868);
    InitializeEvent(0, 13905470, 0);
    InitializeEvent(0, 13905471, 0);
    InitializeEvent(0, 13905475, 0);
    InitializeCommonEvent(20005620, 13900400, 13900402, 3901400, 3901401, 3901402, 13901400);
    InitializeCommonEvent(20005628, 13900401, 3901401, 3902402);
    InitializeEvent(0, 13900411, 0);
    InitializeCommonEvent(20005622, 13900405, 13900407, 3901405, 3901406, 3901407, 13901405);
    InitializeCommonEvent(20005628, 13900406, 3901406, 3902407);
    InitializeEvent(0, 13900412, 0);

    // Karla
    InitializeCommonEvent(20006003, 3900700, 73900131, 1275, 1260, 1261, 1260, 1274); // Karla - NPC Toggle in Multiplayer
    InitializeCommonEvent(20006002, 3900700, 1278, 1275, 1279); // Karla - NPC - Check Death
    
    // Siegward
    InitializeCommonEvent(20006002, 3900705, 1398, 1395, 1399); // Siegward (Cell)
    InitializeCommonEvent(20006002, 3900706, 1398, 1395, 1399); // Siegward (Yhorm)
    InitializeCommonEvent(20006000, 3900705, 1396, 1397, 73900190, 1059481190, 1395, 1399, 0); // Siegward (Cell)
    InitializeCommonEvent(20006001, 3900705, 1396, 1397, 73900190, 3); // Siegward (Cell)
    InitializeEvent(0, 13900721, 0); // Siegward - Toggle Cell State
    InitializeEvent(0, 13900723, 3900706, 1108869120); // Siegward (Yhorm)
    InitializeEvent(0, 13900726, 0); // Siegward (Yhorm) - Yhorm Fight
    InitializeEvent(0, 13905727, 0); // Siegward (Yhorm) - Effect Check
    InitializeEvent(0, 13905728, 0); // Siegward (Yhorm) - Position Check
    InitializeEvent(0, 13900729, 3900705); // Siegward (Cell)
    InitializeCommonEvent(20006030, 3901706, 4000, 1, 62140, 50006215, 50006216, 1390);
    
    // Corrupted Knight Lloyd
    InitializeCommonEvent(20090010, 3900730, 3902730, 30310, 63010, 11200, 99005290, 99005291, 13900730); // Setup
    InitializeCommonEvent(20090020, 3900730, 85000); // Kill Taunt
    
    // Jailer Eileen
    InitializeCommonEvent(20090010, 3900732, 3902732, 30310, 63010, 12200, 99005330, 99005331, 13900732); // Setup
    InitializeCommonEvent(20090020, 3900732, 84700); // Kill Taunt
    
    // Ollis the Merciless
    InitializeCommonEvent(20090010, 3900734, 3902734, 30310, 63010, 11800, 99005340, 99005341, 13900734); // Setup
    InitializeCommonEvent(20090020, 3900734, 85000); // Kill Taunt
    
    // Fester the Jester
    InitializeCommonEvent(20090010, 3900736, 3902736, 30310, 63010, 11300, 99005210, 99005211, 13900736); // Setup
    InitializeCommonEvent(20090020, 3900736, 84200); // Kill Taunt
    
    // Vileblood Annalise
    InitializeCommonEvent(20090010, 3900738, 3902738, 30310, 63010, 11900, 99005350, 99005351, 13900738); // Setup
    InitializeCommonEvent(20090020, 3900738, 85000); // Kill Taunt
    
    // Bewitched Knight Iwai
    InitializeCommonEvent(20090010, 3900740, 3902740, 30310, 63010, 14900, 99005520, 99005521, 13900740); // Setup
    InitializeCommonEvent(20090020, 3900740, 85000); // Kill Taunt
    
    // Lord Takatsuji
    InitializeCommonEvent(20090010, 3900742, 3902742, 30310, 63010, 15100, 99005540, 99005541, 13900742); // Setup
    InitializeCommonEvent(20090020, 3900742, 85000); // Kill Taunt
    
    // Lieutenant Ugali
    InitializeCommonEvent(20090010, 3900744, 3902744, 30310, 63010, 15200, 99005550, 99005551, 13900744); // Setup
    InitializeCommonEvent(20090020, 3900744, 85000); // Kill Taunt
    
    // Lieutenant Hanji
    InitializeCommonEvent(20090010, 3900746, 3902746, 30310, 63010, 15300, 99005560, 99005561, 13900746); // Setup
    InitializeCommonEvent(20090020, 3900746, 85000); // Kill Taunt
    
    // Alva, Seeker of the Spurned
    InitializeCommonEvent(20090010, 3900748, 3902748, 30310, 63010, 58600, 99005630, 99005631, 13900748); // Setup
    InitializeCommonEvent(20090020, 3900748, 85000); // Kill Taunt
    
    // The Pursuer
    InitializeCommonEvent(20090010, 3900790, 3902790, 30310, 63010, 11740, 99005310, 99005311, 13900790); // Setup
    InitializeCommonEvent(20090020, 3900790, 81200); // Kill Taunt
    
    // Hex Scribe
    InitializeCommonEvent(20081200, 13900760, 3900760, 90850);  // Idle
    InitializeCommonEvent(20081210, 13900760, 3900760);         // Hostility
    
    //----------------------
    // Phantoms
    //----------------------
    InitializeEvent(0, 13907000, 0);
    
    //----------------------
    // Spell Summons
    //----------------------
    InitializeEvent(0, 13907100, 0);
    
    //--------------------
    // Treasure
    //--------------------
    // One-time Loot
    InitializeCommonEvent(20005351, 3900380, 3902000, 53902000, 1); // Giant Slave Helmet
    InitializeCommonEvent(20005351, 3900200, 3902010, 53902010, 1); // Branding Iron
    InitializeCommonEvent(20005351, 3900361, 3902020, 53902020, 1); // Gargoyle Flame Hammer
    InitializeCommonEvent(20005351, 3900362, 3902030, 53902030, 1); // Gargoyle Flame Spear
    InitializeCommonEvent(20005351, 3900234, 3902040, 53902040, 1); // Tailbone Spear
    InitializeCommonEvent(20005351, 3900231, 3902050, 53902050, 1); // Tailbone Short Sword
    InitializeCommonEvent(20005351, 3900222, 3902060, 53902060, 1); // Handmaid's Dagger
    InitializeCommonEvent(20005351, 3900870, 3902070, 53902070, 1); // Jailer's Key Ring
    InitializeCommonEvent(20005351, 3900373, 3902080, 53902080, 1); // Eleonora
    
    
    // One-time Enemies
    InitializeCommonEvent(20008150, 13900340, 3900340); // Crystal Lizard
    InitializeCommonEvent(20008150, 13900341, 3900341); // Crystal Lizard
    InitializeCommonEvent(20008150, 13900342, 3900342); // Crystal Lizard
    InitializeCommonEvent(20008150, 13900343, 3900343); // Crystal Lizard
    
    // Mimics
    InitializeCommonEvent(20005400, 3900850); // Open Action
    InitializeCommonEvent(20005400, 3900851); // Open Action
    InitializeCommonEvent(20005400, 3900852); // Open Action
    InitializeCommonEvent(20005400, 3900853); // Open Action
    InitializeCommonEvent(20005400, 3900854); // Open Action
    InitializeCommonEvent(20005400, 3900855); // Open Action
    InitializeCommonEvent(20005400, 3900856); // Open Action
    InitializeCommonEvent(20005400, 3900857); // Open Action
    InitializeCommonEvent(20005400, 3900857); // Open Action
    InitializeCommonEvent(20005400, 3900858); // Open Action
    InitializeCommonEvent(20000343, 13900850, 3900850, 53901000); // Treasure Control
    InitializeCommonEvent(20000343, 13900851, 3900851, 53901010); // Treasure Control
    InitializeCommonEvent(20000343, 13900852, 3900852, 53901020); // Treasure Control
    InitializeCommonEvent(20000343, 13900853, 3900853, 53901030); // Treasure Control
    InitializeCommonEvent(20000343, 13900854, 3900854, 53901040); // Treasure Control
    InitializeCommonEvent(20000343, 13900855, 3900855, 53901050); // Treasure Control
    InitializeCommonEvent(20000343, 13900856, 3900856, 53901060); // Treasure Control
    InitializeCommonEvent(20000343, 13900857, 3900857, 53901070); // Treasure Control
    InitializeCommonEvent(20000343, 13900858, 3900858, 53901080); // Treasure Control
    InitializeCommonEvent(20000343, 13900859, 3900859, 53901090); // Treasure Control

    // Chests
    InitializeCommonEvent(20005520, 13901300, 3901300, 3903300);
    InitializeCommonEvent(20086000, 13901301, 3901301, 3903301, 3900780, 280002010); // Acid Cloud
    InitializeCommonEvent(20005520, 13901302, 3901302, 3903302);
    InitializeCommonEvent(20086000, 13901303, 3901303, 3903303, 3900781, 280002000); // Poison Cloud
    InitializeCommonEvent(20086000, 13901304, 3901304, 3903304, 3900782, 280002000); // Poison Cloud
    InitializeCommonEvent(20005520, 13901305, 3901305, 3903305);
    InitializeCommonEvent(20005520, 13901306, 3901306, 3903306);
    InitializeCommonEvent(20005520, 13901307, 3901307, 3903307);
    InitializeCommonEvent(20005520, 13901308, 3901308, 3903308);
    InitializeCommonEvent(20005520, 13901309, 3901309, 3903309);
    InitializeCommonEvent(20005520, 13901310, 3901310, 3903310);
    InitializeCommonEvent(20005520, 13901311, 3901311, 3903311);
    InitializeCommonEvent(20005520, 13901312, 3901312, 3903312);
    InitializeCommonEvent(20005520, 13901313, 3901313, 3903313);
    InitializeCommonEvent(20086000, 13901314, 3901314, 3903314, 3900783, 280002010); // Acid Cloud
    InitializeCommonEvent(20005520, 13901315, 3901315, 3903315);
    InitializeCommonEvent(20005520, 13901316, 3901316, 3903316);
    InitializeCommonEvent(20005520, 13901317, 3901317, 3903317);

    // Misc
    InitializeCommonEvent(20005524, 3901622, 13900748); // Alva - Event Treasure 
    InitializeEvent(0, 13900900, 0); // Treasure - Laddersmith Gilligan
    InitializeCommonEvent(20005525, 53900810, 3900810, 3901640, 61); // Treasure - Profaned Flame
    
    //--------------------
    // Misc
    //--------------------
    // Warps
    InitializeCommonEvent(20008206, 3901560, 30000, 38, 3804010, 60160, 3802961, 2019, 99030002); // To Smouldering Lake
    
    // Curses
    InitializeCommonEvent(20081010, 3905760, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 3905760, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 3905760, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 3905760, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 3905760, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 3905760, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 3905760, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 3905760, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 3905760, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 3905760, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 3905760, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 3905760, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 3905760, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 3905760, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 3905760, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 3905760, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 3905760, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 3905760, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 3905760, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 3905760, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 3905760, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 3905760, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 3905760, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 3905760, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 3905760, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 3905760, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 3905760, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 3905760, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 3905760, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 3905760, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 3905760, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 3905760, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 3905760, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 3905760, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 3905760, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 3905760, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 3905760, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 3905760, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 3905760, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 3905760, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 3905750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 3905760, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 3905770, 250002220, 25000510);  // Curse of Valor
    
    // Warp Monitor
    InitializeCommonEvent(20090200, 3905760);
    
    // NG+
    InitializeCommonEvent(20008001, 3905775, 1);
    InitializeCommonEvent(20008001, 3905776, 2);
    InitializeCommonEvent(20008001, 3905777, 3);
    
    // Company of Champions
    InitializeCommonEvent(20081020, 3905760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 3905760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 3905760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 3905760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 3905760, 160101542, 160101543); // V
    
    // Beast of Lust
    InitializeEvent(0, 13905140, 0);
    
    // Swamp Effects
    InitializeEvent(0, 13900051, 3904500, 160750140);
    
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 3902050);
    InitializeCommonEvent(20090800, 3902051);
    InitializeEvent(0, 13900052, 0);
    
});

//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    InitializeEvent(0, 13900465, 0);
    InitializeEvent(0, 13900410, 0);
    InitializeEvent(0, 13905700, 3900700, 90460); // Karla - Pre-setup
    InitializeEvent(0, 13905720, 3900705, 3900706); // Siegward - Setup
    SetMapSoundState(3904801, Disabled);
    SetMapSoundState(3904802, Disabled);
    SetMapSoundState(3904820, Disabled);
});

// Farron Swamp
Event(13900051, Restart, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfInoutsideArea(MAIN, 1, 10000, X0_4, 1);
    SetSpeffect(10000, X4_4);
    WaitFixedTimeSeconds(0.8);
    EndUnconditionally(EventEndType.Restart);
});

// Gauntlet - Fallen Protector bonfire
Event(13900052, Restart, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 25009813);
    
    DeactivateObject(3901951, Disabled);
    ChangeCharacterEnableState(3900951, Disabled);
});

// Horny Jail
Event(13905140, Default, function() {
    // Disable fake door
    DeactivateObject(3901540, Disabled);
    
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 25008903);
    SetEventFlag(25008903, OFF);
    
    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(3901);
    
    DeactivateObject(3901520, Disabled); // Disable real door
    DeactivateObject(3901540, Enabled);
    
    SetSpeffect(3900259, 160740005);
    
    DisplayBossHealthBar(Enabled, 3900259, 0, 204013);
    
    IfCharacterHPRatio(MAIN, 3900259, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    DeactivateObject(3901540, Disabled);
    DeactivateObject(3901520, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, 3900259, 220, 1060);
    DisplayBossHealthBar(Disabled, 3900259, 0, 204013);
    AwardItemLot(90020);
});

// Rubble - Enemy ID, Shoot Point (Sphere Event)
Event(13905211, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    CreateBulletOwner(X0_4);
    
    IfCharacterHPRatio(AND_01, 3900800, ComparisonType.LessOrEqual, 0.9, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    ShootBullet(X0_4, 3902932, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902933, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902934, -1, 252600810, 0, 0, 0);
    
    WaitFixedTimeSeconds(2);
    
    ShootBullet(X0_4, 3902931, -1, 252600800, 0, 0, 0);
    
    WaitRandomTimeSeconds(30, 60);
    
    EndUnconditionally(EventEndType.Restart);
});

// Earth Pillar - Enemy ID, Shoot Point (Sphere Event)
Event(13905212, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    CreateBulletOwner(X0_4);
    
    IfCharacterHasEventMessage(AND_01, 3900800, 100, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    ShootBullet(X0_4, 3902940, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902941, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902942, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902943, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902944, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902945, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902946, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902947, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902948, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902949, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902950, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902951, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902952, -1, 252600810, 0, 0, 0);
    ShootBullet(X0_4, 3902953, -1, 252600810, 0, 0, 0);
    
    EndUnconditionally(EventEndType.Restart);
});

// Flame Pillar - Enemy ID, Shoot Point (Sphere Event)
Event(13905213, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    CreateBulletOwner(X0_4);
    
    IfCharacterHasEventMessage(AND_01, 3900800, 200, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    ShootBullet(X0_4, 3902940, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902941, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902942, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902943, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902944, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902945, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902946, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902947, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902948, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902949, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902950, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902951, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902952, -1, 252600830, 0, 0, 0);
    ShootBullet(X0_4, 3902953, -1, 252600830, 0, 0, 0);
    
    EndUnconditionally(EventEndType.Restart);
});

// Jailer - Wake-up State
Event(13905220, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(X0_4, 11890);
    ClearSpeffect(X0_4, 11900);
    ClearSpeffect(X0_4, 11901);
    ClearSpeffect(X0_4, 11902);
    ClearSpeffect(X0_4, 11903);
    ClearSpeffect(X0_4, 11899);
});

// Jailer - Wake-up State
Event(13905225, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetCharacterAIState(X0_4, Enabled);
    ClearSpeffect(X0_4, 11890);
    SetSpeffect(X0_4, 11899);
});

// Jailer - Running State
Event(13905230, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X8_4);
    RequestCharacterAIReplan(X0_4);
    SetSpeffect(X0_4, 5000);
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterAIState(OR_01, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    ClearSpeffect(X0_4, 5000);
});

// Enemy - Wake-up
Event(13905251, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(3900251, 702, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, 3902254, 1.5, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, 3900251, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    IfCharacterHasSpeffect(AND_02, 3900251, 5450, false, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    ForceAnimationPlayback(3900251, 1702, false, false, false, 0, 1);
    RequestCharacterAIReplan(3900251);
});

// Enemy - Wake-up with Object Restoration
Event(13905255, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    RequestObjectRestoration(X20_4);
    RequestObjectRestoration(X24_4);
    RequestObjectRestoration(X28_4);
    RequestObjectRestoration(X32_4);
    RequestObjectRestoration(X36_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, X12_4, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfObjectDestroyed(OR_09, DestructionState.Destroyed, X20_4, ComparisonType.Equal, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfObjectDestroyed(OR_09, DestructionState.Destroyed, X24_4, ComparisonType.Equal, 1);
    SkipIfComparison(1, ComparisonType.Equal, X28_4, 0);
    IfObjectDestroyed(OR_09, DestructionState.Destroyed, X28_4, ComparisonType.Equal, 1);
    SkipIfComparison(1, ComparisonType.Equal, X32_4, 0);
    IfObjectDestroyed(OR_09, DestructionState.Destroyed, X32_4, ComparisonType.Equal, 1);
    SkipIfComparison(1, ComparisonType.Equal, X36_4, 0);
    IfObjectDestroyed(OR_09, DestructionState.Destroyed, X36_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, OR_09);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(X16_4);
    SetCharacterAIState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
});

// Enemy - Sitting
Event(13900260, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    IfObjactEventFlag(OR_01, 3903515);
    IfObjactEventFlag(OR_01, 3903615);
    IfConditionGroup(MAIN, PASS, OR_01);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
});

// Basilisk Trap
Event(13905320, Restart, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X4_4);
    SetCharacterAIState(X0_4, Disabled);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3902320, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 53900110);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfEventFlag(OR_02, CHANGE, TargetEventFlagType.EventFlag, 53900110);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    Label0();
    SetCharacterAIState(X0_4, Enabled);
    SetSpeffect(X0_4, 5000);
    SetEventFlag(X4_4, ON);
    IfCharacterAIState(MAIN, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    ClearSpeffect(X0_4, 5000);
});

Event(13905360, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(3900360, Disabled);
    SetCharacterGravity(3900360, Disabled);
    SetCharacterMaphit(3900360, true);
    ForceAnimationPlayback(3900360, 30001, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3902360, 1);
    IfCharacterBackreadStatus(AND_01, 3900360, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 3900360, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, 3900360, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(3900360, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpeffect(3900360, 640);
    SetCharacterAIState(3900360, Enabled);
    SetCharacterHome(3900360, 3902365);
    SetCharacterGravity(3900360, Enabled);
    SetCharacterMaphit(3900360, false);
    ForceAnimationPlayback(3900360, 20000, false, true, false, 0, 1);
    SetNetworkUpdateRate(3900360, false, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(13905361, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(3900361, Disabled);
    SetCharacterGravity(3900361, Disabled);
    SetCharacterMaphit(3900361, true);
    ForceAnimationPlayback(3900361, 30001, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902361, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterBackreadStatus(AND_01, 3900361, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 3900361, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, 3900361, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(3900361, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpeffect(3900361, 640);
    SetCharacterAIState(3900361, Enabled);
    SetCharacterHome(3900361, 3902366);
    SetCharacterGravity(3900361, Enabled);
    SetCharacterMaphit(3900361, false);
    ForceAnimationPlayback(3900361, 20005, false, true, false, 0, 1);
    SetNetworkUpdateRate(3900361, false, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(13905363, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(3900363, Disabled);
    SetCharacterGravity(3900363, Disabled);
    SetCharacterMaphit(3900363, true);
    ForceAnimationPlayback(3900363, 30001, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902363, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902364, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterBackreadStatus(AND_01, 3900363, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 3900363, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, 3900363, 10000);
    IfCharacterDeadalive(OR_02, 3905390, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_02, 3900364, ComparisonType.LessOrEqual, 0.5, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(3900363, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpeffect(3900363, 640);
    SetCharacterHome(3900363, 3902368);
    SetCharacterGravity(3900363, Enabled);
    SetCharacterMaphit(3900363, false);
    ForceAnimationPlayback(3900363, 20007, false, true, false, 0, 1);
    SetNetworkUpdateRate(3900363, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(3900363, Enabled);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 3902364, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, FAIL, AND_05);
    SetSpeffect(3900363, 5000);
    ChangeCharacterPatrolBehavior(3900363, 3904360);
    Label0();
    RequestCharacterAIReplan(3900363);
});

Event(13905364, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(3900364, Disabled);
    SetCharacterGravity(3900364, Disabled);
    SetCharacterMaphit(3900364, true);
    ForceAnimationPlayback(3900364, 30001, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3902364, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, 3900364, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(3900363, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpeffect(3900364, 640);
    SetCharacterAIState(3900364, Enabled);
    SetCharacterHome(3900364, 3902369);
    SetCharacterGravity(3900364, Enabled);
    SetCharacterMaphit(3900364, false);
    ForceAnimationPlayback(3900364, 20006, false, true, false, 0, 1);
    SetNetworkUpdateRate(3900363, false, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(13905380, Restart, function() {
    SetCharacterAIState(3900380, Disabled);
    ForceAnimationPlayback(3900380, 30000, true, false, false, 0, 1);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902380, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfCharacterDamagedBy(OR_03, 3900380, 10000);
    IfConditionGroup(MAIN, PASS, OR_03);
    ForceAnimationPlayback(3900380, 20000, false, true, false, 0, 1);
    SetCharacterAIState(3900380, Enabled);
});

Event(13905381, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetNetworkUpdateRate(3900380, false, CharacterUpdateFrequency.Every5Frames);
    IfCharacterBackreadStatus(AND_01, 3900380, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, 3900380, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(3900380, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfCharacterBackreadStatus(OR_01, 3900380, false, ComparisonType.Equal, 1);
    IfCharacterDeadalive(OR_01, 3900380, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndUnconditionally(EventEndType.Restart);
});

Event(13905415, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfObjactEventFlag(OR_01, X4_4);
    IfObjactEventFlag(OR_01, X8_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayGenericDialog(X24_4, PromptType.OKCANCEL, NumberofOptions.NoButtons, X12_4, 3);
    SetEventFlag(X0_4, ON);
    Label0();
    SetObjactState(X12_4, X16_4, Disabled);
    SetObjactState(X12_4, X20_4, Disabled);
});

Event(13900900, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    CreateObjectfollowingSFX(3901250, 90, 61);
    IfActionButtonInArea(MAIN, 4200, 3901250);
    ForceAnimationPlayback(10000, 60070, false, false, true, 0, 1);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 6073);
    AwardGestureItem(23, ItemType.Goods, 9024);
    AwardItemLot(3900800);
    DeleteObjectfollowingSFX(3901250, true);
    SetEventFlag(6073, ON);
});

Event(13900410, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetEventFlag(13900400, ON);
    SetEventFlag(13900405, ON);
    SetEventFlag(13900410, ON);
});

Event(13900411, Restart, function() {
    InitializeCommonEvent(20005621, 13900400, 13900402, 3901400, 3901401, 3904401, 3901402, 3904402, 3902401, 3902402, 13901400, 13904400, 13900401);
});

Event(13900412, Restart, function() {
    InitializeCommonEvent(20005623, 13900405, 13900407, 3901405, 3901406, 3904406, 3901407, 3904407, 3902406, 3902407, 13901405, 13904405, 13900406);
});

Event(13905420, Default, function() {
    InitializeCommonEvent(20005610, 13900420, 3902420, 3902421);
    InitializeCommonEvent(20005611, 13900420, 3903420, 3901420, 390305);
});

Event(13905425, Default, function() {
    InitializeCommonEvent(20005613, 13900425, 3903425, 3901425, 390340, 10010872);
});

Event(13905430, Default, function() {
    InitializeCommonEvent(20005610, 13900430, 3902430, 3902431);
    InitializeCommonEvent(20005611, 13900430, 3903430, 3901430, 390305);
});

Event(13905435, Default, function() {
    InitializeCommonEvent(20005610, 13900435, 3902435, 3902436);
    InitializeCommonEvent(20005611, 13900435, 3903435, 3901435, 390300);
});

Event(13905440, Default, function() {
    InitializeCommonEvent(20005610, 13900440, 3902440, 3902441);
    InitializeCommonEvent(20005611, 13900440, 3903440, 3901440, 390305);
});

Event(13905445, Default, function() {
    ReproduceObjectAnimation(3901445, 0);
});

Event(13905450, Default, function() {
    InitializeCommonEvent(20005613, 13900450, 3903450, 3901450, 390320, 10010867);
});

Event(13905460, Default, function() {
    InitializeCommonEvent(20005614, 3901460, 63900460);
});

Event(13900465, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetEventFlag(13900500, ON);
    SetEventFlag(13900502, ON);
    SetEventFlag(13900504, ON);
    SetEventFlag(13900505, ON);
    SetEventFlag(13900511, ON);
    SetEventFlag(13900512, ON);
    SetEventFlag(13900514, ON);
    SetEventFlag(13900516, ON);
    SetEventFlag(13900517, ON);
    SetEventFlag(13900518, ON);
    SetEventFlag(13900521, ON);
    SetEventFlag(13900522, ON);
    SetEventFlag(13900526, ON);
    SetEventFlag(13900528, ON);
    SetEventFlag(13900535, ON);
});

Event(13905470, Restart, function() {
    DeleteObjectfollowingSFX(3901470, false);
    CreateObjectfollowingSFX(3901470, 200, 839020);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(3900470, AuthorityLevel.Forced);
});

Event(13905471, Restart, function() {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13900471, OFF);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13905479);
    SetNetworkUpdateRate(3900470, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902471, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902472, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902473, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13900471);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 13900472);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, OR_03);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13900471, ON);
    SetNetworkconnectedEventFlag(13900472, ON);
    SetEventFlag(13900472, OFF);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13905479);
    SpawnOneshotSFX(TargetEntityType.Area, 3902470, -1, 524112);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 50);
    ShootBullet(3900470, 3902470, -1, 5900, 0, 0, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 51);
    ShootBullet(3900470, 3902470, -1, 5901, 0, 0, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 52);
    ShootBullet(3900470, 3902470, -1, 5902, 0, 0, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 53);
    ShootBullet(3900470, 3902470, -1, 5903, 0, 0, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 54);
    ShootBullet(3900470, 3902470, -1, 5904, 0, 0, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 55);
    ShootBullet(3900470, 3902470, -1, 5905, 0, 0, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 56);
    ShootBullet(3900470, 3902470, -1, 5906, 0, 0, 0);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    SetNetworkUpdateRate(3900470, true, CharacterUpdateFrequency.NoUpdate);
    SetCharacterAIState(3900470, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13905475, Restart, function() {
    IfCharacterDeadalive(AND_01, 3900223, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterAIState(AND_01, 3900223, AIStateType.Combat, ComparisonType.NotEqual, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 3900223, 3902475, 1);
    IfConditionGroup(MAIN, FAIL, AND_01);
    SetEventFlag(13905479, ON);
});

Event(13905480, Restart, function() {
    RegisterLadder(13900480, 13900481, 3901480);
    RegisterLadder(13900482, 13900483, 3901481);
    RegisterLadder(13900484, 13900485, 3901482);
    RegisterLadder(13900486, 13900487, 3901483);
    RegisterLadder(13900488, 13900489, 3901484);
    RegisterLadder(13900492, 13900493, 3901486);
    RegisterLadder(13900494, 13900495, 3901487);
    RegisterLadder(13900496, 13900497, 3901488);
    RegisterLadder(13900498, 13900499, 3901489);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 13900860);
    RegisterLadder(13900490, 13900491, 3901485);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 13900860);
    DeactivateObject(3901485, Disabled);
});

Event(13905500, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    SetObjactState(X4_4, 390301, Enabled);
    SetObjactState(X4_4, 390302, Enabled);
    IfObjactEventFlag(OR_01, X8_4);
    IfObjactEventFlag(OR_01, X12_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkconnectedEventFlag(X0_4, ON);
    SetObjactState(X4_4, 390301, Disabled);
    SetObjactState(X4_4, 390302, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    ReproduceObjectAnimation(X4_4, 0);
    SetObjactState(X4_4, 390301, Disabled);
    SetObjactState(X4_4, 390302, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13905620, Restart, function(X0_4, X4_4, X8_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X4_4);
    ForceAnimationPlayback(X0_4, 200, true, false, true, 0, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X0_4, 201, false, true, false, 0, 1);
    SetEventFlag(X8_4, ON);
    Label0();
    ForceAnimationPlayback(X0_4, 202, true, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
});

// Karla - Pre-setup
Event(13905700, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1275, 1279);
    BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
    SetNetworkconnectedEventFlag(1275, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1276);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000065);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
    SetNetworkconnectedEventFlag(1275, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1260, 1274);
    BatchSetNetworkconnectedEventFlags(1260, 1274, OFF);
    SetNetworkconnectedEventFlag(1260, ON);
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 1275);
    
    Label9();
    SetEventFlag(70000065, OFF);
    
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1260);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1278);
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    Label1();
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

// Siegward - Setup
Event(13905720, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL20, true);
    
    // Set as Passive unless Hostile/Dead
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1395, 1399);
    BatchSetNetworkconnectedEventFlags(1395, 1399, OFF);
    SetNetworkconnectedEventFlag(1395, ON); // Siegward - Passive
    
    // Set as Passive if not hostile/sinned
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1396);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 70000071);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_15);
    BatchSetNetworkconnectedEventFlags(1395, 1399, OFF);
    SetNetworkconnectedEventFlag(1395, ON); // Siegward - Passive
    
    // 
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 1395);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 73900164);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_14);
    BatchSetNetworkconnectedEventFlags(1395, 1399, OFF);
    SetNetworkconnectedEventFlag(1398, ON);
    
    // If all stages are off (i.e. completed), set as dead.
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1380, 1394);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1380, ON); // Siegward - Dead
    
    // Goto Label 19 if Siegward is not Passive
    GotoIfEventFlag(Label.LABEL19, OFF, TargetEventFlagType.EventFlag, 1395);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1384); // Siegward - Stage: Returned Armor 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1385); // Siegward - Stage: Moved to Irithyll
    IfConditionGroup(AND_02, PASS, OR_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 140); // Loaded Firelink
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73700201); // Siegward Quest - Gifted Emit Force
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1386, ON); // Siegward - Stage: Profaned Capital Cell
    
    // 
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1386); // // Siegward - Stage: Profaned Capital Cell
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 73900152);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1387);
    IfConditionGroup(AND_04, PASS, OR_02);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 73100364); // Siegward Quest - Toast Speech
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 73700203);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 73500105); // Siegward Quest - Returned Armor (Process)
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 9318); // Not Killed Yhorm the Giant
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1388, ON);
    
    // 
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1386); // Siegward - Stage: Profaned Capital Cell
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 9318); // Killed Yhorm the Giant
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 73900152);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1390, ON);
    
    // 
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1388);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 9318);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1389, ON);
    
    // 
    Label19();
    SetEventFlag(70000071, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1395);
    SetEventFlag(73900199, OFF);
    
    // 
    Label20();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1386);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1388);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1389);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1396);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1398);
    ForceAnimationPlayback(X0_4, 90890, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL20, ON, TargetEventFlagType.EventFlag, 13900722);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1398);
    SetCharacterTeamType(X4_4, TeamType.WhitePhantom);
    SetCharacterAIState(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ForceCharacterTreasure(X4_4);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1398);
    SetCharacterTeamType(X4_4, TeamType.WhitePhantom);
    ForceAnimationPlayback(X4_4, 90850, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Siegward - Toggle Cell State
Event(13900721, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1396, 1398);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1386);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73900152);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73100364); // Siegward Quest - Toast Speech
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73700203);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73500105);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3902710, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1388, ON);
    ChangeCharacterEnableState(3900705, Disabled); // Siegward (Cell)
    SetCharacterBackreadState(3900705, true); // Siegward (Cell)
});

Event(13900723, Restart, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73900164);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 10000, X0_4, X4_4, 1);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1395);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceCharacterDeath(X0_4, true);
    BatchSetNetworkconnectedEventFlags(1380, 1399, OFF);
    SetNetworkconnectedEventFlag(1389, ON);
    SetNetworkconnectedEventFlag(1398, ON);
});

// Siegward (Yhorm) - Disable
Event(13905725, Restart, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 9318);
    ClearCharactersAITarget(3900706); 
    RequestCharacterAIReplan(3900706);
    SetCharacterAIState(3900706, Disabled);
});

// Siegward (Yhorm) - Yhorm Fight
Event(13900726, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfCharacterHPRatio(AND_01, 3900800, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1388);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    RequestCharacterAICommand(3900706, 20, 1); 
    RequestCharacterAIReplan(3900706);
    WaitFixedTimeSeconds(2);
    IfCharacterHasSpeffect(OR_01, 3900706, 150, false, ComparisonType.Equal, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1396);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1396);
    EzstateInstructionRequest(3900706, 2100, 1);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1396);
    IfCharacterHasSpeffect(OR_02, 3900706, 150, true, ComparisonType.Equal, 1);
    IfElapsedSeconds(OR_02, 0.5);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1396);
    EndUnconditionally(EventEndType.Restart);
});

// Siegward (Yhorm) - Effect Check
Event(13905727, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(73900180, ON);
    IfCharacterHasSpeffect(MAIN, 3900706, 153, false, ComparisonType.Equal, 1);
    SetEventFlag(73900180, OFF);
    IfCharacterHasSpeffect(MAIN, 3900706, 153, true, ComparisonType.Equal, 1);
    EndUnconditionally(EventEndType.Restart);
});

// Siegward (Yhorm) - Position Check
Event(13905728, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(73900155, OFF);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3902712, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3902713, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(73900155, ON);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902712, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3902713, 1);
    IfConditionGroup(MAIN, FAIL, OR_02);
    SetEventFlag(73900155, OFF);
    EndUnconditionally(EventEndType.Restart);
});

Event(13900729, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1383);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73500105);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1385); // Siegward - Stage: Moved to Irithyll
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1395);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 140);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73700201);
    IfCharacterBackreadStatus(AND_01, 3700715, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1386, ON);
    ChangeCharacterEnableState(3700715, Disabled);
    SetCharacterBackreadState(3700715, true);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90890, false, false, true, 0, 1);
});

// Yhorm - Boss Start
Event(13905810, Restart, function() {
    SetEventFlag(13900724, OFF); // Phantom Progress flag
    
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13900800);
    ChangeCharacterEnableState(3900800, Disabled);
    ForceCharacterDeath(3900800, false);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    SetCharacterAIState(3900800, Disabled);
    SetCharacterMaphit(3900800, true);
    SetCharacterGravity(3900800, Disabled);
    SetCharacterAnimationState(3900706, Disabled);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1388);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1395);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 13900722);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_03);
    ForceAnimationPlayback(3900800, 30000, false, false, false, 0, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13905805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3902800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(13900801, ON);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    IfCharacterInvadeType(OR_01, 10000, 4, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_01, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_01, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1388);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1395);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    WaitFixedTimeSeconds(1.5);
    ForceAnimationPlayback(3900800, 20010, false, false, false, 0, 1);
    SetCharacterMaphit(3900800, false);
    SetCharacterGravity(3900800, Enabled);
    SetCharacterAIState(3900800, Enabled);
    SetNetworkUpdateRate(3900800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 3900800, 0, 905260);
    SetEventFlag(13905812, ON);
    SetNetworkconnectedEventFlag(13905730, ON);
    SetEventFlag(13900724, ON); // Phantom Progress flag
    InitializeCommonEvent(20020110, 0); // Boss Start
    EndUnconditionally(EventEndType.End);
    
    Label2();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13900722);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13905730);
    WaitFixedTimeSeconds(1);
    PlayCutsceneToPlayer(39000020, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(13900722, ON);
    
    Label1();
    IssueShortWarpRequest(3900800, TargetEntityType.Area, 3902711, -1);
    SetCharacterMaphit(3900800, false);
    SetCharacterGravity(3900800, Enabled);
    ForceAnimationPlayback(3900800, 20, true, false, false, 0, 1);
    SetCharacterAIState(3900800, Enabled);
    SetNetworkUpdateRate(3900800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 3900800, 0, 905260);
    SetEventFlag(13905812, ON);
    SetNetworkconnectedEventFlag(13905730, ON);
    ChangeCharacterEnableState(3900706, Enabled);
    SetCharacterBackreadState(3900706, false);
    SetCharacterTeamType(3900706, TeamType.WhitePhantom);
    SetCharacterTalkRange(3900706, 100);
    SetCharacterAIState(3900706, Enabled);
    SetCharacterEventTarget(3900706, 3900800);
    RequestCharacterAIReplan(3900706);
    SetCharacterAnimationState(3900706, Enabled);
    SetEventFlag(13900724, ON); // Phantom Progress flag
    InitializeCommonEvent(20020110, 0); // Boss Start
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkUpdateRate(3900706, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateAuthority(3900706, AuthorityLevel.Forced);
});

// Yhorm Kill
Event(13905811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfCharacterHPRatio(MAIN, 3900800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(3900800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 3900800, DeathState.Dead, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(4.5);
    HandleBossDefeatAndDisplayBanner(3900800, TextBannerType.LordofCinderFallen);
    SetEventFlag(13900800, ON);
    SetEventFlag(9318, ON);
    SetEventFlag(6318, ON);
    ChangeCamera(-1, -1);
    InitializeCommonEvent(20020000, 25001011, 25002011, 800300010, 800300020); // Boss Kill
});

// Yhorm - Event State
Event(13905815, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfCharacterHasEventMessage(MAIN, 3900800, 500, true, ComparisonType.Equal, 1);
    SetEventFlag(13905815, ON);
    EndUnconditionally(EventEndType.End);
});

// Yhorm - Map SFX
Event(13905816, Restart, function() {
    DeleteMapSFX(3904810, false);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13905815);
    SpawnMapSFX(3904810);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13900800);
    DeleteMapSFX(3904810, true);
});

// Yhorm - Boss Setup
Event(13905820, Restart, function() {
    InitializeCommonEvent(20005800, 13900800, 3901800, 3902800, 13905805, 3901800, 3900800, 0, 0);
    InitializeCommonEvent(20005801, 13900800, 3901800, 3902800, 13905730, 3901800, 13905806);
    InitializeCommonEvent(20005820, 13900800, 3901800, 3, 0);
    InitializeCommonEvent(20001836, 13900800, 13905805, 13905806, 13905812, 3904801, 3904802, 13905815);
    InitializeCommonEvent(20005837, 13900800, 3900800, 1088421888, 5260, 5260, 13905805, 13905806);
    InitializeCommonEvent(20005810, 13900800, 3901800, 3902800, 10000);
    
    // Yhorm Area Bullets
    InitializeEvent(0, 13905211, 3900930); // Rubble Rain
    InitializeEvent(0, 13905212, 3900930); // Earth Pillar
    InitializeEvent(0, 13905213, 3900930); // Flame Pillar
});

// Yhorm - Stagger State based on Part
Event(13905830, Restart, function(X0_2, X2_2, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    CreateNPCPart(3900800, X0_2, X2_2, X4_4, 1, 1, false, false);
    IfNPCPartHP(MAIN, 3900800, X8_4, 0, ComparisonType.LessOrEqual);
    GotoIfCharacterHasSpeffect(Label.LABEL0, 3900800, 5034, true, ComparisonType.Equal, 1);
    ForceAnimationPlayback(3900800, X12_4, false, false, true, 0, 1);
    Label0();
    WaitFixedTimeFrames(10);
    EndUnconditionally(EventEndType.Restart);
});

// Yhorm - Walk toward Player upon entry
Event(13905835, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfCharacterHasSpeffect(AND_01, 3900800, 6071, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, 3900800, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfCharacterHasSpeffect(Label.LABEL0, 3900800, 5034, true, ComparisonType.Equal, 1);
    ForceAnimationPlayback(3900800, 20002, false, false, true, 0, 1);
    Label0();
    WaitFixedTimeFrames(10);
    EndUnconditionally(EventEndType.Restart);
});

// Yhorm - Apply SpEffect upon entry
Event(13905840, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 3902800, 1);
    SetSpeffect(10000, 4510);
    SetSpeffect(3900706, 4510);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

// Yhorm - Handle Storm Ruler Stagger
Event(13905850, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfDamageType(AND_01, 3900800, -1, DamageType.Unspecified);
    IfCharacterHPRatio(AND_01, 3900800, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterHPRatio(AND_02, 3900800, ComparisonType.LessOrEqual, 0.79, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_02, 3900800, 11421, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfCharacterHasSpeffect(AND_03, 3900800, 5404, false, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_03, 3900800, 5034, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_03);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(3900800, 20005, false, false, true, 0, 1);
});

// Yhorm - Handle Storm Ruler Damage
Event(13905860, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfCharacterHasSpeffect(AND_01, 3900800, 11421, true, ComparisonType.Equal, 1);
    IfDamageType(OR_01, 3900800, 10000, DamageType.Unspecified);
    IfDamageType(OR_02, 3900800, 3900706, DamageType.Unspecified);
    IfConditionGroup(OR_03, PASS, OR_01);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, OR_02);
    SetSpeffect(3900800, 11430); // Storm Ruler Debuff
    WaitFixedTimeFrames(15);
    EndUnconditionally(EventEndType.Restart);
});

// Yhorm - Handle Clients
Event(13905861, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13905805);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfNumberOfCoopClients(Label.LABEL0, ComparisonType.Equal, 0);
    GotoIfNumberOfCoopClients(Label.LABEL1, ComparisonType.Equal, 1);
    GotoIfNumberOfCoopClients(Label.LABEL2, ComparisonType.Equal, 2);
    GotoIfNumberOfCoopClients(Label.LABEL3, ComparisonType.Equal, 3);
    Label0();
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1388);
    SetNetworkconnectedEventFlag(13905862, ON);
    GotoUnconditionally(Label.LABEL20);
    Label1();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1388);
    SetNetworkconnectedEventFlag(13905863, ON);
    SkipUnconditionally(1);
    SetNetworkconnectedEventFlag(13905862, ON);
    GotoUnconditionally(Label.LABEL20);
    Label2();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1388);
    SetNetworkconnectedEventFlag(13905864, ON);
    SkipUnconditionally(1);
    SetNetworkconnectedEventFlag(13905863, ON);
    GotoUnconditionally(Label.LABEL20);
    Label3();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1388);
    SetNetworkconnectedEventFlag(13905865, ON);
    SkipUnconditionally(1);
    SetNetworkconnectedEventFlag(13905864, ON);
    GotoUnconditionally(Label.LABEL20);
    Label20();
    EndUnconditionally(EventEndType.End);
});

// Yhorm - Handle Storm Ruler treasure
Event(13905870, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X0_4, Disabled);
    SetObjectTreasureState(X0_4, Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13900800);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 3902890, 1);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370000, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370001, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370002, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370003, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370004, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370005, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370006, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370007, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370008, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370009, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItemIncludingBbox(OR_01, ItemType.Weapon, 6370010, OwnershipState.Owns);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 53900820);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    SetObjectTreasureState(X0_4, Enabled);
});

// Path of the Dragon - Warp to Archdragon Peak
Event(13905900, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfCharacterType(OR_15, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_15, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_15);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3902900, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 4400, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfElapsedSeconds(OR_01, 6);
    IfCharacterHasSpeffect(OR_01, 10000, 4400, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfCharacterHasSpeffect(EventEndType.Restart, 10000, 4400, false, ComparisonType.Equal, 1);
    EndIfMultiplayerState(EventEndType.Restart, MultiplayerState.TryingtoCreateSession);
    EndIfMultiplayerState(EventEndType.Restart, MultiplayerState.TryingtoJoinSession);
    PlayCutsceneAndWarpPlayer(39000010, CutscenePlayMode.Skippable, 3202900, 32, 0, 10000);
    SetPlayerRespawnPoint(3202900);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Fallen Protector - Setup
// ----------------------------------------
Event(13905910, Restart, function() {
    var entity_FallenProtector = 3900860;
    var entity_Maiden          = 3900862;
    
    var trigger_FallenProtector_FogwallZone = 3902960;
    
    var flag_FallenProtector_Defeated   = 13900860;
    var flag_FallenProtector_InBattle   = 13905865;
    var flag_FallenProtector_InProgress = 13900861;
    
    var name_FallenProtector        = 207080;
    var name_FallenProtector_Maiden = 207081;
    
    // Disable at init
    SetCharacterAIState(entity_FallenProtector, Disabled);
    ChangeCharacterEnableState(entity_FallenProtector, Disabled);
    SetCharacterAnimationState(entity_FallenProtector, Disabled);
    SetCharacterAIState(entity_Maiden, Disabled);
    ChangeCharacterEnableState(entity_Maiden, Disabled);
    SetCharacterAnimationState(entity_Maiden, Disabled);
    
    // Disable lockon
    SetLockOnPoint(entity_FallenProtector, 220, Disabled);
    
    // End function if Fallen Protector has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
    
    // State of area before boss if it hasn't been killed
    ChangeCharacterEnableState(entity_FallenProtector, Enabled);
    
    // Wait for boss to be triggered
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_InBattle);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_FallenProtector_FogwallZone, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WaitFixedTimeSeconds(0.5);
    
    SetLockOnPoint(entity_FallenProtector, 220, Enabled);
    IssueBossRoomEntryNotification(0);

    SetEventFlag(flag_FallenProtector_InProgress, ON);
    
    // Enable Fallen Protector
    ChangeCharacterEnableState(entity_FallenProtector, Enabled);
    SetCharacterAnimationState(entity_FallenProtector, Enabled);
    SetCharacterAIState(entity_FallenProtector, Enabled);
    SetCharacterGravity(entity_FallenProtector, Enabled);
    
    // Enable Maiden
    SetCharacterAIState(entity_Maiden, Enabled);
    ChangeCharacterEnableState(entity_Maiden, Enabled);
    SetCharacterAnimationState(entity_Maiden, Enabled);
    SetNetworkUpdateRate(entity_Maiden, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, entity_Maiden, 1, name_FallenProtector_Maiden);
    
    SetNetworkUpdateRate(entity_FallenProtector, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_FallenProtector);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_FallenProtector, AuthorityLevel.Forced);
    
    DisplayBossHealthBar(Enabled, entity_FallenProtector, 0, name_FallenProtector);
    InitializeCommonEvent(20020132, 0); // Boss Start
});

// ----------------------------------------
// Fallen Protector - Kill
// ----------------------------------------
Event(13905911, Default, function() {
    var entity_FallenProtector = 3900860;
    var entity_Maiden          = 3900862;
    
    var flag_FallenProtector_Defeated   = 13900860;
    var flag_FallenProtector_InProgress = 13900861;
    
    var obj_FallenProtector_Fogwall1 = 3901790;
    var obj_FallenProtector_Fogwall2 = 3901791;
    var obj_FallenProtector_Fogwall3 = 3901792;
    var obj_FallenProtector_Fogwall4 = 3901793;
    
    // End function if Fallen Protector has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
   
    IfCharacterHPRatio(AND_01, entity_Maiden, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_02, entity_Maiden, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_02, entity_FallenProtector, 11657, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_02);
    
    ForceAnimationPlayback(entity_FallenProtector, 20001, false, false, true, 0, 1);
    WaitFixedTimeSeconds(7.5);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    ForceAnimationPlayback(entity_FallenProtector, 20002, false, false, true, 0, 1);
    WaitFixedTimeSeconds(8);
    
    Label2();
    PlaySE(entity_FallenProtector, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(1);
    
    ChangeCharacterEnableState(entity_FallenProtector, Disabled);
    ChangeCharacterEnableState(entity_Maiden, Disabled);
    SetCharacterAnimationState(entity_FallenProtector, Disabled);
    SetCharacterAnimationState(entity_Maiden, Disabled);
    
    WaitFixedTimeSeconds(5);
    
    HandleBossDefeatAndDisplayBanner(entity_FallenProtector, TextBannerType.HeirofFireDestroyed);
    
    SetEventFlag(flag_FallenProtector_Defeated, ON);
    SetEventFlag(flag_FallenProtector_InProgress, OFF);
    SetEventFlag(9346, ON);
    SetEventFlag(6346, ON);
    
    InitializeCommonEvent(20020000, 25001033, 25002033, 800300020, 800300030); // Boss Kill
    
    // Enable the chapel ladder
    DeactivateObject(3901485, Enabled);
    RegisterLadder(13900490, 13900491, 3901485);
});


// ----------------------------------------
// Fallen Protector - Fogwalls
// ----------------------------------------
Event(13905912, Restart, function() {
    var sound_FallenProtector_BGM = 3904820;

    var trigger_FallenProtector_FogwallZone = 3902960;
    
    var flag_FallenProtector_Defeated    = 13900860;
    var flag_FallenProtector_InBattle    = 13905865;
    var flag_FallenProtector_InProgress  = 13900861;
    var flag_FallenProtector_ClientEnter = 13905866;
    var flag_FallenProtector_BossStart   = 13905910; // Event ID flag
    
    var param_FallenProtector_ActionButton = 3901800;
    
    // Enter Boss Zone
    InitializeCommonEvent(20005805, flag_FallenProtector_Defeated, trigger_FallenProtector_FogwallZone, trigger_FallenProtector_FogwallZone, flag_FallenProtector_InBattle, param_FallenProtector_ActionButton, 0, 0, trigger_FallenProtector_FogwallZone);
    
    // Enter Boss Zone (Client)
    InitializeCommonEvent(20005806, flag_FallenProtector_Defeated, trigger_FallenProtector_FogwallZone, trigger_FallenProtector_FogwallZone, flag_FallenProtector_InBattle, param_FallenProtector_ActionButton, flag_FallenProtector_ClientEnter);
    
    // Boss Sound State
    InitializeCommonEvent(20001834, flag_FallenProtector_Defeated, flag_FallenProtector_InBattle, flag_FallenProtector_BossStart, sound_FallenProtector_BGM);
});

// ----------------------------------------
// Fallen Protector - Invalidation
// ----------------------------------------
Event(13905913, Restart, function() {
    var trigger_FallenProtector_InvalidationZone = 3902940;
    
    var entity_PlayerPoint = 3900971;
    var entity_SpawnPoint  = 3902951;
    
    var flag_FallenProtector_Defeated   = 13900860;
    var flag_FallenProtector_InProgress = 13900861;
    
    var mapID      = 39;
    var blockID    = 0;
    var ceremonyID = 0;
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
    // End function if not started
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_FallenProtector_InProgress);
    
    // Warp player outside of arena if in invalidation zone
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_InProgress);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_FallenProtector_InvalidationZone, 1);
    SkipIfConditionGroupStateUncompiled(7, FAIL, AND_01);
    
    SetEventFlag(flag_FallenProtector_InProgress, OFF);
    SetPlayerRespawnPoint(entity_SpawnPoint);
    SetMapCeremony(mapID, blockID, ceremonyID);
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    // Fallback
    SetEventFlag(flag_FallenProtector_InProgress, OFF);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Fallen Protector - Maiden - Gravity/Animation State
// ----------------------------------------
Event(13905914, Restart, function() {
    var entity_FallenProtector = 3900860;
    var entity_Maiden          = 3900862;
    
    var flag_FallenProtector_WarpProcess = 13900862;
    
    SetEventFlag(flag_FallenProtector_WarpProcess, OFF);
    
    // Wait for Character Attachment SpEffect
    IfCharacterHasSpeffect(MAIN, entity_FallenProtector, 11651, true, ComparisonType.Equal, 1);
    SetEventFlag(flag_FallenProtector_WarpProcess, ON);
    
    // Disable Maiden 
    SetCharacterGravity(entity_Maiden, Disabled);
    SetCharacterAnimationState(entity_Maiden, Disabled);
    
    // Wait for Character Attachment SpEffect to be removed
    IfCharacterHasSpeffect(MAIN, entity_FallenProtector, 11651, false, ComparisonType.Equal, 1);
    
    // Enable Maiden 
    SetCharacterGravity(entity_Maiden, Enabled);
    SetCharacterAnimationState(entity_Maiden, Enabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Fallen Protector - Warp Maiden to Fallen Protector
// ----------------------------------------
Event(13905915, Restart, function() {
    var entity_FallenProtector = 3900860;
    var entity_Maiden          = 3900862;
    
    var flag_FallenProtector_WarpProcess = 13900862;
    
    // Wait for Warp Process flag
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_WarpProcess);
    
    // Warp Maiden to Fallen Protector
    WarpCharacterAndCopyFloor(entity_Maiden, TargetEntityType.Character, entity_FallenProtector, 50, entity_FallenProtector);
    
    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Fallen Protector - Warp Maiden to Fallen Protector
// ----------------------------------------
Event(13905916, Restart, function() {
    var entity_FallenProtector = 3900860;
    var entity_Maiden          = 3900862;
    
    var flag_FallenProtector_Defeated   = 13900860;
    var flag_FallenProtector_InProgress = 13900861;
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
    SetCharacterImmortality(entity_FallenProtector, Enabled);
    
    IfCharacterHPRatio(AND_01, entity_FallenProtector, ComparisonType.Less, 0.01, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, entity_FallenProtector, 11603, false, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, entity_Maiden, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHPRatio(AND_02, entity_Maiden, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    
    ForceAnimationPlayback(entity_Maiden, 20000, false, false, true, 0, 1);
    ForceAnimationPlayback(entity_FallenProtector, 20000, false, true, true, 0, 1);
    
    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Fallen Protector - Fogwall Monitor
// ----------------------------------------
Event(13905917, Restart, function() {
    var obj_FallenProtector_Fogwall1 = 3901790;
    var obj_FallenProtector_Fogwall2 = 3901791;
    var obj_FallenProtector_Fogwall3 = 3901792;
    var obj_FallenProtector_Fogwall4 = 3901793;
    
    var trigger_FallenProtector_FogwallZone = 3902960;
    
    var flag_FallenProtector_Defeated    = 13900860;
    var flag_FallenProtector_InBattle    = 13905865;
    
    DeactivateObject(obj_FallenProtector_Fogwall1, Disabled);
    DeactivateObject(obj_FallenProtector_Fogwall2, Disabled);
    DeactivateObject(obj_FallenProtector_Fogwall3, Disabled);
    DeactivateObject(obj_FallenProtector_Fogwall4, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_InBattle);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_FallenProtector_FogwallZone, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    // Enable fogwalls
    DeactivateObject(obj_FallenProtector_Fogwall1, Enabled);
    DeactivateObject(obj_FallenProtector_Fogwall2, Enabled);
    DeactivateObject(obj_FallenProtector_Fogwall3, Enabled);
    DeactivateObject(obj_FallenProtector_Fogwall4, Enabled);
    CreateObjectfollowingSFX(obj_FallenProtector_Fogwall1, 101, 3);
    CreateObjectfollowingSFX(obj_FallenProtector_Fogwall2, 101, 3);
    CreateObjectfollowingSFX(obj_FallenProtector_Fogwall3, 101, 3);
    CreateObjectfollowingSFX(obj_FallenProtector_Fogwall4, 101, 3);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
    
    DeactivateObject(obj_FallenProtector_Fogwall1, Disabled);
    DeactivateObject(obj_FallenProtector_Fogwall2, Disabled);
    DeactivateObject(obj_FallenProtector_Fogwall3, Disabled);
    DeactivateObject(obj_FallenProtector_Fogwall4, Disabled);
    DeleteObjectfollowingSFX(obj_FallenProtector_Fogwall1, true);
    DeleteObjectfollowingSFX(obj_FallenProtector_Fogwall2, true);
    DeleteObjectfollowingSFX(obj_FallenProtector_Fogwall3, true);
    DeleteObjectfollowingSFX(obj_FallenProtector_Fogwall4, true);
});

// ----------------------------------------
// Fallen Protector - Fallen Protector Corpse
// ----------------------------------------
Event(13905918, Restart, function() {
    var flag_FallenProtector_Defeated = 13900860;
    
    var obj_Corpse = 3901960;
    
    SetObjectTreasureState(obj_Corpse, Disabled);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_FallenProtector_Defeated);
    
    SetObjectTreasureState(obj_Corpse, Enabled);
});

// ----------------------------------------
// Phantoms
// ----------------------------------------
Event(13907000, Default, function() {
    // Sellsword Luet
    InitializeCommonEvent(20090100, 3902765, 13900765, -1, 60000); // Interaction State
    InitializeCommonEvent(20090101, 3900765, 13900765, 99071010, 160737100); // Character State
    InitializeCommonEvent(20090102, 13900765, 13900724, 3900765, 3902766); // Boss Warp - Yhorm
    InitializeCommonEvent(20090102, 13900765, 13900861, 3900765, 3902767); // Boss Warp - Fallen Protector
    InitializeCommonEvent(20090103, 13900765, 3900765, 3902770, 3902771); // Collision Transition Warp 1
    InitializeCommonEvent(20090103, 13900765, 3900765, 3902772, 3902773); // Collision Transition Warp 2
    InitializeCommonEvent(20090103, 13900765, 3900765, 3902774, 3902775); // Collision Transition Warp 3
});

// ----------------------------------------
// Spell Summons
// ----------------------------------------
Event(13907100, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 3900750); // Setup
    InitializeCommonEvent(20080001, 3900750); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900750); // Tools
    InitializeCommonEvent(20080003, 3900750); // Effects
    InitializeCommonEvent(20080005, 3900750);
    InitializeCommonEvent(20080006, 3900750);
    InitializeCommonEvent(20080004, 3900750, 160760000, 160760208, 39, 0); // Summoning
    
    // Hollow
    InitializeCommonEvent(20080000, 3900751); // Setup
    InitializeCommonEvent(20080001, 3900751); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900751); // Tools
    InitializeCommonEvent(20080003, 3900751); // Effects
    InitializeCommonEvent(20080005, 3900751);
    InitializeCommonEvent(20080006, 3900751);
    InitializeCommonEvent(20080004, 3900751, 160760001, 160760208, 39, 0); // Summoning
    
    // Hound
    InitializeCommonEvent(20080000, 3900752); // Setup
    InitializeCommonEvent(20080001, 3900752); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900752); // Tools
    InitializeCommonEvent(20080003, 3900752); // Effects
    InitializeCommonEvent(20080005, 3900752);
    InitializeCommonEvent(20080006, 3900752);
    InitializeCommonEvent(20080004, 3900752, 160760002, 160760208, 39, 0); // Summoning
    
    // Carthus Warrior
    InitializeCommonEvent(20080000, 3900753); // Setup
    InitializeCommonEvent(20080001, 3900753); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900753); // Tools
    InitializeCommonEvent(20080003, 3900753); // Effects
    InitializeCommonEvent(20080005, 3900753);
    InitializeCommonEvent(20080006, 3900753);
    InitializeCommonEvent(20080004, 3900753, 160760003, 160760208, 39, 0); // Summoning
    
    // Lothric Knight
    InitializeCommonEvent(20080000, 3900754); // Setup
    InitializeCommonEvent(20080001, 3900754); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900754); // Tools
    InitializeCommonEvent(20080003, 3900754); // Effects
    InitializeCommonEvent(20080005, 3900754);
    InitializeCommonEvent(20080006, 3900754);
    InitializeCommonEvent(20080004, 3900754, 160760004, 160760208, 39, 0); // Summoning
    
    // Lycanthrope
    InitializeCommonEvent(20080000, 3900755); // Setup
    InitializeCommonEvent(20080001, 3900755); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900755); // Tools
    InitializeCommonEvent(20080003, 3900755); // Effects
    InitializeCommonEvent(20080005, 3900755);
    InitializeCommonEvent(20080006, 3900755);
    InitializeCommonEvent(20080004, 3900755, 160760005, 160760208, 39, 0); // Summoning
    
    // Black Knight
    InitializeCommonEvent(20080000, 3900756); // Setup
    InitializeCommonEvent(20080001, 3900756); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900756); // Tools
    InitializeCommonEvent(20080003, 3900756); // Effects
    InitializeCommonEvent(20080005, 3900756);
    InitializeCommonEvent(20080006, 3900756);
    InitializeCommonEvent(20080004, 3900756, 160760006, 160760208, 39, 0); // Summoning
    
    // Abyss Watcher
    InitializeCommonEvent(20080000, 3900757); // Setup
    InitializeCommonEvent(20080001, 3900757); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900757); // Tools
    InitializeCommonEvent(20080003, 3900757); // Effects
    InitializeCommonEvent(20080005, 3900757);
    InitializeCommonEvent(20080006, 3900757);
    InitializeCommonEvent(20080004, 3900757, 160760007, 160760208, 39, 0); // Summoning
    
    // Stone Gargoyle
    InitializeCommonEvent(20080000, 3900758); // Setup
    InitializeCommonEvent(20080001, 3900758); // Bonfire Rest
    InitializeCommonEvent(20080002, 3900758); // Tools
    InitializeCommonEvent(20080003, 3900758); // Effects
    InitializeCommonEvent(20080005, 3900758);
    InitializeCommonEvent(20080006, 3900758);
    InitializeCommonEvent(20080004, 3900758, 160760008, 160760208, 39, 0); // Summoning
});
