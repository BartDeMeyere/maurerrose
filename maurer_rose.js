class maurer_rose{

    constructor(x , y , n , size){

        this.x = x;
        this.y = y
        this.n = n
        this.size = size
        this.counter = 0
        this.angle = Math.PI/360
        this.last = {x: 0 , y:0}
        this.points = []
        this.path = []
        this.pathlength = 50
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
            this.CreateParticles( this.points[this.counter].x ,  this.points[this.counter].y , "hsl(" + this.counter*6 + ",100%,50%)" , 5)
          

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

        var amount = Math.floor(Math.random() * 10)

        for(var i = 0 ; i < amount ; i++){

            this.particles.push(new Particle(x,y,size,color))
        }

    }

    drawParticles(){

        this.particles.forEach((particle,index) => {

            if(particle.opacity > 0){

                particle.draw()
                particle.move()

            }else{

                this.particles.splice(index , 1)
            }
           
        })
    }

}