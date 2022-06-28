const ul = document.querySelector("ul"),
input = ul.querySelector("input"),
countNum = document.querySelector(".details span");

input.addEventListener("keyup", addTag);

let maxTags = 10,
tags = [];



// countTag();

function counTag() {
    input.focus();
    countNum.innerText = maxTags - tags.length;
}

function createTag() {
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
       let liTag = ` <li>${tag}<i class="uit uit-multiply" onclick="remove(this, '${tag}')"></li>`;
       ul.insertAdjacentHTML("afterbegin", liTag); // adding li inside ul tag  
    });
    counTag();
}

function remove (element, tag) {
     let index = tags.indexOf(tag);
     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
     element.parentElement.remove();
     counTag();  
}


function addTag(e) {
    if(e.key == 'Enter') {
        let tag = e.target.value.replace(/\s+/g, ' ') // removing unwated space from user tag
        if(tag.length > 1 && !tags.includes(tags)){
            if(tags.length < 10) {
                tag.split(",").forEach(tag => {
                    tags.push(tag);
                    createTag();
            });

            }
        }  
        e.target.value = ""; 
    }
    
}

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    counTag();
});