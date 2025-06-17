var img01;

var xJogador1=800;
var xJogador2=700;
var xJogador3=700;
var xJogador4=600;

function setup() {
  createCanvas(800, 600);
 img01 = loadImage('cidade-campo-_PRINCIPAL-768x569.jpg');
}

function draw() {
  background(img01);
 
  textSize(60);
  text("🏎",xJogador1,270);
  xJogador1 -= random(3);
  
  textSize(50);
  text("🚁",xJogador2,80);
  xJogador2 -= random(1);
  
  textSize(50);
  text("🚜",xJogador3,580);
  xJogador3 -= random(1);
  
  
 


  
  
  
  
  
  
  
}