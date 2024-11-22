const form = document.getElementById('signupForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (fullName && email && password) {
        alert("Sign-up successful! Welcome, " + fullName);
        // Redirect or further processing
    } else {
        alert("Please fill out all fields correctly.");
    }
});
