
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    this.reset();
});
