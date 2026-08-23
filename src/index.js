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

    Home.render();

    const clearContent = () => {
        contentDiv.textContent = "";
    }

    const renderHomeScreen = () => {
        clearContent();
        Home.render();
    }

    const renderMenuScreen = () => {
        clearContent();
        Menu.render();
    }

    const renderContactScreen = () => {
        clearContent();
        Contact.render();
    }

    brandingButton.addEventListener("click", renderHomeScreen);
    homeButton.addEventListener("click", renderHomeScreen);
    menuButton.addEventListener("click", renderMenuScreen);
    contactButton.addEventListener("click", renderContactScreen);
})();