//  This function
//  creates a hello world header element with a class of main-header
//  creates a container element
//  adds the header as a child of the container
//  adds the container with a header as a child of the root element.

const d = document

function c(tag, content = null, cssClass = null) {
    element = d.createElement(tag)
    if (content != null) element.innerText = content
    if (cssClass!= null) element.classList.add(cssClass)
    return element
}