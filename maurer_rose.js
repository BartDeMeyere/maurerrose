class maurer_rose{

    constructor(x , y , n , size){

        this.x = x;
        this.y = y
        this.n = n
        this.size = size
        this.counter = 0
        this.angle = Math.PI/180
        this.last = {x: 0 , y:0}
        this.points = []
        this.path = []
        this.pathlength = 40
        this.particles = []
    }

    getpoints(){

        for(var i = 0 ; i < 2 * Math.PI ; i+=this.angle){

            var k = i
            var r = Math.sin(this.n * k) * this.size
            var x = this.x + r * Math.cos(k)
            var y = this.y + r * Math.sin(k)
            this.points.push({x:x,y:y})
        }

    }

    draw(){

        
         if(this.path.length > 0){

            for(var i = 0 ; i < this.path.length ; i++){

                c.beginPath()
                c.strokeStyle = "hsl(" + i*6 + ",100%,50%)"
                c.lineCap = "round"
                c.lineWidth = i * .3
               
                if( i === 0){

                    c.moveTo(this.path[i].x , this.path[i].y)
                  

                }else{

                    c.moveTo(this.path[i-1].x , this.path[i-1].y)
                    c.lineTo(this.path[i].x , this.path[i].y)
                   
                }
              
                c.stroke()
                c.closePath()
            }
        } 

        if(this.path.length < this.pathlength){

            this.path.push({x: this.points[this.counter].x  , y: this.points[this.counter].y })
            this.CreateParticles( this.points[this.counter].x ,  this.points[this.counter].y , "hsl(" + this.counter * 6 + ",100%,50%)" , 5)
          

        }else{

            this.path.shift()
        }


        if(this.counter < this.points.length - 1){

            this.counter++

        }else{

            this.counter = 0

        }
            
    }

    CreateParticles(x , y , color , size){

        var amount = Math.floor(Math.random() * 80)

        for(var i = 0 ; i < amount ; i++){

            this.particles.push({x:x , y:y , color:color , size:size , opacity:1 , velx:this.random(-.6,.6) , vely:this.random(-.6,.6)})
        }

    }

    drawParticles(){

        for(var i = 0 ; i < this.particles.length ; i++){

            if(this.particles[i].opacity > 0){

                //draw
                c.save()
                c.beginPath()
                c.fillStyle = this.particles[i].color
                c.globalAlpha = this.particles[i].opacity
                c.arc(this.particles[i].x , this.particles[i].y , this.particles[i].size/2 , 0 , 2 * Math.PI)
                c.fill()
                c.closePath()
                c.restore()

                //move
                this.particles[i].x += this.particles[i].velx 
                this.particles[i].y += this.particles[i].vely
        
                if(this.particles[i].opacity > .0051){
        
                    this.particles[i].opacity -= .005
        
                }else{
        
                    this.particles[i].opacity = 0
                }

            }else{

                this.particles.splice(i , 1)
            }

           
        }
    }

    random(min,max){

        return min + Math.random() * (max-min)
        
    }

}