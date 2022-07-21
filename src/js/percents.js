function percent() {
    const percents = document.querySelectorAll('.skills__scale-percent'),
        lines = document.querySelectorAll('.skills__scale-line span');

    percents.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
}

export default percent;