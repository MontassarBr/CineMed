document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to your server
      // For now, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon at ${email}.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Add fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkFade() {
    fadeElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('visible')) {
        element.classList.add('visible');
      }
    });
  }
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Initial check
  setTimeout(checkFade, 100);
  
  // Check on scroll
  window.addEventListener('scroll', checkFade);
});
