// var Plus = document.getElementById('tablepss')
// var Smallp = document.getElementById('smallp')
// var PlusIcon = document.getElementById('plusiconn')


// Plus.addEventListener("click", () => {
//     Smallp.style.display = "block";
//     PlusIcon.style.transform = `translateX(90deg)`;
// })

const targetDiv = document.getElementById("tablepss");
    const smallp = document.getElementById("smallp");
    const plusicon = document.getElementById("plusiconn");
    tablepss.onclick = function () {
      if (smallp.style.display !== "none") {
        smallp.style.display = "none";
        plusicon.style.transform = `rotate(0deg)`;
      } else {
        smallp.style.display = "block";
        plusicon.style.transform = `rotate(90deg)`;
      }
    };