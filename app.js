
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    sidebar.setAttribute('aria-hidden', String(!isOpen));
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
