const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ballImg
var ball
var wood
var woodImg
var potionImg
var bgImg
var brick1
var bg
var im
var im1
var im2
var im3
var im4
var im5
var im6
var song

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15
var b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30
var b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45


function preload(){
  ballImg=loadImage("images/images.png")  
  woodImg=loadImage("images/wood2.png")
  potionImg=loadImage("images/potion.jpg")
  bgImg=loadImage("images/bg.jpg")
  im=loadImage("images/1.gif")
  im1=loadImage("images/2.gif")
  im2=loadImage("images/3.gif")
  im3=loadImage("images/4.gif")
  im4=loadImage("images/5.gif")
  im5=loadImage("images/6.gif")
  song=loadSound("images/s.mp3")
}

function setup(){
createCanvas(windowWidth,windowHeight) 

engine = Engine.create();
world = engine.world;

bg = createSprite(windowWidth/2,windowHeight/2)
bg.addImage("bg",bgImg)
 
wood = createSprite(windowWidth/2,windowHeight-50)
wood.addImage("wood",woodImg)
wood.scale=1.1

ball = createSprite(windowWidth/2,windowHeight-110)
ball.addImage("ball",ballImg)
ball.scale=0.2
ball.velocityX=10
ball.velocityY=-5


b1 = createSprite(windowWidth/2-590,windowHeight/2-200,70,35)
b2 = createSprite(windowWidth/2-500,windowHeight/2-200,70,35)
b3 = createSprite(windowWidth/2-400,windowHeight/2-200,70,35)
b4 = createSprite(windowWidth/2-300,windowHeight/2-200,70,35)
b5 = createSprite(windowWidth/2-200,windowHeight/2-200,70,35)
b6 = createSprite(windowWidth/2-100,windowHeight/2-200,70,35)
b7 = createSprite(windowWidth/2-0,windowHeight/2-200,70,35)
b8 = createSprite(windowWidth/2+100,windowHeight/2-200,70,35)
b9 = createSprite(windowWidth/2+200,windowHeight/2-200,70,35)
b10 = createSprite(windowWidth/2+300,windowHeight/2-200,70,35)
b11 = createSprite(windowWidth/2+400,windowHeight/2-200,70,35)
b12 = createSprite(windowWidth/2+500,windowHeight/2-200,70,35)
b13 = createSprite(windowWidth/2+590,windowHeight/2-200,70,35)

b1.addImage("b1",im1)
b1.scale=0.25
b2.addImage("b2",im1)
b2.scale=0.25
b3.addImage("b3",im1)
b3.scale=0.25
b4.addImage("b4",im1)
b4.scale=0.25
b5.addImage("b5",im1)
b5.scale=0.25
b6.addImage("b6",im1)
b6.scale=0.25
b7.addImage("b7",im1)
b7.scale=0.25
b8.addImage("b8",im1)
b8.scale=0.25
b9.addImage("b9",im1)
b9.scale=0.25
b10.addImage("b10",im1)
b10.scale=0.25
b11.addImage("b11",im1)
b11.scale=0.25
b12.addImage("b12",im1)
b12.scale=0.25
b13.addImage("b13",im1)
b13.scale=0.25

b14 = createSprite(windowWidth/2-610,windowHeight/2-100,80,40)
b15 = createSprite(windowWidth/2-505,windowHeight/2-100,80,40)
b16 = createSprite(windowWidth/2-400,windowHeight/2-100,80,40)
b17 = createSprite(windowWidth/2-300,windowHeight/2-100,80,40)
b18 = createSprite(windowWidth/2-200,windowHeight/2-100,80,40)
b19 = createSprite(windowWidth/2-100,windowHeight/2-100,80,40)
b20 = createSprite(windowWidth/2-0,windowHeight/2-100,80,40)
b21 = createSprite(windowWidth/2+100,windowHeight/2-100,80,40)
b22 = createSprite(windowWidth/2+200,windowHeight/2-100,80,40)
b23 = createSprite(windowWidth/2+300,windowHeight/2-100,80,40)
b24 = createSprite(windowWidth/2+400,windowHeight/2-100,80,40)
b25 = createSprite(windowWidth/2+505,windowHeight/2-100,80,40)
b26 = createSprite(windowWidth/2+610,windowHeight/2-100,80,40)

b14.addImage(im2)
b14.scale=0.25
b15.addImage(im2)
b15.scale=0.25
b16.addImage(im2)
b16.scale=0.25
b17.addImage(im2)
b17.scale=0.25
b18.addImage(im2)
b18.scale=0.25
b19.addImage(im2)
b19.scale=0.25
b20.addImage(im2)
b20.scale=0.25
b21.addImage(im2)
b21.scale=0.25
b22.addImage(im2)
b22.scale=0.25
b23.addImage(im2)
b23.scale=0.25
b24.addImage(im2)
b24.scale=0.25
b25.addImage(im2)
b25.scale=0.25
b26.addImage(im2)
b26.scale=0.25

b27 = createSprite(windowWidth/2-620,windowHeight/2-0,90,40)
b28 = createSprite(windowWidth/2-510,windowHeight/2-0,90,40)
b29 = createSprite(windowWidth/2-400,windowHeight/2-0,90,40)
b30 = createSprite(windowWidth/2-300,windowHeight/2-0,90,40)
b31 = createSprite(windowWidth/2-200,windowHeight/2-0,90,40)
b32 = createSprite(windowWidth/2-100,windowHeight/2-0,90,40)
b33 = createSprite(windowWidth/2-0,windowHeight/2-0,90,40)
b34 = createSprite(windowWidth/2+100,windowHeight/2-0,90,40)
b35 = createSprite(windowWidth/2+200,windowHeight/2-0,90,40)
b36 = createSprite(windowWidth/2+300,windowHeight/2-0,90,40)
b37 = createSprite(windowWidth/2+400,windowHeight/2-0,90,40)
b38 = createSprite(windowWidth/2+510,windowHeight/2-0,90,40)
b39 = createSprite(windowWidth/2+615,windowHeight/2-0,90,40)

b27.addImage(im3)
b27.scale=0.25
b28.addImage(im3)
b28.scale=0.25
b29.addImage(im3)
b29.scale=0.25
b30.addImage(im3)
b30.scale=0.25
b31.addImage(im3)
b31.scale=0.25
b32.addImage(im3)
b32.scale=0.25
b33.addImage(im3)
b33.scale=0.25
b34.addImage(im3)
b34.scale=0.25
b35.addImage(im3)
b35.scale=0.25
b36.addImage(im3)
b36.scale=0.25
b37.addImage(im3)
b37.scale=0.25
b38.addImage(im3)
b38.scale=0.25
b39.addImage(im3)
b39.scale=0.25



edges=createEdgeSprites()

}

