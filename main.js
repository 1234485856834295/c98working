var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();


function start(){
    document.getElementById("voice_output").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){

    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("voice_output").innerHTML=Content;
    speak();
}

Webcam.set({width:350,height:250,image_format:'png',png_quality:90});
camera=document.getElementById("camera");

function speak(){
    var first=window.speechSynthesis;

    second=document.getElementById("voice_output");

    var third= new SpeechSynthesisUtterance(second);

    first.speak(second);

    Webcam.attach(camera);
}