// car.js
var step=0.1;
var angle=0;
var grassstep=1440;
let snowflakes = []; 
function setup() {
 createCanvas(1440, 750);
 

}

function draw() {
 background(0);
 stroke(255);
 line(0,600,1440,600);
 
 push();
 stroke(150);
 fill(150);
 rect(250,300,800,200,5);

 stroke(100);
 fill(100);
 rect(750,150,150,150);
 triangle(900,150,900,300,1050,300);

 stroke(160);
 fill(160);
 stroke(255);
 rect(800,200,100,100);
 triangle(900,200,900,300,1000,300);
 
 stroke(255);
 if(angle<2*PI)
 {
 angle+=step*PI;
 }
 else
 angle=0;
 translate(400,500);
 rotate(angle);
 tyre();
 
 pop();
 push();

 translate(900,500);
 rotate(angle);
 tyre();
 
 pop();
 push();

 if(grassstep>-20)
 grassstep-=5; 
 else
 grassstep=1440;

 translate(grassstep,0);
 weed();
 pop();

 let t = frameCount / 60; // update time

 // create a random number of snowflakes each frame
 for (var i = 0; i < random(5); i++) {
 snowflakes.push(new snowflake()); // append snowflake object
 }

 // loop through snowflakes with a for..of loop
 for (let flake of snowflakes) {
 flake.update(t); // update snowflake position
 flake.display(); // draw snowflake
 }

 
}


function tyre(){
 //轮胎
 fill(255);
 ellipse(0,0,200,200);
 fill(0);
 ellipse(0,0,160,160);

 fill(255);
 ellipse(0,0,40,40);
 

 //钢圈十字
 fill(255);
 ellipse(0,-50,40,80);
 fill(255);
 ellipse(0,50,40,80);

 fill(255);
 ellipse(-50,0,80,40);
 fill(255);
 ellipse(50,0,80,40);

 //轴
 fill(0);
 ellipse(0,0,30,30);
 fill(255);
 ellipse(0,0,20,20);
}

function weed(){
 stroke(160);
 fill(160);
 stroke(255);
 triangle(20,600,40,600,0,580);
 triangle(20,600,40,600,28,560);
 triangle(20,600,40,600,43,585);
}

function snowflake() {
 // initialize coordinates
 this.posX = 0;
 this.posY = random(-50, 0);
 this.initialangle = random(0, 2 * PI);
 this.size = random(2, 5);

 // radius of snowflake spiral
 // chosen so the snowflakes are uniformly spread out in area
 this.radius = sqrt(random(pow(width / 2, 2)));

 this.update = function(time) {
 // x position follows a circle
 let w = 0.6; // angular speed
 let angle = w * time + this.initialangle;
 this.posX = width / 2 + this.radius * sin(angle);

 // different size snowflakes fall at slightly different y speeds
 this.posY += pow(this.size, 0.5);

 // delete snowflake if past end of screen
 if (this.posY > height) {
 let index = snowflakes.indexOf(this);
 snowflakes.splice(index, 1);
 }
 };

 this.display = function() {
 ellipse(this.posX, this.posY, this.size);
 };
}