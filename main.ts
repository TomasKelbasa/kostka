input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function on_logo_up() {
    
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
        
        for (let a = 0; a < cislo; a++) {
            music.playTone(Note.E, music.beat(0.4))
            basic.pause(100)
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
