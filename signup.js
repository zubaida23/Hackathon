document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form inputs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // You can perform additional validation and submit data to a server here
    console.log("Username:", username);
    console.log("Email:", email);
});