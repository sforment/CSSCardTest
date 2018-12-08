const addWeapon = document.querySelector('.addWeapon')
const doneWeapon = document.querySelector('.doneWeapon')
const cardPosition = document.querySelector('.cardPosition')

let int = true;

flip = () => {
	if (int) {
		cardPosition.classList.remove('cardPosition');
		cardPosition.classList.add('cardPosition1');
		int = false;
	} else {
		cardPosition.classList.remove('cardPosition1');
		cardPosition.classList.add('cardPosition');
		int = true;
	}	
}

doneWeapon.addEventListener('click', flip)
addWeapon.addEventListener('click', flip)