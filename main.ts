function ZeigeZahl (Zahl: number) {
    Y = 0
    X = 0
    if (Zahl > -1 && Zahl < 10) {
        for (let X = 0; X <= 5; X++) {
            for (let Y = 0; Y <= 5; Y++) {
                led.unplot(X, Y)
            }
        }
        if (Zahl == 0) {
            for (let Index = 0; Index <= 2; Index++) {
                led.plot(0, Index + 1)
            }
            for (let Index = 0; Index <= 2; Index++) {
                led.plot(3, Index + 1)
            }
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(1, 4)
            led.plot(2, 4)
        } else {
            if (Zahl == 1) {
                led.plot(1, 1)
                for (let Index = 0; Index <= 5; Index++) {
                    led.plot(2, Index)
                }
                for (let Index = 0; Index <= 2; Index++) {
                    led.plot(Index + 1, 4)
                }
            } else {
                if (Zahl == 2) {
                    for (let Index = 0; Index <= 2; Index++) {
                        led.plot(Index, 0)
                    }
                    led.plot(3, 1)
                    led.plot(2, 2)
                    led.plot(1, 2)
                    led.plot(0, 3)
                    for (let Index = 0; Index <= 3; Index++) {
                        led.plot(Index, 4)
                    }
                } else {
                    if (Zahl == 3) {
                        for (let Index = 0; Index <= 3; Index++) {
                            led.plot(Index, 0)
                        }
                        led.plot(3, 1)
                        led.plot(2, 2)
                        led.plot(3, 3)
                        led.plot(0, 3)
                        led.plot(1, 4)
                        led.plot(2, 4)
                    } else {
                        if (Zahl == 4) {
                            for (let Index = 0; Index <= 4; Index++) {
                                led.plot(3, Index)
                            }
                            for (let Index = 0; Index <= 4; Index++) {
                                led.plot(Index, 3)
                            }
                            led.plot(2, 0)
                            led.plot(1, 1)
                            led.plot(0, 2)
                        } else {
                            if (Zahl == 5) {
                                for (let Index = 0; Index <= 4; Index++) {
                                    led.plot(Index, 0)
                                }
                                led.plot(0, 1)
                                for (let Index = 0; Index <= 3; Index++) {
                                    led.plot(Index, 2)
                                }
                                led.plot(4, 3)
                                for (let Index = 0; Index <= 3; Index++) {
                                    led.plot(Index, 4)
                                }
                            } else {
                                if (Zahl == 6) {
                                    led.plot(3, 0)
                                    led.plot(2, 1)
                                    for (let Index = 0; Index <= 2; Index++) {
                                        led.plot(Index + 1, 2)
                                    }
                                    led.plot(0, 3)
                                    led.plot(4, 3)
                                    for (let Index = 0; Index <= 2; Index++) {
                                        led.plot(Index + 1, 4)
                                    }
                                } else {
                                    if (Zahl == 7) {
                                        for (let Index = 0; Index <= 4; Index++) {
                                            led.plot(Index, 0)
                                        }
                                        X = 4
                                        for (let index = 0; index < 5; index++) {
                                            led.plot(X, Y)
                                            Y += 1
                                            X += -1
                                        }
                                    } else {
                                        if (Zahl == 8) {
                                            for (let index = 0; index < 3; index++) {
                                                for (let Index = 0; Index <= 2; Index++) {
                                                    led.plot(Index + 1, Y)
                                                }
                                                led.plot(0, Y + 1)
                                                led.plot(4, Y + 1)
                                                Y += 2
                                            }
                                        } else {
                                            if (Zahl == 9) {
                                                for (let index = 0; index < 2; index++) {
                                                    for (let Index = 0; Index <= 2; Index++) {
                                                        led.plot(Index + 1, Y)
                                                    }
                                                    Y += 2
                                                }
                                                led.plot(0, 1)
                                                led.plot(4, 1)
                                                led.plot(1, 4)
                                                led.plot(2, 3)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (SpielTRUE == 0 || SpielTRUE == 1) {
        SpielTRUE = 2
    } else {
        if (SpielTRUE == 2) {
            SpielTRUE = 0
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (SpielTRUE == 0) {
        AnimationTime = 30
        SpielTRUE = 1
        shuffledchoosed = randint(1, Spieleranzahl)
        for (let index = 0; index < 70; index++) {
            AnimationTime += 3
            ZeigeZahl(randint(1, Spieleranzahl))
            basic.pause(AnimationTime)
        }
        basic.showNumber(shuffledchoosed)
    }
})
input.onButtonPressed(Button.B, function () {
    if (SpielTRUE == 0) {
        Spieleranzahl += 1
    }
    if (SpielTRUE == 1) {
        Spieleranzahl = 2
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        SpielTRUE = 0
    }
})
let shuffledchoosed = 0
let AnimationTime = 0
let X = 0
let Y = 0
let Spieleranzahl = 0
let SpielTRUE = 0
SpielTRUE = 0
Spieleranzahl = 2
basic.forever(function () {
    if (Spieleranzahl >= 10) {
        Spieleranzahl = 2
    }
    if (SpielTRUE == 0) {
        ZeigeZahl(Spieleranzahl)
    }
    if (SpielTRUE == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
