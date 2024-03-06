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
    InitializeEvent(0, 13807000, 0);
    
    // Ladders
    RegisterLadder(13800402, 13800540, 3801540);

    // Demon Cleric - Fireball NPCs
    InitializeCommonEvent(20005440, 3800340, 3800600, 10);
    InitializeCommonEvent(20005440, 3800340, 3800601, 20);
    InitializeCommonEvent(20005440, 3800340, 3800602, 30);

    InitializeCommonEvent(20005440, 3800342, 3800606, 10);
    InitializeCommonEvent(20005440, 3800342, 3800607, 20);
    InitializeCommonEvent(20005440, 3800342, 3800608, 30);

    InitializeCommonEvent(20005440, 3800343, 3800609, 10);
    InitializeCommonEvent(20005440, 3800343, 3800610, 20);
    InitializeCommonEvent(20005440, 3800343, 3800611, 30);

    InitializeCommonEvent(20005440, 3800344, 3800612, 10);
    InitializeCommonEvent(20005440, 3800344, 3800613, 20);
    InitializeCommonEvent(20005440, 3800344, 3800614, 30);

    InitializeCommonEvent(20005440, 3800345, 3800615, 10);
    InitializeCommonEvent(20005440, 3800345, 3800616, 20);
    InitializeCommonEvent(20005440, 3800345, 3800617, 30);

    InitializeCommonEvent(20005440, 3800346, 3800618, 10);
    InitializeCommonEvent(20005440, 3800346, 3800619, 20);
    InitializeCommonEvent(20005440, 3800346, 3800620, 30);

    InitializeCommonEvent(20005440, 3800347, 3800621, 10);
    InitializeCommonEvent(20005440, 3800347, 3800622, 20);
    InitializeCommonEvent(20005440, 3800347, 3800623, 30);

    InitializeCommonEvent(20005440, 3800348, 3800624, 10);
    InitializeCommonEvent(20005440, 3800348, 3800625, 20);
    InitializeCommonEvent(20005440, 3800348, 3800626, 30);

    InitializeCommonEvent(20005440, 3800349, 3800627, 10);
    InitializeCommonEvent(20005440, 3800349, 3800628, 20);
    InitializeCommonEvent(20005440, 3800349, 3800629, 30);

    InitializeCommonEvent(20005500, 13800830, 13800004, 3800954, 3801954); // Bonfire - After Event
    InitializeCommonEvent(20005119, 3805389, 3802322, 3802323, 3802324, 0, 0, 0, 0); // Patrol Leader
    InitializeCommonEvent(20005119, 3805384, 3802320, 3802321, 0, 0, 0, 0, 0); // Patrol Leader
    InitializeCommonEvent(20005110, 3800300, 3802201); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3800301, 3802205); // Enemy - Wake-up
    InitializeEvent(0, 13805240, 3800302, 3800305, 3803240); // Patrol - Update in Combat
    InitializeEvent(1, 13805240, 3800305, 3800302, 3803241); // Patrol - Update in Combat
    InitializeEvent(0, 13805245, 3800311, 3803250, 3803251); // Patrol - Update on SpEffect
    InitializeEvent(1, 13805245, 3800312, 3803252, 3803253); // Patrol - Update on SpEffect
    InitializeCommonEvent(20005120, 3800320, 1108082688); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3800321, 3802230); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 3800323, 1080033280); // Enemy - Wake-up
    InitializeCommonEvent(20005140, 3800291, 3802204, 3800292); // Enemy - Wake-up
    InitializeCommonEvent(20005140, 3800292, 3802204, 3800291); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 3800200, 700, 1700, 1082130432, 3802291); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 3800201, 700, 1700, 1077936128, 3802291); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800202, 700, 1700, 3802291, 1066192077); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800203, 700, 1700, 3802291, 1067869798); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800204, 700, 1700, 3802291, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800205, 700, 1700, 3802291, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800206, 700, 1700, 3802291, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800207, 700, 1700, 3802291, 1074580685); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800208, 700, 1700, 3802291, 1074580685); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800209, 700, 1700, 3802291, 1058642330); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800210, 700, 1700, 3802291, 1056964608); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800211, 700, 1700, 3802291, 1066192077); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800212, 700, 1700, 3802291, 1066192077); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800213, 700, 1700, 3802291, 1067030938); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800214, 700, 1700, 3802291, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800215, 700, 1700, 3802291, 1070386381); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800216, 700, 1700, 3802291, 1075000115); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800217, 700, 1700, 3802291, 1077097267); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800218, 700, 1700, 3802291, 1071225242); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800219, 700, 1700, 3802291, 1067030938); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800220, 700, 1700, 3802291, 1078774989); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800221, 700, 1700, 3802291, 1081291571); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800222, 700, 1700, 3802291, 1080452710); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800223, 700, 1700, 3802291, 1080452710); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800224, 700, 1700, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800225, 700, 1700, 1084227584); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800228, 700, 1700, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800229, 700, 1700, 1085276160); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 3800240, 700, 1700); // Enemy - Wake-up
    InitializeCommonEvent(20005222, 3800241, 700, 1700, 1090519040, 1073741824); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800243, 700, 1700, 1095761920); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800245, 700, 1700, 3802272, 1036831949); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800246, 700, 1700, 3802272, 0); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 3800248, 700, 1700, 3802206); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800249, 700, 1700, 3802202, 1086324736); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800254, 700, 1700, 1086324736); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800255, 700, 1700, 3802281, 0); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800256, 700, 1700, 3802281, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800257, 700, 1700, 3802281, 1073741824); // Enemy - Wake-up
    InitializeCommonEvent(20005320, 3800257, 3802282, 3803230); // Patrol - Update in Area
    InitializeCommonEvent(20005200, 3800258, 700, 1700, 3802280); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 3800259, 700, 1700, 3802290, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800261, 700, 1700, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800262, 700, 1700, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3800263, 1084227584, 3802202); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3800264, 1084227584, 3802202); // Enemy - Wake-up
    InitializeCommonEvent(20005134, 3800265, 3026, 1077936128, 3802271); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3800266, 1077936128, 3802270); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3800267, 1077936128, 3802270); // Enemy - Wake-up
    InitializeCommonEvent(20005190, 3800269, 1077936128); // Enemy - SpEffect based on Player Area
    InitializeCommonEvent(20005211, 3800271, 700, 1700, 1082130432, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 3800272, 700, 1700, 1082130432, 1058642330); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 3800273, 700, 1700, 1082130432, 1075419546); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 3800274, 700, 1700, 1082130432, 1072064102); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 3800275, 700, 1700, 1065353216, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800276, 700, 1700, 1056964608); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800277, 700, 1700, 1056964608); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800278, 700, 1700, 1086324736); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800279, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800280, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800281, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800282, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800283, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800284, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800285, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800286, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800287, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 3800288, 700, 1700, 1090519040); // Enemy - Wake-up
    InitializeEvent(0, 13805300, 3800200, 3802292); // Enemy - Kill if inside area
    InitializeEvent(1, 13805300, 3800201, 3802292); // Enemy - Kill if inside area
    InitializeEvent(2, 13805300, 3800202, 3802292); // Enemy - Kill if inside area
    InitializeEvent(3, 13805300, 3800203, 3802292); // Enemy - Kill if inside area
    InitializeEvent(4, 13805300, 3800204, 3802292); // Enemy - Kill if inside area
    InitializeEvent(5, 13805300, 3800205, 3802292); // Enemy - Kill if inside area
    InitializeEvent(6, 13805300, 3800206, 3802292); // Enemy - Kill if inside area
    InitializeEvent(7, 13805300, 3800207, 3802292); // Enemy - Kill if inside area
    InitializeEvent(8, 13805300, 3800208, 3802292); // Enemy - Kill if inside area
    InitializeEvent(9, 13805300, 3800209, 3802292); // Enemy - Kill if inside area
    InitializeEvent(10, 13805300, 3800210, 3802292); // Enemy - Kill if inside area
    InitializeEvent(11, 13805300, 3800211, 3802292); // Enemy - Kill if inside area
    InitializeEvent(12, 13805300, 3800212, 3802292); // Enemy - Kill if inside area
    InitializeEvent(13, 13805300, 3800213, 3802292); // Enemy - Kill if inside area
    InitializeEvent(14, 13805300, 3800214, 3802292); // Enemy - Kill if inside area
    InitializeEvent(15, 13805300, 3800215, 3802292); // Enemy - Kill if inside area
    InitializeEvent(16, 13805300, 3800216, 3802292); // Enemy - Kill if inside area
    InitializeEvent(17, 13805300, 3800217, 3802292); // Enemy - Kill if inside area 
    InitializeEvent(18, 13805300, 3800218, 3802292); // Enemy - Kill if inside area
    InitializeEvent(19, 13805300, 3800219, 3802292); // Enemy - Kill if inside area
    InitializeEvent(20, 13805300, 3800220, 3802292); // Enemy - Kill if inside area
    InitializeEvent(21, 13805300, 3800221, 3802292); // Enemy - Kill if inside area
    InitializeEvent(22, 13805300, 3800222, 3802292); // Enemy - Kill if inside area
    InitializeEvent(23, 13805300, 3800223, 3802292); // Enemy - Kill if inside area
    InitializeEvent(24, 13805300, 3800224, 3802292); // Enemy - Kill if inside area
    InitializeEvent(25, 13805300, 3800225, 3802292); // Enemy - Kill if inside area
    InitializeEvent(26, 13805300, 3800226, 3802292); // Enemy - Kill if inside area
    InitializeEvent(27, 13805300, 3800227, 3802292); // Enemy - Kill if inside area
    InitializeEvent(28, 13805300, 3800228, 3802292); // Enemy - Kill if inside area
    InitializeEvent(0, 13805280, 0); // Enemy Group - Update AI on bridge destruction
    InitializeEvent(0, 13805270, 3800260, 3802262, 3802263); // Skeletons - Update based on bridge destruction
    InitializeEvent(0, 13805272, 3800270, 3802266, 3802260, 3802264, 3802261, 3802265); // Skeletons - Update based on bridge destruction
    InitializeCommonEvent(20005224, 3800350, 701, 1701); // Enemy - Idle animation
    InitializeCommonEvent(20005223, 3800351, 701, 1701, 1065353216); // Enemy - Idle animation
    InitializeCommonEvent(20005221, 3800360, 700, 1700, 1084227584); // Enemy - Idle animation
    InitializeCommonEvent(20005220, 3800364, 701, 1701); // Enemy - Idle animation
    InitializeCommonEvent(20005223, 3800365, 701, 1701, 1073741824); // Enemy - Idle animation
    InitializeCommonEvent(20005110, 3800366, 3802360); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 3800367, 701, 1701); // Enemy - Idle animation
    InitializeEvent(0, 13805370, 0); // Ghru - Set SpEffect
    InitializeEvent(0, 13805340, 3800352, 701, 1701, 1084227584, 3802330, 1065353216); // Enemy - Wake-up
    InitializeEvent(1, 13805340, 3800353, 701, 1701, 1084227584, 3802330, 0); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 3800392, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 3800395, 3802360); // Enemy - Wake-up
    InitializeCommonEvent(20005202, 3800400, 700, 1700, 3802300); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800401, 700, 1700, 3802301); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800402, 700, 1700, 3802302); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800403, 700, 1700, 3802303); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800404, 700, 1700, 3802304); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800405, 700, 1700, 3802305); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800406, 700, 1700, 3802306); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800407, 700, 1700, 3802307); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800408, 700, 1700, 3802308); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800409, 700, 1700, 3802309); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800410, 700, 1700, 3802310); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800411, 700, 1700, 3802311); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800412, 700, 1700, 3802312); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800420, 700, 1700, 3802340); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800421, 700, 1700, 3802341); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800422, 700, 1700, 3802342); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800423, 700, 1700, 3802343); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800424, 700, 1700, 3802344); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800425, 700, 1700, 3802345); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800426, 700, 1700, 3802346); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005202, 3800432, 700, 1700, 3802348); // Enemy - Hang until wake-up
    InitializeCommonEvent(20005120, 3800433, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 3800434, 1077936128); // Enemy - Wake-up
    InitializeEvent(0, 13805350, 3800427); // Writhing Rotten Flesh - Drop
    InitializeEvent(1, 13805350, 3800428); // Writhing Rotten Flesh - Drop
    InitializeEvent(2, 13805350, 3800429); // Writhing Rotten Flesh - Drop
    InitializeEvent(3, 13805350, 3800430); // Writhing Rotten Flesh - Drop
    InitializeEvent(4, 13805350, 3800431); // Writhing Rotten Flesh - Drop
    InitializeEvent(0, 13805371, 0); // Rat Encounter - Set SpEffect
    InitializeEvent(0, 13805360, 0); // Enemy Group - Update Network Rate
    InitializeCommonEvent(20005132, 3800530, 1073741824, 3802356); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 3800531, 1085276160); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3800532, 1073741824, 3802357); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 3800340, 1084227584, 3802365); // Enemy - Wake-up

    InitializeCommonEvent(20005441, 3800340, 3805600); // Enemy - Kill if main enemy is dead
    InitializeCommonEvent(20005441, 3800342, 3805606); // Enemy - Kill if main enemy is dead
    InitializeCommonEvent(20005441, 3800343, 3805609); // Enemy - Kill if main enemy is dead
    InitializeCommonEvent(20005441, 3800344, 3805612); // Enemy - Kill if main enemy is dead
    InitializeEvent(0, 13805366, 3800342, 3805627); // Demon Cleric - Kill Orbs when death
    InitializeEvent(1, 13805366, 3800344, 3805629); // Demon Cleric - Kill Orbs when death
    InitializeEvent(2, 13805366, 3800343, 3805631); // Demon Cleric - Kill Orbs when death
    InitializeEvent(0, 13805361, 0); // Demon - In Catacombs - Update AI

    // High Lord Wolnir
    InitializeEvent(0, 13805809, 0); // Wolnir - Boss Room Entry
    InitializeEvent(0, 13800800, 0); // Wolnir - Boss Kill
    InitializeEvent(0, 13805810, 0); // Wolnir - Boss Room Entry - Client
    InitializeEvent(0, 13805811, 0); // Wolnir - Phase Flag
    InitializeEvent(0, 13805829, 0); // Wolnir - Common Setup

    InitializeEvent(0, 13805812, 0); // Wolnir - Setup Bracelets
    InitializeEvent(0, 13805813, 40, 0, 50, 0, 13805812, 12251, 20001, 20002, 20003); // Wolnir - Bracelet Destruction
    InitializeEvent(1, 13805813, 20, 0, 30, 0, 13805812, 12253, 20004, 20005, 20006); // Wolnir - Bracelet Destruction
    InitializeEvent(2, 13805813, 21, 0, 31, 0, 13804814, 12255, 20007, 20008, 20009); // Wolnir - Bracelet Destruction
    InitializeEvent(0, 13804814, 13805814); // Wolnir - Renew Left Bracelets
    InitializeCommonEvent(20005840, 3801800); // Handle Fog Wall for Player
    InitializeCommonEvent(20005841, 3801800); // Handle Fog Wall for Client Player

    // Old Demon King
    InitializeEvent(0, 13805840, 0); // Old Demon King - Boss Setup
    InitializeEvent(0, 13800830, 0); // Old Demon King - Boss Kill
    InitializeEvent(0, 13805841, 0); // Old Demon King - Phase Flag
    InitializeEvent(0, 13805842, 0); // Old Demon King - Phase Animation
    InitializeEvent(0, 13805843, 0); // Old Demon King - Heatup Phase Animation
    InitializeEvent(0, 13805844, 0); // Old Demon King - NPC Part
    InitializeEvent(0, 13805859, 0); // Old Demon King - Common Setup
    InitializeCommonEvent(20005840, 3801830); // Handle Fog Wall for Player
    InitializeCommonEvent(20005841, 3801830); // Handle Fog Wall for Client Player

    // Ballista
    InitializeEvent(0, 13800548, 3801548); // Smouldering Lake - Destructible Floor
    InitializeEvent(0, 13805201, 0); // Ballista - Setup
    InitializeEvent(0, 13805202, 0); // Ballista - Toggle State
    InitializeEvent(0, 13805206, 0); // Ballista - Toggle Activation for Lake area
    InitializeEvent(0, 13805207, 103, 3802380); // Ballista - Shake Player Camera

    InitializeEvent(0, 13800899, 0); // Wolnir - Set Flag whilst Killed
    InitializeEvent(0, 13805400, 0); // Catacombs Bridge - Register Ladder
    InitializeEvent(0, 13805402, 0); // Catacombs Bridge - Destruction Animation
    InitializeEvent(0, 13805520, 0); // Register Ladders
    DeactivateObject(3801219, Disabled); // Trap Button
    DeactivateObject(3801216, Disabled); // Trap Button
    DeactivateObject(3801215, Disabled); // Trap Button
    DeactivateObject(3801218, Disabled); // Trap Button
    DeactivateObject(3801210, Disabled); // Trap Button
    InitializeEvent(0, 13805430, 3800562, 3801214, 3802410, 3802411, 3802412, 3802413); // Bolt Trap
    InitializeEvent(0, 13805440, 3800560, 3801210, 3801211, 3802400, 3802401, 3802402, 3802403, 3802404); // Bolt Trap
    InitializeEvent(1, 13805440, 3800561, 3801212, 3801213, 3802405, 3802406, 3802407, 3802408, 3802409); // Bolt Trap
    InitializeEvent(0, 13805450, 0); // Bolt Trap
    InitializeEvent(0, 13805552, 0); // Skeleton Ball - Damage 
    InitializeEvent(0, 13805556, 0); // Skeleton Ball - Damage 
    InitializeEvent(0, 13804550, 0); // Skeleton Ball - Setup Handler
    InitializeEvent(0, 13805560, 3801300, 3801330, 3800570); // Affinity Pot
    InitializeEvent(1, 13805560, 3801301, 3801331, 3800570); // Affinity Pot
    InitializeEvent(2, 13805560, 3801302, 3801332, 3800570); // Affinity Pot
    InitializeEvent(3, 13805560, 3801303, 3801333, 3800570); // Affinity Pot
    InitializeEvent(4, 13805560, 3801304, 3801334, 3800571); // Affinity Pot
    InitializeEvent(5, 13805560, 3801305, 3801335, 3800571); // Affinity Pot
    InitializeEvent(6, 13805560, 3801306, 3801336, 3800571); // Affinity Pot
    InitializeEvent(7, 13805560, 3801307, 3801337, 3800571); // Affinity Pot
    InitializeEvent(8, 13805560, 3801308, 3801338, 3800571); // Affinity Pot
    InitializeEvent(9, 13805560, 3801309, 3801339, 3800572); // Affinity Pot
    InitializeEvent(10, 13805560, 3801310, 3801340, 3800572); // Affinity Pot
    InitializeEvent(11, 13805560, 3801311, 3801341, 3800572); // Affinity Pot
    InitializeEvent(12, 13805560, 3801312, 3801342, 3800572); // Affinity Pot
    InitializeEvent(13, 13805560, 3801313, 3801343, 3800573); // Affinity Pot
    InitializeEvent(14, 13805560, 3801314, 3801344, 3800573); // Affinity Pot
    InitializeEvent(15, 13805560, 3801315, 3801345, 3800573); // Affinity Pot
    InitializeEvent(16, 13805560, 3801316, 3801346, 3800573); // Affinity Pot
    InitializeEvent(17, 13805560, 3801317, 3801347, 3800573); // Affinity Pot
    InitializeEvent(18, 13805560, 3801318, 3801348, 3800574); // Affinity Pot
    InitializeEvent(19, 13805560, 3801319, 3801349, 3800574); // Affinity Pot
    InitializeEvent(20, 13805560, 3801320, 3801350, 3800575); // Affinity Pot
    InitializeEvent(21, 13805560, 3801321, 3801351, 3800575); // Affinity Pot
    InitializeEvent(22, 13805560, 3801322, 3801352, 3800575); // Affinity Pot
    InitializeEvent(23, 13805560, 3801323, 3801353, 3800575); // Affinity Pot
    InitializeEvent(24, 13805560, 3801324, 3801354, 3800575); // Affinity Pot
    InitializeEvent(25, 13805560, 3801325, 3801355, 3800575); // Affinity Pot
    InitializeEvent(0, 13805540, 0); // Wolnir Room - Stone FFX
    InitializeEvent(0, 13800500, 0); // Catacombs - Porticullis
    InitializeCommonEvent(20005650, 13800530, 3801530); // Illusory Wall Setup
    InitializeCommonEvent(20005650, 13800531, 3801531); // Illusory Wall Setup
    InitializeCommonEvent(20005650, 13800532, 3801532); // Illusory Wall Setup
    InitializeCommonEvent(20005650, 13800533, 3801533); // Illusory Wall Setup
    InitializeCommonEvent(20005650, 13800534, 3801534); // Illusory Wall Setup
    InitializeCommonEvent(20005650, 13800535, 3801535); // Illusory Wall Setup
    InitializeCommonEvent(20005650, 13800536, 3801536); // Illusory Wall Setup
    InitializeCommonEvent(20005780, 3801974, 2); // Fog Wall - Catacombs Entrance
    InitializeEvent(0, 13805570, 0); // Fog Wall - Smouldering Lake Entrance
    InitializeCommonEvent(20005510, 13800550, 3801550, 61380000, 9400, 9401, 13805750); // Epitaph
    InitializeCommonEvent(20005510, 13800551, 3801551, 61380010, 9400, 9401, 13805751); // Epitaph
    InitializeCommonEvent(20005510, 13800552, 3801552, 61380020, 9400, 9401, 13805752); // Epitaph
    InitializeCommonEvent(20005510, 13800553, 3801553, 61380030, 9400, 9401, 13805753); // Epitaph
    InitializeCommonEvent(20005510, 13800554, 3801554, 61380040, 9400, 9401, 13805754); // Epitaph

    // White Phantom - Great Swamp Cuculus
    InitializeCommonEvent(20005700, 13800830, 13804193, 13805193, 3800193, 3802193); // Setup
    InitializeCommonEvent(20005720, 13804193, 13805193, 13800830, 3800193); // Apperance
    InitializeCommonEvent(20005710, 13804193, 13805835, 3800193, 3802830, 3802835); // Boss Fog AI
    InitializeCommonEvent(20005713, 9482, 13800830, 13804193, 13805193, 3800193); // Death

    // White Phantom - Knight Slayer Tsorig
    InitializeCommonEvent(20005700, 13800830, 13804195, 13805195, 3800195, 3802195); // Setup
    InitializeCommonEvent(20005720, 13804195, 13805195, 13800830, 3800195); // Apperance
    InitializeCommonEvent(20005710, 13804195, 13805835, 3800195, 3802830, 3802835); // Boss Fog AI

    // NPC - Knight Slayer Tsorig
    InitializeCommonEvent(20005320, 3800198, 3802370, 3803370); // Patrol - Update based on Area
    InitializeCommonEvent(20005342, 13800398, 3800198); // Show Treasure if Killed but Treasure missed
    InitializeEvent(0, 13805372, 0); // Set SpEffect
    InitializeEvent(0, 13805595, 0); // Award Gesture on kill

    // NPC - Horace
    InitializeEvent(0, 13800702, 3800710, 3804713); // Horace - Check Player Death
    InitializeEvent(0, 13805703, 3800700, 3800705, 3800701, 3800706, 3800702, 3800707, 90760, 1900, 3800710, 3804711, 3804700, 3804701, 3804710, 3804712); // Setup

    // NPC - Male Anri in Passage
    InitializeCommonEvent(20006001, 3800700, 1356, 1357, 73800130, 3); // Hostility Cooldown
    InitializeCommonEvent(20006000, 3800700, 1356, 1357, 73800130, 1059481190, 1355, 1359, 0); // Check Hostility
    InitializeCommonEvent(20006002, 3800700, 1358, 1355, 1359); // Check Death

    // NPC - Male Anri by Bridge
    InitializeCommonEvent(20006001, 3800701, 1356, 1357, 73800132, 3); // Hostility Cooldown
    InitializeCommonEvent(20006000, 3800701, 1356, 1357, 73800132, 1059481190, 1355, 1359, 0); // Check Hostility
    InitializeCommonEvent(20006002, 3800701, 1358, 1355, 1359); // Check Death

    // NPC - Male Anri in Horace cave
    InitializeCommonEvent(20006002, 3800703, 1358, 1355, 1359); // Check Death
    InitializeEvent(0, 13805704, 3800703); // Enable Toggle

    // NPC - Female Anri in Passage
    InitializeCommonEvent(20006001, 3800705, 1356, 1357, 73800131, 3); // Hostility Cooldown
    InitializeCommonEvent(20006000, 3800705, 1356, 1357, 73800131, 1059481190, 1355, 1359, 0); // Check Hostility
    InitializeCommonEvent(20006002, 3800705, 1358, 1355, 1359); // Check Death

    // NPC - Female Anri by Bridge
    InitializeCommonEvent(20006001, 3800706, 1356, 1357, 73800133, 3); // Hostility Cooldown
    InitializeCommonEvent(20006000, 3800706, 1356, 1357, 73800133, 1059481190, 1355, 1359, 0); // Check Hostility
    InitializeCommonEvent(20006002, 3800706, 1358, 1355, 1359); // Check Death

    // NPC - Female Anri in Horace cave
    InitializeCommonEvent(20006002, 3800708, 1358, 1355, 1359); // Check Death
    InitializeEvent(1, 13805704, 3800708);

    // NPC - Horace
    InitializeCommonEvent(20006002, 3800710, 1498, 1495, 1499); // Check Death

    InitializeCommonEvent(20005900, 13800380, 6330); // Set Flag based on Flag
});

