// for flipping the card front to back
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

// copying block and pasting. creates new card
const newCard = document.getElementById('newCard')

let cycle = 0;

newBlock = () => {
	var div = document.createElement('div');
	div.setAttribute('class', 'cardContainer')
	div.innerHTML = document.getElementById('block').innerHTML;
	document.getElementById('target').appendChild(div);
	cycle += 1;
}

newCard.addEventListener('click', newBlock)