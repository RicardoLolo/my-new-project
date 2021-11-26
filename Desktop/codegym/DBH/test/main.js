let cvs
let ctx

function init() {
    cvs = document.getElementById('canvas')
    ctx = cvs.getContext('2d');
    let dbh = new DBH(0,0);
    let rc = [new RC(500,400,Math.floor(Math.random()))];
    rc.drawRC()
    dbh.drawDBH()
}
function star(){
    clearTimeout();
    rc.drawRC();
    dbh.drawDBH();

    for (let i = 0; i < rc.length; i++) {


    }
}

//
// function jump(){
//     if (DBH.classList != "animeter"){
//         DBH.classList.add("animater");
//     }
//     setTimeout(function (){
//         DBH.classList.remove("animater");
//     },500);
// }
//
// let checkDead = setInterval(function (){
//     let DBHTop = parseInt(window.getComputedStyle(DBH).getPropertyValue("top"));
//     let RCLeft = parseInt(window.getComputedStyle(RC).getPropertyValue("left"));
//     if (RCLeft < 20 && RCLeft > 0 && DBHTop >=130){
//         RC.style.animation = "none";
//         RC.style.display = "none";
//         alert("xin vĩnh biệt cụ Hào");
//     }
//
// },10);