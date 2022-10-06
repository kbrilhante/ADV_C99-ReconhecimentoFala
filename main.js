const SpeechRecognition = webkitSpeechRecognition;

const recFala = new SpeechRecognition();
const txtFala = document.getElementById("voiceOut");
const camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function startVoice() {
    txtFala.innerHTML = "";
    recFala.start();
}

recFala.onresult = function(e) {
    console.log(e);
    
    const fala = e.results[0][0].transcript
    
    console.log(fala);
    txtFala.value = fala;
    
    speak();
    
    Webcam.attach(camera);
}

function speak() {
    const synth = speechSynthesis;
    const dadosVoz = txtFala.value;
    const utterThis = new SpeechSynthesisUtterance(dadosVoz);
    synth.speak(utterThis);
}

