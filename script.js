let main = document.querySelector("main");
let btn = document.querySelector("button");

main.addEventListener("mousemove", function () {
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "2px solid green";
    div.style.borderRadius = "50%";

    div.style.position = "absolute";
    div.style.left = x + "%";
    div.style.top = y + "%";
    main.appendChild(div);
})