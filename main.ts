input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
    basic.showIcon(IconNames.Yes)
})
function on_logo_pressed() {
    let steny = 10
}

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
        
        for (let a = 0; a < pocet_sten; a++) {
            music.ringTone(Note.C)
        }
        povoleno = false
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let povoleno = false
basic.forever(function on_forever() {
    
})
let pocet_sten = 6
