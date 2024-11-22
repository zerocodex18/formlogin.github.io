const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
