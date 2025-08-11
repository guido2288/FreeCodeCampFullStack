const btns = document.querySelectorAll('.favorite-icon');

const handleClick = (btn) => {
 
    
    
    if( !btn.className.includes('filled')){
        btn.innerHTML =  "&#10084;"
        btn.classList.add("filled")
    }else{
        btn.innerHTML = "&#9825;"
        btn.classList.remove("filled")
    }

}

btns.forEach( btn => {
    btn.addEventListener('click', () => handleClick(btn) )
} )