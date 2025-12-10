// =====================
// MOBILE MENU
// =====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// =====================
// BUDGET FORM - WhatsApp
// =====================
const budgetForm = document.getElementById('budgetForm');

budgetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Pegar valores do formulário
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const projectType = document.getElementById('projectType').value;
  const message = document.getElementById('message').value;
  
  // Montar mensagem para WhatsApp
  const whatsappMessage = `
*Novo orçamento - Prismático Filmes*

*Nome:* ${firstName} ${lastName}
*E-mail:* ${email}
*Telefone:* ${phone}
*Tipo de projeto:* ${projectType}

*Mensagem:*
${message}
  `.trim();
  
  const whatsappNumber = '5581994227887';
  
  // Codificar mensagem para URL
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  // Abrir WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
  
  // Limpar formulário após envio
  budgetForm.reset();
});

// =====================
// ANO ATUAL NO FOOTER
// =====================
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.textContent = new Date().getFullYear();

// =====================
// SCROLL SUAVE 
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Não aplicar scroll suave se for apenas "#"
    if (href === '#') return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// =====================
// HEADER SCROLL EFFECT 
// =====================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Adicionar sombra ao header quando rolar a página
  if (currentScroll > 0) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});
