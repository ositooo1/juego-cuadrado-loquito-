let SqR;
let elli;
let puntos = 0;
let vidas = 5;

function setup(){
 createCanvas(900, 600);
    SqR = createSprite(
      400, 540, 50, 50);
    SqR.shapeColor = color(0);
    elli = createSprite(
        random(0, width - 10),-10,40
    )

  

}

function draw(){
    background(250, 219, 216);
    elli.velocity.y = 10
    textSize(25);
    text("Puntos: " + puntos, 720, 50);
    text("Vidas: " + vidas, 720, 75);
    if (keyIsDown(68) === true) {
        SqR.position.x += 10
      }
      if (keyIsDown(65) === true) {
        SqR.position.x -= 10
      }

      if(elli.position.y === height + 10){
elli.position.y = -10
elli.position.x = random(0, width - 10)
      }
      if (elli.overlap(SqR)) {
        vidas -= 1;
        elli.position.y = -10
        elli.position.x = random(0, width - 10)
      }
      if (vidas == 0){
        background(0)
        elli.shapeColor(0)
      }

      if(elli.position.y == height){
puntos++
      }
drawSprites();
}

