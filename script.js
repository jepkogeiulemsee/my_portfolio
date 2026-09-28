const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.skill-card, .project').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 5;
    const y = ((e.clientY - r.top) / r.height - .5) * -5;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
  });
  card.addEventListener('pointerleave', () => card.style.transform = '');
});

const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  links.style.display = open ? 'flex' : '';
  links.style.position = open ? 'absolute' : '';
  links.style.top = open ? '72px' : '';
  links.style.left = open ? '0' : '';
  links.style.right = open ? '0' : '';
  links.style.padding = open ? '18px' : '';
  links.style.background = open ? 'rgba(10,11,16,.96)' : '';
  links.style.border = open ? '1px solid rgba(255,255,255,.1)' : '';
  links.style.borderRadius = open ? '18px' : '';
  links.style.flexDirection = open ? 'column' : '';
});
