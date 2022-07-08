const $input = $('input[name="search"]')
const $userForm = $('#user-form');
console.log("hello world")

$userForm.submit((event)=> {
    alert("hello World 1")
    event.preventDefault();
    event.stopPropagation();

    // $('.mainBody').empty();
    let userInput = $input.val();
    const url = `https://rickandmortyapi.com/api/character/?name=${userInput}`;
    console.log(url)
    $.get(url,(data) => {
        console.log(data);
        characterSearch(data);
    })
})

function characterSearch(information){
    for (let i = 0; i < information.length; i++){

        console.log("hello world 2")
    }
}