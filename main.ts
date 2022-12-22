let mid = 0
let strip = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
basic.forever(function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P3)))
    serial.writeLine("")
    mid = pins.map(
    pins.analogReadPin(AnalogPin.P3),
    700,
    990,
    0,
    180
    )
    if (100 > mid && 80 < mid) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        pins.servoWritePin(AnalogPin.P15, 90)
    } else {
        pins.servoWritePin(AnalogPin.P15, mid)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(pins.map(
        pins.analogReadPin(AnalogPin.P3),
        700,
        990,
        0,
        255
        ))
        strip.show()
    }
})
