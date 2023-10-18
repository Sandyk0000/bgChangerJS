const colour=document.querySelectorAll('.colour');
const div = document.querySelector('.divi');

colour.forEach((item)=>{
    // console.log(item);
    item.addEventListener("click",(e)=>{
        if(e.target.id==='blue'){
            div.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='black'){
            div.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='green'){
            div.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='red'){
            div.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){
            div.style.backgroundColor=e.target.id;
        }
    })
})