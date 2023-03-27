"use strict";

import unsuffledMatches from './matches.json' assert {type: 'json' };

const suffleArray = array =>{
    for(let i=array.length-1; i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


let matches = suffleArray(Object.values(unsuffledMatches));
let tabs = document.querySelectorAll('.tab');
let mainContent = document.querySelector('.main-content');
let tabsContainer = document.querySelector('.tabs-container');

let indiPoints =[{ name : 'Hari', matchesPlayed : 0, wins :0 , points:0 },
{ name : 'Krishna', matchesPlayed : 0, wins :0 , points:0 },
{ name : 'Venkat', matchesPlayed : 0, wins :0 , points:0 },
{ name : 'Vicky', matchesPlayed : 0, wins :0 , points:0 },
{ name : 'Karthi', matchesPlayed : 0, wins :0 , points:0 }];

tabsContainer.addEventListener('click',(event)=>{
    tabs.forEach(tab=> tab.classList.remove('active'));
    event.target.classList.add('active');
    if(event.target.dataset.id == 1){
        printIndiPoints(indiPoints);
    }
    if(event.target.dataset.id == 2){
        printMatches(matches);
    }
})



function printMatches(matches){
    let matchesHTML = ""
    matches.map(match=>{
        let team1 = match.split(' ')[0];
        let team2 = match.split(' ')[2];
        matchesHTML += 
    `<div class="match">
        <div class="team1">
            <p>${team1}</p>
            <button>Win</button>
        </div>
        <p>VS</p>
        <div class="team2">
            <p>${team2}</p>
            <button>Win</button>
        </div>
    </div>`;
    })
    mainContent.innerHTML =matchesHTML;  
}

function printIndiPoints(indiPoints){
    let playersHTML =""
    mainContent.innerHTML = `<div class="sub-header"><h3>Name</h3><h3>Matches Played</h3><h3>Points</h3><h3>Wins</h3></div>`
    indiPoints.map(player=>{
        let playerHTML = `<div class="player">
        <p class="name">${player.name}</p>
        <p class="matches-played">${player.matchesPlayed}</p>
        <p class="points">${player.points}</p>
        <p class="wins">${player.wins}</p>
    </div>`
    playersHTML += playerHTML;
    })
    mainContent.innerHTML += playersHTML;
}