//---------------------------------------------
// Destructor
//---------------------------------------------
$Event(50, Default, function() {
    InitializeEvent(0, 13801200, 0); // Set Network Flag
    InitializeEvent(0, 13805580, 0); // Skeleton Ball Restoration

    // NPC - Anri - Pre-setup
    InitializeEvent(0, 13805700, 3800700, 3800705, 3800701, 3800706, 3800702, 3800707, 3800703, 3800708, 90760, 1900, 3804700, 3804701);
    InitializeEvent(0, 13805706, 3800710, 3804711, 3804710, 3804712);
    InitializeEvent(0, 13805707, 0);

    // Map Sounds
    SetMapSoundState(3804801, Disabled);
    SetMapSoundState(3804802, Disabled);
    SetMapSoundState(3804831, Disabled);
    SetMapSoundState(3804832, Disabled);
    SetMapSoundState(3804861, Disabled);
    SetMapSoundState(3804862, Disabled);
});

// Ballista - Default Flag
$Event(13801200, Restart, function() {
    EndIf(ThisEventSlot());
    SetNetworkconnectedEventFlag(13800200, OFF);
});

// Ballista - Setup
$Event(13805201, Restart, function() {
    SetCharacterGravity(3800100, Disabled);
    SetCharacterMaphit(3800100, true);
    SetCharacterAnimationState(3800100, Disabled);

    if (!EventFlag(13800200)) {
        ForceAnimationPlayback(3801200, 0, true, false, true, 0, 1);
        EndEvent();
    }

L0:
    ForceAnimationPlayback(3801200, 10, true, false, true, 0, 1);
    EndEvent();
});

