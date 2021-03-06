
const focusLoad = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const select = document.getElementById("title");
const options = select.selectedOptions;
const color = document.getElementById("color");
const colorOptions = color.options;
const themeSelect = document.getElementById("design");


//### FOCUS ###//
// Focus field "Name" on page load
window.onload = function() {
    focusLoad.focus();
};


//### JOB ROLE ###//
// Initial hide Your Job Role input field
otherTitle.style.display = 'none';

// EventListener for when select Other
select.addEventListener('change', () => {
    for (let i=0; i< options.length; i++) {
    if (options[i].text == "Other") {
        otherTitle.style.display = 'block';
    } else {
        otherTitle.style.display = 'none';
        }
    }
});


//### T-SHIRT section ###//
// Create option element with instruction message + plus select this option
let opt = document.createElement('option');
opt.appendChild(document.createTextNode("Please select a T-shirt theme") );
opt.value = "selectTheme";
opt.setAttribute("id", "select-theme");
opt.setAttribute("selected", "");
color.appendChild(opt);

// Add attribute 'value' to themeSelect[0] for the Event listener
themeSelect[0].setAttribute("value", "select theme");

// Give options initial id: invisible
for (let i=0; i<colorOptions.length; i++){
    color[i].setAttribute("id", "invisible");
    if (colorOptions[i].id === "invisible") {
        colorOptions[i].style.display = 'none';
    }
}

// Event listener for changing color list
themeSelect.addEventListener('change', () => {
    if (themeSelect[themeSelect.selectedIndex].value === 'js puns') {
        for (let i = 0; i < colorOptions.length; i++) {
            if (/\bPuns\b/.test(colorOptions[i].text) === true) {
                colorOptions[i].setAttribute("id", "visible");
                colorOptions[0].setAttribute("selected", "selected");
                //colorOptions[3].removeAttribute("selected", "selected");
            }
            if (colorOptions[i].id === "visible") {
                colorOptions[i].style.display = 'block';
            }
            if (/\bPuns\b/.test(colorOptions[i].text) === false) {
                colorOptions[i].setAttribute("id", "invisible");
                colorOptions[i].removeAttribute("selected", "selected");
            }
            if (colorOptions[i].id === "invisible") {
                colorOptions[i].style.display = 'none';
            }
        }
    }
    if (themeSelect[themeSelect.selectedIndex].value === 'heart js') {
        for (let i=0; i<colorOptions.length; i++) {

            if (/\bI\b/.test(colorOptions[i].text) === true) {
                colorOptions[i].setAttribute("id", "visible");
                colorOptions[3].setAttribute("selected", "selected");
               // colorOptions[0].removeAttribute("selected", "selected");
            }
            if (colorOptions[i].id === "visible") {
                colorOptions[i].style.display = 'block';
            }
            if (/\bI\b/.test(colorOptions[i].text) === false) {
                colorOptions[i].setAttribute("id", "invisible");
                colorOptions[i].removeAttribute("selected", "selected");
            }
            if (colorOptions[i].id === "invisible") {
                colorOptions[i].style.display = 'none';
            }
        }
    } // Work with the created attribute
    if (themeSelect[themeSelect.selectedIndex].value === 'select theme') {
        for (let i = 0; i < colorOptions.length; i++) {

            if (/\bselect\b/.test(colorOptions[i].text) === true) {
                colorOptions[i].setAttribute("id", "visible");
                colorOptions[i].setAttribute("selected", "selected");
            }
            if (colorOptions[i].id === "visible") {
                colorOptions[i].style.display = 'block';
            }
            if (/\bselect\b/.test(colorOptions[i].text) === false) {
                colorOptions[i].setAttribute("id", "invisible");
                colorOptions[i].removeAttribute("selected", "selected");
            }
            if (colorOptions[i].id === "invisible") {
                colorOptions[i].style.display = 'none';
            }

        }
    }
});


//### ACTIVITIES SECTION ###//
let totalCosts = 0;
const activity = document.querySelector(".activities");

// Create a label and append to activity
const totalCount = document.createElement('label');
totalCount.textContent = "Total: ";
activity.appendChild(totalCount);

// Retrieve all attribute data with for loop
const activityArray = activity.querySelectorAll('input');
for (let i=0; i<activityArray.length; i++ ) {
    //console.log(activityArray[i]);
    activityArray[i].addEventListener('change', (e) => {
        const activityCost = e.target.getAttribute('data-cost');
        const dataDays = e.target.getAttribute('data-day-and-time');
        const activityName = e.target.getAttribute('name');
        const activitySelected = e.target.checked;

        calculation(activityCost, activitySelected, dataDays);
        dataConflicts(dataDays, activitySelected, activityName);
        checkBoxValidation(activitySelected);
    })
}

