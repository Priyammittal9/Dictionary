const searchButton = document.querySelector(".input_section button");
const section = document.querySelector(".section");
const sound = document.getElementById("sound");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

searchButton.addEventListener("click", e=>{
  result ='';

  let input =document.querySelector(".input_section input").value.trim();
  if (input) {
    fetch(`${url}${input}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      result += `<div class="word">
        <h1>${data[0].word}</h1>
        <button onclick='soundPlay()'>
          <ion-icon name="volume-high"></ion-icon>
        </button>
      </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetics[0].text}</p>
        </div>
          <p class="word_meaning">${data[0].meanings[0].definitions[0].definition}</p>
          <div class="word_example">
            <h5>Example</h5>
            <p>${data[0].meanings[0].definitions[0].example || "example is not found"}</p>
            </div>
            `;
            // sound.setAttribute("src", `https:${data[0].phonetics[1].audio}`)
            section.innerHTML = result;
    }).catch(()=>{
      result +="<h1 class='error'>Couldn't not find the word</h1>"
      section.innerHTML = result;
    })
  }
  else {
    result +='<h1 class="error">Input is not found</h1>'
    section.innerHTML = result;

  }

})
function soundPlay(){
  // sound.play();
}
