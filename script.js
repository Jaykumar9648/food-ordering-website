// Handle the "Order Now" button
document.querySelector(".btn").addEventListener("click", () => {
    document.getElementById("orderForm").style.display = "block";
});

function closeOrderForm() {
    document.getElementById("orderForm").style.display = "none";
}

function placeOrder() {
    const item = document.getElementById("orderItem").value.trim();
    const qty = document.getElementById("orderQty").value;

    if (!item || qty <= 0) {
        alert("Please enter a valid item and quantity.");
        return;
    }

    alert(`Thank you! Your order for ${qty} x ${item} has been placed.`);
    closeOrderForm();
}
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email address.");
        return;
    }

    if (phone.length < 10 || isNaN(phone)) {
        alert("Phone number must be at least 10 digits and numeric.");
        return;
    }

    alert("Message submitted successfully. We’ll contact you soon.");
    this.reset();
});
