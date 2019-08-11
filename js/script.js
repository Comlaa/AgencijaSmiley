var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 900
});

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
	button.addEventListener('click', ()=> {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', ()=> {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal =>{
		closeModal(modal)
	})
})
closeModalButtons.forEach(button => {
	button.addEventListener('click', ()=> {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal){
	if(modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}
function closeModal(modal){
	if(modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

var dugme = document.getElementById("IzbornikDugme");
var otvori = document.getElementById("navbar");

dugme.onclick = function()
{
    if(otvori.style.maxHeight == otvori.scrollHeight + "px")
    {
        otvori.style.maxHeight = "0px";
    }
    else{
        otvori.style.maxHeight= otvori.scrollHeight + "px";
    }
}
