window.onscroll = function(){
    if(document.documentElement.scrollTop > 110){
        document.querySelector(".go__top__container")
        .classList.add("show");
    }else{
        document.querySelector(".go__top__container")
        .classList.remove("show");
    }
}

document.querySelector(".go__top__container").addEventListener("click", () =>{
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});