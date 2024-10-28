const nav = document.querySelector('.menu');

window.onscroll =() => {scrollNavBar()};

const scrollNavBar =() => {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("changenavcolor")
    } else {
        nav.classList.remove("changenavcolor")
    }
}