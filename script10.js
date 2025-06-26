
  
  document.addEventListener('DOMContentLoaded', () => {
    const wrappers = document.querySelectorAll('.dropdown-wrapper');

    wrappers.forEach(wrapper => {
      const btn = wrapper.querySelector('.dropbtn');
      const menu = wrapper.querySelector('.dropdown');

      btn.addEventListener('click', e => {
        e.stopPropagation();

        // Only close sibling dropdowns, not child dropdowns
        const parentWrapper = wrapper.closest('.dropdown-wrapper');
        const siblingDropdowns = parentWrapper ? parentWrapper.querySelectorAll('.dropdown') : document.querySelectorAll('.dropdown');

        siblingDropdowns.forEach(drop => {
          if (drop !== menu && !drop.contains(menu)) drop.style.display = 'none';
        });

        document.querySelectorAll('.dropbtn').forEach(b => b.classList.remove('active'));

        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        menu.style.flexDirection = 'column';
        btn.classList.toggle('active');
      });
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.dropdown-wrapper')) {
        document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
        document.querySelectorAll('.dropbtn').forEach(b => b.classList.remove('active'));
      }
    });
  })   ;

            // Auto-update footer year
            document.getElementById('yr').textContent = new Date().getFullYear();

            // Glimpses slider
            const slides = document.querySelectorAll('#glimpsesSlider img');
            let current = 0;
            setInterval(() => {
              slides[current].classList.remove('active');
              current = (current + 1) % slides.length;
              slides[current].classList.add('active');
            }, 3000);

            // IntersectionObserver that toggles the .show class both on enter and exit
          const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          }else{
          entry.target.classList.remove('show'); // remove when leaving so it can animate again on re‑enter
            }
          });
        },{threshold:0.2});

         document.querySelectorAll('.cardAnimation').forEach(card=>observer.observe(card));