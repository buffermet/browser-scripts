
// Toggle dark mode with CTRL+SHIFT+ALT+D

const darkModeCSS = `
	html.darkMode,
	html.darkMode body {
		background-color: rgb(32,32,32);
		color: #fff;
	}
`;

const toggleDarkMode = async () => {
	document.documentElement.classList.toggle("darkMode");
}

const darkModeStylesheet = document.createElement("style");
darkModeStylesheet.innerText = darkModeCSS;
document.documentElement.appendChild(darkModeStylesheet);

self.addEventListener("keydown", async(event)=>{
	if (event.ctrlKey && event.shiftKey && event.altKey && event.keyCode == 68) {
		toggleDarkMode();
	}
});
