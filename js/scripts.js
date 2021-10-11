const schemeSvg = document.querySelector('.scheme_svg');
const totalPriceTag = document.querySelector('.price__total')
let cost = 800;
let totalPrice = 0;
const menuButton = document.querySelector('.m_menu');
let menu = document.querySelector('.menu');


schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});
menuButton.addEventListener('click', () => {
    console.log("Кликнули по меню")
    menu.classList.toggle("is_open");
})