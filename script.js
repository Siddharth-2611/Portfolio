// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for section animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Form submission

        // document.querySelector('.contact-form').addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     // Get form data
        //     const formData = new FormData(this);
        //     const name = formData.get('name');
        //     const email = formData.get('email');
        //     const message = formData.get('message');
            
        //     // Simple validation
        //     if (!name || !email || !message) {
        //         alert('Please fill in all fields.');
        //         return;
        //     }
            
        //     // Simulate form submission
        //     alert('Thank you for your message! I\'ll get back to you soon.');
        //     this.reset();
        // });

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // CV download functionality
        document.querySelector('.cv-btn').addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would link to an actual PDF file
            alert('CV download feature - In a real application, this would download your CV PDF file.');
        });


 // contact me
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

  const mailtoLink = `mailto:siddharthkr264@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailtoLink;
});
