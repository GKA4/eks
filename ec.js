function select() {
	let x = document.querySelector('#select');
	let selValue = x.value;
	let l1 = document.querySelector('.loc1');
	let l2 = document.querySelector('.loc2');
	let l3 = document.querySelector('.loc3');
	let l4 = document.querySelector('.loc4');
	let l5 = document.querySelector('.loc5');
	let vhod = document.querySelector('.vhod')
	switch (selValue) {
		case "ll1":
			l1.classList.remove('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			vhod.classList.add('hidden');
			break;
		case "ll2":
			l1.classList.add('hidden');
			l2.classList.remove('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			vhod.classList.add('hidden');
			break;
		case "ll3":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.remove('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			vhod.classList.add('hidden');
			break;
		case "ll4":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.remove('hidden');
			l5.classList.add('hidden');
			vhod.classList.add('hidden');
			break;
		case "ll5":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.remove('hidden');
			vhod.classList.add('hidden');
			break;
		case "vhod":
			l1.classList.add('hidden');
			l2.classList.add('hidden');
			l3.classList.add('hidden');
			l4.classList.add('hidden');
			l5.classList.add('hidden');
			vhod.classList.remove('hidden');
			break;

	}
}