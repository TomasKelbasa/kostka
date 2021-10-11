input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let x: number;
    
    if (povoleno) {
        x = randint(1, 6)
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
        
        povoleno = false
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let povoleno = false
basic.forever(function on_forever() {
    
})
