const carousel = document.querySelector('.image-carousel');
const images = carousel.querySelectorAll('img');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

let currentSlide = 0;

const moveSlides = function (slide) {
  currentSlide = slide;
  images.forEach((image, index) => {
    const angle = (index - 3 + currentSlide) * 60; // Adjust angle offset for centering (6 images)
    const radius = carousel.offsetWidth / 2; // Calculate radius based on carousel width
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    image.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

const nextSlide = function () {
  currentSlide++;
  if (currentSlide === images.length) {
    currentSlide = 0;
  }
  moveSlides(currentSlide);
};

const prevSlide = function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  moveSlides(currentSlide);
};

// Add event listeners for buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Optional: Set up automatic sliding (adjust interval as needed)
const autoplay = setInterval(nextSlide, 3000); // Slide every 3 seconds


// Move to the first slide initially (optional for smoother start)
moveSlides(0);



check_value = document.getElementById("check").checked;


function margin_check() {
  check_value = document.getElementById("check").checked;
  console.log(check_value);
  navbar_height = document.getElementById("hamburger").offsetHeight;
  console.log(navbar_height)
  if (check_value) {
    document.getElementById("introduction").style.marginTop = navbar_height + "px";
  } else {
    document.getElementById("introduction").style.marginTop = 0;
  }
}


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAaBLFPYmSD0Im1gU8ehfazg3qNA4d2xWU",
  authDomain: "divyanshdevelop-portfolio.firebaseapp.com",
  databaseURL: "https://divyanshdevelop-portfolio-default-rtdb.firebaseio.com",
  projectId: "divyanshdevelop-portfolio",
  storageBucket: "divyanshdevelop-portfolio.appspot.com",
  messagingSenderId: "453878723274",
  appId: "1:453878723274:web:92c52e00c40b43f16cfa33"
};



firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function save(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;



  const formData = {
    name: name,
    email: email,
    message: message
};
  database.ref(name + "users/").push().set({
    name:name,
    email:email,
    message:message
  })
  





window.alert("Thank You! We will notify soon!");
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('message').value = "";
}



function OpenFile() {
  window.open("https://divyaimage.online/", "_blank");
}

function OpenFile1() {
  window.open("#");
}
