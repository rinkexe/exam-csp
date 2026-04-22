namespace SpriteKind {
    export const Other = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 4194, 255, 255, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    // your sprite's current rotation
    angleRad = playerPlane.rotation
    vx = Math.cos(angleRad) * 100
    vy = Math.sin(angleRad) * 100
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, playerPlane, vx, vy)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeCountdownBy(additionTimesList.removeAt(0))
    additionTimesList.push(1)
    destroyedAliens += 1
    music.play(music.createSoundEffect(WaveShape.Noise, 902, 663, 255, 255, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
function game1 () {
    destroyedAliens = 0
    crashes = 0
    scene.setBackgroundImage(assets.image`game1Scene`)
    playerPlane = sprites.create(img`
        ..ccc.........ffffff....
        ..f4cc.......fcc22ff....
        ..f44cc...fffccccff.....
        ..f244cccc22224442cc....
        ..f224cc2222222244b9c...
        ..cf2222222222222b999c..
        .c22c222222222b11199b2c.
        f22ccccccc222299111b222c
        fffffcc222c222222222222f
        .....f2222442222222222f.
        ....f222244fc2222222ff..
        ...c222244ffffffffff....
        ...c2222cfffc2f.........
        ...ffffffff2ccf.........
        .......ffff2cf..........
        ........fffff...........
        `, SpriteKind.Player)
    playerPlane.setScale(1, ScaleAnchor.Middle)
    info.startCountdown(30)
    minusTimesList = [
    0.2,
    0.5,
    1,
    2,
    4,
    5
    ]
    additionTimesList = [
    0.1,
    0.2,
    0.5,
    0.8,
    1
    ]
}
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
})
function titleScreen () {
    scene.setBackgroundImage(assets.image`TitleScreen`)
    titleScreenPlane = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Other)
    titleScreenPlane.x = 180
    titleScreenPlane.y = 80
    titleScreenPlane.vx = -60
    animation.runImageAnimation(
    titleScreenPlane,
    [img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c9999b222222222222fc..
        .c2b991119222222222c22c.
        c2222b11992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222444222f.....
        ..ff2222222cf444222f....
        ....ffffffffff444222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,img`
        ...ffffff..........ccc..
        ...ff22ccff.......c44f..
        ....fffccccfff...c442f..
        ....cc24442222ccc4422f..
        ...c99b222222222cc22fc..
        ..c999111b222222222222c.
        .c2bb11199222ccccccc222f
        c22222222222c222cccfffff
        f22222222222442222ccc...
        .f222222222224442222c...
        ..ff2222222cffc44222c...
        ....fffffffcffffcccc....
        .........f2c2ffff.......
        .........fcc2ffff.......
        ..........ffffff........
        ........................
        `,img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,img`
        ....ffffff..............
        ....ff22ccf.........cf..
        .....ffccccfff.....c4f..
        ....cc22222222ccccc44f..
        ...c9b244422222ccc442f..
        ..c99944222222222242fc..
        .c2b9992222222222222fcc.
        c222b1111b22222222cc22cf
        f2222211992222ccccccc22f
        .f22222222222c222cffffff
        ..ff2222222c442222ff....
        ....fffffffff442222fc...
        .........f2cff442222c...
        .........fccfffc2222c...
        ..........fc2ffffffff...
        ...........c2fff........
        `,img`
        ....ffffff..............
        ....ff2cccf.........cf..
        .....ff2cccfff.....c4f..
        ....cc22222222ccccc44f..
        ...c9b244422222ccc442f..
        ..c99944222222222242fc..
        .c2b9912222222222222fcc.
        c222b1111b22222222cc22cf
        f2222221992222ccccccc22f
        .f22222222222c222cffffff
        ..ff2222222c442222ff....
        ....fffffffff442222fc...
        .........f2cff442222c...
        .........fccfffc2222c...
        ..........fc2ffffffff...
        ...........c2fff........
        `],
    200,
    true
    )
}
function alienSpawn (mySprite: Sprite) {
    if (randint(0, 1) == 1) {
        xAlienSpawn = randint(0, 160)
        if (xAlienSpawn >= 80) {
            mySprite.setImage(img`
                ........fffff...........
                .......ffff8cf..........
                ...ffffffff8ccf.........
                ...c8888cfffc8f.........
                ...c888844ffffffffff....
                ....f888844fc8888888ff..
                .....f8888448888888888f.
                fffffcc888c888888888888f
                f88ccccccc888899111b888c
                .c88c888888888b11199b8c.
                ..cf8888888888888b999c..
                ..f884cc8888888844b9c...
                ..f844cccc88884448cc....
                ..f44cc...fffccccff.....
                ..f4cc.......fcc88ff....
                ..ccc.........ffffff....
                `)
        }
        if (randint(0, 1) == 1) {
            yAlienSpawn = 120
        } else {
            yAlienSpawn = 0
        }
    } else {
        yAlienSpawn = randint(0, 120)
        if (randint(0, 1) == 1) {
            xAlienSpawn = 160
            mySprite.setImage(img`
                ........fffff...........
                .......ffff8cf..........
                ...ffffffff8ccf.........
                ...c8888cfffc8f.........
                ...c888844ffffffffff....
                ....f888844fc8888888ff..
                .....f8888448888888888f.
                fffffcc888c888888888888f
                f88ccccccc888899111b888c
                .c88c888888888b11199b8c.
                ..cf8888888888888b999c..
                ..f884cc8888888844b9c...
                ..f844cccc88884448cc....
                ..f44cc...fffccccff.....
                ..f4cc.......fcc88ff....
                ..ccc.........ffffff....
                `)
        } else {
            xAlienSpawn = 0
        }
    }
    mySprite.setPosition(xAlienSpawn, yAlienSpawn)
    mySprite.setScale(randint(8, 10) / 10, ScaleAnchor.Middle)
    mySprite.follow(playerPlane, 40 - mySprite.scale * 30)
    mySprite.rotation = Math.atan2(playerPlane.y - yAlienSpawn, playerPlane.x - xAlienSpawn)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeCountdownBy(-1 * minusTimesList.removeAt(0))
    minusTimesList.push(5)
    crashes += 1
    music.play(music.createSoundEffect(WaveShape.Noise, 902, 663, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let yAlienSpawn = 0
let xAlienSpawn = 0
let titleScreenPlane: Sprite = null
let minusTimesList: number[] = []
let crashes = 0
let destroyedAliens = 0
let additionTimesList: number[] = []
let projectile: Sprite = null
let vy = 0
let vx = 0
let playerPlane: Sprite = null
let angleRad = 0
game1()
let Active = true
game.onUpdateInterval(1000, function () {
    alienSpawn(sprites.create(img`
        ..ccc.........ffffff....
        ..f4cc.......fcc88ff....
        ..f44cc...fffccccff.....
        ..f844cccc88884448cc....
        ..f884cc8888888844b9c...
        ..cf8888888888888b999c..
        .c88c888888888b11199b8c.
        f88ccccccc888899111b888c
        fffffcc888c888888888888f
        .....f8888448888888888f.
        ....f888844fc8888888ff..
        ...c888844ffffffffff....
        ...c8888cfffc8f.........
        ...ffffffff8ccf.........
        .......ffff8cf..........
        ........fffff...........
        `, SpriteKind.Enemy))
})
game.onUpdateInterval(10, function () {
    if (controller.right.isPressed()) {
        playerPlane.rotationDegrees += 3
    }
    if (controller.left.isPressed()) {
        playerPlane.rotationDegrees += -3
    }
})
