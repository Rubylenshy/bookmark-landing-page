
const menu_hamburger = document.querySelector('.hamburger');
const menu_close = document.querySelector('.hamburger-close');
const mobile_menu = document.querySelector('.mobile-nav');
const faqs_box = document.querySelectorAll('.faqs-box');
const faqs_expanded = document.querySelectorAll('.arrow');
const answer_toggle = document.querySelectorAll('.answer');


// Navbar
menu_hamburger.addEventListener('click', function(){
    mobile_menu.classList.toggle('active');
});
menu_close.addEventListener('click', function(){
    mobile_menu.classList.remove('active');
});

// Newsletter
for (let i = 0; i < faqs_expanded.length; i++) {
    faqs_box[i].addEventListener('click', function(){
        faqs_expanded[i].classList.toggle('expanded');
        answer_toggle[i].classList.toggle('dropdown');
    });
};

// Features Tab
const tabLink = document.querySelectorAll('.tab-link');
const tabCard = document.querySelectorAll('.tab-card');

for (let f = 0; f < tabLink.length; f++) {
    tabLink[0].addEventListener('click', function(){
        tabLink[0].classList.add('tab-shown');
        tabLink[1].classList.remove('tab-shown');
        tabLink[2].classList.remove('tab-shown');
    });
    tabLink[1].addEventListener('click', function(){
        tabLink[1].classList.add('tab-shown');
        tabLink[0].classList.remove('tab-shown');
        tabLink[2].classList.remove('tab-shown');
    });
    tabLink[2].addEventListener('click', function(){
        tabLink[2].classList.add('tab-shown');
        tabLink[0].classList.remove('tab-shown');
        tabLink[1].classList.remove('tab-shown');
    });
}

tabLink[0].addEventListener('click', function(){
    console.log('Simple Bookmarking');
    tabCard[0].style.display = 'inherit';
    tabCard[1].style.display = 'none';
    tabCard[2].style.display = 'none';
});
tabLink[1].addEventListener('click', function(){
    console.log('Speedy Searching');
    tabCard[1].style.display = 'inherit';
    tabCard[0].style.display = 'none';
    tabCard[2].style.display = 'none';
});
tabLink[2].addEventListener('click', function(){
    console.log('Easy Sharing');
    tabCard[2].style.display = 'inherit';
    tabCard[0].style.display = 'none';
    tabCard[1].style.display = 'none';
});

// Email Validation
const contact_btn = document.querySelector('#contact-btn');
const error = document.querySelector('.error-input');
const noError = document.querySelector('.success-input');
const email = document.getElementById('email-input');


contact_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const email_value = document.getElementById('email-input').value;
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)(\.[a-z]+)(.[a-z]+)?$/

    if (emailRegex.test(email_value)) {
        console.log("Valid Email ID");
        error.style.display = 'none';
        noError.style.display = 'flex';
        email.classList.add('green')
        email.classList.remove('red')
    } else{
        console.log('Invalid Email ID');
        error.style.display = 'flex';
        noError.style.display = 'none';
        email.classList.remove('green')
        email.classList.add('red');
    };
})

