def on_button_pressed_a():
    global povoleno
    povoleno = True
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_up():
    global pocet_sten
    if pocet_sten == 6:
        pocet_sten = 10
    else:
        pocet_sten = 6
    basic.show_number(pocet_sten)
input.on_gesture(Gesture.LOGO_UP, on_logo_up)

def on_gesture_shake():
    global povoleno
    global pocet_sten
    if povoleno:
        cislo = randint(1, pocet_sten)
        if cislo == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        if cislo == 2:
            basic.show_leds("""
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            """)
        if cislo == 3:
            basic.show_leds("""
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            """)
        if cislo == 4:
            basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
        if cislo == 5:
            basic.show_leds("""
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            """)
        if cislo == 6:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            """)
        if cislo == 7:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            """)
        if cislo == 8:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            """)
        if cislo == 9:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            """)
        if cislo == 10:
            basic.show_leds("""
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            """)
        for a in range(cislo):
            music.play_tone(Note.E, music.beat(0.4))
            basic.pause(100)
        povoleno = False
        basic.pause(1000)
        basic.show_icon(IconNames.TRIANGLE)
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

povoleno = False
pocet_sten = 6

def on_forever():
    pass
basic.forever(on_forever)