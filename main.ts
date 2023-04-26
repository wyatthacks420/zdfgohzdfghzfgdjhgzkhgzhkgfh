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
