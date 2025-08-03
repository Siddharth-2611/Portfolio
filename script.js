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

        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            // const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !message ) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

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
            const resumeLink = 'https://drive.google.com/file/d/1tVRaaCQYnUosW85cRwwAFdtE4Cd0MPEp/view?usp=drive_link'
            window.open(resumeLink, "_blank");
        });

function openModal(certId) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");

  const imageMap = {
    cert1: "assets/Certificates/IBM1.png",
    cert2: "assets/Certificates/IBM2.png",
    cert3: "assets/Certificates/Chatgpt.png",
    cert4: "assets/Certificates/altairml.png"
  };

  const imageSrc = imageMap[certId];
  if (imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
}

function closeModal() {
  document.getElementById("certificateModal").style.display = "none";
}


 // contact me
 document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = encodeURIComponent(document.getElementById("name").value);
      const message = encodeURIComponent(document.getElementById("message").value);
      
      const email = "siddharthws@email.com"; // replace with your email
      const subject = encodeURIComponent("Message from Website Contact Form");
      const body = `Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      
      window.open(gmailUrl, "_blank");
    });

// });



