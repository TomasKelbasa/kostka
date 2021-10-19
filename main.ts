input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function on_logo_up() {
    
    if (pocet_sten == 6) {
        pocet_sten = 10
        basic.showNumber(10)
    } else {
        pocet_sten = 6
        basic.showNumber(6)
    }
    
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let x: number;
    
    
    if (povoleno) {
        x = randint(1, pocet_sten)
        if (x == 1) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        }
        
        if (x == 2) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        }
        
        if (x == 3) {
            basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
        }
        
        if (x == 4) {
            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        }
        
        if (x == 5) {
            basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        }
        
        if (x == 6) {
            basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        }
        
        if (x == 7) {
            basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `)
        }
        
        if (x == 8) {
            basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
        }
        
        if (x == 9) {
            basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
        }
        
        if (x == 10) {
            basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            `)
        }
        
        for (let a = 0; a < x; a++) {
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
