const html = document.getElementsByClassName("container")[0];
const box = document.getElementsByClassName("board")[0];
var span = document.getElementsByClassName("line");
let bingo = 0;
var arr = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20,
  21, 22, 23, 24, 25
];
var layout = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
var win = [
  1, 1, 1, 1, 1,
  1, 1, 1, 1, 1,
  1, 1
]

function game(id) {
  let grid = document.getElementById(id);
  let i = grid.style.gridRowStart;
  let j = grid.style.gridColumnStart;
  if (bingo < 5) {
    layout[i - 1][j - 1] = 1;
    grid.children[0].classList.add("mark");
  }

  if (layout[0][0] && layout[0][1] && layout[0][2] && layout[0][3] && layout[0][4] && win[0] && (bingo < 5)) {
    win[0] = 0;
    span[bingo++].id = "hv01";
  }
  if (layout[1][0] && layout[1][1] && layout[1][2] && layout[1][3] && layout[1][4] && win[1] && (bingo < 5)) {
    win[1] = 0;
    span[bingo++].id = "hv02";
  }
  if (layout[2][0] && layout[2][1] && layout[2][2] && layout[2][3] && layout[2][4] && win[2] && (bingo < 5)) {
    win[2] = 0;
    span[bingo++].id = "hv03";
  }
  if (layout[3][0] && layout[3][1] && layout[3][2] && layout[3][3] && layout[3][4] && win[3] && (bingo < 5)) {
    win[3] = 0;
    span[bingo++].id = "hv04";
  }
  if (layout[4][0] && layout[4][1] && layout[4][2] && layout[4][3] && layout[4][4] && win[4] && (bingo < 5)) {
    win[4] = 0;
    span[bingo++].id = "hv05";
  }
  if (layout[0][0] && layout[1][0] && layout[2][0] && layout[3][0] && layout[4][0] && win[5] && (bingo < 5)) {
    win[5] = 0;
    span[bingo++].id = "vv01";
  }
  if (layout[0][1] && layout[1][1] && layout[2][1] && layout[3][1] && layout[4][1] && win[6] && (bingo < 5)) {
    win[6] = 0;
    span[bingo++].id = "vv02";
  }
  if (layout[0][2] && layout[1][2] && layout[2][2] && layout[3][2] && layout[4][2] && win[7] && (bingo < 5)) {
    win[7] = 0;
    span[bingo++].id = "vv03";
  }
  if (layout[0][3] && layout[1][3] && layout[2][3] && layout[3][3] && layout[4][3] && win[8] && (bingo < 5)) {
    win[8] = 0;
    span[bingo++].id = "vv04";
  }
  if (layout[0][4] && layout[1][4] && layout[2][4] && layout[3][4] && layout[4][4] && win[9] && (bingo < 5)) {
    win[9] = 0;
    span[bingo++].id = "vv05";
  }
  if (layout[0][0] && layout[1][1] && layout[2][2] && layout[3][3] && layout[4][4] && win[10] && (bingo < 5)) {
    win[10] = 0;
    span[bingo++].id = "dv01";
  }
  if (layout[0][4] && layout[1][3] && layout[2][2] && layout[3][1] && layout[4][0] && win[11] && (bingo < 5)) {
    win[11] = 0;
    span[bingo++].id = "dv02";
  }
  if (bingo >= 5)
    document.getElementsByClassName("bingo")[0].style.visibility = "visible";
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    var index = Math.floor(Math.random() * 10000) % arr.length
    var newElem = document.createElement('div');
    newElem.classList.add("grid");
    newElem.style.gridRowStart = i;
    newElem.style.gridColumnStart = j;
    newElem.innerHTML = "<span></span>" + arr[index];
    newElem.id = "pos" + String(i) + String(j);
    arr.splice(index, 1);
    box.appendChild(newElem);
  }
}

pos11.addEventListener("click", () => { game("pos11"); });
pos12.addEventListener("click", () => { game("pos12"); });
pos13.addEventListener("click", () => { game("pos13"); });
pos14.addEventListener("click", () => { game("pos14"); });
pos15.addEventListener("click", () => { game("pos15"); });
pos21.addEventListener("click", () => { game("pos21"); });
pos22.addEventListener("click", () => { game("pos22"); });
pos23.addEventListener("click", () => { game("pos23"); });
pos24.addEventListener("click", () => { game("pos24"); });
pos25.addEventListener("click", () => { game("pos25"); });
pos31.addEventListener("click", () => { game("pos31"); });
pos32.addEventListener("click", () => { game("pos32"); });
pos33.addEventListener("click", () => { game("pos33"); });
pos34.addEventListener("click", () => { game("pos34"); });
pos35.addEventListener("click", () => { game("pos35"); });
pos41.addEventListener("click", () => { game("pos41"); });
pos42.addEventListener("click", () => { game("pos42"); });
pos43.addEventListener("click", () => { game("pos43"); });
pos44.addEventListener("click", () => { game("pos44"); });
pos45.addEventListener("click", () => { game("pos45"); });
pos51.addEventListener("click", () => { game("pos51"); });
pos52.addEventListener("click", () => { game("pos52"); });
pos53.addEventListener("click", () => { game("pos53"); });
pos54.addEventListener("click", () => { game("pos54"); });
pos55.addEventListener("click", () => { game("pos55"); });
closebtn.addEventListener("click", () => {
  document.getElementsByClassName("bingo")[0].style.visibility = "hidden";
})

alert("This Game is Created by Neelabhra Roy \nAnd Hosted by Saptarshi \nThank You🤟");