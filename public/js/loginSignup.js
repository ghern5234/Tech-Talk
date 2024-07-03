// Two asyncronous functions that handle form submissions for loggin in and signing up, respecitvely.
// It then attaches these handlers to the submit events 

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

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




// Function to add new user information
const signupFunction = async function (event) {
  event.preventDefault();
  const first_name = document.querySelector("#firstName-signup").value.trim();
  const last_name = document.querySelector("#lastName-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (first_name && last_name && email && password) {
    // fetch
    const res = await fetch("/api/users/signup",{
        method: 'POST',
        body: JSON.stringify({
          first_name, last_name, email, password
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
loginForm.addEventListener("submit", loginFormHandler);
