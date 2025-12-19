console.log("Hello World!");

greet();

///Greet the user
function greet() {
  let username = prompt("Please enter your name!");
  document.getElementById("username").innerText = username;
}

// Submit Form
function submitForm() {
  const name = document.getElementById("name-input").value;
  const date = document.getElementById("date-input").value;
  const message = document.getElementById("message-input").value;

  const genderInput = document.querySelector('input[name="gender"]:checked');

  if (!name || !date || !message || !genderInput) {
    alert("Tolong Isi Semua Kolom!");
    return;
  }

  const gender = genderInput.value;

  const now = new Date();
  const formattedTime = now.toString();

  // tampilkan ke output
  document.getElementById("current-time").innerText =
    "Current time : " + formattedTime;

  document.getElementById("out-name").innerText = name;
  document.getElementById("out-date").innerText = date;
  document.getElementById("out-gender").innerText = gender;
  document.getElementById("out-message").innerText = message;
}
