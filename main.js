function preload(){
}

function setup(){
    canvas = createCanvas(425,425);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(425,425);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',identifyPose);
}

function modelLoaded(){
    console.log("posenet is initialized");
}


function draw(){
    image(video,0,0,425,425);
}

function identifyPose(results){
    if(results.length> 0){
        console.log(results);
        console.log("x position = " + results[0].pose.nose.x);
        console.log("y position = " + results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save("funnymoustache.png");
}