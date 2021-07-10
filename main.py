@namespace
class SpriteKind:
    Coin = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Coin, on_on_overlap)

def OverlapWithOracle(sprite: Sprite):
    global question_index, answer
    if len(questions) == 0:
        game.splash("Sorry, no more questions!")
        return 0
    question_index = randint(0, len(questions) - 1)
    answer = game.ask_for_number(questions.remove_at(question_index))
    if answer == answers.remove_at(question_index):
        if sprite == oracle_one:
            scene.set_tile(1,
                img("""
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
                """),
                False)
        elif sprite == oracle_two:
            scene.set_tile(13,
                img("""
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
                """),
                False)
        elif sprite == Oracle_three:
            scene.set_tile(9,
                img("""
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
                """),
                False)
        elif sprite == oracle_four:
            scene.set_tile(5,
                img("""
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
                """),
                False)
        game.show_long_text("Congratulations! Please follow the arrow.",
            DialogLayout.BOTTOM)
    return 0

def on_on_overlap2(sprite, otherSprite):
    global vx, vy
    vx = sprite.vx
    vy = sprite.vy
    game.show_long_text("Give me five coins and I will show you the direction. ",
        DialogLayout.BOTTOM)
    if info.score() >= 5:
        info.change_score_by(-5)
        OverlapWithOracle(otherSprite)
    FindSpriteDirection(sprite, vx, vy)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap2)

def FindSpriteDirection(sprite: Sprite, vx: number, vy: number):
    if vy < 0:
        sprite.y += 10
    elif vy > 0:
        sprite.y += -10
    elif vx < 0:
        sprite.x += 10
    elif vx > 0:
        sprite.x += -10

def on_hit_tile(sprite):
    game.splash("Knock Knock!")
    game.splash("Come in for for night. Its dangerous out there. I've got stew for supper!")
    game.splash("Your results in seconds is:",
        convert_to_text(game.runtime() / 1000))
    game.over(True, effects.smiles)
scene.on_hit_tile(SpriteKind.player, 2, on_hit_tile)

vy = 0
vx = 0
answer = 0
question_index = 0
coin: Sprite = None
oracle_four: Sprite = None
Oracle_three: Sprite = None
oracle_two: Sprite = None
oracle_one: Sprite = None
answers: List[number] = []
questions: List[str] = []
Coins = 0
questions = ["10+5=",
    "10.6+1.51=",
    "What is the pi in four decimal places?",
    "How many animals in the Chinese zodiac?"]
answers = [15, 12.11, 3.1415, 12]
game.splash("Such a nice day... Oh no ... It's night!")
game.splash("Help me get out of the forest!")
scene.set_background_color(7)
effects.blizzard.start_screen_effect()
scene.set_tile_map(img("""
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
"""))
scene.set_tile(15,
    img("""
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
    """),
    True)
scene.set_tile(4,
    img("""
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
    """),
    False)
scene.set_tile(1,
    img("""
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
    """),
    False)
scene.set_tile(13,
    img("""
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
    """),
    False)
scene.set_tile(9,
    img("""
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
    """),
    False)
scene.set_tile(2,
    img("""
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
    """),
    True)
scene.set_tile(10,
    img("""
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
    """),
    False)
scene.set_tile(3,
    img("""
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
    """),
    False)
scene.set_tile(12,
    img("""
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
    """),
    False)
scene.set_tile(5,
    img("""
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
    """),
    False)
scene.set_tile(8,
    img("""
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
    """),
    False)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.place_on_random_tile(mySprite, 4)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
oracle_one = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
scene.place_on_random_tile(oracle_one, 10)
oracle_two = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
scene.place_on_random_tile(oracle_two, 3)
Oracle_three = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
scene.place_on_random_tile(Oracle_three, 12)
oracle_four = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
scene.place_on_random_tile(oracle_four, 8)
tile_list = scene.get_tiles_by_type(7)
for value in tile_list:
    coin = sprites.create(img("""
            . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . .
        """),
        SpriteKind.Coin)
    scene.place(value, coin)
    animation.run_image_animation(coin,
        [img("""
                . . b b b b . . 
                        . b 5 5 5 5 b . 
                        b 5 d 3 3 d 5 b 
                        b 5 3 5 5 1 5 b 
                        c 5 3 5 5 1 d c 
                        c d d 1 1 d d c 
                        . f d d d d f . 
                        . . f f f f . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . . b 1 1 b . . 
                        . . b 5 5 b . . 
                        . . b d d b . . 
                        . . c d d c . . 
                        . . c 3 3 c . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 1 d 5 b . 
                        . b 5 1 3 5 b . 
                        . c d 1 3 5 c . 
                        . c d d 1 5 c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b b . . 
                        . . b 5 5 5 b . 
                        . b 5 d 3 d 5 b 
                        . b 5 1 5 3 5 b 
                        . c d 1 5 3 5 c 
                        . c d d 1 d 5 c 
                        . . f d d d f . 
                        . . . f f f . .
            """)],
        200,
        True)

def on_forever():
    music.play_melody("G F G A - F E D ", 120)
forever(on_forever)
