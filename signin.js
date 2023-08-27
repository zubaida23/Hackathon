document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form inputs
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // You can perform authentication and redirection logic here
    if (username === "user" && password === "password") {
        alert("Sign in successful!");
        // Redirect to a new page or perform other actions
    } else {
        alert("Invalid credentials. Please try again.");
    }
});