// Ballista - Toggle State
$Event(13805202, Restart, function() {
    if (!EventFlag(13800200)) {

        WaitFor(!PlayerIsNotInOwnWorld() && ActionButtonInArea(9321, 3801200));

        IssueShortWarpRequest(10000, TargetEntityType.Object, 3801200, 101);
        ForceAnimationPlayback(10000, 60230, false, false, false, 0, 1);
        ForceAnimationPlayback(3801200, 201, false, true, true, 0, 1);
        ForceAnimationPlayback(3801200, 10, true, false, true, 0, 1);
        SetNetworkconnectedEventFlag(13800200, ON);
        RestartEvent();
    }

L0:
    WaitFor(!PlayerIsNotInOwnWorld() && ActionButtonInArea(9320, 3801200));
    IssueShortWarpRequest(10000, TargetEntityType.Object, 3801200, 103);
    ForceAnimationPlayback(10000, 60231, false, false, false, 0, 1);
    ForceAnimationPlayback(3801200, 210, false, true, true, 0, 1);
    ForceAnimationPlayback(3801200, 0, true, false, true, 0, 1);
    SetNetworkconnectedEventFlag(13800200, OFF);
    RestartEvent();

L9:
    RestartEvent();
});

// NO REF - Ballista
$Event(13805203, Restart, function() {
    SetCharacterAIState(3800100, Disabled);
    RequestCharacterAIReplan(3800100);
    WaitFor(EventFlag(13800200));
    SetCharacterAIState(3800100, Enabled);
    RequestCharacterAIReplan(3800100);
    WaitFor(!EventFlag(13800200));
    RestartEvent();
});

// Ballista - Toggle Activation for Lake area
$Event(13805206, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 3802380) && CharacterBackreadStatus(3800100));
    SetNetworkUpdateRate(3800100, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(!AllPlayersInArea(3802380));
    SetNetworkUpdateRate(3800100, false, CharacterUpdateFrequency.NoUpdate);
    RestartEvent();
});

// Ballista - Shake Player Camera
$Event(13805207, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 11213));
    SetCameraVibration(X0_4, TargetEntityType.Area, X4_4, -1, 999, 999);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Patrol - Update in Combat
$Event(13805240, Restart, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterAIState(X4_4, AIStateType.Combat));
    }
L0:
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
});

// Patrol - Update on SpEffect
$Event(13805245, Restart, function(X0_4, X4_4, X8_4) {
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
    WaitFor(CharacterHasSpEffect(X0_4, 4650));
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
    WaitFor(!CharacterHasSpEffect(X0_4, 4650));
    WaitFixedTimeSeconds(10);
    RestartEvent();
});

// Skeletons - Update based on bridge destruction
$Event(13805270, Restart, function(X0_4, X4_4, X8_4) {
    if (!CharacterAIState(X0_4, AIStateType.Combat)) {
        RequestCharacterAICommand(X0_4, -1, 0);
    }
    SetCharacterHome(X0_4, X4_4);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 3, 1) && InArea(X0_4, X4_4));
    SetCharacterHome(X0_4, X8_4);
    RequestCharacterAICommand(X0_4, 100, 0);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 3, 1) && InArea(X0_4, X8_4));
    RestartEvent();
});

// Skeletons - Update based on bridge destruction
$Event(13805272, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!ThisEventSlot()) {
        SetCharacterAIState(X0_4, Disabled);
        chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.Hollow)
            || CharacterType(10000, TargetType.WhitePhantom);
        area = InArea(10000, X4_4);
        cond &= area && CharacterBackreadStatus(X0_4) && chrSp;
        WaitFor(cond || CharacterDamagedBy(X0_4, 10000));
        SetCharacterAIState(X0_4, Enabled);
        SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    RequestCharacterAICommand(X0_4, 100, 0);
    cond &= EntityInRadiusOfEntity(10000, X0_4, 4, 1) && InArea(X0_4, X12_4);
    WaitFor(cond);
    SetCharacterHome(X0_4, X16_4);
    RequestCharacterAICommand(X0_4, 100, 0);
    cond &= EntityInRadiusOfEntity(10000, X0_4, 4, 1) && InArea(X0_4, X20_4);
    WaitFor(cond);
    RestartEvent();
});

// Enemy Group - Update AI on bridge destruction
$Event(13805280, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(ObjectDestroyed(3801403));
        WaitFixedTimeSeconds(5);
    }
L0:
    SetCharacterAIId(3805201, 107021);
    SetCharacterAIId(3805202, 107022);
    ClearCharactersAITarget(3805200);
    RequestCharacterAIReplan(3805200);
});

// Enemy - Kill if inside area
$Event(13805300, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(InArea(X0_4, X4_4));
    ForceCharacterDeath(X0_4, true);
});

// Enemy - Wake-up
$Event(13805340, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.Hollow)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, X0_4, X12_4, 1) || InArea(10000, X16_4);
    WaitFor(
        (area && CharacterBackreadStatus(X0_4) && CharacterHasSpEffect(X0_4, 5450) && chrSp)
            || CharacterDamagedBy(X0_4, 10000)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(X0_4, AIStateType.Recognition));
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    EndIf(!CharacterHasSpEffect(X0_4, 5450));
    WaitFixedTimeSeconds(X20_4);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
});

// Writhing Rotten Flesh - Drop
$Event(13805350, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 4021));
    WaitFixedTimeSeconds(0.1);
    ClearSpEffect(X0_4, 4021);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Enemy Group - Update Network Rate
$Event(13805360, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 3802392));
    SetNetworkUpdateRate(3805450, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(1);
    WaitFor(!InArea(10000, 3802392));
    SetNetworkUpdateRate(3805450, false, CharacterUpdateFrequency.NoUpdate);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Demon - In Catacombs - Update AI
$Event(13805361, Restart, function() {
    RequestCharacterAICommand(3800580, -1, 0);
    SetCharacterHome(3800580, 3802350);
    WaitFor(!InArea(3800580, 3802351));
    RequestCharacterAICommand(3800580, 100, 0);
    WaitFor(InArea(3800580, 3802351));
    RestartEvent();
});

// NO REF
$Event(13805365, Restart, function() {
    SetCharacterGravity(3805632, Disabled);
});

// Demon Cleric - Kill Orbs when death
$Event(13805366, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(HPRatio(X0_4) <= 0);
    }
L0:
    ForceCharacterDeath(X4_4, false);
});

// Ghru - Set SpEffect
$Event(13805370, Restart, function() {
    SetSpEffect(3800352, 5000);
});

// Rat Encounter - Set SpEffect
$Event(13805371, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(3800480, 5000);
    SetSpEffect(3800481, 5000);
    SetSpEffect(3800455, 5000);
    SetSpEffect(3800456, 5000);
    SetSpEffect(3800457, 5000);
    SetSpEffect(3800458, 5000);
});

// Knight Slayer Tsorig - Set SpEffect
$Event(13805372, Restart, function() {
    SetSpEffect(3800198, 5000);
});

// Catacombs Bridge - Register Ladder
$Event(13805400, Restart, function() {
    if (!ObjectDestroyed(3801403)) {
        if (!(ThisEventSlot() && PlayerIsNotInOwnWorld())) {
            WaitFor(ObjectDestroyed(3801403));
            ForceAnimationPlayback(3806400, 1, false, false, false, 0, 1);
            WaitFixedTimeSeconds(6);
            DeactivateObject(3801401, Disabled);
            WaitFixedTimeSeconds(6);
            RegisterLadder(13800402, 13800403, 3801402);
            WaitFixedTimeSeconds(5.33);
            ForceAnimationPlayback(3801400, 2, false, false, false, 0, 1);
            EndEvent();
        }
    }
L0:
    ReproduceObjectAnimation(3801400, 2);
    DeactivateObject(3801401, Disabled);
    RegisterLadder(13800402, 13800403, 3801402);
});

// Catacombs Bridge - Destruction Animation
$Event(13805402, Default, function() {
    EndIf(ObjectDestroyed(3801401));
    EndIf(ThisEventSlot());
    WaitFor(ObjectBackreadOther(3806400));
    ForceAnimationPlayback(3806400, 0, true, false, false, 0, 1);
});

// NO REf
$Event(13805420, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    ForceAnimationPlayback(X8_4, 0, false, true, false, 0, 1);
    WaitFixedTimeSeconds(1);
    ShootBullet(X0_4, X12_4, -1, X16_4, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    ShootBullet(X0_4, X12_4, -1, X16_4, 0, 0, 0);
    WaitFixedTimeSeconds(4);
    WaitFor(!AllPlayersInArea(X4_4));
    ForceAnimationPlayback(X8_4, 1, false, true, false, 0, 1);
    RestartEvent();
});

// Bolt Trap
$Event(13805430, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X8_4));
    ForceAnimationPlayback(X4_4, 0, false, true, false, 0, 1);
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X12_4, -1, 5810, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5810, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5810, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X12_4, -1, 5811, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5811, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5811, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X12_4, -1, 5812, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5812, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5812, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X12_4, -1, 5813, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5813, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5813, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X12_4, -1, 5814, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5814, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5814, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X12_4, -1, 5815, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5815, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5815, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X12_4, -1, 5816, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5816, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5816, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X12_4, -1, 5820, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5820, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5820, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X12_4, -1, 5821, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5821, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5821, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X12_4, -1, 5822, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5822, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5822, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X12_4, -1, 5823, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5823, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5823, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X12_4, -1, 5824, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5824, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5824, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X12_4, -1, 5825, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5825, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5825, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X12_4, -1, 5826, 0, 0, 0);
        ShootBullet(X0_4, X16_4, -1, 5826, 0, 0, 0);
        ShootBullet(X0_4, X20_4, -1, 5826, 0, 0, 0);
    }
    WaitFixedTimeSeconds(3);
    WaitFor(!AllPlayersInArea(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, true, false, 0, 1);
    RestartEvent();
});

// Bolt Trap
$Event(13805440, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    CreateBulletOwner(X0_4);
    area = InArea(10000, X12_4);
    area2 = InArea(10000, X16_4);
    WaitFor(area || area2);
    if (!area2.Passed) {
        ForceAnimationPlayback(X4_4, 0, false, true, false, 0, 1);
    } else {
L0:
        ForceAnimationPlayback(X8_4, 0, false, true, false, 0, 1);
    }
L1:
    WaitFixedTimeSeconds(0.2);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X20_4, -1, 5810, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5810, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5810, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X20_4, -1, 5811, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5811, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5811, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X20_4, -1, 5812, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5812, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5812, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X20_4, -1, 5813, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5813, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5813, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X20_4, -1, 5814, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5814, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5814, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X20_4, -1, 5815, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5815, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5815, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X20_4, -1, 5816, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5816, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5816, 0, 0, 0);
    }
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X20_4, -1, 5810, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5810, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5810, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X20_4, -1, 5811, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5811, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5811, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X20_4, -1, 5812, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5812, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5812, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X20_4, -1, 5813, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5813, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5813, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X20_4, -1, 5814, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5814, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5814, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X20_4, -1, 5815, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5815, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5815, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X20_4, -1, 5816, 0, 0, 0);
        ShootBullet(X0_4, X24_4, -1, 5816, 0, 0, 0);
        ShootBullet(X0_4, X28_4, -1, 5816, 0, 0, 0);
    }
    WaitFixedTimeSeconds(3);
    if (!area2.Passed) {
        WaitFor(!AllPlayersInArea(X12_4));
        ForceAnimationPlayback(X4_4, 1, false, true, false, 0, 1);
    } else {
L2:
        WaitFor(!AllPlayersInArea(X16_4));
        ForceAnimationPlayback(X8_4, 1, false, true, false, 0, 1);
    }
