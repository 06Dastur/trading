let ismi = prompt("Ismingizni kiriting: ");
const title  = document.getElementById('ism');
const title2  = document.getElementById('ismi');


let profile = document.querySelector(".profile");
let profile_setting = document.querySelector(".nast");
let back = document.querySelector(".back_img");

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