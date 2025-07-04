// Get the blockQuote
const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".newQuote");
const tweet = document.querySelector(".tweet");

const apiKey = "https://quotes-api-self.vercel.app/quote";

let temp = "";
const getData = async () => {
  const data = await fetch(apiKey);
  const response = await data.json();
//   console.log(response);
//   console.log(response.author);
  temp = response;
  //console.log(response);
  quote.innerText = response.quote;
  author.innerText = response.author;
};

//function call
getData();

newQuote.addEventListener("click", () => {
  getData();
});


//open new window

//window.open(link,name,specifaction)
tweet.addEventListener("click", () => {
  window.open("https://twitter.com/intent/tweet?text=" + temp.quote, "Tweet Window", "width=400, height=400");
});