// DOM Elements
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

// Tab switching functionality
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    // Remove active class from all buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Add active class to current button and pane
    button.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

// Form submit handling
const settingsForm = document.querySelector(".settings-form");
if (settingsForm) {
  settingsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // In a real application, you would send the form data to your backend
    // For now, we'll just simulate success with an alert
    alert("Profile settings updated successfully!");
  });
}

// Watchlist remove functionality
const removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const movieCard = this.closest(".movie-card");

    // Add fade-out animation
    movieCard.style.opacity = "0";
    movieCard.style.transform = "scale(0.9)";

    // Remove after animation completes
    setTimeout(() => {
      movieCard.remove();

      // Check if watchlist is empty after removal
      const watchlist = document.querySelector("#watchlist .movie-grid");
      if (watchlist && watchlist.children.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-state";
        emptyMessage.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3>Your Watchlist is Empty</h3>
          <p>Add movies you want to watch later.</p>
          <a href="index.html" class="btn btn-primary">Browse Movies</a>
        `;
        watchlist.appendChild(emptyMessage);

        // Add styles for empty state
        const style = document.createElement("style");
        style.textContent = `
          .empty-state {
            text-align: center;
            padding: 40px 0;
            width: 100%;
          }
          .empty-icon {
            height: 48px;
            width: 48px;
            color: var(--cinema-text-secondary);
            margin: 0 auto 16px;
          }
          .empty-state h3 {
            font-size: 20px;
            margin-bottom: 8px;
          }
          .empty-state p {
            color: var(--cinema-text-secondary);
            margin-bottom: 16px;
          }
        `;
        document.head.appendChild(style);
      }
    }, 300);
  });
});

// Style for animations
const style = document.createElement("style");
style.textContent = `
  .movie-card {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;
document.head.appendChild(style);

// View ticket details functionality
const viewDetailsButtons = document.querySelectorAll(
  ".ticket-card .btn-outline"
);
viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // In a real application, this would open a modal or navigate to ticket details
    alert("This would show detailed ticket information in a real application.");
  });
});
