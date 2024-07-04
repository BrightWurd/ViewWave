let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

// Function to show the slide based on index
function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === index) {
      slide.classList.add("active");
    }
  });
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Automatically change slide every 3 seconds
function autoSlide() {
  nextSlide();
}

// Initialize the carousel
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
  setInterval(autoSlide, 10000); // Change slide every 3 seconds
});

// Find the menu icon element by its ID
let blur = document.querySelector("#the-section");
document.querySelector("#the-menu-icon").addEventListener("click", (event) => {
  // Prevent the click from propagating further, which would trigger other click events
  event.stopPropagation();

  // Find the sidebar element by its ID
  const sideBar = document.querySelector("#the-side-bar");

  // Add the 'sliding' class to the sidebar to make it visible
  sideBar.classList.add("sliding");
  blur.classList.add("blur");

  // Define a function to remove the 'sliding' class from the sidebar
  const removeClass = (e) => {
    // Check if the click event target (the element clicked) is outside the sidebar
    if (!sideBar.contains(e.target)) {
      // If the click is outside, remove the 'sliding' class, which will hide the sidebar
      sideBar.classList.remove("sliding");

      blur.classList.remove("blur");

      // Remove this event listener to stop listening for further clicks
      // This is important to clean up and avoid multiple listeners being added
      document.removeEventListener("click", removeClass);
    }
  };

  // Add a click event listener to the document
  // This will listen for clicks anywhere on the page
  document.addEventListener("click", removeClass);
});
