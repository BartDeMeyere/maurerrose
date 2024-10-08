var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio 
canvas.height = innerHeight * devicePixelRatio


var rose1 = new maurer_rose(canvas.width / 2 , canvas.height/2 , 3 , 1200)
rose1.getpoints()


var rose2 = new maurer_rose(canvas.width / 2 , canvas.height/2 , 5 , 600)
rose2.getpoints()

RenderCanvas()

function RenderCanvas(){

    c.clearRect(0 , 0 , canvas.width , canvas.height)

   
    rose1.drawParticles()
    rose1.draw()

    rose2.drawParticles()
    rose2.draw()

   requestAnimationFrame(RenderCanvas)
}