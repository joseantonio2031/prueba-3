def on_forever():
    if input.temperature() < 18:
        basic.show_icon(IconNames.SKULL)
        music.play(music.builtin_playable_sound_effect(soundExpression.sad),
            music.PlaybackMode.UNTIL_DONE)
    elif input.temperature() > 18 and input.temperature() < 23:
        basic.show_icon(IconNames.YES)
        music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_UP),
            music.PlaybackMode.IN_BACKGROUND)
    elif input.temperature() > 23:
        for index in range(3):
            basic.show_leds("""
                . . # . .
                # . # . .
                # # # . #
                # # # # #
                # # # # #
                """)
            basic.show_leds("""
                # . # . .
                # # # . #
                # # # # #
                # # # # #
                # # # # #
                """)
            basic.show_leds("""
                # . # . #
                # . # # #
                # # # # #
                # # # # #
                # # # # #
                """)
            music._play_default_background(music.built_in_playable_melody(Melodies.BA_DING),
                music.PlaybackMode.IN_BACKGROUND)
    else:
        pass
basic.forever(on_forever)