// Function calculate amount
function calculation (activityCost, activitySelected) {
    if (activitySelected === true) {
        totalCosts += parseInt(activityCost);
    } if (activitySelected === false) {
        totalCosts -= parseInt(activityCost);
    }
    totalCount.textContent = "Total: " + totalCosts;
}

// Function disable date conflicts
function dataConflicts (dataDays, activitySelected, activityName) {
    for (let i=0; i<activityArray.length; i++) {
        if (activitySelected === true) {
        if (activityName !== activityArray[i].getAttribute('name')) {
            if (dataDays === activityArray[i].getAttribute('data-day-and-time')) {
                activityArray[i].setAttribute('disabled', '');
                }
            }
        }
        if (activitySelected === false) {
            if (activityName !== activityArray[i].getAttribute('name')) {
                if (dataDays === activityArray[i].getAttribute('data-day-and-time'))
                    activityArray[i].removeAttribute('disabled', '');
            }
        }
    }
}


//### PAYMENT SECTION ###//
// Get payment options and select Credit Card as default and disable first option
const creditCard = document.getElementById("payment");
for (let i=0; i<creditCard.length; i++) {
    creditCard[1].setAttribute('selected', '');
    creditCard[0].disabled = true;
}

// Select divs for display
const payCredit = document.getElementById("credit-card");
const payPal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

// Select options with value and display associated div and initially hide 2 payment methods
payPal.style.display = 'none';
bitcoin.style.display = 'none';

document.addEventListener('change', (e) =>{
    if (e.target.value === 'select method') {
        payCredit.style.display = 'none';
        payPal.style.display = 'none';
        bitcoin.style.display = 'none';
    }

    if (e.target.value === 'credit card') {
        payCredit.style.display = 'block';
        bitcoin.style.display = 'none';
        payPal.style.display = 'none';

        //
        valArray.splice(3,1,false);
        valArray.splice(4,1,false);
        valArray.splice(5,1,false);
    }
    if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
        bitcoin.style.display = 'none';
        payCredit.style.display = 'none';

        //
        valArray.splice(3,1,true);
        valArray.splice(4,1,true);
        valArray.splice(5,1,true);
    }
    if (e.target.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        payPal.style.display = 'none';
        payCredit.style.display = 'none';

        //
        valArray.splice(3,1,true);
        valArray.splice(4,1,true);
        valArray.splice(5,1,true);
    }
    arrayBoolean(); submitColor();
})


//### FORM VALIDATION ###//
/* Get all input fields + set initial border color
* The initial border color 'red' will change when the validation went well to 'blue'
* Also the 'Register button had an initial value of 'red' this button will change colors when all fields
* have validated values.
* */
const nameField = document.getElementById('name');
//nameField.style.border = '2px solid red';

const emailField = document.getElementById('mail');
//emailField.style.border = '2px solid red';

const creditNumberField = document.getElementById('cc-num');
//creditNumberField.style.border = '2px solid red';

const zipCodeField = document.getElementById('zip');
//zipCodeField.style.border = '2px solid red';

const cvvField = document.getElementById('cvv');
//cvvField.style.border = '2px solid red';

// Function validation name field accepts two name value like Michael Jackson
function nameValidation()  {
    // Regex validation - everything except empty field
    const regexName = /^(?!\s*$).+/;

    if (regexName.test(nameField.value)) {
        nameField.style.border = '2px solid darkblue';
        valArray.splice(0,1,true);
    } else {
        nameField.style.border = '2px solid red';
        valArray.splice(0,1,false);
    }
     //Calls these functions to calculate boolean value for intForm function
    arrayBoolean(); submitColor();
}

// Function validation email field
function emailValidation() {
    const regexEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    if (regexEmail.test(emailField.value)) {
        emailField.style.border = '2px solid darkblue';
        valArray.splice(1,1,true);

    } else  {
        emailField.style.border = '2px solid red';
        valArray.splice(1,1,false);
    }
    //Calls these functions to calculate boolean value for intForm function
    arrayBoolean(); submitColor();
}

// Function validation checkbox field
function checkBoxValidation(activitySelected) {
    if (activitySelected === true) {
        valArray.splice(2,1,true);
        } else {
        valArray.splice(2,1,false);
    }
    arrayBoolean(); submitColor();
}

