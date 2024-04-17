const container = document.getElementById("dynamic-content");
const links = document.querySelectorAll(".nav li");
let url = "partials/content1.html";

function loadContent (urlFeed) {
    fetch(urlFeed)
    .then(function (rsp) {
        if (rsp.ok) {
          return rsp.text();
        } else {throw new Error(rsp.statusText);
        }
    })
    .then(function (data) {
        container.innerHTML = data;
    })
    .catch(function (err) {
        console.error("Error getting data:", err);
    });
};

function selectContent (ev) {
    ev.preventDefault();
    const clickedLink = ev.target;
    const partialValue = clickedLink.getAttribute("href");
    loadContent(partialValue);
};

links.forEach (function (link) {
    link.addEventListener("click", selectContent);
  });
  

loadContent(url);