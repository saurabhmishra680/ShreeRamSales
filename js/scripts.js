
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);

    // Toggle classes
    navLinks.classList.toggle("active");
    header.classList.toggle("open");
});
   //book btn 
    const bookServiceBtn = document.getElementById('book-service-btn');
    bookServiceBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const number = bookServiceBtn.getAttribute('data-whatsapp-number');
        const message = encodeURIComponent(bookServiceBtn.getAttribute('data-whatsapp-message'));
        const whatsappUrl = `https://wa.me/${number}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
    


const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateSliderPosition() {
    const cardWidth = document.querySelector(".service-card").offsetWidth + 20; // Include gap
    const visibleCards = 2; // Show two cards
    slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
    const totalCards = slider.children.length;
    const visibleCards = 1; // Cards visible at once
    currentIndex = Math.min(currentIndex + 1, totalCards - visibleCards);
    updateSliderPosition();
});
// Select elements

const happyCustomersCount = document.getElementById("happyCustomersCount");

// Retrieve the stored count from localStorage or start at 1000
let count = parseInt(localStorage.getItem("happyCustomersCount")) || 5000 ;

// Update the displayed count on page load
happyCustomersCount.textContent = count;

// Add click event to the "Book Service" button
bookServiceBtn.addEventListener("click", () => {
    count++; // Increment the count
    happyCustomersCount.textContent = count; // Update the displayed count

    // Add a class for animation and remove it after animation ends
    happyCustomersCount.classList.remove("pop-animation");
    void happyCustomersCount.offsetWidth; // Trigger reflow to restart animation
    happyCustomersCount.classList.add("pop-animation");

   
    localStorage.setItem("happyCustomersCount", count);
});


window.addEventListener("resize", updateSliderPosition);


