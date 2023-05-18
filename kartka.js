import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","karteczka.png")
loadSprite("wikus","wikus2.png")
loadSound("muzyka","muzyka.mp3")

add([sprite("kartka")])

const wikus = add([
    sprite("wikus"),
    pos(300,100
        )
])

let wprawo = true
wikus.onUpdate(()  =>{
    if(wprawo && wikus.pos.y < 200)
    wikus.pos. y += 1

    else if(!wprawo && wikus.pos.y > 10)
    wikus .pos.y -= 1
    else wprawo ^= true
})

onMouseRelease(()=>play("muzyka"))


