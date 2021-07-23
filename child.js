class Child extends base{
    constructor(x, y, image){
      super(x,y,150,150);
      this.image = loadImage(image);
    }
    display(){
      super.display();
    }
  }