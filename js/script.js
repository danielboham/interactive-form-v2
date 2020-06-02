
const focusLoad = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const select = document.getElementById("title");
const options = select.selectedOptions;

const design = document.getElementById("design");
const designTheme = design.selectedOptions;
const color = document.getElementById("color");
const colorOptions = color.options;

const themeSelect = document.getElementById('design');
const themeOptions = themeSelect.selectedOptions;


//FOCUS

// Focus field "Name" on page load
window.onload = function() {
    focusLoad.focus();
};

//JOB ROLE

// Initial hide Your Job Role input field
otherTitle.style.display = 'none';

// EventListener for when select Other
select.addEventListener('change', function() {
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

themeSelect.addEventListener('change', function() {
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

/*
Eerste optie is om alle mogelijkheden statisch op te slaan in een variabel. Als in HTML dingen veranderen dan breekt de code.
We moeten dus een manier bedenken om data uit HTML uit te lezen en mee te nemen in de functie.
Next step is om een variabel te maken van de input element dat is geklikt: var x = aangeklikte element(en) => input 'name'
=> toevoegen van een id aan input van fieldset className activities.
*/


var totalActivityCosts = 0;

var totalCount = document.createElement("label");
totalCount.textContent = "Total: ";
//div.setAttribute('id', 'total');

var activity = document.querySelector(".activities");
activity.appendChild(totalCount);

console.log(activity);






activity.addEventListener('change', function() {

    var selectActivity = event.target;
    var activityValue = selectActivity.getAttribute('data-cost');
    var activityNumber = parseInt(activityValue);
    totalActivityCosts += activityNumber;
    console.log(totalActivityCosts);

});

//console.log(activities.childNodes[3].childNodes[1].name);



