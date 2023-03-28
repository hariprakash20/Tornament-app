"use strict";

import unsuffledMatches from './matches.json' assert {type: 'json' };

const {suffleArray, printMatches, printIndiPoints, updateIndiPoints, colorCodeMatch, printTeamPoints, updateTeamPoints} = require('./func');

let matches = suffleArray(Object.values(unsuffledMatches));
let tabs = document.querySelectorAll('.tab');
let tabsContainer = document.querySelector('.tabs-container');
let mainContent = document.querySelector('.main-content');
let currentMatch = 1;

let matchResults ={};

let teamsReport = {
    'Hari-Krishna': {matchesPlayed : 0, lost: 0, won : 0 },
'Hari-Venkat': {matchesPlayed : 0, lost: 0, won : 0 },
'Hari-Vicky': {matchesPlayed : 0, lost: 0, won : 0 },
'Hari-Karthi': {matchesPlayed : 0, lost: 0, won : 0 },
'Krishna-Venkat':{matchesPlayed : 0, lost: 0, won : 0 },
'Krishna-Vicky':{matchesPlayed : 0, lost: 0, won : 0 },
'Krishna-Karthi':{matchesPlayed : 0, lost: 0, won : 0 },
'Venkat-Vicky':{matchesPlayed : 0, lost: 0, won : 0 },
'Venkat-Karthi':{matchesPlayed : 0, lost: 0, won : 0 },
'Vicky-Karthi':{matchesPlayed : 0, lost: 0, won : 0 }};

let indiPoints ={'Hari' : { name : 'Hari', matchesPlayed : 0, wins :0 , points:0 },
'Krishna':{ name : 'Krishna', matchesPlayed : 0, wins :0 , points:0 },
'Venkat':{ name : 'Venkat', matchesPlayed : 0, wins :0 , points:0 },
'Vicky':{ name : 'Vicky', matchesPlayed : 0, wins :0 , points:0 },
'Karthi':{ name : 'Karthi', matchesPlayed : 0, wins :0 , points:0 }};

tabsContainer.addEventListener('click',(event)=>{
    tabs.forEach(tab=> tab.classList.remove('active'));
    event.target.classList.add('active');
    if(event.target.dataset.id == 1){
        printIndiPoints(indiPoints);
    }
    if(event.target.dataset.id == 2){
        printMatches(matches, matchResults);
    }
    if(event.target.dataset.id == 3){
        printTeamPoints(teamsReport);
    }
})

mainContent.addEventListener('click',(event)=>{
    if(event.target.nodeName=="BUTTON" && event.target.classList.contains('match-id-'+currentMatch)){
        updateIndiPoints(event.target.previousElementSibling.innerHTML,event.target.value, indiPoints);
        colorCodeMatch(event.target.parentElement,event.target.classList, matchResults, currentMatch);
        updateTeamPoints(event.target.previousElementSibling.innerHTML,event.target.value, teamsReport)
        currentMatch++;
    }
    else{
        return;
    }
})










