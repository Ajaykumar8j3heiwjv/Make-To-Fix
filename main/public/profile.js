document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-btn");

    const saveButton = document.getElementById("save-btn");

    editButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelectorAll("#profile-form input").forEach(input => {
            input.disabled = false;
        });
        // Keep the text area disabled
        const textArea = document.getElementById("profile-update-textarea");
        if (textArea) {
            textArea.disabled = true; // Ensure the text area remains disabled
        }
        saveButton.disabled = false; // Enable the save button
    });



    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelectorAll("#profile-form input").forEach(input => {
            input.disabled = true;
        });

        alert("Profile updated successfully!");
    });
});
