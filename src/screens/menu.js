import Util from "../util.js";

class MenuItem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
};

export default class Menu {
    static items = [
        new MenuItem("Charcoal Filtered Water", "Our house hand-crafted water ran through our artisanal charcoal filters.", "14.99"),
        new MenuItem("Electrolyte Water", "Our custom electrolyte water will keep you going.", "24.99"),
        new MenuItem("Bean Water", "Caffeinated water to keep you up.", "19.99"),
        new MenuItem("Water with Lemon", "It's like lemonade but less lemony and more hydrating.", "19.99"),
        new MenuItem("Sparkling Water", "Water with a little extra spice to it.", "39.99"),
        new MenuItem("Hose Water", "Straight from the backyard, feed your nostalgia.", "13.99"),
    ];

    static render() {
        const MENU_TITLE = "Mutilate Your Thirst";

        const menuList = Util.createDomElement("ul", "menu__list");

        for (const itemToAdd of this.items) {
            menuList.appendChild(this.buildItem(itemToAdd.name, itemToAdd.description, itemToAdd.price));
        }

        const menuContentDiv = Util.createDomElement("div", "menu__content");
        menuContentDiv.appendChild(Util.createDomElement("h2", "menu__title", MENU_TITLE));
        menuContentDiv.appendChild(menuList);

        const menuDiv = Util.createDomElement("div", "menu");
        menuDiv.appendChild(menuContentDiv);

        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(menuDiv);
    }

    static buildItem(name, description, price) {
        const menuItemTitle = Util.createDomElement("h3", "menu-item__title", name);
        const menuItemDots = Util.createDomElement("span", "menu-item__dots");
        const menuItemPrice = Util.createDomElement("h3", "menu-item__price", `$${price}`);

        const menuItemDetails = Util.createDomElement("span", "menu-item__details");
        menuItemDetails.appendChild(menuItemTitle);
        menuItemDetails.appendChild(menuItemDots);
        menuItemDetails.appendChild(menuItemPrice);

        const menuItemDescription = Util.createDomElement("p", "menu-item__description", description);
        const menuItem = Util.createDomElement("li", "menu-item");
        menuItem.appendChild(menuItemDetails);
        menuItem.appendChild(menuItemDescription);

        return menuItem;
    }
};