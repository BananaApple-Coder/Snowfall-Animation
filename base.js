class base {
    constructor(x, y ,width, height, angle, GOptions){
        let options = {}
        if (GOptions){
            options = GOptions
        }else{
            options = {
              "restitution": 0,
              "density": 1,
              "friction": 1
            }
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
  
    display(){
      const body = this.body
      const angle = body.angle
      push()
      translate(body.position.x, body.position.y)
      rotate(angle)
      fill(255)
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height)
      pop()
    }
  }