//### Function for credit card validation ###//
function creditCardValidation() {
    const regexNumber = /^\d{13,16}$/;
    const regexZip = /^\d{5}$/;
    const regexCVV = /^\d{3}$/;

    if (regexNumber.test(creditNumberField.value)) {
        creditNumberField.style.border = '2px solid darkblue';
        valArray.splice(3, 1, true);
    } else {
        creditNumberField.style.border = '2px solid red';
        valArray.splice(3, 1, false);
    }

    if (regexZip.test(zipCodeField.value)) {
        zipCodeField.style.border = '2px solid darkblue';
        valArray.splice(4,1,true);
    } else {
        zipCodeField.style.border = '2px solid red';
        valArray.splice(4,1,false);
    }   arrayBoolean(); submitColor();

    if (regexCVV.test(cvvField.value)) {
        cvvField.style.border = '2px solid darkblue';
        valArray.splice(5,1,true);
    } else {
        cvvField.style.border = '2px solid red';
        valArray.splice(5,1,false);
    } arrayBoolean(); submitColor();
}





//### CALLING FUNCTIONS ADD EVENT LISTENER ###//
// Call function when there's an input in nameField run nameValidation
nameField.addEventListener('input', nameValidation);

// Call function when there's input in emailField run emailValidation
emailField.addEventListener('input', emailValidation);

// Call function when there's input in credit card field run creditCardValidation
creditNumberField.addEventListener('input',creditCardValidation);
zipCodeField.addEventListener('input',creditCardValidation);
cvvField.addEventListener('input',creditCardValidation);

/* Array for initial boolean values for field validations I use this values for the color of the 'Register'
* button
*/
let valArray = [];
let value = 6;
for (let i = 0; i <value; i++) {
    valArray.push(false);
}

// Function that checks if valArray includes false and stores boolean true/false in arrayBoolean for intForm
function arrayBoolean() {
    let submitNow = true;
    if (valArray.includes(false)) {
        submitNow = false;
    } return(submitNow);
}

// Function that checks arrayBoolean value and use this for if else statement
function submitColor() {
    const button = document.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
        if(arrayBoolean() === false) {
            button[0].style.background = 'red';
        } else {
            button[0].style.background = 'green';
        }
    }
}
submitColor();


//### Error messages ###//
//On submit do validation
const intForm = document.querySelector('form');
intForm.disabled = false;

// when field input doesn't match requirements show text in field
function showErrorMessageNameField() {
    nameField.style.border = '2px solid red';
    nameField.placeholder = "Please enter your name here";
}
// when field input doesn't match requirements show text in field
function showErrorMessageEmailField() {
    emailField.style.border = '2px solid red';
    emailField.placeholder = "Please enter your email here";
}

//### when no activities are selected show error message ###//
// Error message for Activities - create p element and text node for Name validation
const errorNameElement = document.createElement('p');
errorNameElement.style.color = 'white';
errorNameElement.style.background = 'red';
errorNameElement.style.padding = '4px';
errorNameElement.style.display = 'block';
const errorNameText = document.createTextNode("Please select an activity");

// Function showErrorMessage
function showErrorMessageActivities() {
    const activityItems = document.getElementsByClassName('activities').item(0);
    // Error message for Activities - append for Name validation
    errorNameElement.appendChild(errorNameText);
    activityItems.prepend(errorNameElement);
}

//### when field input doesn't match requirements show error message ###//
// Error message for Credit Card section - create p element and text node for CC validation
const errorCreditCardElement = document.createElement('p');
errorCreditCardElement.style.color = 'white';
errorCreditCardElement.style.background = 'red';
errorCreditCardElement.style.padding = '4px';
errorCreditCardElement.style.display = 'block';
const errorCreditCardText = document.createTextNode("Please fill in Credit Card details")

// Function showErrorMessage
function showErrorMessageCreditCard() {
    // Red borders in input fields
    creditNumberField.style.border = '2px solid red';
    zipCodeField.style.border = '2px solid red';
    cvvField.style.border = '2px solid red';

    // Error message for Credit Card section
    errorCreditCardElement.appendChild(errorCreditCardText);
    payCredit.prepend(errorCreditCardElement);
}

// Check where in valArray value is false so when [i] is false show relevant error message
intForm.addEventListener('submit', function(event) {

        if (valArray[0] === false) {
            showErrorMessageNameField()
            event.preventDefault()
        }
        if (valArray[1] === false) {
            showErrorMessageEmailField()
            event.preventDefault()
        }
        if (valArray[2] === false) {
            showErrorMessageActivities()
            event.preventDefault()
        }
        if (valArray[3] === false) {
            showErrorMessageCreditCard()
            event.preventDefault()
        }
        if (valArray[4] === false) {
            showErrorMessageCreditCard()
            event.preventDefault()
        }
        if (valArray[5] === false) {
            showErrorMessageCreditCard()
            event.preventDefault()
        }
            submitSubmit()
});

// checks value of arrayBoolean and use boolean value for alert
function submitSubmit() {
    if (arrayBoolean() === true) {
        alert("You have successfully signed up");
    } else {
        alert("please fill in the mandatory fields in the form")
    }
}




