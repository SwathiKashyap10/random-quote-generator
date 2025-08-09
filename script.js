const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".generateBtn");
const speak = document.querySelector(".speak");
const copy = document.querySelector(".copy");
const twitter = document.querySelector(".twitter");

function callQuoteApi() {
    generateBtn.classList.add("loading");
    generateBtn.innerText = "Loading Quote....."
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((result) => {
            quoteText.innerText = result.quote;
            author.innerText = result.author;
            generateBtn.innerText = "New Quote";
            generateBtn.classList.remove("loading");
        });
}

generateBtn.addEventListener("click", callQuoteApi);

speak.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
  speechSynthesis.speak(utterance);
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText)
    alert("Quote coped to the clipboard successfully!")
})

twitter.addEventListener("click",()=>{
    let twitterURL = `https://twitter.com/intent/tweet?url${quoteText.innerText}`;
    window.open(twitterURL,"_blank");
})

