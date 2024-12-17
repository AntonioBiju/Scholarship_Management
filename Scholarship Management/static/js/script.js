// document.addEventListener("DOMContentLoaded", () => {
//     const showLoginPopupBtn = document.querySelector(".login-btn"); // Button to open the popup
//     const formPopup = document.querySelector(".form-popup");
//     const closePopupBtn = formPopup?.querySelector(".close-btn");
//     const signupLink = document.querySelector("#signup-link");
//     const loginLink = document.querySelector("#login-link");

//     // Show the popup
//     const showPopup = () => {
//         document.body.classList.add("show-popup");
//         formPopup.style.opacity = "1"; // Ensures visibility
//         formPopup.style.pointerEvents = "auto"; // Enables interactions
//     };

//     // Hide the popup
//     const hidePopup = () => {
//         document.body.classList.remove("show-popup");
//         formPopup.style.opacity = "0"; // Hides the popup
//         formPopup.style.pointerEvents = "none"; // Disables interactions
//     };

//     // Add event listeners
//     if (showLoginPopupBtn) {
//         showLoginPopupBtn.addEventListener("click", (e) => {
//             e.preventDefault(); // Prevent default behavior
//             showPopup(); // Show popup when login button is clicked
//         });
//     }

//     if (closePopupBtn) {
//         closePopupBtn.addEventListener("click", (e) => {
//             e.preventDefault(); // Prevent default behavior
//             hidePopup(); // Hide popup when close button is clicked
//         });
//     }

//     if (signupLink) {
//         signupLink.addEventListener("click", (e) => {
//             e.preventDefault(); // Prevent default behavior
//             formPopup.classList.add("show-signup"); // Switch to signup
//         });
//     }

//     if (loginLink) {
//         loginLink.addEventListener("click", (e) => {
//             e.preventDefault(); // Prevent default behavior
//             formPopup.classList.remove("show-signup"); // Switch back to login
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const showLoginPopupBtn = document.querySelector(".login-btn"); // Button to open the popup
    const formPopup = document.querySelector(".form-popup");
    const closePopupBtn = formPopup?.querySelector(".close-btn");
    const signupLink = document.querySelector("#signup-link");
    const loginLink = document.querySelector("#login-link");

    // Function to show the popup
    const showPopup = () => {
        document.body.classList.add("show-popup");
        formPopup.style.opacity = "1"; // Ensure popup is visible
        formPopup.style.pointerEvents = "auto"; // Enable interactions
    };

    // Function to hide the popup
    const hidePopup = () => {
        document.body.classList.remove("show-popup");
        formPopup.style.opacity = "0"; // Hide popup
        formPopup.style.pointerEvents = "none"; // Disable interactions
    };

    // Show popup on single click
    if (showLoginPopupBtn) {
        showLoginPopupBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default behavior
            showPopup(); // Show popup on single click
        });
    }

    // Close popup on single click
    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default behavior
            hidePopup(); // Hide popup
        });
    }

    // Switch to signup form
    if (signupLink) {
        signupLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default behavior
            formPopup.classList.add("show-signup"); // Switch to signup
        });
    }

    // Switch back to login form
    if (loginLink) {
        loginLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default behavior
            formPopup.classList.remove("show-signup"); // Switch back to login
        });
    }
});


