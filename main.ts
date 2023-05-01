radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function moveFoward () {
    wuKong.setAllMotor(20, 20)
}
let action = 0
basic.showIcon(IconNames.Skull)
joystickbit.initJoystickBit()
radio.setGroup(21)
basic.forever(function () {
    if (action == 1) {
        moveFoward()
    }
    if (action == 2) {
        reverse()
    }
    if (action == 6) {
        forkUp()
    }
    if (action == 7) {
        forkDown()
    }
    if (action == 0) {
        wuKong.stopAllMotor()
    }
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 100) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(7)
    } else {
        radio.sendNumber(0)
    }
})
