const form = document.querySelector('.booking-form');
const popupOverlay = document.getElementById('popup-overlay');
const closePopupBtn = document.getElementById('close-popup');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const cnic = document.getElementById('cnic').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const time_slot = document.getElementById('time-slot').value;
    const routsSelect = document.getElementById('routs');
    const routs = routsSelect.value;
    const seats = Number(document.getElementById('seats').value);

    const routeName = routsSelect.options[routsSelect.selectedIndex].text;

    let price = 0;

    if (routs === "r1") {
        price = seats * 12000;
    } else if (routs === "r2") {
        price = seats * 9000;
    } else if (routs === "r3") {
        price = seats * 3000;
    } else if (routs === "r4") {
        price = seats * 1800;
    } else if (routs === "r5") {
        price = seats * 6800;
    }

    document.getElementById('pop-name').textContent = fullname;
    document.getElementById('pop-route').textContent = routeName;
    document.getElementById('pop-payment').textContent = `${price.toLocaleString()} PKR`;

    popupOverlay.classList.add('show');
});

closePopupBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('show');
});

