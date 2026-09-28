// Get the registration form
const form = document.getElementById("registrationForm");

// Get the message area
const message = document.getElementById("registrationMessage");

// Form submit event
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value.trim();
    const year = document.getElementById("year").value;
    const selectedEvent = document.getElementById("event").value;

    // Check required fields
    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        department === "" ||
        year === "" ||
        selectedEvent === ""
    ) {
        message.innerHTML = "Please fill in all the fields.";
        message.style.color = "red";
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.innerHTML = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Validate mobile number
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        message.innerHTML = "Please enter a valid 10-digit mobile number.";
        message.style.color = "red";
        return;
    }

    // Display success message
    message.innerHTML =
        "Registration successful! Welcome to College Fest 2026, " +
        name + ".";

    message.style.color = "green";

    // Clear form
    form.reset();

});
// Select an event from the event card
function selectEvent(eventName) {

    // Select the event dropdown
    const eventSelect = document.getElementById("event");

    // Set selected event
    eventSelect.value = eventName;

    // Scroll to registration section
    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}
// Contact form
const contactForm = document.getElementById("contactForm");
const contactResult = document.getElementById("contactResult");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const msg = document.getElementById("contactMessage").value.trim();

    if (name === "" || email === "" || msg === "") {

        contactResult.innerHTML =
            "Please fill in all contact form fields.";

        contactResult.style.color = "red";

        return;
    }

    contactResult.innerHTML =
        "Thank you, " + name + "! Your message has been sent.";

    contactResult.style.color = "green";

    contactForm.reset();

});