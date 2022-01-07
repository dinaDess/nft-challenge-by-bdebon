const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
const searchBar = document.querySelector(".search-bar");

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
    searchBar.classList.toggle('active');
})