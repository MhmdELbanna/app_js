let datashow;
let get_Api=async()=>{
    let res=await fetch("http://localhost:3000/product",{
        method:"GET"
    }).then((res) => res.json());
    datashow=res;
    display_product(res);
}

window.addEventListener("DOMContentLoaded",()=>{
    get_Api(); 
});

function display_product(data){
    let x="";
    for(let i=0;i<data.length;i++){
        x+=`
            <div class="card">
                <div class="img_pro">
                    ${data[i].onsale?"<span>onsale</span>":"" }
                    <img src="${data[i].img_pro}" alt="hare photo">
                </div>
                <div class="pro-details">
                        <h2>${data[i].name}</h2>
                        <div class="pro_price">
                            <h6>price:${data[i].price}</h6>
                            <h6>count:${data[i].count}</h6>
                        </div>
                </div>
                <div class="icon">
                        <div class="up-icon">
                            <i onclick="save(${i})" class="fas fa-heart"></i>
                        </div>
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

let saved=[];
function save(indexed){
    saved.push(datashow[indexed]);
    save_local_Storage(saved);
}
function save_local_Storage(saved_local){
    localStorage.setItem("wishup",JSON.stringify(saved_local));
}
