const clear_fav_list = document.getElementById("clear_fav_list");

const no_fav = document.getElementById("no_fav");

const nav_button_nav_bar_pre = document.getElementById("nav_button_nav_bar_pre");
const nav_button_nav_bar_nxt = document.getElementById("nav_button_nav_bar_nxt");

const take_to_page1 = document.getElementById("take_to_page1");
const take_to_page2 = document.getElementById("take_to_page2");
const take_to_page3 = document.getElementById("take_to_page3");
const take_to_page4 = document.getElementById("take_to_page4");
const take_to_page5 = document.getElementById("take_to_page5");
const take_to_page6 = document.getElementById("take_to_page6");
const take_to_page7 = document.getElementById("take_to_page7");
const take_to_page8 = document.getElementById("take_to_page8");
const take_to_page9 = document.getElementById("take_to_page9");
const take_to_page10 = document.getElementById("take_to_page10");

const cover = document.getElementById("cover");
const index = document.getElementById("index");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");
const page8 = document.getElementById("page8");
const page9 = document.getElementById("page9");
const page10 = document.getElementById("page10");

const page_no = document.getElementById("page_no");

const fav_button = document.getElementsByClassName("fav_button");

const fav_list = document.getElementById("fav_list");


let page = [cover, index, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10]
let page_title = ['Instructions', 'Page Two', 'Page Three', 'Page Four', 'Page Five', 'Page Six', 'Page Seven', 'Page Eight'
, 'Page Nine', 'Page Ten']
let take_to_page = [take_to_page1, take_to_page2, take_to_page3, take_to_page4, take_to_page5
    , take_to_page6, take_to_page7, take_to_page8, take_to_page9, take_to_page10]

let fav_link = [];
let fav_link_index = [];



function scroll_to_page(n){
    page[n].scrollIntoView({behavior:"smooth"})
}

window.addEventListener("load",()=>{
    
    fav_list.innerHTML = localStorage.getItem("fav_innerHtml");
    if(localStorage.getItem("fav_link_val") != -1 && localStorage.getItem("fav_link_val") != null){
        fav_link_index = (localStorage.getItem("fav_link_val").split(",").map(Number));
        no_fav.style.display = "none";
        clear_fav_list.style.opacity = "1";

        for(z = 0; z < fav_link_index.length; z++){
            let fav_link_index_z = fav_link_index[z];
            
            fav_button[fav_link_index_z].style.opacity = "1";
            fav_link[fav_link_index_z] = document.getElementById("fav" + fav_link_index_z);
            fav_link[fav_link_index_z].addEventListener("click", ()=>{
                scroll_to_page(fav_link_index_z + 2);
            })
        }

    }else{
        fav_link_index = [];
    }

    
    
})

document.addEventListener("scroll", ()=>{

    let y_offset = 300

    if(scrollY >= cover.offsetTop - y_offset && scrollY < index.offsetTop - y_offset){
        
        page_no.value = "Cover"

    }else if(scrollY >= index.offsetTop - y_offset && scrollY < page1.offsetTop - y_offset){
        
        page_no.value = "Index"

    }else if(scrollY >= page1.offsetTop - y_offset && scrollY < page2.offsetTop - y_offset){
        
        page_no.value = 1
    }else if(scrollY >= (page2.offsetTop - y_offset) && scrollY < page3.offsetTop - y_offset)
    {
        page_no.value = 2
    }else if(scrollY >= page3.offsetTop - y_offset && scrollY < page4.offsetTop - y_offset)
    {
        page_no.value = 3
    }else if(scrollY >= page4.offsetTop - y_offset && scrollY < page5.offsetTop - y_offset)
    {
        page_no.value = 4
    }else if(scrollY >= page5.offsetTop - y_offset && scrollY < page6.offsetTop - y_offset)
    {
        page_no.value = 5
    }else if(scrollY >= page6.offsetTop - y_offset && scrollY < page7.offsetTop - y_offset)
    {
        page_no.value = 6
    }else if(scrollY >= page7.offsetTop - y_offset && scrollY < page8.offsetTop - y_offset)
    {
        page_no.value = 7
    }else if(scrollY >= page8.offsetTop - y_offset && scrollY < page9.offsetTop - y_offset)
    {
        page_no.value = 8
    }else if(scrollY >= page9.offsetTop - y_offset && scrollY < page10.offsetTop - y_offset)
    {
        page_no.value = 9
    }else if(scrollY >= page10.offsetTop - y_offset)
    {
        page_no.value = 10
    }
    
})



nav_button_nav_bar_pre.addEventListener("click", ()=>{
    
    s = page_no.value;

    if(s > 0 && s < 11 ){
        scroll_to_page(s);
    }else if(s == "index"  || s == "Index"  || s == "INDEX"){
        scroll_to_page(0);
    }
})

nav_button_nav_bar_nxt.addEventListener("click", ()=>{
    
    s = page_no.value;

    if(s > 0 && s < 11 ){
        scroll_to_page(parseInt(s) + 2);
    }else if(s == "index"  || s == "Index"  || s == "INDEX"){
        scroll_to_page(2);
    }else if(s == "cover"  || s == "Cover"  || s == "COVER"){
        scroll_to_page(1);
    }
})


clear_fav_list.addEventListener("click", ()=>{
    fav_link = [];
    fav_list.innerHTML = "";
    fav_link_index = [];
    localStorage.setItem("fav_link_val", -1);
    localStorage.setItem("fav_innerHtml", "");
    location.reload();
    clear_fav_list.style.opacity = "0";
})


for(let i = 0; i < 10; i++){
    take_to_page[i].addEventListener("click", ()=>{
        scroll_to_page(i + 2);
        page_no.value = i + 1;    
    })
}

page_no.addEventListener("keypress",()=>{

    s = page_no.value;
    
    if(s > 0 && s < 11 ){
        scroll_to_page(parseInt(s) + 1);
    }else if(s == "cover"  || s == "Cover"  || s == "COVER"){
        scroll_to_page(0);
    }else if(s == "index"  || s == "Index"  || s == "INDEX"){
        scroll_to_page(1);
    }
})



for(let j = 0; j < fav_button.length; j++){
    fav_button[j].addEventListener("click", ()=>{
        if(fav_button[j].style.opacity == "1"){
            fav_link[j].remove();
            fav_button[j].style.opacity = "0.5";
            
            if(fav_link_index.length > 1){
                for(i = 0; i < fav_link_index.length; i++){
                    if(fav_link_index[i] == fav_button[j].value - 1){
                        fav_link_index.splice(i, 1);
                        
                    }
                    
                }
            }else{
                fav_link_index.pop();
                no_fav.style.display = "block";
                clear_fav_list.style.opacity = "0";
            }
        }else{
            fav_button[j].style.opacity = "1";

            let li = document.createElement("li");
            li.innerText = page_title[j];
            li.className = "index_ele";
            li.id = "fav" + j;
            fav_list.appendChild(li);

            fav_link[j] = document.getElementById("fav" + j);
            
            fav_link[j].addEventListener("click", ()=>{
                scroll_to_page(j + 2);
            })

            fav_link_index.push(j);

            no_fav.style.display = "none";
            clear_fav_list.style.opacity = "1";
        }
        
        localStorage.setItem("fav_innerHtml", fav_list.innerHTML);

        if(fav_link_index.length == 0){
            localStorage.setItem("fav_link_val",  -1);
        }else{
            localStorage.setItem("fav_link_val",  fav_link_index);
        }
    })
}