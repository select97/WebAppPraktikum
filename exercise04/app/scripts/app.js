function loadTemplates() {
    $("#navigation").load("templates/NavbarTemplate.html");
    $("#content").load("templates/AboutTemplate.html");
}


$(document).ready(loadTemplates);