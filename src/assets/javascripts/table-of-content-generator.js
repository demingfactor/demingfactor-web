const Urlify = require("urlify").create();

// Generate TABLE OF CONTENTS
//
// Find element with id of "toc" and autogenerate
// a Table of Contents there using h1 elements on the page.

console.log("hello world toc is live");

const tableOfContents = document.getElementById("toc");
if (tableOfContents != null && tableOfContents !== undefined) {
  const menuList = document.createElement("ul");
  tableOfContents.insertAdjacentElement("beforeend", menuList);
  const headings = document.querySelectorAll("h5");
  if (headings.length != 0) {
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      if (heading.classList.contains("example")) {
        continue;
      }
      const urlId = Urlify(heading.innerText);
      heading.setAttribute("id", urlId);

      const menuItem = document.createElement("li");
      menuList.insertAdjacentElement("beforeend", menuItem);

      const address = document.createElement("a");
      address.setAttribute("href", "#" + urlId);
      address.innerHTML = heading.innerText;
      menuItem.insertAdjacentElement("beforeend", address);
    }
  }
}
