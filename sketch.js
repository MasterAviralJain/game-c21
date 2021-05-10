var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(246,235,235);
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.velocityY=3;
    ball.velocityX=2;
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);


    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        ball.velocityY=ball.velocityY*-1
        ball.velocityX=ball.velocityX*-1

        music.play();

    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        ball.velocityY=ball.velocityY*-1
        ball.velocityX=ball.velocityX*-1

        music.play();

    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        ball.velocityY=ball.velocityY*-1
        ball.velocityX=ball.velocityX*-1

        music.play();

    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        ball.velocityY=ball.velocityY*-1
        ball.velocityX=ball.velocityX*-1

        music.play();

    }

    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
