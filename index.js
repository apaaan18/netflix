const num = document.querySelectorAll('.movies .number p');

num.forEach((num) => {
    num.style.color = "black";
    num.style.fontSize = "150px";
    num.style.position = "absolute";
    num.style.bottom = "-30px";
    num.style.webkitTextStroke = '2px white';
});

let item = [{
    item: "What is Netflix?"
}, {
    item: "How much does Netflix cost?"
}, {
    item: "Where can I watch Netflix?"
}, {
    item: "How do I cancel?"
}, {
    item: "What can I watch on Netflix"
}, {
    item: "Is Netflix good for kids?"
}, {
    item: "Is Netflix good for kids?"
}, {
    item: "Is Netflix good for kids?"
}];

let akw = document.querySelector(".asked-questions-wrapper");


item.forEach((items) => {
    akw.innerHTML += `
        <div class="questions">
            <div>${items.item}</div>
            <i class="fa-solid fa-plus"></i>
        </div>
    `
})

