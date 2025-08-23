let footballTeam = {
    team: "FC Barcelona",
    year: 1899,
    headCoach: "Hansi Flick",
    players: [
        {
            name: "Marc-André ter Stegen",
            position: "goalkeeper",
            isCaptain: false
        },
        {
            name: "Jules Koundé",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Ronald Araújo",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Alejandro Balde",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Frenkie de Jong",
            position: "midfielder",
            isCaptain: true
        },
        {
            name: "Pedri González",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Gavi Páez",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "İlkay Gündoğan",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Raphinha",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Robert Lewandowski",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Lamine Yamal",
            position: "forward",
            isCaptain: false
        }
    ]
};


const teamDisplay = document.getElementById('team');
const yearDisplay = document.getElementById('year');
const headCoachDisplay = document.getElementById('head-coach');
const playerCards = document.getElementById('player-cards');
const players = document.getElementById('players');

teamDisplay.textContent = footballTeam.team;
yearDisplay.textContent = footballTeam.year;
headCoachDisplay.textContent = footballTeam.headCoach;

playerCards.innerHTML = footballTeam.players.map( player => (
    `
    <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
    </div>
    `
) )    

players.addEventListener('change', (e) => {
    let option = e.target.value;

    const selection =  option !== "all" 
                        ?  footballTeam.players.filter( player => player.position == option )
                        :  footballTeam.players;

    playerCards.innerHTML = selection.map( player => (
        `
        <div class="player-card">
            <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
            <p>Position: ${player.position}</p>
        </div>
        `
    ) )    
    
    
})
