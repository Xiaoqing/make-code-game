namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function OverlapOracleTwo () {
    answer = game.askForNumber("10.6+1.51=")
    if (answer == 12.11) {
        scene.setTile(13, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 6 2 2 7 7 7 7 7 7 
            7 7 2 2 2 2 2 6 2 2 2 2 2 7 7 7 
            7 7 7 2 2 2 2 6 2 2 2 2 7 7 7 7 
            7 7 7 7 2 2 2 6 2 2 2 7 7 7 7 7 
            7 7 7 7 7 2 6 6 6 2 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, false)
        game.showLongText("Congratulations! Please follow the arrow.", DialogLayout.Bottom)
    }
}
function OverlapOracleOne () {
    answer = game.askForNumber("10+5=")
    if (answer == 15) {
        scene.setTile(1, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 2 2 2 2 2 2 2 7 7 7 7 7 
            7 7 7 2 2 2 2 2 2 2 2 2 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, false)
        game.showLongText("Congratulations! Please follow the arrow.", DialogLayout.Bottom)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    vx = mySprite.vx
    vy = mySprite.vy
    game.showLongText("Give me five coins and I will show you the direction. ", DialogLayout.Bottom)
    if (info.score() >= 5) {
        info.changeScoreBy(-5)
        if (otherSprite == oracle_one) {
            OverlapOracleOne()
        } else if (otherSprite == oracle_two) {
            OverlapOracleTwo()
        } else if (otherSprite == Oracle_three) {
            OverlapOracleThree()
        } else if (otherSprite == oracle_four) {
            OverlapOracleFour()
        }
    }
    FindSpriteDirection(sprite, vx, vy)
})
function OverlapOracleThree () {
    answer = game.askForNumber("What is the pi in four decimal places?")
    if (answer == 3.1415) {
        scene.setTile(9, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 2 2 2 2 2 2 2 2 2 2 2 7 7 7 
            7 7 7 2 2 2 2 2 2 2 2 2 7 7 7 7 
            7 7 7 7 2 2 2 2 2 2 2 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, false)
        game.showLongText("Congratulations! Please follow the arrow.", DialogLayout.Bottom)
    }
}
function FindSpriteDirection (sprite: Sprite, vx: number, vy: number) {
    if (vy < 0) {
        sprite.y += 10
    } else if (vy > 0) {
        sprite.y += -10
    } else if (vx < 0) {
        sprite.x += 10
    } else if (vx > 0) {
        sprite.x += -10
    }
}
function OverlapOracleFour () {
    answer = game.askForNumber("How many animals in the Chinese zodiac?")
    if (answer == 12) {
        scene.setTile(5, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 
            7 7 7 7 2 2 2 2 2 2 2 7 7 7 7 7 
            7 7 7 2 2 2 2 2 2 2 2 2 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 2 2 2 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, false)
        game.showLongText("Congratulations! Please follow the arrow.", DialogLayout.Bottom)
    }
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.splash("Knock Knock!")
    game.splash("Come in for for night.Its ")
    game.splash("Your results in seconds is:", convertToText(game.runtime() / 1000))
    game.over(true, effects.smiles)
})
let vy = 0
let vx = 0
let answer = 0
let coin: Sprite = null
let oracle_four: Sprite = null
let Oracle_three: Sprite = null
let oracle_two: Sprite = null
let oracle_one: Sprite = null
let mySprite: Sprite = null
let Coins = 0
game.splash("Such a nice day... Oh no ... It's night!")
game.splash("Help me get out of the forest!")
scene.setBackgroundColor(7)
effects.blizzard.startScreenEffect()
scene.setTileMap(img`
    4ffffffffffffffffffffffff
    ..f777..f.......f77.f..3f
    f.fffff.fff.f.fffff.f.fff
    f...f.......f.....f.f.f7f
    f...f.fffffff.fff.f.f.f7f
    f...f.f.....f...f.f.f.f7f
    f.fff.f.....fffff.f.f.f7f
    f.f...f.fff....9f.....f7f
    f.fff.f.f7f.....fffffdf.f
    f...f.f.f7f.....f...f...f
    fff.f.f.f7f.fff.f.f.fff.f
    f.f.f.f.f.f...f.f.f.....f
    f.f.f.f...fffff.fff.fffff
    f.f...f.f.f.....f....777f
    f.fffff.f.f.fff1fff.fffff
    f...f...f.f.f.........f.f
    f.fff.fff.f.fffffff.fff.f
    f...fcf...f.f.....f.....f
    fff.fff.fff.f.fff.f.fff.f
    f7f...f...f.f.f7f.f.f.f.f
    f7f...f...f.f.f7f.fff.f.f
    f7f...f...f.f.f7f.....f.f
    f7fff.fff.f.f.f7f.fff.f.f
    f7f.......f...f7f.f8f.faf
    f.fffffff.fff5f.fff.f.fff
    f...........f.......f....
    ffffffffffffffffffffffff2
    `)
scene.setTile(15, img`
    . . . . . . . c c . . . . . . . 
    . . . . c c c 6 5 c 6 6 . . . . 
    . . . . c 6 c 5 5 c 7 6 . . . . 
    . . . 6 c c 7 5 5 7 c 6 6 . . . 
    . . c c 7 7 7 7 7 5 7 7 c 6 . . 
    . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
    . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
    . c c c c 7 7 6 f 7 7 c c c c . 
    . . . . c 7 c f f c 7 c . . . . 
    . . . . . 6 f e e e c . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e . e e . e e . . . . 
    . . . . . . . e e . . . . . . . 
    `, true)
scene.setTile(4, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(1, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(13, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(9, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(2, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 e e 3 3 3 3 3 3 . . 
    . 3 3 9 1 3 e e 3 3 9 1 3 3 . . 
    . 3 3 9 9 3 e 5 3 3 9 9 3 3 . . 
    . 3 3 3 3 3 e e 3 3 3 3 3 3 . . 
    `, true)
scene.setTile(10, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(3, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(12, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(5, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(8, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.placeOnRandomTile(mySprite, 4)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
oracle_one = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Projectile)
scene.placeOnRandomTile(oracle_one, 10)
oracle_two = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Projectile)
scene.placeOnRandomTile(oracle_two, 3)
Oracle_three = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Projectile)
scene.placeOnRandomTile(Oracle_three, 12)
oracle_four = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Projectile)
scene.placeOnRandomTile(oracle_four, 8)
let tile_list = scene.getTilesByType(7)
for (let value of tile_list) {
    coin = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Coin)
    scene.place(value, coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    200,
    true
    )
}
forever(function () {
    music.playMelody("G F G A - F E D ", 120)
})
