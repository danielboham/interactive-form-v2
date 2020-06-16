
const focusLoad = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const select = document.getElementById("title");
const options = select.selectedOptions;

//const design = document.getElementById("design");
//const designTheme = design.selectedOptions;
const color = document.getElementById("color");
const colorOptions = color.options;

const themeSelect = document.getElementById("design");
//const themeOptions = themeSelect.selectedOptions;


//FOCUS

// Focus field "Name" on page load
window.onload = function() {
    focusLoad.focus();
};

//JOB ROLE

// Initial hide Your Job Role input field
otherTitle.style.display = 'none';

// EventListener for when select Other
select.addEventListener('change', () => {
    for (i=0; i< options.length; i++) {
    if (options[i].text == "Other") {
        otherTitle.style.display = 'block';
    } else {
        otherTitle.style.display = 'none';
        }
    }
});


// T-SHIRT

// Create option element with instruction message + plus select this option
var opt = document.createElement('option');
opt.appendChild(document.createTextNode("Please select a T-shirt theme") );
opt.value = "selectTheme";
opt.setAttribute("id", "select-theme");
opt.setAttribute("selected", "");
color.appendChild(opt);

// Give options initial id: invisible
for (i=0; i<colorOptions.length; i++){
    color[i].setAttribute("id", "invisible");
    if (colorOptions[i].id === "invisible") {
        colorOptions[i].style.display = 'none';
    }
}

themeSelect.addEventListener('change', () => {
    if (themeSelect[themeSelect.selectedIndex].value === 'js puns') {
        for (i=0; i<colorOptions.length; i++) {
            if (/\bPuns\b/.test(colorOptions[i].text) === true) {
                colorOptions[i].setAttribute("id", "visible");
                colorOptions[0].setAttribute("selected", "selected");
            }

            if (colorOptions[i].id === "visible") {
                colorOptions[i].style.display = 'block';
            }

            if (/\bPuns\b/.test(colorOptions[i].text) === false) {
                colorOptions[i].setAttribute("id", "invisible");
            }

            if (colorOptions[i].id === "invisible") {
                colorOptions[i].style.display = 'none';
            }

        }
    }

    if (themeSelect[themeSelect.selectedIndex].value === 'heart js') {
        for (i=0; i<colorOptions.length; i++) {

            if (/\bI\b/.test(colorOptions[i].text) === true) {
                colorOptions[i].setAttribute("id", "visible");
                colorOptions[3].setAttribute("selected", "selected");
            }

            if (colorOptions[i].id === "visible") {
                colorOptions[i].style.display = 'block';
            }

            if (/\bI\b/.test(colorOptions[i].text) === false) {
                colorOptions[i].setAttribute("id", "invisible");
            }

            if (colorOptions[i].id === "invisible") {
                colorOptions[i].style.display = 'none';
            }

        }
    }

});

// Activities section
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

    })

}



// Function calculate amount
function calculation (activityCost, activitySelected, dataDays) {
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

// Function payment section

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
    }
    if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
        bitcoin.style.display = 'none';
        payCredit.style.display = 'none';
    }
    if (e.target.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        payPal.style.display = 'none';
        payCredit.style.display = 'none';
    }
})

// FORM VALIDATION

/*######################################*/
// Get button and set styling to transparent to indicate that not all fields are filled in


/*######################################*/

// Get all input fields + set initial border color
const nameField = document.getElementById('name');
nameField.style.border = '2px solid red';

const emailField = document.getElementById('mail');
emailField.style.border = '2px solid red';


// Function validation name field
function nameValidation()  {
    // Regex input contains only letters + space for firstName and lastName
    const regexName = /^[A-Za-z]+\s[A-Za-z]+$/;

    if (regexName.test(nameField.value)) {
        nameField.style.border = '2px solid darkblue';
        valArray.splice(0,1,true);
    } else {
        nameField.style.border = '2px solid red';
        valArray.splice(0,1,false);

    }
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
}


// Array for initial boolean values for field validations
let valArray = [];
let value = 2;
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

function submitColor() {
    const button = document.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
        if(arrayBoolean() === false) {
            button[0].style.background = 'red';
        } else {
            button[0].style.background = 'green';
        }
    } //return(button[0].style.background);
}
 submitColor();



// Call function when there's an input in nameField run nameValidation
nameField.addEventListener('input', nameValidation);

//call function when there's input in emailField run emailValidation
emailField.addEventListener('input', emailValidation);

//On submit do validation
const intForm = document.querySelector('form');

intForm.addEventListener('submit', (e) => {
    if (arrayBoolean() === false) {
        alert("Not all mandatory fields are filled in. Please fill in ...");
    } else {
        alert("successful form submission!")
    }
})


