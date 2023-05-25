let ismi = prompt("Ismingizni kiriting: ");
const title  = document.getElementById('ism');
const title2  = document.getElementById('ismi');


let profile = document.querySelector(".profile"),
    profile_setting = document.querySelector(".nast"),
    back = document.querySelector(".back_img"),
    ikkinchi = document.querySelector(".ikkinchi"),
    sel = document.querySelector(".sel"),
    buy = document.querySelector(".buy");

let son = 10;
function ikkiga(){
    son--
    if(son === 0){
        ikkinchi.classList.add("active")
    }
}

sel.onclick = () => {
    alert("Mablag` yetarli emas!")
};

buy.onclick = () => {
    alert("Mablag` yetarli emas!")
};

profile_setting.onclick = () => {
    profile.classList.add("active");
};

back.onclick = () => {
    profile.classList.remove("active");
};

if(ismi ){
    title.textContent = ismi;
    title2.textContent = ismi;
}