L3:
    RestartEvent();
});

// Bolt Trap
$Event(13805450, Restart, function() {
    CreateBulletOwner(3800560);
    if (!ObjectDestroyed(3801305)) {
        objArea |= ObjectDestroyed(3801305);
    }
    objArea |= InArea(10000, 3802430);
    WaitFor(objArea);
    ForceAnimationPlayback(3801217, 0, false, true, false, 0, 1);
    WaitFixedTimeSeconds(0.2);
    if (EventFlag(50)) {
        ShootBullet(3800560, 3802431, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5820, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(3800560, 3802431, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5821, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(3800560, 3802431, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5822, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(3800560, 3802431, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5823, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(3800560, 3802431, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5824, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(3800560, 3802431, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5825, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(3800560, 3802431, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5826, 0, 0, 0);
    }
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(50)) {
        ShootBullet(3800560, 3802434, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5820, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(3800560, 3802434, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5821, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(3800560, 3802434, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5822, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(3800560, 3802434, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5823, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(3800560, 3802434, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5824, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(3800560, 3802434, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5825, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(3800560, 3802434, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5826, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    if (EventFlag(50)) {
        ShootBullet(3800560, 3802431, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5820, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5820, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(3800560, 3802431, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5821, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5821, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(3800560, 3802431, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5822, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5822, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(3800560, 3802431, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5823, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5823, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(3800560, 3802431, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5824, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5824, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(3800560, 3802431, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5825, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5825, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(3800560, 3802431, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802432, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802433, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802434, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802435, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802436, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802437, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802438, -1, 5826, 0, 0, 0);
        ShootBullet(3800560, 3802439, -1, 5826, 0, 0, 0);
    }
    WaitFixedTimeSeconds(2);
    WaitFor(!AllPlayersInArea(3802430));
    ForceAnimationPlayback(3801217, 1, false, true, false, 0, 1);
    RestartEvent();
});

// Catacombs - Porticullis
$Event(13800500, Restart, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(3801501, 1);
        EndEvent();
    }
L0:
    WaitFor(!PlayerIsNotInOwnWorld() && ObjActEventFlag(3804500));
    ForceAnimationPlayback(3801501, 1, false, false, false, 0, 1);
    EndEvent();
});

// Register Ladders
$Event(13805520, Restart, function() {
    RegisterLadder(13800520, 13800521, 3801520);
    RegisterLadder(13800522, 13800523, 3801522);
    RegisterLadder(13800524, 13800525, 3801524);
    RegisterLadder(13800526, 13800527, 3801526);
    RegisterLadder(13800528, 13800529, 3801528);
});

// Wolnir Room - Stone FFX
$Event(13805540, Restart, function() {
    EndIf(EventFlag(13800800));
    EndIf(ThisEventSlot());
    DeleteObjectfollowingSFX(3801360, false);
    DeleteObjectfollowingSFX(3801361, false);
    DeleteObjectfollowingSFX(3801362, false);
    DeleteObjectfollowingSFX(3801363, false);
    DeleteObjectfollowingSFX(3801364, false);
    DeleteObjectfollowingSFX(3801365, false);
    DeleteObjectfollowingSFX(3801366, false);
    DeleteObjectfollowingSFX(3801369, false);
    DeleteObjectfollowingSFX(3801370, false);
    DeleteObjectfollowingSFX(3801371, false);
    DeleteObjectfollowingSFX(3801372, false);
    DeleteObjectfollowingSFX(3801373, false);
    DeleteObjectfollowingSFX(3801374, false);
    DeleteObjectfollowingSFX(3801375, false);
    DeleteObjectfollowingSFX(3801376, false);
    DeleteObjectfollowingSFX(3801377, false);
    DeleteObjectfollowingSFX(3801378, false);
    DeleteObjectfollowingSFX(3801379, false);
    DeleteObjectfollowingSFX(3801380, false);
    CreateObjectfollowingSFX(3801360, 200, 838041);
    CreateObjectfollowingSFX(3801361, 200, 838041);
    CreateObjectfollowingSFX(3801362, 200, 838041);
    CreateObjectfollowingSFX(3801363, 200, 838041);
    CreateObjectfollowingSFX(3801364, 200, 838041);
    CreateObjectfollowingSFX(3801365, 200, 838041);
    CreateObjectfollowingSFX(3801366, 200, 838041);
    CreateObjectfollowingSFX(3801369, 200, 838041);
    CreateObjectfollowingSFX(3801370, 200, 838041);
    CreateObjectfollowingSFX(3801371, 200, 838041);
    CreateObjectfollowingSFX(3801372, 200, 838041);
    CreateObjectfollowingSFX(3801373, 200, 838041);
    CreateObjectfollowingSFX(3801374, 200, 838041);
    CreateObjectfollowingSFX(3801375, 200, 838041);
    CreateObjectfollowingSFX(3801376, 200, 838041);
    CreateObjectfollowingSFX(3801377, 200, 838041);
    CreateObjectfollowingSFX(3801378, 200, 838041);
    CreateObjectfollowingSFX(3801379, 200, 838041);
    CreateObjectfollowingSFX(3801380, 200, 838041);
});

// Smouldering Lake - Destructible Floor
$Event(13800548, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X0_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjectDestroyed(X0_4));
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    EndEvent();
});

// Skeleton Ball - Handler Setup
$Event(13804550, Restart, function() {
    InitializeEvent(0, 13805553, 0); // Skeleton Ball - Handler 
    InitializeEvent(0, 13805557, 0); // Skeleton Ball - Handler 
});

$Event(13805550, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(ObjectBackread(X0_4) && !EventFlag(X8_4));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
});

// Skeleton Ball - Damage Script
$Event(13805552, Restart, function() {
    EndIf(ObjectDestroyed(3801240));
    EndIf(ThisEventSlot());
L0:
    WaitFor(InArea(10000, 3802520));
    if (EventFlag(50)) {
        CreateDamagingObject(13800550, 3801240, 1, 5830, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(51)) {
        CreateDamagingObject(13800550, 3801240, 1, 5831, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(52)) {
        CreateDamagingObject(13800550, 3801240, 1, 5832, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(53)) {
        CreateDamagingObject(13800550, 3801240, 1, 5833, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(54)) {
        CreateDamagingObject(13800550, 3801240, 1, 5834, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(55)) {
        CreateDamagingObject(13800550, 3801240, 1, 5835, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(56)) {
        CreateDamagingObject(13800550, 3801240, 1, 5836, DamageTargetType.Character, 1.7, 20, 10);
    }
    ForceAnimationPlayback(3801240, 10, false, false, false, 0, 1);
    WaitFixedTimeSeconds(9.3);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
});

// Skeleton Ball - Handler
$Event(13805553, Restart, function() {
    DeactivateObject(3801390, Disabled);
    SetObjectTreasureState(3801390, Disabled);
    if (!ObjectDestroyed(3801240)) {
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetNetworkconnectedEventFlag(13805554, OFF);
        }
        WaitFor(EventFlag(13805552) && !EventFlag(13805554));
        if (!CharacterDead(3800270)) {
            if (ThisEventSlot()) {
                WaitFixedTimeSeconds(1);
            }
            if (EventFlag(50)) {
                CreateDamagingObject(13800550, 3801240, 1, 5830, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(51)) {
                CreateDamagingObject(13800550, 3801240, 1, 5831, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(52)) {
                CreateDamagingObject(13800550, 3801240, 1, 5832, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(53)) {
                CreateDamagingObject(13800550, 3801240, 1, 5833, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(54)) {
                CreateDamagingObject(13800550, 3801240, 1, 5834, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(55)) {
                CreateDamagingObject(13800550, 3801240, 1, 5835, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(56)) {
                CreateDamagingObject(13800550, 3801240, 1, 5836, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                SetNetworkconnectedEventFlag(13805554, ON);
            }
            ForceAnimationPlayback(3801240, 11, false, false, false, 0, 1);
            WaitFixedTimeSeconds(19);
            DeleteObjectEvent(13800550);
            RestartEvent();
        }
L0:
        DeleteObjectEvent(13800550);
        SpawnOneshotSFX(TargetEntityType.Object, 3801240, 200, 838091);
        PlaySE(3801240, SoundType.o_Object, 381070000);
        RequestObjectDestruction(3801240, 1);
        SetNetworkconnectedEventFlag(13805555, ON);
    }
L9:
    DeactivateObject(3801390, Enabled);
    SetObjectTreasureState(3801390, Enabled);
});

// Skeleton Ball - Handler
$Event(13805556, Restart, function() {
    EndIf(ObjectDestroyed(3801241));
    EndIf(ThisEventSlot());
L0:
    WaitFor(InArea(10000, 3802523) || InArea(10000, 3802524) || InArea(10000, 3802525));
    if (EventFlag(50)) {
        CreateDamagingObject(13800551, 3801241, 1, 5830, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(51)) {
        CreateDamagingObject(13800551, 3801241, 1, 5831, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(52)) {
        CreateDamagingObject(13800551, 3801241, 1, 5832, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(53)) {
        CreateDamagingObject(13800551, 3801241, 1, 5833, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(54)) {
        CreateDamagingObject(13800551, 3801241, 1, 5834, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(55)) {
        CreateDamagingObject(13800551, 3801241, 1, 5835, DamageTargetType.Character, 1.7, 20, 10);
    }
    if (EventFlag(56)) {
        CreateDamagingObject(13800551, 3801241, 1, 5836, DamageTargetType.Character, 1.7, 20, 10);
    }
    ForceAnimationPlayback(3801241, 21, false, false, false, 0, 1);
    WaitFixedTimeSeconds(12.5);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
});

// Skeleton Ball - Handler and Damage Script
$Event(13805557, Restart, function() {
    DeactivateObject(3801391, Disabled);
    SetObjectTreasureState(3801391, Disabled);
    ChangeCharacterEnableState(3800498, Disabled);
    SetCharacterAnimationState(3800498, Disabled);
    if (!ObjectDestroyed(3801241)) {
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetNetworkconnectedEventFlag(13805558, OFF);
        }
        WaitFor(EventFlag(13805556) && !EventFlag(13805558));
        if (!CharacterDead(3800260)) {
            if (ThisEventSlot()) {
                WaitFixedTimeSeconds(0.5);
            }
            if (EventFlag(50)) {
                CreateDamagingObject(13800551, 3801241, 1, 5830, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(51)) {
                CreateDamagingObject(13800551, 3801241, 1, 5831, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(52)) {
                CreateDamagingObject(13800551, 3801241, 1, 5832, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(53)) {
                CreateDamagingObject(13800551, 3801241, 1, 5833, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(54)) {
                CreateDamagingObject(13800551, 3801241, 1, 5834, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(55)) {
                CreateDamagingObject(13800551, 3801241, 1, 5835, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (EventFlag(56)) {
                CreateDamagingObject(13800551, 3801241, 1, 5836, DamageTargetType.Character, 1.7, 20, 10);
            }
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                SetNetworkconnectedEventFlag(13805558, ON);
            }
            ForceAnimationPlayback(3801241, 22, false, false, false, 0, 1);
            WaitFixedTimeSeconds(15.8);
            DeleteObjectEvent(13800551);
            RestartEvent();
        }
L0:
        DeleteObjectEvent(13800551);
        SpawnOneshotSFX(TargetEntityType.Object, 3801241, 200, 838091);
        PlaySE(3801241, SoundType.o_Object, 381070000);
        RequestObjectDestruction(3801241, 1);
        SetNetworkconnectedEventFlag(13805559, ON);
    }
L9:
    WaitFixedTimeFrames(1);
    DeactivateObject(3801391, Enabled);
    SetObjectTreasureState(3801391, Enabled);
    ChangeCharacterEnableState(3800498, Enabled);
    SetCharacterAnimationState(3800498, Enabled);
});

// Affinity Pot
$Event(13805560, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ObjectDestroyed(X0_4));
    WaitFor(ObjectDestroyed(X0_4));
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 10, 610707);
    if (EventFlag(50)) {
        ShootBullet(X8_4, X4_4, 10, 5840, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X8_4, X4_4, 10, 5841, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X8_4, X4_4, 10, 5842, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X8_4, X4_4, 10, 5843, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X8_4, X4_4, 10, 5844, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X8_4, X4_4, 10, 5845, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X8_4, X4_4, 10, 5846, 0, 0, 0);
    }
});

// Skeleton Ball Restoration
$Event(13805580, Restart, function() {
    EndIf(ThisEventSlot());
    RequestObjectRestoration(3801240);
    RequestObjectRestoration(3801241);
    RequestObjectRestoration(3806300);
});

// Treasure Control - Toggle based on Event Flag
$Event(13805590, Restart, function(X0_4, X4_4, X8_4) {
    GotoIf(L1, EventFlag(X8_4));
    GotoIf(L0, EventFlag(X4_4));
L1:
    DeactivateObject(X0_4, Disabled);
    SetObjectTreasureState(X0_4, Disabled);
    EndEvent();
L0:
    DeactivateObject(X0_4, Enabled);
    SetObjectTreasureState(X0_4, Enabled);
});

// Award Gesture
$Event(13805595, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(6065));
    WaitFor(EventFlag(13800196) || EventFlag(13800398));
    EndIf(EventFlag(6065));
    AwardGestureItem(15, ItemType.Goods, 9017);
    SetEventFlag(6065, ON);
});

// Wolnir Kill
$Event(13800800, Restart, function() {
    if (EventFlag(13801800)) {
        SetObjactState(3801561, -1, Disabled);
        ReproduceObjectAnimation(3801561, 1);
        EndEvent();
    }

L0:
    if (!EventFlag(13800800)) {
        WaitFor(HPRatio(3800800) <= 0);
        ClearSpEffect(3805800, 5830);
        ClearSpEffect(3805800, 5832);
        ForceCharacterDeath(3805800, false);
        WaitFixedTimeSeconds(1);
        PlaySE(3800800, SoundType.s_SFX, 777777777);

        WaitFor(!PlayerIsNotInOwnWorld() && CharacterDead(3800800));

        HandleBossDefeat(3800800);
        SetEventFlag(13800800, ON);
        SetEventFlag(9315, ON);
        SetEventFlag(6315, ON);

        InitializeCommonEvent(20020000, 25001007, 25002007, 800300000, 800300010, 120060, 121060); // Boss Kill

        SetSpEffect(10000, 4900);
        SetSpEffect(10000, 4901);

        WaitFixedTimeSeconds(5);
    }

L1:
    if (InArea(10000, 3802806)) {
        if (!HasMultiplayerState(MultiplayerState.TryingtoCreateSession)) {
            PlayCutsceneAndWarpPlayer(38000020, CutscenePlayMode.SkippableWithFadeOut, 3802804, 38, 0, 10000);
        } else if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            PlayCutsceneAndWarpPlayer(38000020, CutscenePlayMode.UnskippableWithFadeOut, 3802804, 38, 0, 10000);
        } else {
            PlayCutsceneAndWarpPlayer(38000020, CutscenePlayMode.Unskippable, 3802807, 38, 0, 10000);
        }
        WaitFixedTimeFrames(1);
    }

L2:
    ReproduceObjectAnimation(3801561, 1);
    SetEventFlag(63800561, ON);
    ClearSpEffect(10000, 4900);
    ClearSpEffect(10000, 4901);
    SetEventFlag(13801800, ON);
});

// Wolnir - Boss Start
$Event(13805809, Restart, function() {
    if (EventFlag(13800800)) {

        // Disable and end if defeated
        ChangeCharacterEnableState(3800800, Disabled);
        ForceCharacterDeath(3800800, false);
        ChangeCharacterEnableState(3805800, Disabled);
        ForceCharacterDeath(3805800, false);
        EndEvent();
    }

    // If not defeated
L0:
    SetObjactState(3801561, 1000371, Disabled);
    SetCharacterAIState(3805800, Disabled);
    SetCharacterAIState(3800800, Disabled);

    // End if not main player
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterInvadeType(10000, 4)
            || CharacterInvadeType(10000, 7)
            || CharacterInvadeType(10000, 21));

    // Goto 1 if fight has started
    if (!EventFlag(13805805)) {

        // Allow client to enter
        WaitFor(
            !PlayerIsNotInOwnWorld() && !EventFlag(13800800) && ActionButtonInArea(9322, 3801810));

        // Send invader home
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SendInvadingPhantomsHome(0);
        }
    }

L1:

    // Cutscene stuff
    if (!HasMultiplayerState(MultiplayerState.TryingtoCreateSession)) {
        PlayCutsceneAndWarpPlayer(38000000, CutscenePlayMode.SkippableWithFadeOut, 3802802, 38, 0, 10000);
    } else if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        PlayCutsceneAndWarpPlayer(38000000, CutscenePlayMode.UnskippableWithFadeOut, 3802802, 38, 0, 10000);
    } else {
        PlayCutsceneAndWarpPlayer(38000000, CutscenePlayMode.Unskippable, 3802803, 38, 0, 10000);
    }
    WaitFixedTimeFrames(1);

    // Cutscene VFX
    DeleteObjectfollowingSFX(3801360, false);
    DeleteObjectfollowingSFX(3801361, false);
    DeleteObjectfollowingSFX(3801362, false);
    DeleteObjectfollowingSFX(3801363, false);
    DeleteObjectfollowingSFX(3801364, false);
    DeleteObjectfollowingSFX(3801365, false);
    DeleteObjectfollowingSFX(3801366, false);
    DeleteObjectfollowingSFX(3801367, false);
    DeleteObjectfollowingSFX(3801368, false);
    DeleteObjectfollowingSFX(3801369, false);
    DeleteObjectfollowingSFX(3801370, false);
    DeleteObjectfollowingSFX(3801371, false);
    DeleteObjectfollowingSFX(3801372, false);
    DeleteObjectfollowingSFX(3801373, false);
    DeleteObjectfollowingSFX(3801374, false);
    DeleteObjectfollowingSFX(3801375, false);
    DeleteObjectfollowingSFX(3801376, false);
    DeleteObjectfollowingSFX(3801377, false);
    DeleteObjectfollowingSFX(3801378, false);
    DeleteObjectfollowingSFX(3801379, false);
    DeleteObjectfollowingSFX(3801380, false);

    // End if boss not started
    EndIf(!EventFlag(13800801));

    SetSpEffect(3800800, 5300); // Damage Level Change
    SetSpEffect(3800800, 5400); // Animation ID Offset
    SetSpEffect(3800800, 5441); // Blood Damage Rate 50
    SetSpEffect(3800800, 7060); // Level Scaling - Catacombs of Carthus
    SetSpEffect(3800800, 30100); // NPC: Ignore Fake Targets

    WaitFixedTimeFrames(1);

    SetSpEffect(3800800, 10507); // Miasma Damage
    SetSpEffect(3800800, 10508); // Miasma Damage
    SetSpEffect(3800800, 12250); // Bracelet Status 1
    SetSpEffect(3800800, 12252); // Bracelet Status 2
    SetSpEffect(3800800, 12254); // Bracelet Status 3
    SetSpEffect(3800800, 12256); // Bracelet Status 4
    SetSpEffect(3800800, 12610); // Darkness Aura
    SetSpEffect(3800800, 12611); // Darkness Aura
    SetSpEffect(3800800, 12612); // Darkness Aura
    SetSpEffect(3800800, 12617); // VFX
    SetSpEffect(3800800, 12618); // Darkness Aura

    ActivateHit(3804810, Disabled);

    SetCharacterAIState(3800800, Enabled);
    SetCharacterAIState(3805800, Enabled);

    DisplayBossHealthBar(Enabled, 3800800, 0, 905160);
    SetNetworkUpdateRate(3800800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(3800800);

    InitializeCommonEvent(20020106, 0); // Boss Start

    EndIf(PlayerIsNotInOwnWorld());

    SetNetworkconnectedEventFlag(13805805, ON);
    SetNetworkUpdateAuthority(3800800, AuthorityLevel.Forced);

    IssueBossRoomEntryNotification(0);
});

// Wolnir - Boss Room Entry - Client
$Event(13805810, Restart, function() {
    EndIf(EventFlag(13800800));
    EndIf(EventFlag(13800801));

    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        ActivateHit(3804810, Disabled);
    }

    WaitFor(
        HasDamageType(3800800, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(10000, 3800800, 27, 1));

    SetSpEffect(3800800, 5300);
    SetSpEffect(3800800, 5400);
    SetSpEffect(3800800, 5441);
    SetSpEffect(3800800, 7060);
    SetSpEffect(3800800, 30100);

    WaitFixedTimeFrames(1);

    SetSpEffect(3800800, 10507);
    SetSpEffect(3800800, 10508);
    SetSpEffect(3800800, 12250);
    SetSpEffect(3800800, 12252);
    SetSpEffect(3800800, 12254);
    SetSpEffect(3800800, 12256);
    SetSpEffect(3800800, 12610);
    SetSpEffect(3800800, 12611);
    SetSpEffect(3800800, 12612);
    SetSpEffect(3800800, 12617);
    SetSpEffect(3800800, 12618);

    SetCharacterAIState(3800800, Enabled);
    SetCharacterAIState(3805800, Enabled);

    DisplayBossHealthBar(Enabled, 3800800, 0, 905160);
    SetNetworkUpdateRate(3800800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(3800800);

    InitializeCommonEvent(20020106, 0); // Boss Start

    ActivateHit(3804810, Disabled);

    SetEventFlag(13800801, ON);

    EndIf(PlayerIsNotInOwnWorld());

    SetNetworkconnectedEventFlag(13805805, ON);
    SetNetworkUpdateAuthority(3800800, AuthorityLevel.Forced);

    IssueBossRoomEntryNotification(0);
});

// Wolnir - Phase Flag
$Event(13805811, Restart, function() {
    EndIf(EventFlag(13800800));
    WaitFor(HPRatio(3800800) <= 0.8);
    SetEventFlag(13805802, ON);
});

// Wolnir - Setup Bracelets
$Event(13805812, Restart, function() {
    EndIf(EventFlag(13800800));

    WaitFor(!PlayerIsNotInOwnWorld() && CharacterBackreadStatus(3800800));

    if (!EventFlag(13805814)) {
        CreateNPCPart(3800800, 20, NPCPartType.Part2, 500, 1, 1, false, false);
        CreateNPCPart(3800800, 30, NPCPartType.Part3, 500, 1, 1, false, false);
        IncrementCharacterGameCycle(3800800);
    }

    if (!EventFlag(13805813)) {
        CreateNPCPart(3800800, 40, NPCPartType.Part4, 500, 1, 1, false, false);
        CreateNPCPart(3800800, 50, NPCPartType.Part5, 500, 1, 1, false, false);
        IncrementCharacterGameCycle(3800800);
    }

    WaitFixedTimeFrames(1);

    EndEvent();
});

// Wolnir - Bracelet Destruction
$Event(13805813, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(EventFlag(13800800));

    WaitFixedTimeFrames(1);

    WaitFor(
        CharacterDead(3800800)
            || (!PlayerIsNotInOwnWorld()
                && EventFlag(X16_4)
                && InArea(10000, 3802806)
                && (NPCPartHP(3800800, X0_4) <= X4_4 || NPCPartHP(3800800, X8_4) <= X12_4)));

    EndIf(CharacterDead(3800800));
    flag = EventValue(13805816, 2) == 1;
    flag2 = EventValue(13805816, 2) == 2;
    GotoIf(L1, flag);
    GotoIf(L2, flag2);

L0:
    SetSpEffect(3800800, 12616);
    ForceAnimationPlayback(3800800, X24_4, false, true, false, 0, 1);
    RequestCharacterAIReplan(3800800);
    IncrementEventValue(13805816, 2, 3);
    EndEvent();

L1:
    SetSpEffect(3800800, 12616);
    ForceAnimationPlayback(3800800, X28_4, false, true, false, 0, 1);
    RequestCharacterAIReplan(3800800);
    IncrementEventValue(13805816, 2, 3);
    EndEvent();

L2:
    SetSpEffect(3800800, 12615);
    ForceAnimationPlayback(3800800, X32_4, false, true, false, 0, 1);
    RequestCharacterAIReplan(3800800);
    IncrementEventValue(13805816, 2, 3);
    EndEvent();
    SetSpEffect(3800800, X20_4);
});

// Wolnir - Renew Left Bracelets
$Event(13804814, Default, function(X0_4) {
    EndIf(EventFlag(13800800));
    EndIf(ThisEventSlot());

    WaitFor(EventFlag(X0_4));
    CreateNPCPart(3800800, 21, NPCPartType.Part2, 500, 1, 1, false, false);
    CreateNPCPart(3800800, 31, NPCPartType.Part3, 500, 1, 1, false, false);
    IncrementCharacterGameCycle(3800800);

    WaitFixedTimeFrames(1);

    EndEvent();
});

// Set Flag for White Phantoms
$Event(13805828, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(
        !EventFlag(X0_4)
            && EventFlag(X8_4)
            && InArea(10000, X4_4)
            && CharacterType(10000, TargetType.WhitePhantom));
    SetEventFlag(X12_4, ON);
    RestartEvent();
});

// Toggle Wolnir Front Doors
$Event(13804829, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    WaitFor(
        PlayerIsNotInOwnWorld()
            || ((HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
                || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
                && EventFlag(X0_4)));
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    WaitFor(
        !PlayerIsNotInOwnWorld()
            && !((HasMultiplayerState(MultiplayerState.TryingtoCreateSession)
                || HasMultiplayerState(MultiplayerState.TryingtoJoinSession))
                && EventFlag(X0_4)));
    RestartEvent();
});

// Wolnir - Common Setup
$Event(13805829, Restart, function() {
    InitializeEvent(0, 13805828, 13800800, 3802821, 13805805, 13805806); // Set Flag for White Phantoms
    InitializeEvent(0, 13804829, 13800800, 3801800, 2); // Toggle Wolnir Front Doors

    if (EventFlag(13800801)) {
        InitializeCommonEvent(20005831, 13800800, 13805805, 13805806, 3802806, 3804801, 3804802, 13805802);
    } else {

        InitializeCommonEvent(20001836, 13800800, 13805805, 13805806, 13800801, 3804801, 3804802, 13805802);
    }
    InitializeCommonEvent(20005810, 13800800, 3801800, 3802800, 10000);
});

// Old Demon King Kill
$Event(13800830, Default, function() {
    EndIf(EventFlag(13800830));
    WaitFor(HPRatio(3800830) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(3800830, SoundType.s_SFX, 777777777);
    WaitFor(CharacterDead(3800830));
    HandleBossDefeat(3800830);
    SetEventFlag(13800830, ON);
    SetEventFlag(9317, ON);
    SetEventFlag(6317, ON);
    InitializeCommonEvent(20020000, 25001008, 25002008, 800300010, 800300020, 120070, 121070); // Boss Kill
});

// Old Demon King - Boss Start
$Event(13805840, Restart, function() {
    if (EventFlag(13800830)) {
        ChangeCharacterEnableState(3800830, Disabled);
        ForceCharacterDeath(3800830, false);
        EndEvent();
    }

L0:
    SetCharacterAIState(3800830, Disabled);
    if (!EventFlag(13800831)) {
        WaitFor(
            HasDamageType(3800830, 10000, DamageType.Unspecified)
                || (!PlayerIsNotInOwnWorld() && EntityInRadiusOfEntity(3800830, 10000, 22, 1)));
        SetNetworkconnectedEventFlag(13800831, ON);
        ForceAnimationPlayback(3800830, 1700, false, true, false, 0, 1);
    } else {

L1:
        WaitFor(EventFlag(13805835) && InArea(10000, 3802830));
        SetSpEffect(3800830, 10575);
    }

L2:
    SetCharacterAIState(3800830, Enabled);
    DisplayBossHealthBar(Enabled, 3800830, 0, 903050);
    SetNetworkUpdateRate(3800830, true, CharacterUpdateFrequency.AlwaysUpdate);
    InitializeCommonEvent(20020107, 0); // Boss Start
});

// Old Demon King - Phase Flag
$Event(13805841, Restart, function() {
    EndIf(EventFlag(13800830));
    WaitFor(HPRatio(3800830) <= 0.5);
    SetEventFlag(13805832, ON);
});

// Old Demon King - Phase Animation
$Event(13805842, Restart, function() {
    EndIf(EventFlag(13800830));
    EndIf(EventFlag(13800831));
    ForceAnimationPlayback(3800830, 700, false, false, false, 0, 1);
});

// Old Demon King - Heatup Phase Animation
$Event(13805843, Restart, function() {
    EndIf(EventFlag(13800830));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(3800830) <= 0.15 && HasDamageType(3800830, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(3800830, 20002, false, false, true, 0, 1);
});

// Old Demon King - NPC Part
$Event(13805844, Restart, function() {
    EndIf(EventFlag(13805830));
    CreateNPCPart(3800830, 10, NPCPartType.Part1, 1000, 1, 1, false, false);
    WaitFor(NPCPartHP(3800830, 10) <= 0 && !CharacterHasSpEffect(3800830, 5404));
    ForceAnimationPlayback(3800830, 20000, false, false, false, 0, 1);
    SetNPCPartHP(3800830, 10, 1000, true);
    RestartEvent();
});

// Old Demon King - Boss Room Entry
$Event(13805857, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X0_4));
    if (EventFlag(X12_4)) {
        ActivateMultiplayerdependantBuffs(X20_4);
    }
    if (!PlayerIsNotInOwnWorld()) {
        WaitFor(!PlayerIsNotInOwnWorld() && !EventFlag(X0_4) && ActionButtonInArea(X16_4, X4_4));
        GotoIf(L2, PlayerIsNotInOwnWorld());
        RotateCharacter(10000, X8_4, 60060, true);
    }
L3:
    if (!EventFlag(X12_4)) {
        time = ElapsedSeconds(3);
        WaitFor(!PlayerIsNotInOwnWorld() && !EventFlag(X0_4) && (InArea(10000, X8_4) || time));
        RestartIf(time.Passed);
        WaitFor(EventFlag(13800831));
    }
L1:
    if (!PlayerIsNotInOwnWorld()) {
        IssueBossRoomEntryNotification(0);
        SetNetworkUpdateAuthority(X20_4, AuthorityLevel.Forced);
    }
L2:
    ActivateMultiplayerdependantBuffs(X20_4);
    SetNetworkconnectedEventFlag(X12_4, ON);
    RestartEvent();
});

// Old Demon King - Common Setup
$Event(13805859, Restart, function() {
    InitializeEvent(0, 13805857, 13800830, 3801830, 3802830, 13805835, 3801830, 3800830); // Old Demon King - Boss Room Entry
    InitializeCommonEvent(20005801, 13800830, 3801830, 3802830, 13805835, 3801830, 13805836);
    InitializeCommonEvent(20005820, 13800830, 3801830, 4, 0);
    if (!EventFlag(13800831)) {
        InitializeCommonEvent(20001836, 13800830, 13805835, 13805836, 13800831, 3804831, 3804832, 13805832);
    } else {
        InitializeCommonEvent(20005831, 13800830, 13805835, 13805836, 3802830, 3804831, 3804832, 13805832);
    }
    InitializeCommonEvent(20005837, 13800830, 3800830, 1094713344, 5290, 5290, 13805835, 13805836);
    InitializeCommonEvent(20005810, 13800830, 3801830, 3802830, 10000);
});

// Wolnir - Set Flag whilst Killed
$Event(13800899, Default, function() {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(13800800) && EventFlag(13800800) && EventFlag(13800800));
    SetEventFlag(13800899, ON);
});

// Fog Wall - Smouldering Lake Entrance
$Event(13805570, Default, function() {
    DeactivateObject(3801975, Disabled);
    EndEvent();
});

// Anri - Pre-setup
$Event(13805700, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    if (!PlayerIsNotInOwnWorld()) {
        if (!AnyBatchEventFlags(1355, 1359)) {
            BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
            SetNetworkconnectedEventFlag(1355, ON);
        }
        if (EventFlag(1356) && EventFlag(70000069)) {
            BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
            SetNetworkconnectedEventFlag(1355, ON);
        }
        if (!AnyBatchEventFlags(1340, 1354)) {
            BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
            SetNetworkconnectedEventFlag(1340, ON);
        }
        if (EventFlag(1355)) {
            if (EventFlag(1342) && EventFlag(74000700)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1344, ON);
            }
            if (EventFlag(1344) && (EventFlag(73800100) || EventFlag(73800134))) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1345, ON);
            }
            if (EventFlag(1345)
                && EventFlag(73800101)
                && EventFlag(73800102)
                && EventFlag(1497)
                && EventFlag(9315)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1346, ON);
                BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
                SetNetworkconnectedEventFlag(1358, ON);
            }
            if (EventFlag(1345)
                && EventFlag(73800101)
                && EventFlag(73800102)
                && EventFlag(1498)
                && EventFlag(9315)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1347, ON);
                SetEventFlag(8263, ON);
                BatchSetNetworkconnectedEventFlags(1560, 1574, OFF);
                SetNetworkconnectedEventFlag(1561, ON);
            }
            if (EventFlag(1345) && EventFlag(73800101) && !EventFlag(73800102) && EventFlag(9315)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1347, ON);
                BatchSetNetworkconnectedEventFlags(1560, 1574, OFF);
                SetNetworkconnectedEventFlag(1561, ON);
            }
            if (EventFlag(1351) && EventFlag(50006030) && EventFlag(8263)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1353, ON);
                BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
                SetNetworkconnectedEventFlag(1357, ON);
            }
        }
L9:
        SetEventFlag(70000069, OFF);
        if (EventFlag(1355)) {
            SetEventFlag(73800120, OFF);
        }
    }
L10:
    GotoIf(L3, EventFlag(1344));
    GotoIf(L4, EventFlag(1345));
    GotoIf(L5, EventFlag(1346));
    GotoIf(L6, AnyBatchEventFlags(1347, 1352));
    GotoIf(L13, EventFlag(1353));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X24_4, true);
    ChangeCharacterEnableState(X28_4, Disabled);
    SetCharacterBackreadState(X28_4, true);
    DeleteMapSFX(X40_4, true);
    DeleteMapSFX(X44_4, true);
    EndEvent();
L3:
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X24_4, true);
    ChangeCharacterEnableState(X28_4, Disabled);
    SetCharacterBackreadState(X28_4, true);
    DeleteMapSFX(X40_4, true);
    DeleteMapSFX(X44_4, true);
    GotoIf(L16, EventFlag(1356));
    GotoIf(L18, EventFlag(1358));
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        ForceAnimationPlayback(X0_4, X32_4, true, false, true, 0, 1);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceAnimationPlayback(X4_4, X32_4, true, false, true, 0, 1);
    EndEvent();
L16:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndEvent();
L18:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        ForceCharacterTreasure(X0_4);
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X4_4);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndEvent();
L4:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X24_4, true);
    ChangeCharacterEnableState(X28_4, Disabled);
    SetCharacterBackreadState(X28_4, true);
    DeleteMapSFX(X44_4, true);
    GotoIf(L16, EventFlag(1356));
    GotoIf(L18, EventFlag(1358));
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X12_4, Disabled);
        SetCharacterBackreadState(X12_4, true);
        ForceAnimationPlayback(X8_4, X32_4, true, false, true, 0, 1);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ForceAnimationPlayback(X12_4, X32_4, true, false, true, 0, 1);
    EndEvent();
L16:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X12_4, Disabled);
        SetCharacterBackreadState(X12_4, true);
        SetCharacterTeamType(X8_4, TeamType.HostileNPC);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterTeamType(X12_4, TeamType.HostileNPC);
    EndEvent();
L18:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X12_4, Disabled);
        SetCharacterBackreadState(X12_4, true);
        ForceCharacterTreasure(X8_4);
        ChangeCharacterEnableState(X8_4, Disabled);
        SetCharacterBackreadState(X8_4, true);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ForceCharacterTreasure(X12_4);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    EndEvent();
L5:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X24_4, true);
    ChangeCharacterEnableState(X28_4, Disabled);
    SetCharacterBackreadState(X28_4, true);
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X20_4, Disabled);
        SetCharacterBackreadState(X20_4, true);
        EzstateInstructionRequest(X16_4, X36_4, 1);
        ForceCharacterTreasure(X16_4);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    EzstateInstructionRequest(X20_4, X36_4, 1);
    ForceCharacterTreasure(X20_4);
    EndEvent();
L6:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X24_4, true);
    ChangeCharacterEnableState(X28_4, Disabled);
    SetCharacterBackreadState(X28_4, true);
    EndEvent();
L13:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    if (!EventFlag(1358)) {
        if (EventFlag(9013)) {
            ChangeCharacterEnableState(X28_4, Disabled);
            SetCharacterBackreadState(X28_4, true);
            SetCharacterAIState(X24_4, Disabled);
            SetCharacterTeamType(X24_4, TeamType.HostileNPC);
            EndEvent();
        }
L20:
        ChangeCharacterEnableState(X24_4, Disabled);
        SetCharacterBackreadState(X24_4, true);
        SetCharacterAIState(X28_4, Disabled);
        SetCharacterTeamType(X28_4, TeamType.HostileNPC);
        EndEvent();
    }
L18:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X28_4, Disabled);
        SetCharacterBackreadState(X28_4, true);
        ForceCharacterTreasure(X24_4);
        ChangeCharacterEnableState(X24_4, Disabled);
        SetCharacterBackreadState(X24_4, true);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X24_4, true);
    ForceCharacterTreasure(X28_4);
    ChangeCharacterEnableState(X28_4, Disabled);
    SetCharacterBackreadState(X28_4, true);
    EndEvent();
});

// NO REF
$Event(13805701, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(1343) && EventFlag(1355) && EventFlag(1483) && EventFlag(1495) && EventFlag(136));
    if (!PlayerIsNotInOwnWorld()) {
        BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
        SetNetworkconnectedEventFlag(1344, ON);
        BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
        SetNetworkconnectedEventFlag(1484, ON);
        BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
        SetNetworkconnectedEventFlag(1497, ON);
    }
L1:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X0_4, Enabled);
        SetCharacterBackreadState(X0_4, false);
        ForceAnimationPlayback(X0_4, X8_4, true, false, true, 0, 1);
    } else {
L10:
        ChangeCharacterEnableState(X4_4, Enabled);
        SetCharacterBackreadState(X4_4, false);
        ForceAnimationPlayback(X4_4, X8_4, true, false, true, 0, 1);
        Goto(L20);
    }
L20:
    ChangeCharacterEnableState(X12_4, Enabled);
    SetCharacterBackreadState(X12_4, false);
    SetCharacterTeamType(X12_4, TeamType.HostileNPC);
    EndIf(PlayerIsNotInOwnWorld());
    SaveRequest(0);
});

// Horace - Check Player Death
$Event(13800702, Default, function(X0_4, X4_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(1484)
            && PlayerStandingOnHit(X4_4)
            && ((HPRatio(10000) > 0 && EntityInRadiusOfEntity(X0_4, 10000, 30, 1))
                || HasDamageType(X0_4, 10000, DamageType.Unspecified)));
    SetEventFlag(73800134, ON);
});

