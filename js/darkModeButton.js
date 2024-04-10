const siteBody = document.body;

/* 
Using this method as a base and modifying for this code (ty random stack overflow user <3)
https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting 
*/

//load default preferences first
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("using default value: dark mode");
    siteBody.classList.remove("lightMode");
    siteBody.classList.add("darkMode");
    document.getElementById("backgroundPatternJS").style.filter = "invert(95%)";
} else {
    console.log("using default value: light mode");
    siteBody.classList.remove("darkMode");
    siteBody.classList.add("lightMode");
    document.documentElement.classList.add("lightMode");
}

//toggle light/dark mode
function toggleDarkMode() {
    if (siteBody.classList.contains("lightMode")) {
        console.log("Switching to dark mode");
        siteBody.classList.remove("lightMode");
        siteBody.classList.add("darkMode");
        document.getElementById("backgroundPatternJS").style.filter = "invert(95%)";
    }
    else if (siteBody.classList.contains("darkMode")) {
        console.log("Switching to light mode");
        siteBody.classList.remove("darkMode");
        siteBody.classList.add("lightMode");
        document.getElementById("backgroundPatternJS").style.filter = "invert(0)";
    }
}

const darkModeBtn = document.getElementById("darkModeToggleJS");

darkModeBtn.addEventListener("click", toggleDarkMode);