let slider = document.getElementById("range");
let sliderValue = document.getElementById("range-value");
let copyIcon = document.getElementById("copy-icon");
let password = document.getElementById("password");
let checkBoxs = document.getElementsByClassName("check-box");
let generateBtn = document.getElementById("generate-btn");
let options = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ' , 'abcdefghijklmnopqrstuvwxyz' , '0123456789' , '!#$%&()*+,-./:;<=>?@[\]^_{|}~'];
let checkBoxsArr = [];

for( checkbox of checkBoxs)
{
  checkBoxsArr.push(checkbox); 
};

sliderValue.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    sliderValue.innerHTML = this.value;
};

// copying to user clip board
copyIcon.addEventListener("click" , function()
{
  navigator.clipboard.writeText(password.innerHTML);
  alert("copeid to clipboard");
});

// generating password
generateBtn.addEventListener("click" , function()
{
  let passwordLength = parseInt(slider.value);
  let newPassword = '';
  let selectedOptions = [];

  for(checkbox of checkBoxsArr)
  {
    if(checkbox.checked)
    {
      selectedOptions.push(parseInt(checkbox.value));
    }
  }

  for(let i = 0 ; i < passwordLength ; i++)
  {
    option = selectedOptions[parseInt(Math.random()*selectedOptions.length)];
    newChar = options[option][parseInt(Math.random()*options[option].length)];
    newPassword += newChar;  
  }

  if(newPassword)
  {
    password.innerHTML = newPassword;
    password.style.color = 'white';
  };

});