// Horace - Setup
$Event(13805703, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    SetEventFlag(13800703, OFF);
    SetNetworkSyncState(Disabled);
    if (!PlayerIsNotInOwnWorld()) {
        EndIf(AnyBatchEventFlags(1346, 1354));
        WaitFor(
            ((EventFlag(1355)
                && EventFlag(1344)
                && (EventFlag(73800100) || EventFlag(73800134))
                && !CharacterBackreadStatus(X0_4)
                && !CharacterBackreadStatus(X4_4))
                || (EventFlag(1355)
                    && EventFlag(1345)
                    && EventFlag(73800101)
                    && EventFlag(9315)
                    && !CharacterBackreadStatus(X8_4)
                    && !CharacterBackreadStatus(X12_4)))
                && !PlayerIsNotInOwnWorld());
        if (EventFlag(1355) && EventFlag(1344) && (EventFlag(73800100) || EventFlag(73800134))) {
            BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
            SetNetworkconnectedEventFlag(1345, ON);
        }
        if (EventFlag(1355)
            && EventFlag(1345)
            && EventFlag(73800101)
            && EventFlag(73800102)
            && !EventFlag(1498)
            && EventFlag(9315)) {
            BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
            SetNetworkconnectedEventFlag(1346, ON);
            BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
            SetNetworkconnectedEventFlag(1358, ON);
        }
        if (EventFlag(1355)
            && EventFlag(1345)
            && EventFlag(73800101)
            && EventFlag(73800102)
            && EventFlag(1498)
            && EventFlag(9315)) {
            BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
            SetNetworkconnectedEventFlag(1347, ON);
            BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
            SetNetworkconnectedEventFlag(1485, ON);
            SetEventFlag(8263, ON);
            BatchSetNetworkconnectedEventFlags(1560, 1574, OFF);
            SetNetworkconnectedEventFlag(1561, ON);
        }
        if (EventFlag(1355)
            && EventFlag(1345)
            && EventFlag(73800101)
            && !EventFlag(73800102)
            && EventFlag(9315)) {
            BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
            SetNetworkconnectedEventFlag(1347, ON);
            BatchSetNetworkconnectedEventFlags(1560, 1574, OFF);
            SetNetworkconnectedEventFlag(1561, ON);
        }
        SaveRequest(0);
        SetNetworkconnectedEventFlag(13800703, ON);
    }
L10:
    WaitFor(EventFlag(13800703));
    GotoIf(L5, EventFlag(1345));
    GotoIf(L6, EventFlag(1346));
    GotoIf(L7, EventFlag(1347));
    EndEvent();
L5:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    SpawnMapSFX(X40_4);
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X12_4, Disabled);
        SetCharacterBackreadState(X12_4, true);
        ChangeCharacterEnableState(X8_4, Enabled);
        SetCharacterBackreadState(X8_4, false);
        ForceAnimationPlayback(X8_4, X24_4, true, false, true, 0, 1);
        RestartEvent();
    }
