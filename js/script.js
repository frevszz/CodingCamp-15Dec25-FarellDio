console.log("Hello World!");

greet();

///Greet the user
/*function greet() {
  let username = prompt("Please enter your name!");
  document.getElementById("username").innerText = username;
}*/

/// Validate Form
function validateForm() {
  let name = document.getElementById("name-input").value;

  ///Validate name input
  if (name === "") {
    ///alert name empty
    alert("Name must be filled out");
  } else {
    ///alert name valid
    alert("Thank you, " + name + "");
  }
}
