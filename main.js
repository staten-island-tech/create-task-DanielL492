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
      img: "https://static.wikia.nocookie.net/vsbattles/images/a/a7/Halo_Locke_in_action_%28Render%29.png/revision/latest?cb=20180924132902"
    },
    {
      name: "Sgt. Johnson",
      img: "https://static.wikia.nocookie.net/halo/images/c/c4/Halo3_ODST_Sgt._Johnson.png/revision/latest/scale-to-width-down/225?cb=20130626071547"
    },
    {
      name: "Catherine Halsey",
      img: "https://static.wikia.nocookie.net/halo/images/4/4f/H5G_Render_Halsey-FullBody.png/revision/latest?cb=20150618063412"
    },
    {
      name: "Emile-A239",
      img: "https://static.wikia.nocookie.net/halo/images/0/05/Emile_HR.png/revision/latest/scale-to-width-down/250?cb=20120625132440"
    },
    {
      name: "Kat-B320",
      img: "https://static.wikia.nocookie.net/halo/images/2/2a/HReach_-_B320.png/revision/latest/scale-to-width-down/223?cb=20131112221504"
    },
    {
      name: "Atriox",
      img: "https://static.wikia.nocookie.net/villains/images/a/ab/HW2_Atriox.png/revision/latest?cb=20230824061342"
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
      name: "Kilo-Five",
      img: "https://halo.wiki.gallery/images/thumb/2/25/HM-K5-2.JPG/1200px-HM-K5-2.JPG"
    },
    {
      name: "Kelly-087",
      img: "https://static.wikia.nocookie.net/halo/images/1/13/H5G_Render_Kelly-FullBody.png/revision/latest/scale-to-width-down/250?cb=20150615230509"
    },
    {
      name: "Linda-058",
      img: "https://static.wikia.nocookie.net/vsbattles/images/4/48/Linda-058_Render.png/revision/latest?cb=20180312030738"
    },
    {
      name: "Fred-104",
      img: "https://static.wikia.nocookie.net/p__/images/0/0a/H5G_Render_Fred-FullBody.png/revision/latest?cb=20200924233337&path-prefix=protagonist"
    },
    {
      name: "Commander Sarah Palmer",
      img: "https://static.wikia.nocookie.net/halo/images/a/a8/H4_palmer2.png/revision/latest/scale-to-width-down/250?cb=20130912121136"
    },
    {
      name: "Roland",
      img: "https://static.wikia.nocookie.net/halo/images/b/bf/H4-Roland-Avatar-ScanRender.png/revision/latest/scale-to-width-down/246?cb=20140204122629"
    },
    {
      name: "Gabriel Thorne",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/d9zzycm-9e60ed7e-d6a8-4392-8806-e9b7b9812a1f.png/v1/fill/w_620,h_1289/gabriel_thorne_transparent_by_davidbksandrade_d9zzycm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyOSIsInBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZDl6enljbS05ZTYwZWQ3ZS1kNmE4LTQzOTItODgwNi1lOWI3Yjk4MTJhMWYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BJn-2Ng22nJvpF4qSCCDexqfEg-lsT-0rzFA8u7Vaqw"
    },
    {
      name: "Jorge-052",
      img: "https://static.wikia.nocookie.net/halo/images/0/0e/Jorge.png/revision/latest/scale-to-width-down/250?cb=20131112222323"
    },
    {
      name: "Edward Buck",
      img: "https://static.wikia.nocookie.net/halo/images/9/95/H5G_Render_Buck-FullBody.png/revision/latest/scale-to-width-down/202?cb=20150615222751"
    },
    {
      name: "Covenant Elite",
      img: "https://www.giantbomb.com/a/uploads/original/52/520822/3320322-halo3-n%27tho_%27sraom.png"
    },
    {
      name: "Didact",
      img: "https://static.wikia.nocookie.net/villains/images/1/1e/Didact_Render.png/revision/latest?cb=20230730183310"
    },
    {
      name: "Covenant Grunt",
      img: "https://halo.wiki.gallery/images/thumb/c/c4/HINF-Unggoy_Conscript.png/800px-HINF-Unggoy_Conscript.png"
    },
    {
      name: "Covenant Hunter",
      img: "https://static.wikia.nocookie.net/halo/images/e/e4/H5G_Render_Mgalekgolo.png/revision/latest?cb=20160708135528"
    },
    {
      name: "Covenant Jackal",
      img: "https://static.wikia.nocookie.net/halo/images/2/25/H5G_Render_JackalMinor.png/revision/latest?cb=20151023103759"
    },
    {
      name: "Covenant Jiralhanae",
      img: "https://static.wikia.nocookie.net/halo/images/2/2b/H2A_Render_Jiralhanae.png/revision/latest?cb=20160403044401"
    },
    {
      name: "Spartan Jun-A266",
      img: "https://static.wikia.nocookie.net/halo/images/d/d2/Jun.png/revision/latest/scale-to-width-down/250?cb=20130728030014"
    },
    {
      name: "Spartan Carter-A259",
      img: "https://static.wikia.nocookie.net/halo/images/9/92/Carter.png/revision/latest/scale-to-width-down/250?cb=20131112220842"
    },
    {
      name: "Spartan Thom-A293",
      img: "https://halo.wiki.gallery/images/thumb/d/d5/HINF_Thom-A293_Armor_Kit_Icon.png/120px-HINF_Thom-A293_Armor_Kit_Icon.png"
    },
    {
      name: "Captain Jacob Keyes",
      img: ""
    },
    {
      name: "Miranda Keyes",
      img: ""
    },
    {
      name: "Covenant Prophet",
      img: ""
    },
    {
      name: "Forerunner Monitor",
      img: ""
    },
    {
      name: "Arbiter Rtas 'Vadum",
      img: ""
    },
    {
      name: "Tartarus",
      img: ""
    },
    {
      name: "Isaac Hannaford",
      img: ""
    },
    {
      name: "John Forge",
      img: ""
    },
    {
      name: "Serina",
      img: ""
    },
    {
      name: "Professor Ellen Anders",
      img: ""
    },
    {
      name: "Jai-006",
      img: ""
    },

    {
      name: "Olympia Vale",
      img: ""
    },
    {
      name: "Edward Buck",
      img: ""
    },
    {
      name: "Holly Tanaka",
      img: ""
    },
    {
      name: "Fireteam Osiris",
      img: ""
    },
    {
      name: "Fireteam Majestic",
      img: ""
    }
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
      </div>
    </div>`
))}

insert(characters);

// <img src="${arr.img}" alt="Image of ${arr.name}" class="card-img"/> <br>