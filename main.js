const characters = [
    {
      name: "Master Chief",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Master_chief_halo_infinite.png/220px-Master_chief_halo_infinite.png"
    },
    {
      name: "Cortana",
      img: "https://upload.wikimedia.org/wikipedia/en/7/75/Cortana_h5.png"
    },
    {
      name: "Arbiter Thel 'Vadam",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Arbiter_H5.png/220px-Arbiter_H5.png"
    },
    {
      name: "Spartan Locke",
      img: "../img/lock.webp"
    },
    {
      name: "Sgt. Johnson",
      img: "../img/john.png"
    },
    {
      name: "Catherine Halsey",
      img: "../img/halsey.webp"
    },
    {
      name: "Emile-A239",
      img: "../img/emile.webp"
    },
    {
      name: "Kat-B320",
      img: "../img/Kat.webp"
    },
    {
      name: "Atriox",
      img: "../img/atriox.webp"
    },
    {
      name: "343 Guilty Spark",
      img: "https://upload.wikimedia.org/wikipedia/en/8/85/Spark-Halo3.png"
    },
    {
      name: "Prophet of Truth",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99f331d8-fc33-4708-bd19-09293f4e4196/de3ip6k-58745836-63e9-4a35-a896-db319c2b9c20.png/v1/fill/w_670,h_1192/prophet_of_truth_h2a_render_by_monkeyrebel117_de3ip6k-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE5MiIsInBhdGgiOiJcL2ZcLzk5ZjMzMWQ4LWZjMzMtNDcwOC1iZDE5LTA5MjkzZjRlNDE5NlwvZGUzaXA2ay01ODc0NTgzNi02M2U5LTRhMzUtYTg5Ni1kYjMxOWMyYjljMjAucG5nIiwid2lkdGgiOiI8PTQ2MDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nRJ8Hl6wVfNh0ex4cJAhAlv6W98WwTMPD--bUjJXy24"
    },
    {
      name: "Kelly-087",
      img: "../img/kelly.png"
    },
    {
      name: "Linda-058",
      img: "../img/linda.webp"
    },
    {
      name: "Fred-104",
      img: "../img/fred.webp"
    },
    {
      name: "Commander Sarah Palmer",
      img: "../img/palmer.webp"
    },
    {
      name: "Roland",
      img: "../img/roland.webp"
    },
    {
      name: "Gabriel Thorne",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/d9zzycm-9e60ed7e-d6a8-4392-8806-e9b7b9812a1f.png/v1/fill/w_620,h_1289/gabriel_thorne_transparent_by_davidbksandrade_d9zzycm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyOSIsInBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZDl6enljbS05ZTYwZWQ3ZS1kNmE4LTQzOTItODgwNi1lOWI3Yjk4MTJhMWYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BJn-2Ng22nJvpF4qSCCDexqfEg-lsT-0rzFA8u7Vaqw"
    },
    {
      name: "Jorge-052",
      img: "../img/Jorge.webp"
    },
    {
      name: "Edward Buck",
      img: "../img/buck.webp"
    },
    {
      name: "Covenant Elite",
      img: "https://www.giantbomb.com/a/uploads/original/52/520822/3320322-halo3-n%27tho_%27sraom.png"
    },
    {
      name: "Didact",
      img: "../img/didact.webp"
    },
    {
      name: "Covenant Grunt",
      img: "https://halo.wiki.gallery/images/thumb/c/c4/HINF-Unggoy_Conscript.png/800px-HINF-Unggoy_Conscript.png"
    },
    {
      name: "Covenant Hunter",
      img: "../img/hunter.webp"
    },
    {
      name: "Covenant Jackal",
      img: "../img/jackal.webp"
    },
    {
      name: "Covenant Jiralhanae",
      img: "../img/brute.webp"
    },
    {
      name: "Spartan Jun-A266",
      img: "../img/Jun.webp"
    },
    {
      name: "Spartan Carter-A259",
      img: "../img/Carter.webp"
    },
    {
      name: "Spartan Thom-A293",
      img: "https://halo.wiki.gallery/images/thumb/d/d5/HINF_Thom-A293_Armor_Kit_Icon.png/120px-HINF_Thom-A293_Armor_Kit_Icon.png"
    },
    {
      name: "Captain Jacob Keyes",
      img: "../img/keyes.webp"
    },
    {
      name: "Miranda Keyes",
      img: "https://vignette3.wikia.nocookie.net/halo/images/a/a0/Miranda_Keys_H3.png/revision/latest?cb=20130626062157"
    },
    {
      name: "Shipmaster Rtas 'Vadum",
      img: "../img/shipmaster.webp"
    },
    {
      name: "Tartarus",
      img: "https://www.giantbomb.com/a/uploads/scale_small/0/118/607279-tartarusfull.jpg"
    },
    {
      name: "Serina",
      img: "https://halo.wiki.gallery/images/thumb/1/13/HW2_Render_Serina-FullBody.png/300px-HW2_Render_Serina-FullBody.png"
    },
    {
      name: "Professor Ellen Anders",
      img: "https://halo.wiki.gallery/images/3/36/HW2_Anders.png"
    },
    {
      name: "Olympia Vale",
      img: "../img/vale.webp"
    },
    {
      name: "Holly Tanaka",
      img: "../img/tanaka.webp"
    },
  ];
  
const DOMSelectors = {
    container: document.getElementById("flexcontainer"),
}

function insert(arr) {
    console.log(arr);
    arr.forEach((arr) => DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
      <div class="card">
        <h4 class="name">${arr.name}</h4>
        <img src="${arr.img}" alt="Image of ${arr.name}" class="card-img"/> <br>
      </div>
    </div>`
))}

insert(characters);

