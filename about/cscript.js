document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display the alert with the message
  const alertDiv = document.getElementById('alert');
  alertDiv.textContent = `Your message has been sent! Name: ${name}, Email: ${email}, Message: ${message}`;
  alertDiv.style.display = 'block';

  // Fade-in effect
  alertDiv.style.opacity = 0; // Start with opacity 0
  setTimeout(() => {
    alertDiv.style.opacity = 1; // Fade in to opacity 1
  }, 10); // Small timeout to allow the display change to take effect

  // Fade out the alert after a delay
  setTimeout(() => {
    const fadeOutInterval = setInterval(() => {
      if (alertDiv.style.opacity <= 0) {
        clearInterval(fadeOutInterval);
        alertDiv.style.display = 'none'; // Hide the alert when fully faded out
      } else {
        alertDiv.style.opacity -= 0.1; // Decrease opacity
      }
    }, 50); // Adjust the interval for smoother fading
  }, 1500); // Delay before starting fade-out

  this.reset(); // Reset the form fields
});