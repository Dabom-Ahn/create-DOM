const frame = document.querySelector("section");

const data = ["title1", "title2", "title3"];

//innerHTML을 활용한 동적DOM생성

let tags =  "",

data.forEach((el)=> {
    tags += `
    <article>
    <h1>${el}</h1>
    </article>
    `
});

console.log(tags);
frame.innerHTML = tags;