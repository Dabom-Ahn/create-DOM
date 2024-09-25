const frame = document.querySelector("section");

const data = ["title1", "title2", "title3"];

//innerHTML을 활용한 동적DOM생성 -> 내용이 자동으로 써짐! 대입하는거라 추가하면 지워지고 써짐

let tags =  "";

data.forEach((el)=> {
    tags + = `
    <article>
    <h1>${el}</h1>
    </article>
    `
});

console.log(tags);
frame.innerHTML = tags;

// append로 동적DOM생성
// 기존 선택자 안쪽의 요소들을 유지하면서 뒤쪽에 새롭게 추가
//append의 인수값으로는 문자값이 아닌 실제 element Node 형태로 전달!
// frame.append('<aside>Modal</aside>') 이렇게 하면 문자값으로 나옴
const asideEl = document.createElement("aside");
asideEl.classList.add("modal");
asideEl.innerText = "Modal";

//const btnEl = document.createElement('button');
//btnEl.innerText = 'CLOSE';
//asideEl.append(btnEl);

asideEl.innerHTML = `
    <button>CLOSE</button>
`;

document.body.append(asideEl);