'use strict';

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const inputWrapper = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('.field input');

const inputNames = [];

for (let i = 0; i < inputs.length; i++) {
  inputNames.push(inputs[i].getAttribute('name'));
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', inputs[i].id);
  const labelText = capitalize(inputNames[i], true);
  label.innerText = labelText;
  inputWrapper[i].appendChild(label);
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute('placeholder', capitalize(inputNames[i], true));
}
