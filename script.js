function validateForm() {
    const inputs = [
        { element: document.querySelector('input[placeholder="First Name"]') },
        { element: document.querySelector('input[placeholder="Last Name"]') },
        { element: document.querySelector('input[placeholder="Business Email"]') },
        { element: document.querySelector('input[placeholder="Company"]') },
        { element: document.getElementById('country-select') },
    ];

    let valid = true;
    const errorImage = document.getElementById('errorImage');

    // Reset red styles and hide the image
    inputs.forEach(input => {
        input.element.classList.remove('error');
        input.element.setCustomValidity('');
        errorImage.style.display = 'none'; // Hide image initially
    });

    inputs.forEach(input => {
        if (!input.element.value) {
            valid = false;
            input.element.classList.add('error'); // Add error class
            input.element.setCustomValidity('Please fill this form first.'); // Set custom message
        }
    });

    // Show the image if there are errors
    if (!valid) {
        errorImage.style.display = 'block';
    }

    return valid; // Only submit the form if valid is true
}
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);



function showVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('video');

    // Show the modal
    modal.style.display = 'flex';

    // Play the video when the modal opens
    video.play();
}
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('video');

    // Hide the modal
    modal.style.display = 'none';

    // Pause the video when the modal closes
    video.pause();
    // Optionally, reset the video to the beginning
}









//   countries

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
  const select = document.getElementById('country-select');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name.common;
    option.textContent = country.name.common;
    select.appendChild(option);
  });
});



// testimonial

const testimonials = [
    {
        name: "Abbie Harvey",
        text: "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.",
        image: "Assests/image 1.png"
    },
    {
        name: "John Doe",
        text: "Caring for my elderly parents has taught me the importance of love and patience. Every moment spent with them is a cherished one.",
        image: "Assests/image man.png"
    },
    {
        name: "Jane Smith",
        text: "I understand the importance of companionship for seniors. They need emotional support and respect to lead fulfilling lives.",
        image: "Assests/image woman.png"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    document.getElementById('testimonialName').innerText = testimonial.name;
    document.getElementById('testimonialText').innerText = testimonial.text;
    document.getElementById('testimonialImage').src = testimonial.image;

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Initialize with the first testimonial
updateTestimonial();



// error message for form


