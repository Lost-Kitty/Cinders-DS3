# -*- coding: utf-8 -*-
def t341500_1():
    """State 0,1"""
    assert GetCurrentStateElapsedTime() > 1
    while True:
        """State 2"""
        call = t341500_x0()
        assert IsClientPlayer() == 1
        """State 3"""
        call = t341500_x1()
        assert not IsClientPlayer()

def t341500_x0():
    """State 0,1"""
    t341500_x3()
    Quit()

def t341500_x1():
    """State 0,1"""
    assert t341500_x2()
    """State 2"""
    return 0

def t341500_x2():
    """State 0,1"""
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    if CheckSpecificPersonGenericDialogIsOpen(0) == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    if CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t341500_x3():
    """State 0,1"""
    call = t341500_x4()
    assert CheckSelfDeath() == 1
    """State 2"""
    return 0

def t341500_x4():
    """State 0"""
    while True:
        """State 5"""
        call = t341500_x5()
        if call.Done():
            """State 3"""
            call = t341500_x8()
            if call.Done():
                pass
            elif IsAttackedBySomeone() == 1:
                """State 1"""
                Label('L0')
                call = t341500_x6()
                def ExitPause():
                    RemoveMyAggro()
                if call.Done():
                    pass
                elif IsPlayerDead() == 1:
                    break
            elif IsPlayerDead() == 1:
                break
            elif GetDistanceToPlayer() > 2 or GetPlayerYDistance() > 0.25:
                """State 4"""
                call = t341500_x7()
                if call.Done() and (GetDistanceToPlayer() < 1.5 and GetPlayerYDistance() < 0.249):
                    pass
                elif IsAttackedBySomeone() == 1:
                    Goto('L0')
        elif IsAttackedBySomeone() == 1:
            Goto('L0')
        elif IsPlayerDead() == 1:
            break
    """State 2"""
    t341500_x2()
    Quit()

def t341500_x5():
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 2"""
        if (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
            and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
        elif CheckActionButtonArea(6120):
            break
    """State 4"""
    return 0

def t341500_x6():
    """State 0,6"""
    assert t341500_x2()
    """State 3"""
    assert GetCurrentStateElapsedFrames() > 1
    """State 2"""
    if GetDistanceToPlayer() > 3:
        """State 7"""
        assert t341500_x2()
    else:
        """State 5"""
        pass
    """State 9"""
    return 0

def t341500_x7():
    """State 0,1"""
    if CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0):
        """State 2,5"""
        assert GetDistanceToPlayer() > 3
    else:
        """State 3"""
        pass
    """State 4"""
    assert t341500_x2()
    """State 6"""
    return 0

def t341500_x8():
    """State 0,1"""
    assert t341500_x9()
    """State 24"""
    return 0

# Main Menu
def t341500_x9():
    while True:
        """State 0"""
        MainBonfireMenuFlag()
        ClearTalkListData()
        
        # Peruse Collection
        AddTalkListData(1, 15000011, -1)
        
        # Propose Marriage
        AddTalkListDataIf(not GetEventStatus(25008260) and ComparePlayerInventoryNumber(3, 2000, 2, 0, 0) == 1,
                          10, 15015040, -1)
                          
        # Flirt
        AddTalkListDataIf(GetEventStatus(25008260) == 1, 11, 15015041, -1)
        
        # Divorce
        AddTalkListDataIf(GetEventStatus(25008260) == 1, 12, 15015042, -1)
        
        # Talk
        AddTalkListData(3, 10010200, -1)
        
        # Leave
        AddTalkListData(99, 15000005, -1)
        
        assert (not CheckSpecificPersonGenericDialogIsOpen(2) and not (CheckSpecificPersonMenuIsOpen(-1,
                2) == 1 and not CheckSpecificPersonGenericDialogIsOpen(2)))
        """State 1"""
        ShowShopMessage(1)
        
        # Peruse Collection
        if GetTalkListEntryResult() == 1:
            """State 2"""
            OpenRegularShop(300000, 300999)
        # Propose Marriage
        elif GetTalkListEntryResult() == 10:
            """State 3"""
            SetEventState(25008260, 1)
            PlayerEquipmentQuantityChange(3, 2000, -1)
            assert t341500_x10(text1=10124030, flag1=0, mode1=0)
        # Flirt
        elif GetTalkListEntryResult() == 11:
            """State 4"""
            if GetEventStatus(25008900):
                """State 5"""
                assert t341500_x10(text1=10124000, flag1=0, mode1=0)
                """State 6"""
                GetItemFromItemLot(90240)
            elif GetEventStatus(25008901):
                """State 7"""
                assert t341500_x10(text1=10124010, flag1=0, mode1=0)
            elif GetEventStatus(25008902):
                """State 8"""
                assert t341500_x10(text1=10124020, flag1=0, mode1=0)
        # Divorce
        elif GetTalkListEntryResult() == 12:
            """State 9"""
            assert t341500_x10(text1=10124020, flag1=0, mode1=0)
            """State 10"""
            SetEventState(25008260, 0)
            return 0
        # Talk
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            assert t341500_x10(text1=10012000, flag1=0, mode1=0)
            """State 12"""
            return 0
        elif not (CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0)):
            """State 13"""
            return 0

def t341500_x10(text1=_, flag1=0, mode1=0):
    """State 0,4"""
    assert t341500_x11() and CheckSpecificPersonTalkHasEnded(0) == 1
    """State 1"""
    TalkToPlayer(text1, -1, -1, flag1)
    assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 3"""
    if not mode1:
        pass
    else:
        """State 2"""
        ReportConversationEndToHavokBehavior()
    """State 5"""
    return 0

def t341500_x11():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

