dua_lipa= "";
post_malone= "";

function preload(){
    dua_lipa=loadSound("dua_lipa.mp3");
    post_malone=loadSound("post_malone.mp3");
}

function setup(){
    canvas = createCanvas(600, 800);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 800);

}