var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio 
canvas.height = innerHeight * devicePixelRatio


var rose1 = new maurer_rose(canvas.width / 2 , canvas.height/2 , 3 , 900)
rose1.getpoints()


var rose2 = new maurer_rose(canvas.width / 2 , canvas.height/2 , 4 , 600)
rose2.getpoints()

var rose3 = new maurer_rose(canvas.width / 2 , canvas.height/2 , 3 , 300)
rose3.getpoints()

var rose4 = new maurer_rose(canvas.width / 2 , canvas.height/2 , 2 , 1000)
rose4.getpoints()

RenderCanvas()

function RenderCanvas(){

    c.clearRect(0 , 0 , canvas.width , canvas.height)

   
    rose1.drawParticles()
    rose1.draw()

    rose2.drawParticles()
    rose2.draw()

    rose3.drawParticles()
    rose3.draw()

    rose4.drawParticles()
    rose4.draw()


   requestAnimationFrame(RenderCanvas)
}