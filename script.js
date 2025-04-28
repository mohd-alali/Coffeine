// Event listener for form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)

    // Get the input values and remove any leading/trailing whitespace
    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Get error message elements for each field
    let nameError = document.getElementById("nameError");
    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear any existing error messages
    nameError.textContent = "";
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true; // Flag to track if the form is valid

    // Check if name field is empty and display an error if so
    if (name === "") {
        nameError.textContent = "Full Name is required!";
        valid = false; // Set valid flag to false
    }

    // Check if username field is empty and display an error if so
    if (username === "") {
        usernameError.textContent = "Username is required!";
        valid = false; // Set valid flag to false
    }

    // Check if the email contains "@" and "." (basic validation)
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter a valid email address!";
        valid = false; // Set valid flag to false
    }

    // Check if password length is less than 8 characters
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters!";
        valid = false; // Set valid flag to false
    }

    // If all fields are valid, show success message and reset the form
    if (valid) {
        alert("Form submitted successfully!"); // Show success alert
        this.reset(); // Reset the form fields
    }
});

// Function to check the answer in a quiz
function checkAnswer(answer) {
    // Get the feedback element
    let feedback = document.getElementById("quizFeedback");

    // Check if the answer is correct (in this case, the correct answer is "Paris")
    if (answer === "Paris") {
        feedback.textContent = "✅ Correct! Paris is the capital of France."; // Display correct answer message
        feedback.style.color = "green"; // Change feedback text color to green
    } else {
        feedback.textContent = "❌ Wrong! Try again."; // Display wrong answer message
        feedback.style.color = "red"; // Change feedback text color to red
    }
}
