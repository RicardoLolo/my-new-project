let DBH =document.getElementById("DBH");
let RC = document.getElementById("RC");
function jump(){
    if (DBH.classList != "animeter"){
        DBH.classList.add("animater");
    }
    setTimeout(function (){
        DBH.classList.remove("animater");
    },500);
}

let checkDead = setInterval(function (){
    let DBHTop = parseInt(window.getComputedStyle(DBH).getPropertyValue("top"));
    let RCLeft = parseInt(window.getComputedStyle(RC).getPropertyValue("left"));
    if (RCLeft < 20 && RCLeft > 0 && DBHTop >=130){
        RC.style.animation = "none";
        RC.style.display = "none";
        alert("xin vĩnh biệt cụ Hào");
    }

},10);

