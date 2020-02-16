
const focusLoad = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const select = document.getElementById("title");
const options = select.selectedOptions;

//Focus field "Name" on page load
window.onload = function() {
    focusLoad.focus();
};

//Initial hide Your Job Role input field
otherTitle.style.display = 'none';

select.addEventListener('change', function() {
    for (i=0; i< options.length; i++) {
    if (options[i].text == "Other") {
        otherTitle.style.display = 'block';
    } else {
        otherTitle.style.display = 'none';
        }
    }
});