function draw(){
background("white")




if(ball.isTouching(b1)){
  ball.bounceOff(b1)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b1.destroy()
  }
  if(ball.isTouching(b2)){
  ball.bounceOff(b2)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b2.destroy()
  }
  if(ball.isTouching(b3)){
  ball.bounceOff(b3)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b3.destroy()
  }
  if(ball.isTouching(b4)){
  ball.bounceOff(b4)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b4.destroy()
  }
  if(ball.isTouching(b5)){
  ball.bounceOff(b5)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b5.destroy()
  }
  if(ball.isTouching(b6)){
  ball.bounceOff(b6)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b6.destroy()
  }
  if(ball.isTouching(b7)){
  ball.bounceOff(b7)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b7.destroy()
  }
  if(ball.isTouching(b8)){
  ball.bounceOff(b8)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b8.destroy()
  }
  if(ball.isTouching(b9)){
  ball.bounceOff(b9)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b9.destroy()
  }
  if(ball.isTouching(b10)){
  ball.bounceOff(b10)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b10.destroy()
  }
  if(ball.isTouching(b11)){
  ball.bounceOff(b11)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b11.destroy()
  }
  if(ball.isTouching(b12)){
  ball.bounceOff(b12)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b12.destroy()
  }
  if(ball.isTouching(b13)){
  ball.bounceOff(b13)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b13.destroy()
  }
  if(ball.isTouching(b14)){
  ball.bounceOff(b14)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b14.destroy()
  }
  if(ball.isTouching(b15)){
  ball.bounceOff(b15)
  ball.velocityY+=3;
  ball.velocityX+=3;
  song.play()
  b15.destroy()
  }
  if(ball.isTouching(b16)){
  ball.bounceOff(b16)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b16.destroy()
  }
  if(ball.isTouching(b17)){ 
  ball.bounceOff(b17)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b17.destroy()
  }
  if(ball.isTouching(b18)){
  ball.bounceOff(b18)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b18.destroy()
  }
  if(ball.isTouching(b19)){
  ball.bounceOff(b19)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b19.destroy()
  }
  if(ball.isTouching(b20)){
  ball.bounceOff(b20)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b20.destroy()
  }
  if(ball.isTouching(b21)){
  ball.bounceOff(b21)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b21.destroy()
  }
  if(ball.isTouching(b22)){
  ball.bounceOff(b22)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b22.destroy()
  }
  if(ball.isTouching(b23)){
  ball.bounceOff(b23)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b23.destroy()
  }
  if(ball.isTouching(b24)){
  ball.bounceOff(b24)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b24.destroy()
  }
  if(ball.isTouching(b25)){
  ball.bounceOff(b25)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b25.destroy()
  }
  if(ball.isTouching(b26)){
  ball.bounceOff(b26)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b26.destroy()
  }
  if(ball.isTouching(b27)){
  ball.bounceOff(b27)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b27.destroy()
  }
  if(ball.isTouching(b28)){
  ball.bounceOff(b28)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b28.destroy()
  }
  if(ball.isTouching(b29)){
  ball.bounceOff(b29)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b29.destroy()
  }
  if(ball.isTouching(b30)){
  ball.bounceOff(b30)
  ball.velocityY+=2;
  ball.velocityX+=2;
  song.play()
  b30.destroy()
  }
  if(ball.isTouching(b31)){
  ball.bounceOff(b31)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b31.destroy()
  }
  if(ball.isTouching(b32)){
  ball.bounceOff(b32)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b32.destroy()
  }
  if(ball.isTouching(b33)){
  ball.bounceOff(b33)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b33.destroy()
  }
  if(ball.isTouching(b34)){
  ball.bounceOff(b34)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b34.destroy()
  }
  if(ball.isTouching(b35)){
  ball.bounceOff(b35)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b35.destroy()
  }
  if(ball.isTouching(b36)){
  ball.bounceOff(b36)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b36.destroy()
  }
  if(ball.isTouching(b37)){
  ball.bounceOff(b37)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b37.destroy()
  }
  if(ball.isTouching(b38)){
  ball.bounceOff(b39)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b38.destroy()
  }
  if(ball.isTouching(b39)){
  ball.bounceOff(b39)
  ball.velocityY+=1;
  ball.velocityX+=1;
  song.play()
  b39.destroy()
  }
 

Engine.update(engine);

ball.bounceOff(edges[2])
ball.bounceOff(edges[1])
ball.bounceOff(edges[0])
ball.bounceOff(wood)

wood.x=mouseX

drawSprites()
}

