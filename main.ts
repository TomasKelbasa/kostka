input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
    basic.showIcon(IconNames.Yes)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    
    if (pocet_sten == 6) {
        pocet_sten = 10
    } else {
        pocet_sten = 6
    }
    
    basic.showNumber(pocet_sten)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let cislo: number;
    
    if (povoleno) {
        cislo = randint(1, pocet_sten)
        if (cislo == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            `)
        }
        
        if (cislo == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . # .
                . . . . .
                . . . . .
            `)
        }
        
        if (cislo == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
            `)
        }
        
        if (cislo == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
            `)
        }
        
        if (cislo == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
            `)
        }
        
        if (cislo == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
            `)
        }
        
        if (cislo == 7) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . # . #
                . . . . .
                # . . . #
            `)
        }
        
        if (cislo == 8) {
            basic.showLeds(`
                # . # . #
                . . . . .
                # . . . #
                . . . . .
                # . # . #
            `)
        }
        
        if (cislo == 9) {
            basic.showLeds(`
                # . # . #
                . . . . .
                # . # . #
                . . . . .
                # . # . #
            `)
        }
        
        if (cislo == 10) {
            basic.showLeds(`
                # . . . #
                . # . # .
                # . . . #
                . # . # .
                # . . . #
            `)
        }
        
        for (let index = 0; index < cislo; index++) {
            music.playTone(330, music.beat(4))
            music.rest(music.beat(2))
        }
        povoleno = false
        basic.pause(1000)
        basic.showIcon(IconNames.Triangle)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let povoleno = false
let pocet_sten = 6
basic.forever(function on_forever() {
    
})
