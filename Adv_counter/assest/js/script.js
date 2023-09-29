let btn=document.querySelectorAll("button");
let color=["red","green","black","orange","blue","yellow","gray"];

btn.forEach(function(item){
    item.addEventListener("click",add_style)
})
function add_style(){
        let rand=parseInt(Math.random()*5);
        let card=this.closest(".card");
        card.style.backgroundColor=color[rand]; 
        let pr=card.querySelector("p");
        let cont= +pr.textContent;
        pr.textContent= cont +1;
        pr.style.color="white";
}



