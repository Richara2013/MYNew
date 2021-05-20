class Form{
    constructor(){
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
        this.greeting1= createElement('h2');
    }
    hide(){
        this.button.hide();
        this.greeting1.hide();
        this.title.hide();
        this.reset.hide();
    }

   display(){
    this.title.html("Here's My Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.greeting1.html("Ahead is a shooting game, the gun moves with the halp of the mouse and a bullet is triggered with help of space key, go ahead and try yourself!!");
    this.greeting1.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.reset.hide();

    this.button.mousePressed(()=>{
    this.greeting1.hide();
    this.button.hide();
    this.title.hide();
    });

    this.reset.mousePressed(()=>{
        gameState = 2;
        score = 0; 
        reset.visible=false;
        life1.addImage(lifeImg);
        life2.addImage(lifeImg);
        life3.addImage(lifeImg);
      });
   }
}