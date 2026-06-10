const headlineInput = document.getElementById("headlineInput");
const updateButton = document.getElementById("updateButton");
const ctaHeadline = document.getElementById("ctaHeadline");

updateButton.addEventListener("click", function () {

    if (headlineInput.value.trim() !== "") {
        ctaHeadline.textContent = headlineInput.value;
    }

});
