'use strict';

const capitalise = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const inputWrapper = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('.field input');

for (let i = 0; i < inputs.length; i++) {
  const inputName = inputs[i].getAttribute('name');
  const capitalisedName = capitalise(inputName, true);
  inputs[i].setAttribute('placeholder', capitalisedName);
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', inputs[i].id);
  label.innerText = capitalisedName;
  inputWrapper[i].appendChild(label);
}
