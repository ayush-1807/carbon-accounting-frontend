document.addEventListener("DOMContentLoaded", () => {
    console.log("Carbon Accounting Platform Loaded");

    // Login button interaction
    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Login functionality prototype");
        });
    }

    // Navbar toggle simulation
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Simple carbon emission calculator prototype
    const emissionInput = document.getElementById("emissionInput");
    const emissionResult = document.getElementById("emissionResult");

    if (emissionInput && emissionResult) {
        emissionInput.addEventListener("input", () => {
            const value = parseFloat(emissionInput.value) || 0;
            const estimatedCO2 = value * 0.42;

            emissionResult.innerText =
                "Estimated CO₂ Emission: " +
                estimatedCO2.toFixed(2) +
                " kg";
        });
    }

    // Dashboard card hover effect
    const dashboardCards = document.querySelectorAll(".dashboard-card");

    dashboardCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});