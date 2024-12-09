const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const subheading = document.createElement("h3");
subheading.classList.add("subheading");
subheading.textContent = "I'm a blue h3";
subheading.style.color = "blue";

const subcontent = document.createElement("div");
subcontent.classList.add("subcontent");
subcontent.setAttribute("style", "border-style: solid; border-color: black; background-color:pink;");

const div_heading = document.createElement("h1");
div_heading.classList.add("div_heading");
div_heading.textContent = "I'm in a div";

const div_para = document.createElement("p");
div_para.classList.add("div_para");
div_para.textContent = "ME TOO!";

subcontent.appendChild(div_heading);
subcontent.appendChild(div_para);
container.appendChild(paragraph);
container.appendChild(content);
container.appendChild(subheading);
container.appendChild(subcontent);
