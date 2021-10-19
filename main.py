def on_button_pressed_a():
    global povoleno
    povoleno = True
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_pressed():
    steny = 10

def on_gesture_shake():
    global povoleno
    global pocet_sten
    if povoleno:
        x = randint(1, pocet_sten)
        if x == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        if x == 2:
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
        if x == 7:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            """)
        if x == 8:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            """)
        if x == 9:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            """)
        if x == 10:
            basic.show_leds("""
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            """)
        for a in range(pocet_sten):
            music.ring_tone(Note.C)
        povoleno = False
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

povoleno = False

def on_forever():
    pass
basic.forever(on_forever)
pocet_sten = 6