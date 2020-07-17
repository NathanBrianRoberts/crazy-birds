let ticks = 0


let bird: game.LedSprite = null
bird = game.createSprite(0,2)
bird.set(LedSpriteProperty.Blink, 300)

let emptyObstacleY = 0
let obsticales: game.LedSprite [] = []

basic.forever(function (){
    while (obsticales.length > 0 && obsticales[0].get(LedSpriteProperty.X)== 0){
        obsticales.removeAt(0).delete()
    }
    for (let obstacle of obsticales){
        obstacle.change(LedSpriteProperty.X, -1)
    }

    if (ticks % 3 == 0){
        emptyObstacleY = randint (0,4)
        for (let index = 0; index <=4; index++){
            if (index != emptyObstacleY){
                obsticales.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle of obsticales){
        if (obstacle.get(LedSpriteProperty.X)== bird.get(LedSpriteProperty.X)&& obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)){
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})



input.onButtonPressed(Button.A, function (){
    bird.change(LedSpriteProperty.Y, -1)
})

input.onButtonPressed(Button.B, function(){
    bird.change(LedSpriteProperty.Y, 1)
})