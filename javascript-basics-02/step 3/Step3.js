const box = document.createElement("div");
box.id = "box";
document.body.appendChild(box);
const input = document.querySelector('#name');
input.addEventListener('input', function(){
    box.textContent=input.value;
});

