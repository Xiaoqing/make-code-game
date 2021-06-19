sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(oracle_one)) {
        game.showLongText("I am the oracle. If you answer my question, I will show you the direction.", DialogLayout.Bottom)
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
        mySprite.x += 10
    } else if (mySprite.overlapsWith(oracle_two)) {
        game.showLongText("I am the oracle. If you answer my question, I will show you the direction.", DialogLayout.Bottom)
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
        mySprite.y += -10
    } else if (mySprite.overlapsWith(Oracle_three)) {
        game.showLongText("I am the oracle. If you answer my question, I will show you the direction.", DialogLayout.Bottom)
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
        mySprite.x += 10
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(true, effects.smiles)
})
let answer = 0
let Oracle_three: Sprite = null
let oracle_two: Sprite = null
let oracle_one: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
effects.blizzard.startScreenEffect()
scene.setTileMap(img`
    fffffffff4fffffffffff
    f.......f...........f
    f.fff.f.f..ff.f.fff.f
    f...f.f...f...f...f.f
    fff.fffffffffff.fff.f
    f.....f.fc..f...f...f
    f1.ffff.fff.fffff.f.f
    f.....f...f.f...f.f3f
    f.f.fffff.f...fff.fff
    f.f.....f.f.....f..df
    f.fffff.f.fffff.fff.f
    f.fa....f.f.....f.f.f
    f.fffffff.f.......f.f
    f....f....f9fff...f.f
    ffff.f..fff.f.f...f.f
    f.......f...f.fff.f.f
    f.f.fffff.fff.....f.f
    f.f...f.f.f...f...f.f
    fff.f.f.f.fff.f.fff.f
    f...f...f...f.f.....f
    fffffffff2fffffffffff
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
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    b b b d d d d d d d d d d b b b 
    c c c c c c c c c c c c c c c c 
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
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    d d b d d d d d d d d d d b d d 
    d d c c c c c c c c c c c c d d 
    d d c b b b b b b b b b b c d d 
    b b b d d d d d d d d d d b b b 
    c c c c c c c c c c c c c c c c 
    `, true)
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
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
