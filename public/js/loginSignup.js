// Two asyncronous functions that handle form submissions for loggin in and signing up, respecitvely.
// It then attaches these handlers to the submit events 

const loginbtn = document.getElementById("loginbtn");

// Function to handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // If email and password are provided and match, send a POST request
  if (email && password) {
    // Send a POST request to the API endpoint with the colleced email and password payload
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }), // Send the email and password as a JSON string
      headers: { 'Content-Type': 'application/json' },  // Set the request headers to indicate JSON content
    });
    // If the request fails, alert the user with the response text
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// Function to handle signup form submission
// const signupFormHandler = async (event) => {
//   event.preventDefault();
//   // Collect values from the signup form
//   const firstName = document.querySelector('#firstName-signup').value.trim();
//   const lastName = document.querySelector('#lastName-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();
  
//   // If email and password provided are correct, send a POST request
//   if (firstName &&  lastName && email && password) {
//     // Semd a POST request to the API endpoint
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }), // Send the name, email, and password as a JSON string
//       headers: { 'Content-Type': 'application/json' },  // Set the request headers to indicate JSON content
//     });
    
//     //If successful, redirect the browser to the profile page
//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       // Aler the user witht he response text
//       alert(response.statusText);
//     }
//   }
// };

// Add the event listner to the login form submit event to call loginFormhandler
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
// Add the event listner to the signup form submit event to call signupFormHandler
// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);


const signupForm = document.querySelector("#signupForm");


// Function to add new user information
const signupFunction = async function (event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName-signup").value.trim();
  const lastName = document.querySelector("#lastName-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  console.log(firstName, lastName, email, password);

  if (firstName && lastName && email && password) {
    const name = firstName + " " + lastName;
    // fetch
    const res = await fetch("/api/users/login",{
        method: 'POST',
        body: JSON.stringify({
          name,email,password
        }),
        headers: {"Content-Type":"application/json"}
    } )
    if (res.ok) {
      window.location.replace("/");
    } else {
      alert("Something went wrong");
      console.log(res.statusText);
    }
  
  }
};



signupForm.addEventListener("submit", signupFunction);
