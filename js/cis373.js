<script>
function validateForm() {
    let x1 = document.forms["contactForm"]["name"].value;
    if (x1 == "")   {
        alert("Name must be filled out");
        return false;
    }
    let x2 = document.forms["contactForm"]["email"].value;
    if (x2 == "")   {
        alert("Email must be filled out");
        return false;
    }
    let x3 = document.forms["contactForm"]["phone"].value;
    if (x3 == "")   {
        alert("Phone number must be filled out");
        return false;
    }
    let x4 = document.forms["contactForm"]["message"].value;
    if (x4 == "")   {
        alert("Message must be filled out");
        return false;
    }
}
function getRadioValue(radio) {
    alert("You Selected: " + radio.value);
}
function getCheckBoxClick(checkbox) {
    alert("You Selected: " + checkbox.value);
}
function getMenuSelection(menu) {
    alert("You Selected: " + menu.value);
}
function getTextboxEntry(element) {
    alert("You Entered: " + element.value);
}    
</script>