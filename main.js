function preload(){
}

function setup(){
    canvas = createCanvas(425,425);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(425,425);
    video.hide();
}

function draw(){
    image(video,0,0,425,425);
}

function take_snapshot(){
    save("funnymoustache.png");
}