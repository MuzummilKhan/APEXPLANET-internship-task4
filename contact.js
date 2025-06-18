document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // In a real application, you would send this data to a server
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            console.log('Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Simulate a successful submission
            formResponse.classList.remove('hidden');
            formResponse.classList.remove('error');
            formResponse.classList.add('success');
            formResponse.textContent = 'Message sent successfully!';
            contactForm.reset(); // Clear the form

            // You can replace the simulation with actual API calls
            // fetch('/api/contact', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         formResponse.classList.remove('hidden');
            //         formResponse.classList.remove('error');
            //         formResponse.classList.add('success');
            //         formResponse.textContent = data.message;
            //         contactForm.reset();
            //     } else {
            //         formResponse.classList.remove('hidden');
            //         formResponse.classList.remove('success');
            //         formResponse.classList.add('error');
            //         formResponse.textContent = data.error;
            //     }
            // })
            // .catch(error => {
            //     formResponse.classList.remove('hidden');
            //     formResponse.classList.remove('success');
            //     formResponse.classList.add('error');
            //     formResponse.textContent = 'An error occurred. Please try again later.';
            //     console.error('Error:', error);
            // });
        });
    }
});