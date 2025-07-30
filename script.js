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
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
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
    cert4: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=Data+Science"
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
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // 🚫 Prevent default form refresh

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     const subject = `Message from ${name}`;
//     const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

//     const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=siddharthkr264@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;

//     window.open(gmailLink, "_blank"); // ✅ Open Gmail tab
//   });
// });
