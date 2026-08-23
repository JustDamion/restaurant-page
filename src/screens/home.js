export default class Home {
    static render() {
        const heroTitle = document.createElement("h2");
        heroTitle.setAttribute("class", "hero__title");
        heroTitle.textContent = "Stay hydrated";

        const heroDescriptionTagline = document.createElement("p");
        heroDescriptionTagline.setAttribute("class", "hero__description");
        heroDescriptionTagline.textContent = "Thirsty? Yeah we thought so, our hand-crafted water might help with that."

        const heroDescription = document.createElement("p");
        heroDescription.setAttribute("class", "hero__description");
        heroDescription.textContent = `From the time he was a child, our head chef had always despised the taste of boring water. 
        "How could anyone drink this?" he would ask. Finally after years of grit, he stumbled onto a solution. 
        A formulated secret recipe that does what no water has done before, taste extravagant while hydrating more than anyone could ever think was possible. 
        Why settle for the same boring standard water?`;

        const heroContentDiv = document.createElement("div");
        heroContentDiv.setAttribute("class", "hero__content");
        heroContentDiv.appendChild(heroTitle);
        heroContentDiv.appendChild(heroDescriptionTagline);
        heroContentDiv.appendChild(heroDescription);

        const heroDiv = document.createElement("div");
        heroDiv.setAttribute("class", "hero");
        heroDiv.appendChild(heroContentDiv);

        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(heroDiv);
    }
};