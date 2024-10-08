class Particle{

    constructor(x , y , size , color){

        this.x = x 
        this.y = y 
        this.size = size
        this.color = color
        this.velocity = {

            x:this.random(-.6,.6),
            y:this.random(-.6,.6)
        }

        this.opacity = 1
    }

    draw(){

        c.save()
        c.beginPath()
        c.fillStyle = this.color
        c.globalAlpha = this.opacity
        c.arc(this.x , this.y , this.size/2 , 0 , 2 * Math.PI)
        c.fill()
        c.closePath()
        c.restore()
    }

    move(){

        this.x += this.velocity.x 
        this.y += this.velocity.y

        if(this.opacity > .0051){

            this.opacity -= .005

        }else{

            this.opacity = 0
        }
      
    }

    random(min,max){

        return min + Math.random() * (max-min)
        
    }
}