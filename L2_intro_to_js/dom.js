let body = document.querySelector(".dark");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "https://legaltemplates.net/wp-content/uploads/job-application-template-768x994.webp";
    img.alt = "dawg";

    img.style.position = "absolute";
    img.style.width = "380px";
    img.style.height = "auto";
    img.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    img.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";

    document.body.appendChild(img);
});
