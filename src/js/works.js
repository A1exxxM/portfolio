function tab() {
    const tabsBtn = document.querySelectorAll('.works__tab'),
          tabsItem = document.querySelectorAll('.works__item');
    
    function hideTabs() {
        tabsBtn.forEach(btn => {
            btn.classList.remove('works__tab-active');
        });
        tabsItem.forEach(tab => {
            tab.classList.remove('works__item-active');
        });
    }

    function showTabs(i = 0) {
        tabsBtn[i].classList.add('works__tab-active');
        tabsItem[i].classList.add('works__item-active');
    }
    hideTabs();
    showTabs();

    tabsBtn.forEach((btn,i) =>{
        btn.addEventListener('click', (e)=>{
            if (e.target == tabsBtn[i]) {
                hideTabs();
                showTabs(i);
            }
        });
    });
}

export default tab;