L20:
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Enabled);
    SetCharacterBackreadState(X12_4, false);
    ForceAnimationPlayback(X12_4, X24_4, true, false, true, 0, 1);
    RestartEvent();
L6:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    SpawnMapSFX(X40_4);
    SpawnMapSFX(X44_4);
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X20_4, Disabled);
        SetCharacterBackreadState(X20_4, true);
        ChangeCharacterEnableState(X16_4, Enabled);
        SetCharacterBackreadState(X16_4, false);
        EzstateInstructionRequest(X16_4, X28_4, 1);
        ForceCharacterTreasure(X16_4);
        EndEvent();
    }
L20:
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Enabled);
    SetCharacterBackreadState(X20_4, false);
    EzstateInstructionRequest(X20_4, X28_4, 1);
    ForceCharacterTreasure(X20_4);
    EndEvent();
L7:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X12_4, true);
    ChangeCharacterEnableState(X16_4, Disabled);
    SetCharacterBackreadState(X16_4, true);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X20_4, true);
    SpawnMapSFX(X40_4);
    SpawnMapSFX(X44_4);
    EndIf(!EventFlag(1485));
    ChangeCharacterEnableState(X32_4, Disabled);
    SetCharacterBackreadState(X32_4, true);
    ActivateMapPart(X36_4, Enabled);
    SpawnMapSFX(X48_4);
    ActivateHit(X52_4, Enabled);
    EndEvent();
});

