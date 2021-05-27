prediction="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
})
camera=document.getElementById("camera")
Webcam.attach(camera)
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='image'/>";
        
    })
    
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LtZUxU25b/",model_loaded);
function model_loaded(){
    console.log("model_loaded");
}
console.log("ml5 version :" ,ml5.version);
function speak(){
    var synth= window.speechSynthesis;
    speak_data="the prediction is"+prediction;
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synth.speak()
}
