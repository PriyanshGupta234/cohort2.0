let teams = [{
        team: "CSK",
        primary: "yellow",
        secondary: "blue",
        fullName: "Chennai Super Kings",
        trophies: 5,
        captain: "MSD"
    },
    {
        team: "RCB",
        primary: "red",
        secondary: "gold"
    },
    {
        team: "MI",
        primary: "blue",
        secondary: "gold"
    },
    {
        team: "KKR",
        primary: "purple",
        secondary: "gold"
    },
    {
        team: "SRH",
        primary: "orange",
        secondary: "black"
    },
    {
        team: "RR",
        primary: "pink",
        secondary: "dark blue"
    },
    {
        team: "DC",
        primary: "blue",
        secondary: "red"
    },
    {
        team: "PBKS",
        primary: "red",
        secondary: "silver"
    }
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
    let winner = teams[Math.floor(Math.random() * teams.length)];
    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.secondary;
    main.style.backgroundColor = winner.primary;
})