input.onButtonPressed(Button.A, function () {
    led.setBrightness(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(input.lightLevel())
    if (input.lightLevel() > 50) {
        basic.showIcon(IconNames.Happy)
    } else if (input.lightLevel() < 50) {
        basic.showIcon(IconNames.Sad)
    } else if (input.lightLevel() > 100) {
        led.setBrightness(117)
    }
})
basic.forever(function () {
	
})
