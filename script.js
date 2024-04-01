const form = document.querySelector('form');
const emailInput = document.querySelector('.email_input');
const error = document.querySelector('.error');
const submitBtn = document.querySelector('button');

const validate = (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (!isEmail(emailValue)) {
    error.style.display = 'block';
    emailInput.classList.add('warning');
  } else {
    error.style.display = 'none';
    emailInput.classList.remove('warning');
  }

}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

form.addEventListener('submit', validate);
submitBtn.addEventListener('click', validate);