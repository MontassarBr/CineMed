document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabs = document.querySelectorAll(".auth-tab");
  const formContainers = document.querySelectorAll(".auth-form-container");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");

      // Update active tab
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Show corresponding form
      formContainers.forEach((container) => {
        if (container.id === tabId) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    });
  });

  // Toggle password visibility
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");

  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const passwordInput = button.previousElementSibling;
      const type = passwordInput.getAttribute("type");

      if (type === "password") {
        passwordInput.setAttribute("type", "text");
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="eye-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        `;
      } else {
        passwordInput.setAttribute("type", "password");
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="eye-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        `;
      }
    });
  });

  // Login form submission
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      const remember = document.getElementById("remember").checked;

      // In a real application, you would send this data to your server
      // For demonstration purposes, we'll redirect to the profile page
      console.log("Login submitted:", { email, password, remember });

      // Simulate login - in a real app this would be server authentication
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 1000);
    });
  }

  // Register form submission
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("register-first-name").value;
      const lastName = document.getElementById("register-last-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById(
        "register-confirm-password"
      ).value;
      const terms = document.getElementById("terms").checked;

      // Validate passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // In a real application, you would send this data to your server
      console.log("Registration submitted:", {
        firstName,
        lastName,
        email,
        password,
        terms,
      });

      // Simulate registration - in a real app this would create an account on the server
      setTimeout(() => {
        // Switch to login tab after successful registration
        document.querySelector('[data-tab="login"]').click();
        alert(
          `Account created successfully! Please login with your new credentials.`
        );
      }, 1000);
    });
  }
});
