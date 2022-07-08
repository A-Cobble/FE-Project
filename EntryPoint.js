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
    $(`<div class="other-names">Other names: ${information.other_names}</div>`).appendTo('.result-data');
    $(`<h4 class="character-titles">Titles: ${information.titles}</h4>`).appendTo('.result-data');
    $(`<div class="character-culture">Culture: ${information.culture}</div>`).appendTo('.result-data');
    $(`<div class="character-weapon">Weapon: ${information.weapon}</div>`).appendTo('.result-data');
    $(`<div class="character-race">Race: ${information.race}</div>`).appendTo('.result-data');
    $(`<div class="character-birth">Birth: ${information.birth}</div>`).appendTo('.result-data');
    $(`<div class="character-death">Death: ${information.death}</div>`).appendTo('.result-data');
    $(`<div class="bottomBarDiv"></div>`).appendTo('#bottomBar');
    $(`<div class="character-summary"><em>${information.name} Summary:</em>${information.text}</div>`).appendTo('.bottomBarDiv')
    $(`<div class="character-quote"><em>Quotes by ${information.name}:</em>${information.quote}</div>`).appendTo('.bottomBarDiv');
}
// https://cors-anywhere.herokuapp.com/
// https://tolkien-api.herokuapp.com/Characters/by/${userInput}


$('.home').click(()=>{
    $('#mainBody').empty()
    $('#bottomBar').empty()
})



$('.characterList').click(() =>{
    
    $('#mainBody').empty();
    
    let characterURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Characters`;
    // console.log(URL)
    fetch(characterURL, {})

    .then((response) => response.json())
    .then((messages) => {arrayOfCharacters(messages)});
})
$('.randomQuote').click(() =>{
   
    $('#mainBody').empty();
    let quoteURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Quotes/random`;
    // console.log(quoteURL)
    fetch(quoteURL, {})
    .then((response) => response.json())
    .then((messages) => {
        quoteBox(messages)});

})
$('.randomBattle').click(() =>{
   
    $('#mainBody').empty();
    
    const battleURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Battles/random`;
    // console.log(battleURL)
    fetch(battleURL, {})

    .then((response) => response.json())
    .then((messages) => {battleBox(messages)});

})
$('.randomRace').click(() =>{
    
    $('#mainBody').empty();
    
    const raceURL = `https://cors-anywhere.herokuapp.com/https://tolkien-api.herokuapp.com/Race/Random`;
    // console.log(raceURL)
    fetch(raceURL, {})

    .then((response) => response.json())
    .then((messages) => {raceBox(messages)});

})

function arrayOfCharacters(data){
    for(let i = 0; i < data.length; i++){
        $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
        $(`<li>${data[i].name}</li>`).appendTo('.buttonScreen');
    }
}

function quoteBox(messages){
    $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
}

function battleBox(messages){
    $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
}

function raceBox(messages){
    $(`<div class="buttonScreen"></div>`).appendTo('#mainBody');
}