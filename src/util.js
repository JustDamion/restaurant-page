export default class Util {
    /**
     * 
     * @param {string} tag Html tag to create
     * @param {string} classAttribute Sets class attribute of element to this
     * @param {string} textContent Optional: Sets textContent to this, will not set if not specified
     * @returns 
     */
    static createDomElement(tag, classAttribute, textContent = null) {
        const element = document.createElement(tag);
        element.setAttribute("class", classAttribute);

        if (textContent !== null) {
            element.textContent = textContent;
        }

        return element;
    }
}
