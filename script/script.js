let timerId;
let lng;
// if (!lng) {lng = "DE";}
// console.log('window.location.href', window.location); 
// window.location.href = '';
// console.log(window.location.href, 'my url = ');
if (window.location.href.match(/\/en\//)) {
    console.log('English lang!'); 
    lng = "EN";

} else {
    console.log('Deutsch lang!');
    lng = "DE";
}

document.getElementsByClassName('current_lang')[0].innerHTML = lng;

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
    // console.log('click!');
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

i18next
  .init({
    fallbackLng: 'DE',
    debug: true,
    resources: {
        DE: {
            translation: {
                "menu_about_mobile": "ABOUT",
                "menu_about_desktop": "ABOUT",
                "menu_subsidiaries_mobile": "SUBSIDIARIES",
                "menu_subsidiaries_desktop": "SUBSIDIARIES",
                "menu_investors_mobile": "INVESTORS",
                "menu_investors_desktop": "INVESTORS",
                "menu_contactus_mobile": "CONTACT US",
                "menu_contactus_desktop": "CONTACT US",
                
                "first_paragraph": "<h2>About</h2><p>Galahad Enterprises AG was founded in 2012. The main purpose of the company is thedevelopment and implementation of innovative solutions in the FinTech industry. The company is registered in the Canton of Zurich.</p>",
                "second_paragraph": "<h2>Mission</h2><p>Make the use of advanced technical solutions on blockchain technology universal and widespread, bringing human society closer to financial freedmo.</p>",
                "third_paragraph": "<h2>Goal</h2><p>To create the next-generation digital ecosystem for enhanced socio-economic collaboration through the use and benefit of cryptocurrecnies.</p>",
                
                "first_header": "Subsidiaries",
                "fourth_paragraph": "<p><b>LetKnow OÜ</b> is a licensed financial institution, offering innovative solutions for storage, processing and exchange of virtual currencies. LetKnow is headquartered in Estonia.</p><p>The company’s main commercial focus is LetKnow World, which is a group of interconnected service platforms for financial, social and business activities centered around the use of cryptocurrencies and legal tender, which allow users to perform various activities to fulfill personal and/or business needs.</p><p><b>LetKnow HQ</b> is a software development company and supplier of innovative solutions for the digital economy. The company is responsible for the inspiration and development behind the LetKnow World digital ecosystem run by LetKnow OÜ.</p><p>The  company is headquartered in Thailand, with remote offices located in Belarus. All the intellectual property rights of LetKnow HQ are owned by Galahad Enterprises AG.</p>",
                
                "second_header": "Investors",
                "fifth_paragraph": "For the investment and/or partnership related enquiries please use the contact form below or email us",
                
                "third_header": "Contact Us",
                "fourth_header": "Write Us Now",
                "form_email": "<input type='email' name='email' placeholder='Your e-mail*' required>",
                "form_subject": "<input type='text' name='subject' placeholder='Subject'>",
                "form_message": "<textarea type='text' name='message' placeholder='Type your message*' required></textarea>",
                "footer": "© 2019 Galahad Enterprises AG."
            }
        },
        EN: {
            translation: {
                "menu_about_mobile": "ABOUT",
                "menu_about_desktop": "ABOUT",
                "menu_subsidiaries_mobile": "SUBSIDIARIES",
                "menu_subsidiaries_desktop": "SUBSIDIARIES",
                "menu_investors_mobile": "INVESTORS",
                "menu_investors_desktop": "INVESTORS",
                "menu_contactus_mobile": "CONTACT US",
                "menu_contactus_desktop": "CONTACT US",
                
                "first_paragraph": "<h2>About</h2><p>Galahad Enterprises AG was founded in 2012. The main purpose of the company is thedevelopment and implementation of innovative solutions in the FinTech industry. The company is registered in the Canton of Zurich.</p>",
                "second_paragraph": "<h2>Mission</h2><p>Make the use of advanced technical solutions on blockchain technology universal and widespread, bringing human society closer to financial freedmo.</p>",
                "third_paragraph": "<h2>Goal</h2><p>To create the next-generation digital ecosystem for enhanced socio-economic collaboration through the use and benefit of cryptocurrecnies.</p>",
                
                "first_header": "Subsidiaries",
                "fourth_paragraph": "<p><b>LetKnow OÜ</b> is a licensed financial institution, offering innovative solutions for storage, processing and exchange of virtual currencies. LetKnow is headquartered in Estonia.</p><p>The company’s main commercial focus is LetKnow World, which is a group of interconnected service platforms for financial, social and business activities centered around the use of cryptocurrencies and legal tender, which allow users to perform various activities to fulfill personal and/or business needs.</p><p><b>LetKnow HQ</b> is a software development company and supplier of innovative solutions for the digital economy. The company is responsible for the inspiration and development behind the LetKnow World digital ecosystem run by LetKnow OÜ.</p><p>The  company is headquartered in Thailand, with remote offices located in Belarus. All the intellectual property rights of LetKnow HQ are owned by Galahad Enterprises AG.</p>",
                
                "second_header": "Investors",
                "fifth_paragraph": "For the investment and/or partnership related enquiries please use the contact form below or email us",
                
                "third_header": "Contact Us",
                "fourth_header": "Write Us Now",
                "form_email": "<input type='email' name='email' placeholder='Your e-mail*' required>",
                "form_subject": "<input type='text' name='subject' placeholder='Subject'>",
                "form_message": "<textarea type='text' name='message' placeholder='Type your message*' required></textarea>",
                "footer": "© 2019 Galahad Enterprises AG."
            }
        }
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {  
    if (findElementById('menu_about_mobile')) document.getElementById('menu_about_mobile').innerHTML = i18next.t('menu_about_mobile', { what: 'i18next' });
    if (findElementById('menu_about_desktop')) document.getElementById('menu_about_desktop').innerHTML = i18next.t('menu_about_desktop', { what: 'i18next' });
    if (findElementById('menu_subsidiaries_mobile')) document.getElementById('menu_subsidiaries_mobile').innerHTML = i18next.t('menu_subsidiaries_mobile', { what: 'i18next' });
    if (findElementById('menu_subsidiaries_desktop')) document.getElementById('menu_subsidiaries_desktop').innerHTML = i18next.t('menu_subsidiaries_desktop', { what: 'i18next' });

    if (findElementById('menu_investors_mobile')) document.getElementById('menu_investors_mobile').innerHTML = i18next.t('menu_investors_mobile', { what: 'i18next' });
    if (findElementById('menu_investors_desktop')) document.getElementById('menu_investors_desktop').innerHTML = i18next.t('menu_investors_desktop', { what: 'i18next' });
    if (findElementById('menu_contactus_mobile')) document.getElementById('menu_contactus_mobile').innerHTML = i18next.t('menu_contactus_mobile', { what: 'i18next' });
    if (findElementById('menu_contactus_desktop')) document.getElementById('menu_contactus_desktop').innerHTML = i18next.t('menu_contactus_desktop', { what: 'i18next' });

    if (findElementById('first_header')) document.getElementById('first_header').innerHTML = i18next.t('first_header', { what: 'i18next' });
    if (findElementById('second_header')) document.getElementById('second_header').innerHTML = i18next.t('second_header', { what: 'i18next' });
    if (findElementById('third_header')) document.getElementById('third_header').innerHTML = i18next.t('third_header', { what: 'i18next' });
    if (findElementById('fourth_header')) document.getElementById('fourth_header').innerHTML = i18next.t('fourth_header', { what: 'i18next' });

    if (findElementById('first_paragraph')) document.getElementById('first_paragraph').innerHTML = i18next.t('first_paragraph', { what: 'i18next' });
    if (findElementById('second_paragraph')) document.getElementById('second_paragraph').innerHTML = i18next.t('second_paragraph', { what: 'i18next' });
    if (findElementById('third_paragraph')) document.getElementById('third_paragraph').innerHTML = i18next.t('third_paragraph', { what: 'i18next' });
    if (findElementById('fourth_paragraph')) document.getElementById('fourth_paragraph').innerHTML = i18next.t('fourth_paragraph', { what: 'i18next' });
    if (findElementById('fifth_paragraph')) document.getElementById('fifth_paragraph').innerHTML = i18next.t('fifth_paragraph', { what: 'i18next' });
 
    if (findElementById('form_email')) document.getElementById('form_email').innerHTML = i18next.t('form_email', { what: 'i18next' });
    if (findElementById('form_subject')) document.getElementById('form_subject').innerHTML = i18next.t('form_subject', { what: 'i18next' });
    if (findElementById('form_message')) document.getElementById('form_message').innerHTML = i18next.t('form_message', { what: 'i18next' });
    if (findElementById('footer')) document.getElementById('footer').innerHTML = i18next.t('footer', { what: 'i18next' });
}

function findElementById(id) {
    return (document.getElementById(id) ? true : false);
}

function changeLng(lng) {
    document.getElementsByClassName('current_lang')[0].innerHTML = lng;
    console.log('window.location.href 1 = ', window.location, window.location.href); 
    console.log('Now window.location.href 2 = ', window.location.href.split('/'));
    if (lng === "EN" && document.getElementsByClassName('eng_lang')[0].classList.value === "eng_lang") {
        document.getElementsByClassName('eng_lang')[0].classList.add('activeItem'); 
        document.getElementsByClassName('eng_lang')[1].classList.add('activeItem'); 
        document.getElementsByClassName('deutsch_lang')[0].classList.remove('activeItem'); 
        document.getElementsByClassName('deutsch_lang')[1].classList.remove('activeItem'); 
    } else if (lng === "DE" && document.getElementsByClassName('deutsch_lang')[0].classList.value === "deutsch_lang") {
        document.getElementsByClassName('deutsch_lang')[0].classList.add('activeItem'); 
        document.getElementsByClassName('deutsch_lang')[1].classList.add('activeItem'); 
        document.getElementsByClassName('eng_lang')[0].classList.remove('activeItem'); 
        document.getElementsByClassName('eng_lang')[1].classList.remove('activeItem'); 
    }

    closeLangMenu(lng);
    i18next.changeLanguage(lng);
    closeMenu();
}

i18next.on('languageChanged', () => {
    updateContent();
});