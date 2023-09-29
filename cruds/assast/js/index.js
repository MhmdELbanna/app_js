const name_pro=document.querySelector('#name');
const cat_pro=document.querySelector('#cat_p');
const price=document.querySelector('#price');
const dis=document.querySelector('#dis');
const quan=document.querySelector('#quantety');
const desc=document.querySelector('#desc');
let btn_add=document.querySelector('#btnxx');
let btn_up=document.querySelector('.buttonx');
let search_pr=document.getElementById('search_data');
// start function Add product
let arr_pro=[];
// show data in the table
if(localStorage.getItem("products") !==null){
    arr_pro=JSON.parse(localStorage.getItem("products"));
    display();
}
// ###########################
// add data
btn_add.addEventListener('click',function(){
    let info_pro={
        name: name_pro.value,
        cat: cat_pro.value,
        price: price.value,
        discound: dis.value,
        quantety: quan.value,
        des: desc.value,
    }
    arr_pro.push(info_pro);
    localStorage.setItem('products',JSON.stringify(arr_pro));
    display();
    clear_input();
})
// display data 
function display(){
    let show=`` ;
    for(let i=0;i<arr_pro.length;i++){
    show +=`
    <tr>
            <td>${arr_pro[i].name}</td>
            <td>${arr_pro[i].cat}</td>
            <td>${arr_pro[i].price}</td>
            <td>${arr_pro[i].discound}</td>
            <td>${arr_pro[i].quantety}</td>
            <td>${arr_pro[i].des}</td>
            <td>
            <button onclick='setForm(${i})' class="fas fa-pen-to-square  btn btn_up  btn-success"></button>
            </td>
            <td>
            <button onclick='deleted(${i})' class="fas fa-xmark btn btn_del btn-danger"></button>
            </td>
    </tr>
    `
}
    document.querySelector('#showData').innerHTML = show;
}
// delete products function
function deleted(index_arr){
    arr_pro.splice(index_arr,1);
    localStorage.setItem('products',JSON.stringify(arr_pro));
    display();
    clear_input();
}
// clear input 
function clear_input(){
    name_pro.value='';
    cat_pro.value='';
    price.value='';
    dis.value='';
    quan.value='';
    desc.value='';
}
// search function 
function search_pro(term){
    let show=`` ;

    for(let i=0;i<arr_pro.length;i++){
        if(arr_pro[i].name.toLowerCase().includes(term.toLowerCase())){
            show +=`
            <tr>
                    <td>${arr_pro[i].name}</td>
                    <td>${arr_pro[i].cat}</td>
                    <td>${arr_pro[i].price}</td>
                    <td>${arr_pro[i].discound}</td>
                    <td>${arr_pro[i].quantety}</td>
                    <td>${arr_pro[i].des}</td>
                    <td>
                    <button onclick='setForm(${i})' class="fas fa-pen-to-square  btn btn_up  btn-success"></button>
                    </td>
                    <td>
                    <button onclick='deleted(${i})' class="fas fa-xmark btn btn_del btn-danger"></button>
                    </td>
            </tr>
            `
        }

}
    document.querySelector('#showData').innerHTML = show;

}
search_pr.addEventListener('input',()=>{
    search_pro(search_pr.value);
});
// 
// update data
// set function 
let x=0;
function setForm(ind){
    x=ind;
    name_pro.value=arr_pro[ind].name;
    cat_pro.value=arr_pro[ind].cat;
    price.value=arr_pro[ind].price;
    dis.value=arr_pro[ind].discound;
    quan.value=arr_pro[ind].quantety;
    desc.value=arr_pro[ind].des;
    btn_add.classList.add(' none_btn3');
    btn_up.classList.remove(' none_btn3');
}
//  ///////////////////////////////
function update(){
    arr_pro[x].name=name_pro.value;
    arr_pro[x].cat=cat_pro.value;
    arr_pro[x].price=price.value;
    arr_pro[x].discound=dis.value;
    arr_pro[x].quantety=quan.value;
    arr_pro[x].des=desc.value;
    btn_add.classList.remove(' none_btn3');
    btn_up.classList.add(' none_btn3');
    localStorage.setItem('products' , JSON.stringify(arr_pro));
    display();
    clear_input();
}

btn_up.addEventListener('click',update
);
