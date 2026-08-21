
document.addEventListener('DOMContentLoaded', () => {
    // Translations Dictionary
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_pkg: "El Paquete Ideal",
            nav_feat: "Características",
            nav_contact: "Contacto",
            nav_start: "Comenzar",
            hero_eyebrow: "La Nueva Era del Hosting",
            hero_title: 'Hosting que <span class="gradient-text">Enciende</span> tu Presencia Digital',
            hero_desc: "Lanza tu página web a nivel global con nuestra infraestructura ultrarrápida, segura y futurista. Todo lo que necesitas en un solo paquete definitivo.",
            hero_cta: 'Adquirir Paquete Completo <i class="fa-solid fa-arrow-right"></i>',
            card_label: "Paquete Definitivo",
            card_mo: "/mes",
            f_domain: "Dominio Gratis (1er año)",
            f_bw: "Ancho de banda ilimitado",
            f_ssl: "SSL Gratis de por vida",
            f_support: "Soporte 24/7 Premium",
            f_backups: "Backups diarios automatizados",
            why_title: '¿Por qué elegir <span class="gradient-text">EnciendeTuWeb</span>?',
            why_desc: "Nuestra plataforma está diseñada para la velocidad y la confiabilidad, superando a la competencia técnica con un diseño y rendimiento superior.",
            ft_speed: "Velocidad Extrema",
            fd_speed: "Servidores optimizados con almacenamiento NVMe SSD para que tu web cargue en milisegundos.",
            ft_security: "Seguridad Blindada",
            fd_security: "Protección DDoS avanzada, escáner de malware y certificados SSL incluidos automáticamente.",
            ft_support: "Soporte Técnico 24/7",
            fd_support: "Nuestro equipo de expertos está siempre en línea para ayudarte vía chat, ticket o WhatsApp.",
            contact_title: "Contáctanos",
            contact_desc: "¿Tienes alguna duda adicional? Nuestro equipo de expertos está listo para ayudarte en cada paso.",
            footer_rights: "Todos los derechos reservados."
        },
        en: {
            nav_home: "Home",
            nav_pkg: "The Ideal Package",
            nav_feat: "Features",
            nav_contact: "Contact",
            nav_start: "Get Started",
            hero_eyebrow: "The New Era of Hosting",
            hero_title: 'Hosting that <span class="gradient-text">Ignites</span> your Digital Presence',
            hero_desc: "Launch your website globally with our ultra-fast, secure, and futuristic infrastructure. Everything you need in one definitive package.",
            hero_cta: 'Get Complete Package <i class="fa-solid fa-arrow-right"></i>',
            card_label: "Definitive Package",
            card_mo: "/mo",
            f_domain: "Free Domain (1st year)",
            f_bw: "Unlimited Bandwidth",
            f_ssl: "Free Lifetime SSL",
            f_support: "24/7 Premium Support",
            f_backups: "Automated Daily Backups",
            why_title: 'Why choose <span class="gradient-text">EnciendeTuWeb</span>?',
            why_desc: "Our platform is designed for speed and reliability, surpassing technical competition with superior design and performance.",
            ft_speed: "Extreme Speed",
            fd_speed: "Optimized servers with NVMe SSD storage so your website loads in milliseconds.",
            ft_security: "Armored Security",
            fd_security: "Advanced DDoS protection, malware scanner, and SSL certificates automatically included.",
            ft_support: "24/7 Technical Support",
            fd_support: "Our team of experts is always online to help you via chat, ticket, or WhatsApp.",
            contact_title: "Contact Us",
            contact_desc: "Do you have any additional questions? Our team of experts is ready to help you every step of the way.",
            footer_rights: "All rights reserved."
        }
    };

    let currentLang = 'es';
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');
    const langSwitcher = document.getElementById('lang-switcher');

    if(langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            
            if(currentLang === 'es') {
                langEsBtn.style.color = 'white';
                langEsBtn.style.opacity = '1';
                langEnBtn.style.color = 'var(--gray-500)';
                langEnBtn.style.opacity = '0.7';
            } else {
                langEnBtn.style.color = 'white';
                langEnBtn.style.opacity = '1';
                langEsBtn.style.color = 'var(--gray-500)';
                langEsBtn.style.opacity = '0.7';
            }

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                }
            });
        });
    }

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    const modalOverlay = document.getElementById('checkoutModal');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.modal-close');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('active');
            showStep(0);
        });
    });

    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('active', i === index);
        });
        currentStep = index;
    }

    document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) showStep(currentStep + 1);
        });
    });

    document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) showStep(currentStep - 1);
        });
    });

    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const sendChat = document.getElementById('sendChat');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    function addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-msg ${sender}`;
        msg.textContent = text;
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendChat.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        addMessage(text, 'user');
        chatInput.value = '';

        setTimeout(() => {
            addMessage("Redirigiendo a WhatsApp...", 'bot');
            setTimeout(() => {
                const whatsappUrl = `https://wa.me/528149484860?text=${encodeURIComponent(text)}`;
                window.open(whatsappUrl, '_blank');
            }, 1000);
        }, 500);
    }
});
