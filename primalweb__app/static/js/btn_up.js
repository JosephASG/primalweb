window.onscroll = function(){
    if(document.documentElement.scrollTop > 110){
        document.querySelector(".go__top__container")
        .classList.add("show");
    }else{
        document.querySelector(".go__top__container")
        .classList.remove("show");
    }

    var position = window.pageYOffset || document.documentElement.scrollTop;

    var elemento_1 = document.getElementById("element_uno");
    var elemento_2 = document.getElementById("element_dos");
    var elemento_3 = document.getElementById("element_tres");
    
    elemento_1.style.bottom = position * 0.1+ "px";
    elemento_2.style.top = position * 0.2 + "px";
    elemento_3.style.bottom = position * 0.1+ "px";

}

document.querySelector(".go__top__container").addEventListener("click", () =>{
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});