// Anri - Enable Toggle
$Event(13805704, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(
        EventFlag(1353)
            && !EventFlag(1358)
            && (EntityInRadiusOfEntity(X0_4, 10000, 5, 1)
                || HasDamageType(X0_4, 10000, DamageType.Unspecified)));
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

// Anri - Pre-setup
$Event(13805706, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!PlayerIsNotInOwnWorld()) {
        if (!AnyBatchEventFlags(1495, 1499)) {
            BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
            SetNetworkconnectedEventFlag(1495, ON);
        }
        if (EventFlag(1496) && EventFlag(70000076)) {
            BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
            SetNetworkconnectedEventFlag(1495, ON);
        }
        if (!AnyBatchEventFlags(1480, 1494)) {
            BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
            SetNetworkconnectedEventFlag(1480, ON);
        }
        if (EventFlag(1482) && EventFlag(74000700)) {
            BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
            SetNetworkconnectedEventFlag(1484, ON);
            BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
            SetNetworkconnectedEventFlag(1497, ON);
        }
        if ((EventFlag(1484)
            && EventFlag(1498)
            && (EventFlag(1347)
                || (EventFlag(1345) && (EventFlag(1355) || (EventFlag(1356) && EventFlag(70000069)))))
            && EventFlag(73800101)
            && EventFlag(73800102)
            && EventFlag(9315))
            || EventFlag(8263)) {
            BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
            SetNetworkconnectedEventFlag(1485, ON);
        }
L9:
        SetEventFlag(70000076, OFF);
    }
L10:
    GotoIf(L0, EventFlag(1484));
    GotoIf(L2, EventFlag(1485));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ActivateMapPart(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ActivateHit(X12_4, Disabled);
    EndEvent();
L0:
    ActivateMapPart(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ActivateHit(X12_4, Disabled);
    if (!EventFlag(1498)) {
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        EndEvent();
    }
L1:
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L2:
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

// Anri - Pre-setup
$Event(13805707, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    if (!AnyBatchEventFlags(1055, 1059)) {
        BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
        SetNetworkconnectedEventFlag(1055, ON);
    }
    if (EventFlag(1056) && EventFlag(70000054)) {
        BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
        SetNetworkconnectedEventFlag(1055, ON);
    }
    if (!AnyBatchEventFlags(1040, 1054)) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1040, ON);
    }
    EndIf(!EventFlag(1055));
    if (EventFlag(1040) && YoelLevelCount() <= 0 && !EventFlag(74000124)) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1041, ON);
    }
    if (EventFlag(1041) && EventFlag(50006193)) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1042, ON);
    }
    if (AnyBatchEventFlags(1040, 1042)
        && ((YoelLevelCount() > 0 && EventFlag(1078)) || EventFlag(74000124))) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1044, ON);
    }
    if (EventFlag(1041) && AnyBatchEventFlags(1340, 1347) && EventFlag(1358)) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1044, ON);
    }
    if (AnyBatchEventFlags(1041, 1042) && EventFlag(1561) && EventFlag(1578)) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1043, ON);
    }
    if (EventFlag(1043) && (EventFlag(74000619) || !EventFlag(74000600))) {
        BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
        SetNetworkconnectedEventFlag(1044, ON);
    }
});

//----------------------------------------
// Core
// -- Initialization commands go here.
//----------------------------------------
$Event(13807000, Default, function() {
    
    //# Bonfires
    InitializeEvent(0, 13807010, 0); 
    
    //# Treasure
    InitializeEvent(0, 13807011, 0); 
    
    //# Mimics
    InitializeEvent(0, 13807012, 0);
    
    //# Scripted Treasure
    InitializeEvent(0, 13807013, 0); 
    
    //# Scripted Enemies
    InitializeEvent(0, 13807014, 0);
    
    //# Interactables
    InitializeEvent(0, 13807015, 0);
    
    //# Friendly Characters
    InitializeEvent(0, 13807050, 0);
    
    //# Intruders
    InitializeEvent(0, 13807051, 0);
    
    //# Summons
    InitializeEvent(0, 13807052, 0); 
    
    //# Conjurations
    InitializeEvent(0, 13807053, 0);
    
    //# Bosses
    InitializeEvent(0, 13807060, 0);
    
    //# Gauntlet
    InitializeEvent(0, 13807070, 0);
    
    //# Ceremony
    InitializeEvent(0, 13807200, 0);
});

//----------------------------------------
// Bonfires
// -- Bonfire commands go here.
//----------------------------------------
$Event(13807010, Default, function() {

   // Bonfires - Skip if in Flameless
    if(!EventFlag(25000140))
    {
        RegisterBonfire(13800000, 3801950, 5, 180, 0); // Wolnir
        RegisterBonfire(13800001, 3801951, 5, 180, 0); // Bonfire
        RegisterBonfire(13800002, 3801952, 5, 180, 0); // Bonfire
        RegisterBonfire(13800003, 3801953, 5, 180, 0); // Bonfire
        RegisterBonfire(13800004, 3801954, 5, 180, 0); // Old Demon King
        RegisterBonfire(13800006, 3801956, 5, 180, 0); // Bonfire
    }
    else
    {
        DeactivateObject(3801950, Disabled);
        DeactivateObject(3801951, Disabled);
        DeactivateObject(3801952, Disabled);
        DeactivateObject(3801953, Disabled);
        DeactivateObject(3801954, Disabled);
        DeactivateObject(3801956, Disabled);
    }
});

//----------------------------------------
// Treasure
// -- Basic treasure commands go here.
//----------------------------------------
$Event(13807011, Default, function() {
    
    // BatchSetEventFlags(13801600, 13801620, OFF);

    // Chests
    InitializeCommonEvent(20005520, 13801600, 3801600, 3804600);
    InitializeCommonEvent(20086002, 13801601, 3801601, 3804601, 3800650, 3800651, 3800652, 700, 1700); // Skeletons
    InitializeCommonEvent(20086002, 13801602, 3801602, 3804602, 3800653, 3800654, 3800655, 700, 1700); // Skeletons
    InitializeCommonEvent(20005520, 13801603, 3801603, 3804603);
    InitializeCommonEvent(20005520, 13801604, 3801604, 3804604);
    InitializeCommonEvent(20005520, 13801605, 3801605, 3804605);
    InitializeCommonEvent(20086000, 13801606, 3801606, 3804606, 3800660, 280002020); // Combustion
    InitializeCommonEvent(20086000, 13801607, 3801607, 3804607, 3800661, 280002020); // Combustion
    InitializeCommonEvent(20005520, 13801608, 3801608, 3804608);
    InitializeCommonEvent(20005520, 13801609, 3801609, 3804609);
    InitializeCommonEvent(20005520, 13801610, 3801610, 3804610);
    InitializeCommonEvent(20005520, 13801611, 3801611, 3804611);
    InitializeCommonEvent(20005520, 13801612, 3801612, 3804612);
    InitializeCommonEvent(20005520, 13801613, 3801613, 3804613);
    InitializeCommonEvent(20005520, 13801614, 3801614, 3804614);
    InitializeCommonEvent(20005520, 13801615, 3801615, 3804615);
    InitializeCommonEvent(20005520, 13801616, 3801616, 3804616);
});


