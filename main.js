let btn1 = document.getElementById('secBtn1'),
	btn2 = document.getElementById('secBtn2'),
	btn3 = document.getElementById('secBtn3'),
	box = document.querySelector('.introBox-container');

btn3.addEventListener('click', () => {
	box.style.left = '-200%';
})

btn2.addEventListener('click', () => {
	box.style.left = '-100%';
})

btn1.addEventListener('click', () => {
	box.style.left = '0';
})

let sendForm = document.querySelector('.send-form'),
	sendBtn = document.querySelector('.send-button'),
	sendBg = document.querySelector('.send-form__bg');

sendBtn.addEventListener('click', () => {
	sendBg.classList.add('show-form');
	sendForm.classList.add('show-form');
}) 

sendBg.addEventListener('click', () => {
	sendBg.classList.remove('show-form');
	sendForm.classList.remove('show-form');
})