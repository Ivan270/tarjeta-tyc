let form = document.getElementById('formTyc');
let checkTyc = document.getElementById('tyc');
let email = document.getElementById('email');
let emailFormat = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

let validateEmail = () => {
	return emailFormat.test(email.value);
};
form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!checkTyc.checked || email.value == '' || !validateEmail()) {
		alert('Parece que nos faltó algo...');
	} else {
		alert('¡Felicitaciones! Pronto escucharás de nosotros');
	}
});
