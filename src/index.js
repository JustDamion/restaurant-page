import "./styles.css";
import Home from "./screens/home.js";
import Menu from "./screens/menu.js";
import Contact from "./screens/contact.js";

const ScreenController = (() => {
    const contentDiv = document.querySelector("#content")
    const brandingButton = document.querySelector("#brandingButton")
    const homeButton = document.querySelector("#homeButton");
    const menuButton = document.querySelector("#menuButton");
    const contactButton = document.querySelector("#contactButton");

    const clearContent = () => {
        contentDiv.textContent = "";
    }

    const resetButtonStyles = () => {
        homeButton.removeAttribute("class");
        homeButton.setAttribute("class", "navbar__item");

        menuButton.removeAttribute("class");
        menuButton.setAttribute("class", "navbar__item");

        contactButton.removeAttribute("class");
        contactButton.setAttribute("class", "navbar__item");
    }

    const renderHomeScreen = () => {
        clearContent();
        Home.render();
        resetButtonStyles();
        homeButton.setAttribute("class", "navbar__item navbar__item--active");
    }

    const renderMenuScreen = () => {
        clearContent();
        Menu.render();
        resetButtonStyles();
        menuButton.setAttribute("class", "navbar__item navbar__item--active");
    }

    const renderContactScreen = () => {
        clearContent();
        Contact.render();
        resetButtonStyles();
        contactButton.setAttribute("class", "navbar__item navbar__item--active");
    }

    renderHomeScreen();

    brandingButton.addEventListener("click", renderHomeScreen);
    homeButton.addEventListener("click", renderHomeScreen);
    menuButton.addEventListener("click", renderMenuScreen);
    contactButton.addEventListener("click", renderContactScreen);
})();