//----------------------------------------
// Mimics
// -- Mimic commands go here.
//----------------------------------------
$Event(13807012, Default, function() {
    
    // Mimics
    InitializeCommonEvent(20005400, 3800900); // Open Action
    InitializeCommonEvent(20005400, 3800901); // Open Action
    InitializeCommonEvent(20005400, 3800902); // Open Action
    InitializeCommonEvent(20005400, 3800903); // Open Action
    InitializeCommonEvent(20005400, 3800904); // Open Action
    InitializeCommonEvent(20005400, 3800905); // Open Action
    InitializeCommonEvent(20005400, 3800906); // Open Action
    InitializeCommonEvent(20000343, 13800900, 3800900, 53801000); // Treasure Control 
    InitializeCommonEvent(20000343, 13800901, 3800901, 53801010); // Treasure Control 
    InitializeCommonEvent(20000343, 13800902, 3800902, 53801020); // Treasure Control 
    InitializeCommonEvent(20000343, 13800903, 3800903, 53801030); // Treasure Control 
    InitializeCommonEvent(20000343, 13800904, 3800904, 53801040); // Treasure Control 
    InitializeCommonEvent(20000343, 13800905, 3800905, 53801050); // Treasure Control 
    InitializeCommonEvent(20000343, 13800906, 3800906, 53801060); // Treasure Control
});


//----------------------------------------
// Scripted Treasure
// -- Complex treasure commands go here.
//----------------------------------------
$Event(13807013, Default, function() {
    
    // One-time Loot
    InitializeCommonEvent(20005351, 3800293, 3802000, 53802000, 1); // Bonewheel Shield
    InitializeCommonEvent(20005351, 3800391, 3802010, 53802010, 1); // Black Knight Greatsword
    InitializeCommonEvent(20005351, 3800395, 3802020, 53802020, 1); // Black Knight Greataxe
    InitializeCommonEvent(20005351, 3800309, 3802030, 53802030, 1); // Carthus Curved Greatsword
    InitializeCommonEvent(20005351, 3800321, 3802040, 53802040, 1); // Carthus Shotel
    InitializeCommonEvent(20005351, 3800300, 3802050, 53802050, 1); // Carthus Curved Sword
    InitializeCommonEvent(20005351, 3800365, 3802090, 53802090, 1); // Smouldering Spear/Smouldering Shield
    InitializeCommonEvent(20005351, 3800351, 3802100, 53802100, 1); // Smouldering Curved Sword
    InitializeCommonEvent(20005351, 3800350, 3802110, 53802110, 1); // Smouldering Dagger/Smouldering Talisman
    InitializeCommonEvent(20005351, 3800342, 3802120, 53802120, 1); // Demon Cleric Mask
    
    // Misc
    InitializeCommonEvent(20005524, 3801820, 13800830); // Event Treasure - Old Demon King - Charred Loyce Set
    InitializeEvent(0, 13805590, 3801572, 3800820, 53800820); // Wolnir Treasure - Treasure Control - Unholy Remains

});


//----------------------------------------
// Scripted Enemies
// -- Commands involving enemy appearance go here.
//----------------------------------------
$Event(13807014, Default, function() {
    
    // One-time Enemies
    InitializeCommonEvent(20005340, 13800580, 3800580); // Demon
    InitializeCommonEvent(20008150, 13800552, 3800552); // Crystal Lizard
    InitializeCommonEvent(20008150, 13800553, 3800553); // Crystal Lizard
    InitializeCommonEvent(20008150, 13800554, 3800554); // Crystal Lizard
    InitializeCommonEvent(20008150, 13800555, 3800555); // Crystal Lizard
    InitializeCommonEvent(20008150, 13800556, 3800556); // Crystal Lizard
    
    // NG+
    InitializeCommonEvent(20008001, 3805775, 1);
    InitializeCommonEvent(20008001, 3805776, 2);
    InitializeCommonEvent(20008001, 3805777, 3);
    
    // Triggered Enemies
    InitializeCommonEvent(20005120, 3800890, 1085276160); // Demonic Statue - Wake-up
    InitializeCommonEvent(20005120, 3800891, 1085276160); // Demonic Statue - Wake-up
    InitializeCommonEvent(20005120, 3800892, 1085276160); // Demonic Statue - Wake-up
    InitializeCommonEvent(20005120, 3800893, 1085276160); // Demonic Statue - Wake-up
    InitializeCommonEvent(20005120, 3800894, 1085276160); // Demonic Statue - Wake-up
    InitializeCommonEvent(20005120, 3800895, 1085276160); // Demonic Statue - Wake-up
    
    // Smouldering Lake - Sandworm
    InitializeCommonEvent(20005115, 3800897, 3000, 3802897); // Carthus Sandworm - Wake-up
    InitializeCommonEvent(20008100, 13800897, 3800897, 3802060); // Carthus Sandworm 
});


//----------------------------------------
// Interactables
// -- Commands dealing with environmental hazards and interactables go here.
//----------------------------------------
$Event(13807015, Default, function() {
    
    // Warps
    InitializeCommonEvent(20008206, 3801565, 30000, 39, 3904000, 60160, 3902954, 2019, 99030002); // To Irithyll Dungeon
    InitializeCommonEvent(20008206, 3801567, 30000, 31, 3104010, 60160, 3102955, 2018, 99030006); // To Undead Settlement

    // Crab Puzzle
    InitializeEvent(0, 13807100, 0);
});

//----------------------------------------
// Friendly Characters
// -- Commands involving friendly characters go here. 
//----------------------------------------
$Event(13807050, Default, function() {
    
    // Crestfallen Merchant
    InitializeCommonEvent(20081200, 13800755, 3800755, 90900); // Crestfallen Merchant - Idle
    InitializeCommonEvent(20081210, 13800755, 3800755); // Crestfallen Merchant - Hostility
    
    // Helia of the Lake
    InitializeCommonEvent(20081200, 13800756, 3800756, 90850); // Idle
    InitializeCommonEvent(20081210, 13800756, 3800756); // Hostility
});

//----------------------------------------
// Intruders
// -- Commands involving hostile intruder characters go here. 
//----------------------------------------
$Event(13807051, Default, function() {
    
    // Holy Knight Morton
    InitializeCommonEvent(20090010, 3800790, 3802790, 30310, 63010, 10300, 99005130, 99005131, 13800790, 131001, 200300); // Setup
    InitializeCommonEvent(20090020, 3800790, 80400); // Kill Taunt

    // Tomb Raider Dyfan
    InitializeCommonEvent(20090010, 3800792, 3802792, 30310, 63010, 10900, 99005180, 99005181, 13800792, 131002, 200900); // Setup
    InitializeCommonEvent(20090020, 3800792, 84700); // Kill Taunt

    // Chaos Servant Eygor
    InitializeCommonEvent(20090010, 3800794, 3802794, 30310, 63010, 11000, 99005190, 99005191, 13800794, 131003, 201000); // Setup
    InitializeCommonEvent(20090020, 3800794, 83900); // Kill Taunt

    // The Father
    InitializeCommonEvent(20008100, 13800763, 3800763, 12300); // The Father
    InitializeCommonEvent(20090020, 3800763, 85900); // Kill Taunt

    // The Mother
    InitializeCommonEvent(20008100, 13800761, 3800761, 12400); // The Mother
    InitializeCommonEvent(20090020, 3800761, 80300); // Kill Taunt

    // The Child
    InitializeCommonEvent(20008100, 13800762, 3800762, 12500); // The Child
    InitializeCommonEvent(20090020, 3800762, 80300); // Kill Taunt

    // Knight Slayer Tsorig
    InitializeCommonEvent(20090010, 3800196, 3802197, 30310, 63010, 58400, 99005710, 99005711, 13800196, 131004, 820000); // Setup
    InitializeCommonEvent(20090020, 3800196, 80300); // Kill Taunt
});

//----------------------------------------
// Summons
// -- Commands involving friendly summonable characters go here. 
//----------------------------------------
$Event(13807052, Default, function() {
    
});

//----------------------------------------
// Conjurations
// -- Commands involving conjurations go here. 
//----------------------------------------
$Event(13807053, Default, function() {
    
    // Skeleton
    InitializeCommonEvent(20080000, 3800850); // Setup
    InitializeCommonEvent(20080001, 3800850); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800850); // Tools
    InitializeCommonEvent(20080003, 3800850); // Effects
    InitializeCommonEvent(20080004, 3800850, 160760000, 160760205, 38, 0); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 3800851); // Setup
    InitializeCommonEvent(20080001, 3800851); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800851); // Tools
    InitializeCommonEvent(20080003, 3800851); // Effects
    InitializeCommonEvent(20080004, 3800851, 160760001, 160760205, 38, 0); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 3800852); // Setup
    InitializeCommonEvent(20080001, 3800852); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800852); // Tools
    InitializeCommonEvent(20080003, 3800852); // Effects
    InitializeCommonEvent(20080004, 3800852, 160760002, 160760205, 38, 0); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 3800853); // Setup
    InitializeCommonEvent(20080001, 3800853); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800853); // Tools
    InitializeCommonEvent(20080003, 3800853); // Effects
    InitializeCommonEvent(20080004, 3800853, 160760003, 160760205, 38, 0); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 3800854); // Setup
    InitializeCommonEvent(20080001, 3800854); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800854); // Tools
    InitializeCommonEvent(20080003, 3800854); // Effects
    InitializeCommonEvent(20080004, 3800854, 160760004, 160760205, 38, 0); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 3800855); // Setup
    InitializeCommonEvent(20080001, 3800855); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800855); // Tools
    InitializeCommonEvent(20080003, 3800855); // Effects
    InitializeCommonEvent(20080004, 3800855, 160760005, 160760205, 38, 0); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 3800856); // Setup
    InitializeCommonEvent(20080001, 3800856); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800856); // Tools
    InitializeCommonEvent(20080003, 3800856); // Effects
    InitializeCommonEvent(20080004, 3800856, 160760006, 160760205, 38, 0); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 3800857); // Setup
    InitializeCommonEvent(20080001, 3800857); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800857); // Tools
    InitializeCommonEvent(20080003, 3800857); // Effects
    InitializeCommonEvent(20080004, 3800857, 160760007, 160760205, 38, 0); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 3800858); // Setup
    InitializeCommonEvent(20080001, 3800858); // Bonfire Rest
    InitializeCommonEvent(20080002, 3800858); // Tools
    InitializeCommonEvent(20080003, 3800858); // Effects
    InitializeCommonEvent(20080004, 3800858, 160760008, 160760205, 38, 0); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 3800850);
    InitializeCommonEvent(20080011, 3800850);
    InitializeCommonEvent(20080012, 3800850);

    // Hollow Unique
    InitializeCommonEvent(20080020, 3800851);
    InitializeCommonEvent(20080021, 3800851);
    InitializeCommonEvent(20080022, 3800851);

    // Hound Unique
    InitializeCommonEvent(20080030, 3800852);
    InitializeCommonEvent(20080031, 3800852);
    InitializeCommonEvent(20080032, 3800852);

    // Warrior Unique
    InitializeCommonEvent(20080040, 3800853);
    InitializeCommonEvent(20080041, 3800853);
    InitializeCommonEvent(20080042, 3800853);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 3800854);
    InitializeCommonEvent(20080051, 3800854);
    InitializeCommonEvent(20080052, 3800854);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 3800855);
    InitializeCommonEvent(20080061, 3800855);
    InitializeCommonEvent(20080062, 3800855);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 3800856);
    InitializeCommonEvent(20080071, 3800856);
    InitializeCommonEvent(20080072, 3800856);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 3800857);
    InitializeCommonEvent(20080081, 3800857);
    InitializeCommonEvent(20080082, 3800857);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 3800858);
    InitializeCommonEvent(20080091, 3800858);
    InitializeCommonEvent(20080092, 3800858);
});

//----------------------------------------
// Bosses
// -- Commands that deal with new Bosses go here.
//----------------------------------------
$Event(13807060, Default, function() {

});

//----------------------------------------
// Gauntlet
// -- Commands that deal with the Gauntlet journey type go here.
//----------------------------------------
$Event(13807070, Default, function() {

    // Gauntlet Mode
    InitializeCommonEvent(20090800, 3802050);
    InitializeCommonEvent(20090800, 3802051);
});

//----------------------------------------
// Misc
// -- Niche events go here.
//----------------------------------------
// Crab Puzzle
$Event(13807100, Restart, function() {
    const flag_TreasureFlag      = 53800800;
    const entity_Crab            = 3800498;
    const obj_CrabGrave          = 3801498;
    const trigger_CrabGraveZone  = 3803498;
    const param_SpEffect_FadeOut = 160741700;
    const string_Message         = 99031200;

    EndIf(EventFlag(flag_TreasureFlag));

    SetObjectTreasureState(3801498, Disabled); // Hide treasure

    WaitFor(InArea(entity_Crab, trigger_CrabGraveZone));
    DisplayEpitaphMessage(string_Message);

    WaitFixedTimeSeconds(1);

    SetSpEffect(entity_Crab, param_SpEffect_FadeOut);
    SetObjectTreasureState(3801498, Enabled);

    WaitFixedTimeSeconds(1);

    ChangeCharacterEnableState(3800498, Disabled);
    SetCharacterAnimationState(3800498, Disabled);

    EndEvent();
});

// Ceremony
$Event(13807200, Restart, function() {
    // Night
    if(EventFlag(20001000))
    {
        SetMapCeremony(38, 0, 100);
    }
    // Default
    else
    {
        SetMapCeremony(38, 0, 0);
    }
});
