basic.forever(function () {
    if (input.temperature() < 18) {
        basic.showIcon(IconNames.Skull)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else if (input.temperature() > 18 && input.temperature() < 23) {
        basic.showIcon(IconNames.Yes)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    } else if (input.temperature() > 23) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                # . # . .
                # # # . #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # . # . .
                # # # . #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # . # . #
                # . # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        }
    } else {
    	
    }
})
