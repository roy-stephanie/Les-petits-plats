export default function SearchSVG() {
    // Create the SVG element
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "24px");
    svgElement.setAttribute("height", "24px");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("fill", "none");

    // Clip-path group
    const clipGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    clipGroup.setAttribute("clip-path", "url(#clip0_15_152)");

    // Rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "24");
    rect.setAttribute("height", "24");
    rect.setAttribute("fill", "none");

    // Circle
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "10.5");
    circle.setAttribute("cy", "10.5");
    circle.setAttribute("r", "6.5");
    circle.setAttribute("stroke", "#b7b4b4");
    circle.setAttribute("stroke-linejoin", "round");

    // Path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z");
    path.setAttribute("fill", "#b7b4b4");

    // Add the elements to the group
    clipGroup.appendChild(rect);
    clipGroup.appendChild(circle);
    clipGroup.appendChild(path);

    // Add group to SVG
    svgElement.appendChild(clipGroup);

    // Definitions
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clipPath.setAttribute("id", "clip0_15_152");
    const clipRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    clipRect.setAttribute("width", "24");
    clipRect.setAttribute("height", "24");
    clipRect.setAttribute("fill", "white");
    clipPath.appendChild(clipRect);
    defs.appendChild(clipPath);

    // Add definitions to SVG
    svgElement.appendChild(defs);

    // Return the created SVG element
    return svgElement;
}
