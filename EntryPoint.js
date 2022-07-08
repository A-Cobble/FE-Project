const input = $('input[name="search"]')
const userForm = $('#user-form');

$('#user-form').submit((event)=> {
    event.preventDefault();
    console.log("submitEventFired")
    $('#mainBody').empty();
    let userInput = input.val();
    const URL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Characters/by/${userInput}`;
    console.log(URL)
    fetch(URL, {})

    .then((response) => response.json())
    .then((messages) => {characterSearch(messages)});

})

function characterSearch(information){
    console.log(information)
    $('#mainBody').empty();
    $('#bottomBar').empty();
    $(`<div class="informational"></div>`).appendTo('#mainBody');
    $('<span class="result-data"></span>').appendTo('.informational');
    $(`<h2 class="character-name">${information.name}</h2>`).appendTo('.result-data');
    $(`<div class="other-names">Other names:     ${information.other_names}</div>`).appendTo('.result-data');
    $(`<h4 class="character-titles">Titles:     ${information.titles}</h4>`).appendTo('.result-data');
    $(`<div class="character-culture">Culture:     ${information.culture}</div>`).appendTo('.result-data');
    $(`<div class="character-weapon">Weapon:     ${information.weapon}</div>`).appendTo('.result-data');
    $(`<div class="character-race">Race:     ${information.race}</div>`).appendTo('.result-data');
    $(`<div class="character-birth">Birth:     ${information.birth}</div>`).appendTo('.result-data');
    $(`<div class="character-death">Death:      ${information.death}</div>`).appendTo('.result-data');
    $(`<div class="bottomBarDiv"></div>`).appendTo('#bottomBar');
    $(`<div class="character-summary"><em>${information.name} Summary:</em>     ${information.text}</div>`).appendTo('.bottomBarDiv')

    for(let j=0; j<information.quotes.length; j++){
        $(`<div class="character-quote"><em>Quotes by ${information.name}:</em>     ${information.quotes[j].text}</div>`).appendTo('.bottomBarDiv');
    }
}

// https://cors-anywhere.herokuapp.com/

$('.home').click(()=>{
    $('#mainBody').empty()
    $('#bottomBar').empty()
})

$('.characterList').click(() =>{
    $('#mainBody').empty();
    let characterURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Characters?count=410`;

    fetch(characterURL, {})
    .then((response) => response.json())
    .then((messages) => {arrayOfCharacters(messages)});
})
$('.randomQuote').click(() =>{
    $('#mainBody').empty();
    let quoteURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Quotes/random`;
    
    fetch(quoteURL, {})
    .then((response) => response.json())
    .then((messages) => {quoteBox(messages)});

})

$('.randomBattle').click(() =>{
    $('#mainBody').empty();
    $('#bottomBar').empty();
    const battleURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Battles/random`;
    
    fetch(battleURL, {})
    .then((response) => response.json())
    .then((messages) => {battleBox(messages)});

})

$('.randomRace').click(() =>{
    $('#mainBody').empty();
    $('#bottomBar').empty();
    const raceURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Races/random`;
    
    fetch(raceURL, {})
    .then((response) => response.json())
    .then((messages) => {raceBox(messages)});

})

function arrayOfCharacters(data){
    $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
    
    for(let i = data.length - 1; i >= 0; i--){
        $(`<div class="full-list">${data[i].name}</div>`).appendTo('.buttonScreen');
    }
}

function quoteBox(data){
    $(`<div class="bottomBarDiv"></div>`).appendTo('#bottomBar');
    $(`<div class="character-quote"><em>Quote by ${data.character}:</em>${data.text}</div>`).appendTo('.bottomBarDiv');
}

function battleBox(data){
    $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
    $(`<div class="battle-name">Battle:     ${data.name}</div>`).appendTo('.buttonScreen');
    $(`<div class="battle-conflict">War:     ${data.conflict}</div>`).appendTo('.buttonScreen');
    $(`<div class="battle-date">Date:     ${data.date}</div>`).appendTo('.buttonScreen');
    $(`<div class="battle-location">Location:     ${data.location}</div>`).appendTo('.buttonScreen');
    $(`<div class="battle-outcome">Victors:     ${data.outcome}</div>`).appendTo('.buttonScreen');
    $(`<div class="bottomBarDiv"></div>`).appendTo('#bottomBar');
    $(`<div class="battle-text"><em>Summary:</em>     ${data.text}</div>`).appendTo('.bottomBarDiv');
}

function raceBox(data){
    $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
    $(`<div class="race-name">Name:     ${data.name}</div>`).appendTo('.buttonScreen');
    $(`<div class="race-location">Locations:     ${data.locations}</div>`).appendTo('.buttonScreen');
    $(`<div class="race-distinction">Distinction:     ${data.distinctions}</div>`).appendTo('.buttonScreen');
    $(`<div class="race-origins">Origin:     ${data.origins}</div>`).appendTo('.buttonScreen');
    $(`<div class="race-languages">Spoken Languages:     ${data.languages}</div>`).appendTo('.buttonScreen');
    $(`<div class="bottomBarDiv"></div>`).appendTo('#bottomBar');
    $(`<div class="battle-text"><em>Summary:</em>     ${data.text}</div>`).appendTo('.bottomBarDiv');
}