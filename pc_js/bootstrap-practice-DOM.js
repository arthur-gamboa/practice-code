const list = document.querySelector("#coffee-type ul");

// add coffee
const addForm = document.forms['add-coffee'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);


    //create elements
    const li = document.createElement("li");

    // add content
    li.textContent = value;

})
