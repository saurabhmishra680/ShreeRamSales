document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate fields
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Format message
    const whatsappNumber = '919226353150'; // Replace with your WhatsApp number (international format)
    const whatsappMessage = `Hello, this is a message from the Contact Form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Open WhatsApp Web with the pre-filled message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');

    // Show success message (dialog)
    alert('Your message has been successfully sent via WhatsApp!');
});
