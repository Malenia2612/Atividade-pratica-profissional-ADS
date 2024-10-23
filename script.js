// Inicializa o controlador do ScrollMagic
var controller = new ScrollMagic.Controller();

// Cena para a seção 1 (Animação entra pela esquerda)
new ScrollMagic.Scene({
    triggerElement: "#section1", // Elemento que inicia a animação
    triggerHook: 0.8, // Quando a animação deve começar (0 = topo, 1 = fim da tela)
    duration: "100%" 
})
.setClassToggle("#section1", "fade-in-left") 
.addIndicators({ name: "Seção 1" }) 
.addTo(controller);

// Cena para a seção 2 (Animação entra pela esquerda)
new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.8,
    duration: "100%"
})
.setClassToggle("#section2", "fade-in-left")
.addIndicators({ name: "Seção 2" })
.addTo(controller);

// Cena para a seção 3 (Animação entra pela direita)
new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: 0.8,
    duration: "100%"
})
.setClassToggle("#section3", "fade-in-right")
.addIndicators({ name: "Seção 3" })
.addTo(controller);

// Cena para a div social-media (Animação entra pela esquerda)
new ScrollMagic.Scene({
    triggerElement: "#section2", 
    triggerHook: 0.9, 
    duration: "100%" 
})
.setClassToggle(".social-media", "fade-in") 
.addIndicators({ name: "Redes Sociais" }) 
.addTo(controller);

// Adicionando comportamento de rolagem
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    const socialMedia = document.querySelector('.social-media');

    if (st > lastScrollTop) {
        // O usuário está rolando para baixo
        socialMedia.classList.remove('fade-in');
    } else {
        // O usuário está rolando para cima
        socialMedia.classList.add('fade-in');
    }
    
    lastScrollTop = st <= 0 ? 0 : st; 
});
