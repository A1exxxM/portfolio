function showTechnology() {
    const technologyBlock = document.querySelector('.promo__technology'),
          technologyBtn = document.querySelector('#technology');

    technologyBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        technologyBlock.classList.toggle('promo__technology-visible');
    });
    technologyBlock.addEventListener('click', ()=>{
        if (technologyBlock.classList.contains('promo__technology-visible')) {
            technologyBlock.classList.remove('promo__technology-visible');
        }
    });
    const aboutBtn = document.querySelector('#about'),
          aboutBlock = document.querySelector('.introduce');

    aboutBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        aboutBlock.scrollIntoView({behavior:"smooth"});
    });
    const name = document.querySelector('.promo__subtitle span'),
          title = document.querySelector('.promo__title');
    setTimeout(function(){
        name.style.opacity = "1";
    }, 1000);
    setTimeout(function(){
        title.style.opacity = "1";
    }, 2000);
}

export default showTechnology;