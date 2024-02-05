const characters = [
    {
      name: "Master Chief",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Master_chief_halo_infinite.png/220px-Master_chief_halo_infinite.png"
      ,num:1,
    },
    {
      name: "Cortana",
      img: "https://upload.wikimedia.org/wikipedia/en/7/75/Cortana_h5.png"
      ,num:2,
    },
    {
      name: "Arbiter Thel 'Vadam",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Arbiter_H5.png/220px-Arbiter_H5.png"
      ,num:3,},
    {
      name: "Spartan Locke",
      img: "../img/lock.webp"
      ,num:4,},
    {
      name: "Sgt. Johnson",
      img: "../img/john.png"
      ,num:5,},
    {
      name: "Catherine Halsey",
      img: "../img/halsey.webp"
      ,num:6,},
    {
      name: "Emile-A239",
      img: "../img/emile.webp"
      ,num:7,},
    {
      name: "Kat-B320",
      img: "../img/Kat.webp"
      ,num:8,},
    {
      name: "Atriox",
      img: "../img/atriox.webp"
      ,num:9,},
    {
      name: "343 Guilty Spark",
      img: "https://upload.wikimedia.org/wikipedia/en/8/85/Spark-Halo3.png"
      ,num:10,},
    {
      name: "Prophet of Truth",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99f331d8-fc33-4708-bd19-09293f4e4196/de3ip6k-58745836-63e9-4a35-a896-db319c2b9c20.png/v1/fill/w_670,h_1192/prophet_of_truth_h2a_render_by_monkeyrebel117_de3ip6k-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE5MiIsInBhdGgiOiJcL2ZcLzk5ZjMzMWQ4LWZjMzMtNDcwOC1iZDE5LTA5MjkzZjRlNDE5NlwvZGUzaXA2ay01ODc0NTgzNi02M2U5LTRhMzUtYTg5Ni1kYjMxOWMyYjljMjAucG5nIiwid2lkdGgiOiI8PTQ2MDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nRJ8Hl6wVfNh0ex4cJAhAlv6W98WwTMPD--bUjJXy24"
      ,num:11,},
    {
      name: "Kelly-087",
      img: "../img/kelly.png"
      ,num:12,},
    {
      name: "Linda-058",
      img: "../img/linda.webp"
      ,num:13,},
    {
      name: "Fred-104",
      img: "../img/fred.webp"
      ,num:14,},
    {
      name: "Commander Sarah Palmer",
      img: "../img/palmer.webp"
      ,num:15,},
    {
      name: "Roland",
      img: "../img/roland.webp"
      ,num:16,},
    {
      name: "Gabriel Thorne",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/d9zzycm-9e60ed7e-d6a8-4392-8806-e9b7b9812a1f.png/v1/fill/w_620,h_1289/gabriel_thorne_transparent_by_davidbksandrade_d9zzycm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyOSIsInBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZDl6enljbS05ZTYwZWQ3ZS1kNmE4LTQzOTItODgwNi1lOWI3Yjk4MTJhMWYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BJn-2Ng22nJvpF4qSCCDexqfEg-lsT-0rzFA8u7Vaqw"
      ,num:17,},
    {
      name: "Jorge-052",
      img: "../img/Jorge.webp"
      ,num:18,},
    {
      name: "Edward Buck",
      img: "../img/buck.webp"
      ,num:19,},
    {
      name: "Covenant Elite",
      img: "https://www.giantbomb.com/a/uploads/original/52/520822/3320322-halo3-n%27tho_%27sraom.png"
      ,num:20,},
    {
      name: "Didact",
      img: "../img/didact.webp"
      ,num:21,},
    {
      name: "Covenant Grunt",
      img: "https://halo.wiki.gallery/images/thumb/c/c4/HINF-Unggoy_Conscript.png/800px-HINF-Unggoy_Conscript.png"
      ,num:22,},
    {
      name: "Covenant Hunter",
      img: "../img/hunter.webp"
      ,num:23,},
    {
      name: "Covenant Jackal",
      img: "../img/jackal.webp"
      ,num:24,},
    {
      name: "Covenant Jiralhanae",
      img: "../img/brute.webp"
      ,num:25,},
    {
      name: "Spartan Jun-A266",
      img: "../img/Jun.webp"
      ,num:26,},
    {
      name: "Spartan Carter-A259",
      img: "../img/Carter.webp"
      ,num:27,},
    {
      name: "Spartan Thom-A293",
      img: "https://halo.wiki.gallery/images/thumb/d/d5/HINF_Thom-A293_Armor_Kit_Icon.png/120px-HINF_Thom-A293_Armor_Kit_Icon.png"
      ,num:28,},
    {
      name: "Captain Jacob Keyes",
      img: "../img/keyes.webp"
      ,num:29,},
    {
      name: "Miranda Keyes",
      img: "https://vignette3.wikia.nocookie.net/halo/images/a/a0/Miranda_Keys_H3.png/revision/latest?cb=20130626062157"
      ,num:30,},
    {
      name: "Shipmaster Rtas 'Vadum",
      img: "../img/shipmaster.webp"
      ,num:31,},
    {
      name: "Tartarus",
      img: "https://www.giantbomb.com/a/uploads/scale_small/0/118/607279-tartarusfull.jpg"
      ,num:32,},
    {
      name: "Serina",
      img: "https://halo.wiki.gallery/images/thumb/1/13/HW2_Render_Serina-FullBody.png/300px-HW2_Render_Serina-FullBody.png"
      ,num:33, },
    {
      name: "Professor Ellen Anders",
      img: "https://halo.wiki.gallery/images/3/36/HW2_Anders.png"
      ,num:34,},
    {
      name: "Olympia Vale",
      img: "../img/vale.webp"
      ,num:35,},
    {
      name: "Holly Tanaka",
      img: "../img/tanaka.webp"
      ,num:36,},
  ];

  const DOMSelectors = {
    container: document.getElementById("flexcontainer"),
    form: document.getElementById("submit"),
    answer: 0, 
  }

  function insertimg(arr) {
    console.log(arr);
    /*arr.forEach((arr) =>*/ DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
      <div class="card" id="${arr.num}">
        <img src="${arr.img}" alt="Image of ${arr.name}" class="card-img"/> <br>
        <button type="button" class="answer" id="${arr.num}" >Answer</button>
      </div>
    </div>`
  )}

function inserttext(arr) {
  console.log(arr);
  /*arr.forEach((arr) =>*/ DOMSelectors.container.insertAdjacentHTML("beforeend",
  `<div class="flexcontainer">
  <div class="card1" id="${arr.num}">
  <h3 class="name">${arr.name}</h6>
  </div>
  </div>`)
  return arr;
} 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

/*function ifyiauf () {
  let randtext = getRandomInt(1, 36)
  let newtext = characters.filter((arr) => arr.num == randtext);
  const hi = newtext
  return (hi);
  //let newarr2 = characters.filter((arr) => arr.num == rand2);
  // let newarr3 = characters.filter((arr) => arr.num == rand3);
  //let rand2 = getRandomInt(1, 36)
  //let rand3 = getRandomInt(1, 36)
 }*/

let history = [];
let wait = [];
let hi = 0;
let hi3 = 0;

function pick(arr) {
  let randtext = getRandomInt(1, 36)
  let rand2 = getRandomInt(1, 36);
  let rand3 = getRandomInt(1, 36);
  let rand1 = arr[randtext];
  insertimg(rand1)
  wait.push(rand1)
  history.push(randtext);
  while (history.includes(rand2)) {
    rand2 = getRandomInt(1, 36);
  }
  history.push(rand2)
  let newarr2 = arr[rand2];
  wait.push(newarr2)
  insertimg(newarr2)
  while (history.includes(rand3)) {
    rand3 = getRandomInt(1, 36);
  }
  history.push(rand3);
  let newarr3 = arr[rand3];
  insertimg(newarr3)
  wait.push(newarr3)
  console.log(history)
  let newtext = wait[getRandomInt(0, wait.length)];
  inserttext(newtext)
  hi = newtext.num;
  history.splice(0, history.length);
  wait.splice(0, wait.length);
  return(hi);
}  

function clearcards() {
  DOMSelectors.container.textContent = "";
 };

 let hi2 = 0;

 function selectedProduct(event){
  let target = event.target;
  let parent = target.parentElement;//parent of "target"
  let hi2 = Number(parent.id);
  console.log(hi2)
  return(hi2);
}

 DOMSelectors.form.addEventListener("click", function (){
  clearcards();
  document.querySelector('#h33').textContent = " "
  pick(characters);
  console.log(hi)
  DOMSelectors.answer = document.querySelectorAll(".answer")
  console.log(DOMSelectors.answer)
  DOMSelectors.answer.forEach((btn) => btn.addEventListener("click", function (arr) {
    //document.getElementById("answer").addEventListener("click", function(arr) {
    hi2 = document.getElementById(selectedProduct(arr));
    if (hi2 == hi) {
        document.querySelector('#h33').textContent = "Yes, you got that correct!"
        console.log("hi")
        DOMSelectors.answer = document.getElementById("hello")
        clearcards();
      }
      else if (hi2 != hi) {
        document.querySelector('#h33').textContent = "Wrong. Get better."
        console.log(hi2);
        console.log("no")
        DOMSelectors.answer = document.getElementById("hello")
        clearcards();
      }
    /*})})*/}))
})