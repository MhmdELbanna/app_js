let wishlist;
function chick_data(){
    if(localStorage.getItem("wishup")){
        wishlist=JSON.parse(localStorage.getItem("wishup"));
    }
    display_data();
}
chick_data();
function display_data(){
    let x="";
    for(let i=0;i<wishlist.length;i++){
        x+=`
            <div class="card">
                <div class="img_pro">
                <i class="fas fa-xmark close" onClick="remove_wishList(${i})"></i>
                    ${wishlist[i].onsale?"<span>onsale</span>":"" }
                    <img src="${wishlist[i].img_pro}" alt="hare photo">

                </div>
                <div class="pro-details">
                        <h2>${wishlist[i].name}</h2>
                        <div class="pro_price">
                            <h6>price:${wishlist[i].price}</h6>
                            <h6>count:${wishlist[i].count}</h6>
                        </div>
                </div>
                <div class="icon">
                        <div class="up-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="up-icon i">
                            <i class="fas fa-cart-shopping "></i>
                        </div>
                </div>
            </div>`;
    }
    document.getElementById("show_data").innerHTML=x;
}
function remove_wishList(index){
    wishlist.splice(index,1);
    display_data();
    localStorage.setItem("wishup",JSON.stringify(wishlist))
}