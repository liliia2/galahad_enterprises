let timerId;
let lng;

if (window.location.href.match(/\/en\//)) {
    console.log('English lang!'); 
    lng = "EN";
} else {
    console.log('Deutsch lang!');
    lng = "DE";
}

const pressedElement = document.getElementById('all_content');

function openMenu() {
    document.getElementsByClassName('mobile_menu')[0].classList.remove('inactive'); 
}

function closeMenu() {
    document.getElementsByClassName('mobile_menu')[0].classList.add('inactive'); 
}

function openLangMenu() {
    document.getElementsByClassName('drop-block')[0].classList.add('active');     
    timerId = setTimeout(clickListener, 200);
}

function clickListener() {
    pressedElement.addEventListener('click', closeOpenLangMenuListener);
}

function closeOpenLangMenuListener() {
    closeLangMenu();
    closeMenu();
    clearTimeout(timerId);
    pressedElement.removeEventListener('click', closeOpenLangMenuListener); 
}

function closeLangMenu() {
    document.getElementsByClassName('drop-block')[0].classList.remove('active'); 
}

function sendForm(formData, event) {
    let Obj = {
        email: event.target[0].value,
        subject: event.target[1].value,
        message: event.target[2].value
    };
    
    let myRequest = JSON.stringify(Obj);

    //Отправлять myRequest на сервер, который даст бэкендер

    fetch('https://reqres.in/api/users', {
        method: 'post',
        body: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    }).then(res => res.json())
    .then(res => console.log(res));

    document.getElementById('sendForm').innerHTML = ( this.lng === 'DE' ? 'DE Thanks! Your email has been sent.' : 'EN Thanks! Your email has been sent.');
}

$('form').on('submit', function(event) {
    event.preventDefault();
    sendForm(this, event);
}); 

function changeLng(lng) {
    closeLangMenu(lng);
    closeMenu();
}
