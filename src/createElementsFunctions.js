function createElement(elementType, appendChild, atribute, innerText, innerHtml, elementInsertion, elementBefore) {
    if (elementType) {
        const element = document.createElement(elementType);
        if (innerText) { element.innerText = innerText };
        if (innerHtml) { element.innerHTML = innerHtml };
        if (atribute) {Object.keys(atribute).forEach(key => {element.setAttribute(`${key}`, atribute[key])});};
        if (appendChild) { appendChild.appendChild(element) };
        if (elementInsertion && elementBefore) { elementInsertion.insertBefore(element, elementBefore) };
        return element;
    }
};
function createElementNS(elementType, appendChild, atribute, innerText, innerHtml,  ) {
    if (elementType) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", elementType);
        if (innerText) { element.innerText = innerText };
        if (innerHtml) { element.innerHTML = innerHtml };
        if (atribute) {Object.keys(atribute).forEach(key => {element.setAttribute(`${key}`, atribute[key])});};
        if (appendChild) { appendChild.appendChild(element) };
        return element;
    }
};
function createImg(path, appendChild, atribute, width, height) {
    const image = new Image(width, height)
    image.src = path
    appendChild.appendChild(image)
    if (atribute) {Object.keys(atribute).forEach(key => {image.setAttribute(`${key}`, atribute[key])});};
};

export {createElement, createElementNS, createImg}