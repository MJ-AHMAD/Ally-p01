document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    fetch("YOUR_POWER_AUTOMATE_ENDPOINT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").textContent = "Data submitted successfully!";
    })
    .catch(error => {
        document.getElementById("responseMessage").textContent = "Error submitting data.";
        console.error("Error:", error);
    });
});
