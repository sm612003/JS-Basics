document.addEventListener("DOMContentLoaded",function() {
    let containers = document.querySelectorAll("img")
    containers.forEach((img)=>{
        img.addEventListener('mouseover',function(){
img.setAttribute('src',`./images/${img.id}_2.jpg`)
        
img.addEventListener('mouseout',function(){
    img.setAttribute('src',`./images/${img.id}.jpg`)
        })
    })  
    
})  
})