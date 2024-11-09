const container = document.querySelector('.container');
const searchBar = document.querySelector('.img-1');
const micIcon = document.querySelector('.img-2'); 
const inputField = document.querySelector('.text');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

searchBar.addEventListener("click",()=>{
const query = inputField.value.trim();

if(query !== ""){
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
}
else{
    container.classList.toggle('active')
}
});

inputField.addEventListener('keydown',()=>{
if (event.key === "Enter" && inputField.value.trim() !==' '){
    const query = inputField.value.trim();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank')
}

});

micIcon.addEventListener("click",()=>{
    recognition.start();
});

recognition.onresult = (event) =>{
    const speechToText = event.results[0][0].transcript;
    inputField.value = speechToText;
    search();
}

recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
};

function search() {
    const query = inputField.value.trim();
    if (query !== "") {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    } else {
        container.classList.toggle('active'); 
    }
}