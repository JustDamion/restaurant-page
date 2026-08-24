import Util from "../util.js";

export default class Home {
    static render() {
        const HERO_TITLE = "Stay hydrated";
        const HERO_TAGLINE = "Thirsty? Yeah we thought so, our hand-crafted water might help with that.";

        const HERO_DESCRIPTION = `From the time he was a child, our head chef had always despised the taste of boring water. 
        "How could anyone drink this?" he would ask. Finally after years of grit, he stumbled onto a solution. 
        A formulated secret recipe that does what no water has done before, taste extravagant while hydrating more than anyone would ever think was possible. 
        Why settle for the same boring standard water?`;

        const heroContentDiv = Util.createDomElement("div", "hero__content");
        heroContentDiv.appendChild(Util.createDomElement("h2", "hero__title", HERO_TITLE));
        heroContentDiv.appendChild(Util.createDomElement("p", "hero__description", HERO_TAGLINE));
        heroContentDiv.appendChild(Util.createDomElement("p", "hero__description", HERO_DESCRIPTION));

        const heroDiv = Util.createDomElement("div", "hero");
        heroDiv.appendChild(heroContentDiv);

        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(heroDiv);
    }
};