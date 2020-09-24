let container = document.getElementById("container");
const noscript = document.createElement("noscript");
noscript.textContent = "You need to enable JavaScript to view this site.";

console.log(container);

const btn = document.createElement("button");
btn.innerHTML = "Test";

function test() {
    const container = document.createElement("div");
    const leftContainer = document.createElement("div");
    const rightContainer = document.createElement("div");
    
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
    
    container.id = "container";
    leftContainer.id = "left-container";
    rightContainer.id = "right-container";
    
    
    return test
}



container.appendChild(container());
container.appendChild(noscript);
container.appendChild(btn);