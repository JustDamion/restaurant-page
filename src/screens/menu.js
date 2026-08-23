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
        const menuList = document.createElement("ul");
        menuList.setAttribute("class", "menu__list");

        for (const itemToAdd of this.items) {
            const menuItem = this.buildItem(itemToAdd.name, itemToAdd.description, itemToAdd.price);
            menuList.appendChild(menuItem);
        }

        const menuTitle = document.createElement("h2");
        menuTitle.setAttribute("class", "menu__title");
        menuTitle.textContent = "Mutilate Your Thirst";

        const menuContentDiv = document.createElement("div");
        menuContentDiv.setAttribute("class", "menu__content");
        menuContentDiv.appendChild(menuTitle);
        menuContentDiv.appendChild(menuList);

        const menuDiv = document.createElement("div");
        menuDiv.setAttribute("class", "menu");
        menuDiv.appendChild(menuContentDiv);

        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(menuDiv);
    }

    static buildItem(name, description, price) {
        const menuItemTitle = document.createElement("h3");
        menuItemTitle.setAttribute("class", "menu-item__title");
        menuItemTitle.textContent = name;

        const menuItemDots = document.createElement("span");
        menuItemDots.setAttribute("class", "menu-item__dots");

        const menuItemPrice = document.createElement("h3");
        menuItemPrice.setAttribute("class", "menu-item__price");
        menuItemPrice.textContent = `$${price}`;

        const menuItemDetails = document.createElement("span");
        menuItemDetails.setAttribute("class", "menu-item__details");
        menuItemDetails.appendChild(menuItemTitle);
        menuItemDetails.appendChild(menuItemDots);
        menuItemDetails.appendChild(menuItemPrice);

        const menuItemDescription = document.createElement("p");
        menuItemDescription.setAttribute("class", "menu-item__description");
        menuItemDescription.textContent = description;

        const menuItem = document.createElement("li");
        menuItem.setAttribute("class", "menu__item");
        menuItem.appendChild(menuItemDetails);
        menuItem.appendChild(menuItemDescription);

        return menuItem;
    }
};