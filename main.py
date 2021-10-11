def on_button_pressed_a():
    global povoleno
    povoleno = True
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global povoleno
    if povoleno:
        x = randint(1, 6)
        if x == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        if  x == 2:
            basic.show_leds("""
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            """)
        if x == 3:
            basic.show_leds("""
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            """)
        if x == 4:
            basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
        if x == 5:
            basic.show_leds("""
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            """)
        if x == 6:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            """)
        povoleno = False
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

povoleno = False

def on_forever():
    pass
basic.forever(on_forever)
