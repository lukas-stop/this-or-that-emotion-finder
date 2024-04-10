/* 
Using this method as a base and modifying for this code (ty random stack overflow user <3)
https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting 
*/

function toggleDarkMode() {
    const body = document.body;

    if (body.classList.contains("lightMode")) {
        console.log("Switching to dark mode");
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
    }
    else if (body.classList.contains("darkMode")) {
        console.log("Switching to light mode");
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log("using default value: dark mode");
            document.documentElement.classList.add("darkMode")
        } else {
            console.log("using default value: light mode");
            document.documentElement.classList.add("lightMode")
        }
    }
}

const darkModeBtn = document.getElementById("darkModeToggleJS");

darkModeBtn.addEventListener("click", toggleDarkMode());