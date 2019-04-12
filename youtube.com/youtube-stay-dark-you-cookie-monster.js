
/* Keep YouTube in dark mode without using cookies */

const enableDarkMode = () => {
	document.documentElement.setAttribute("dark", "true");
}

setInterval(enableDarkMode, 4000);
