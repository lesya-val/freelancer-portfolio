const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_button');
const navBtnImg = document.querySelector('#nav_button_img');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = '/img/icons/close.svg'
	} else {
		navBtnImg.src = '/img/icons/burger.svg'
	}
}