let mainContent = document.querySelector('.main-content');

const suffleArray = array =>{
    for(let i=array.length-1; i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function printMatches(matches, matchResults){
    let matchesHTML = ""
    let matchId = 1;
    matches.map(match=>{
        let team1 = match.split(' ')[0];
        let team2 = match.split(' ')[2];
        matchesHTML += 
    `<div class="match match-id-${matchId}">
        <div class="team team1 match-id-${matchId} ${matchResults[matchId]!==undefined ? matchResults[matchId]['team-1']: ""}">
            <p>${team1}</p>
            <button class="win-btn team-1 match-id-${matchId}" value="${team2}">Win</button>
        </div>
        <p>VS</p>
        <div class="team team2 match-id-${matchId} ${matchResults[matchId]!==undefined? matchResults[matchId]['team-2']: ""}">
            <p>${team2}</p>
            <button class="win-btn team-2 match-id-${matchId}" value="${team1}">Win</button>
        </div>
    </div>`;
    
    matchId++;
    })
    mainContent.innerHTML =matchesHTML; 
    colorCodeMatches(); 
}

function colorCodeMatches(){
    
}

function printIndiPoints(indiPoints){
    let playersHTML =""
    mainContent.innerHTML = `<div class="sub-header"><h3>Name</h3><h3>Matches Played</h3><h3>Wins</h3><h3>Points</h3></div>`
    Object.values(indiPoints).map(player=>{
        let playerHTML = `<div class="player">
        <p class="name">${player.name}</p>
        <p class="matches-played">${player.matchesPlayed}</p>
        <p class="wins">${player.wins}</p>
        <p class="points">${player.points}</p>
    </div>`
    playersHTML += playerHTML;
    })
    mainContent.innerHTML += playersHTML;
}




function updateIndiPoints(winners,losers, indiPoints){
    winners.split('-').map(winner => {
        indiPoints[winner].points += 2;
        indiPoints[winner].matchesPlayed += 1;
        indiPoints[winner].wins += 1;
    })
    losers.split('-').map(loser => indiPoints[loser].matchesPlayed += 1)
}

function colorCodeMatch(wonTeam, classList, matchResults,currentMatch){
    wonTeam.style.backgroundColor = "green";
    if(classList.contains('team-1')){ 
        matchResults[currentMatch] = {'team-1' : "winners" , 'team-2'  : "losers" }
        wonTeam.nextElementSibling.nextElementSibling.style.backgroundColor ="red";
    }
    else if(classList.contains('team-2')){
        matchResults[currentMatch] = {"team-1" : 'losers', "team-2" : 'winners' }
        wonTeam.previousElementSibling.previousElementSibling.style.backgroundColor = "red";
    }
}

function printTeamPoints(teamsReport){
    let teamsHTML =""
    mainContent.innerHTML = `<div class="sub-header"><h3>Team</h3><h3>Matches Played</h3><h3>Lost</h3><h3>Won</h3></div>`
    Object.entries(teamsReport).map(team=>{
        console.log(team);
        let teamHTML = `<div class="team-points">
        <p class="team-name">${team[0]}</p>
        <p class="matches-played">${team[1].matchesPlayed}</p>
        <p class="wins">${team[1].lost}</p>
        <p class="points">${team[1].won}</p>
    </div>`
    teamsHTML += teamHTML;
    })
    mainContent.innerHTML += teamsHTML;
}

module.exports = {suffleArray, printMatches, printIndiPoints, updateIndiPoints,colorCodeMatch, printTeamPoints};


