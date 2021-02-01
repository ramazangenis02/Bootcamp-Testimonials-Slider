const profiles = [
  {
    author: "Tanya Sinclair",
    quotes:
      "“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.”",
    job: "UX Engineer",
    image: "./images/image-tanya.jpg",
  },

  {
    author: "John Tarkpor",
    quotes:
      "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
    job: "Junior Front-end Developer",
    image: "./images/image-john.jpg",
  },
];

//Variables
const quote = document.getElementById("quote");

const author = document.getElementById("author");

const jobs = document.getElementById("jobs");

const authorImage = document.getElementById("author-image");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

prev.addEventListener("click", prevFunction);
next.addEventListener("click", nextFunction);

function prevFunction() {
  for (var i = 0; i < profiles.length; i--) {
    author.innerHTML = profiles[i].author;
    jobs.innerHTML = profiles[i].job;
    quote.innerHTML = profiles[i].quotes;
    authorImage.src = profiles[i].image;
    if (i == 0) {
      return;
    }
  }
}
function nextFunction() {
  for (var i = 0; i < profiles.length; i++) {
    author.innerHTML = profiles[i].author;
    jobs.innerHTML = profiles[i].job;
    quote.innerHTML = profiles[i].quotes;
    authorImage.src = profiles[i].image;
  }
}
