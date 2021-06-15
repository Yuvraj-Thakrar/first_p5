function setup(){
    canvas=createCanvas(700,590)
    canvas.position(110,250)
    video=createCapture(VIDEO);
video.hide()
}

function draw(){
    image(video,70,60,440,280);
stroke('red');
noFill();
rect(0,0,600,490);
fill('blue');
stroke('black');
circle(10,10,20);

fill('blue');
stroke('black');
circle(590,10,20);

fill('blue');
stroke('black');
circle(590,480,20);

fill('blue');
stroke('black');
circle(10,480,20);


}


function snap(){
    save('My_selfie.jpg');
}