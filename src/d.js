const d = document;

function c(tag, content = null, cssClass = null) {
    element = d.createElement(tag);
    if (content != null) element.innerText = content;
    if (cssClass!= null) element.classList.add(cssClass);
    return element;
}