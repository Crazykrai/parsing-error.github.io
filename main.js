document.getElementById("About_Us_Page").style.visibility = "hidden";
document.getElementById("Home").style.visibility = "visible";
document.getElementById("Backstory").style.visibility = "hidden";
document.getElementById("Request").style.visibility = "hidden";

document.getElementById("home sidebar").onclick = function () {
    document.getElementById("About_Us_Page").style.visibility = "hidden";
    document.getElementById("Home").style.visibility = "visible";
    document.getElementById("Backstory").style.visibility = "hidden";
    document.getElementById("Request").style.visibility = "hidden";
}
document.getElementById("About_us sidebar").onclick = function () {
    document.getElementById("About_Us_Page").style.visibility = "visible";
    document.getElementById("Home").style.visibility = "hidden";
    document.getElementById("Backstory").style.visibility = "hidden";
    document.getElementById("Request").style.visibility = "hidden";
}
document.getElementById("request sidebar").onclick = function () {
    document.getElementById("About_Us_Page").style.visibility = "hidden";
    document.getElementById("Home").style.visibility = "hidden";
    document.getElementById("Backstory").style.visibility = "hidden";
    document.getElementById("Request").style.visibility = "visible";
}
document.getElementById("backstory sidebar").onclick = function () {
    document.getElementById("About_Us_Page").style.visibility = "hidden";
    document.getElementById("Home").style.visibility = "hidden";
    document.getElementById("Backstory").style.visibility = "visible";
    document.getElementById("Request").style.visibility = "hidden";
}