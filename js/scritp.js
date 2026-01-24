document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupération des valeurs
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;

    // Numéro WhatsApp du service (format international sans +)
    const phoneNumber = "2250787487366";

    // Message WhatsApp
    const whatsappMessage = `
Nouvelle demande de service

Nom : ${nom}
Email : ${email}
Service souhaité : ${service}
Date souhaitée : ${date}

Message :
${message}
    `;

    // Encodage + ouverture WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
});



const cards = document.querySelectorAll('.avantages-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));





// Animation au défilement
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Vérifier initialement
            fadeInOnScroll();
            
            // Écouter le défilement
            window.addEventListener('scroll', fadeInOnScroll);
            
            // Animation au survol des cartes (effet supplémentaire)
            const cards = document.querySelectorAll('.avantage-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.01)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            // Effet d'apparition progressive des éléments de liste
            const listItems = document.querySelectorAll('.avantage-item');
            listItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.03}s`;
            });
        });
