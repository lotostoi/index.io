document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.className == 'nav__menu') {
        document.querySelector('.nav__ul').classList.toggle('nav__ul-active')
    }


})