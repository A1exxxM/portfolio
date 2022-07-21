const hamburger = () => {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    
    function navigation(selectorBlock, pointBlock) {
        const selector = document.querySelector(selectorBlock),
              point = document.querySelector(pointBlock);
        selector.addEventListener('click', (e)=>{
            e.preventDefault();
            menu.classList.remove('active');
            setTimeout(function(){
                point.scrollIntoView({behavior:"smooth"});
            },600);
        });
    }
    navigation('#me','.introduce');
    navigation('#exp','.resume');
    navigation('#skills','.skills');
    navigation('#works','.works');
    navigation('#contacts','.contacts');
}

export default hamburger;