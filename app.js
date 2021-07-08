var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

//  Minions Translator API
var serverURL = "https://api.funtranslations.com/translate/binary.json";

function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong with the server!! Try again after sometime");
}

function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}

function clickEventHandler(){
    outputDiv.innerText = txtInput.value;
    var inputText = txtInput.value; // taking input

    // Calling server for processing
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
        // Output 
        outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)   

    }

function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        // x.classList.toggle("fas fa-moon")
     }


btnTranslate.addEventListener("click",clickEventHandler)
