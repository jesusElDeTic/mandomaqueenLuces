radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedNumber == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedNumber == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.showString("L")
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.showString("+")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("B")
})
let strip: neopixel.Strip = null
radio.setGroup(10)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
	
})
