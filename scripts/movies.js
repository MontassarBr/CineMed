const allMovies = [
  {
    id: 1,
    title: "Moana 2",
    releaseYear: 2024,
    genres: ["sci-fi", "adventure"],
    duration: "1h 40m",
    rating: 6.6,
    status: "now-playing",
    contentRating: "PG",
    poster:
      "./imgs/moana.png",
    trailerUrl: "https://www.youtube.com/embed/hDZ7y8RP5HE" 
  },
  {
    id: 2,
    title: "Sahbk Rajel",
    releaseYear: 2024,
    genres: ["drama", "comdey"],
    duration: "2h 15m",
    rating: 4.5,
    status: "now-playing",
    contentRating: "PG",
    poster:
      "./imgs/sahbekRajel.png",
    trailerUrl: "https://www.youtube.com/embed/mGYNGk0O0PM" 
  },
  {
    id: 3,
    title: "Papillon d'Or",
    releaseYear: 2021,
    genres: ["drama"],
    duration: "1h 30m",
    rating: 7.4,
    status: "now-playing",
    contentRating: "PG",
    poster:
      "./imgs/fartatou dhhab.png",
    trailerUrl: "https://www.youtube.com/embed/8ARqmkbXJLU" 
  },
  {
    id: 4,
    title: "Super Tounsi",
    releaseYear: 2023,
    genres: ["drama", "comedy"],
    duration: "2h 15m",
    rating: 6.8,
    status: "now-playing",
    contentRating: "R",
    poster:
      "./imgs/superTounsi.png",
    trailerUrl: "https://www.youtube.com/embed/nt8yOBic55c?si=bqgsgI5VUXuOoQaS" 
  },
  {
    id: 5,
    title: "Inception",
    releaseYear: 2010,
    genres: ["sci-fi", "action"],
    duration: "2h 28m",
    rating: 8.8,
    status: "upcoming",
    contentRating: "PG-13",
    releaseDate: "Apr 28, 2010",
    poster:
      "./imgs/inception.jpg",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0?si=MTAtK9TZBoPOZZtu" 
  },
  {
    id: 6,
    title: "Bolice",
    releaseYear: 2024,
    genres: ["thriller", "comedy"],
    duration: "1h 42m",
    rating: 8.4,
    status: "upcoming",
    contentRating: "PG",
    releaseDate: "May 15, 2024",
    poster:
      "./imgs/boulice.png",
    trailerUrl: "https://www.youtube.com/embed/l_wyg8Vd1IA?si=PoNJRkWrpNMq9WB_" 
  },
  {
    id: 7,
    title: "Dachra",
    releaseYear: 2018,
    genres: ["horror", "mystery"],
    duration: "1h 54m",
    rating: 6.1,
    status: "upcoming",
    contentRating: "R",
    releaseDate: "Jun 7, 2018",
    poster:
      "./imgs/dachra.png",
    trailerUrl: "https://www.youtube.com/embed/a5_WTF7KtYQ?si=nb9nVCPfWnff90S4" 
  },
  {
    id: 8,
    title: "Spider-Man : No Way Home",
    releaseYear: 2021,
    genres: ["sci-fi", "thriller"],
    duration: "2h 28m",
    rating: 8.2,
    status: "upcoming",
    contentRating: "PG-13",
    releaseDate: "Jul 12, 2021",
    poster:
      "./imgs/spiderman.png",
    trailerUrl: "https://www.youtube.com/embed/JfVOs4VSpmA?si=hhG4-vIRcdidBr5o" 
  },
];

// Function to get all unique genres from movies
function getAllGenres() {
  const genres = new Set(allMovies.flatMap((movie) => movie.genres));
  return ["all", ...genres];
}

// Function to create movie cards for all movies display
function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");
  movieCard.setAttribute("data-id", movie.id);

  let statusInfo = "";
  if (movie.status === "upcoming") {
    statusInfo = `<div class="release-date">${movie.releaseDate}</div>`;
  }

  movieCard.innerHTML = `
    <div class="movie-poster">
      ${statusInfo}
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-overlay">
        <div class="movie-actions">
          ${
            movie.status === "now-playing"
              ? `<button class="movie-action-btn watch-btn">
               <svg xmlns="http://www.w3.org/2000/svg" class="action-icon" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
               </svg>
               Watch Trailer
             </button>`
              : `<button class="movie-action-btn remind-btn">
               <svg xmlns="http://www.w3.org/2000/svg" class="action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               Remind Me
             </button>`
          }
          <button class="movie-action-btn info-btn">Movie Details</button>
        </div>
      </div>
    </div>
    <div class="movie-info">
      <h3 class="movie-title">${movie.title}</h3>
      <div class="movie-meta">
        <span class="movie-year">${movie.releaseYear}</span>
        <span class="movie-duration">${movie.duration}</span>
      </div>
      <div>
        <span class="rating-label rating-${movie.contentRating
          .toLowerCase()
          .replace("-", "")}">${movie.contentRating}</span>
        ${
          movie.status === "now-playing"
            ? `<div class="movie-rating">
             <div class="stars" style="--rating: ${movie.rating};"></div>
             <span>${movie.rating}</span>
           </div>`
            : ""
        }
      </div>
      <div class="genre-tags">
        ${movie.genres
          .map((genre) => `<span class="genre-tag">${genre}</span>`)
          .join("")}
      </div>
    </div>
  `;

  // Find the info button within the created card
  const infoButton = movieCard.querySelector('.info-btn');
  if (infoButton) {
    infoButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      window.location.href = `movie-details.html?id=${movie.id}`;
    });
  }

  return movieCard;
}

// Function to filter movies by search and genre
function filterMovies(searchTerm = "", genre = "all") {
  const filteredMovies = allMovies.filter((movie) => {
    // Filter by search term
    if (
      searchTerm &&
      !movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Filter by genre
    if (genre !== "all" && !movie.genres.includes(genre)) {
      return false;
    }

    return true;
  });

  return filteredMovies;
}

// Function to render filtered movies
function renderMovies(movies) {
  const moviesContainer = document.getElementById("all-movies");
  const emptyState = document.getElementById("empty-state");
  const emptyMessage = document.getElementById("empty-message");

  // Clear container
  moviesContainer.innerHTML = "";

  if (movies.length === 0) {
    const searchInput = document.getElementById("movie-search");
    const activeGenre = document.querySelector(".genre-tab.active");

    emptyMessage.textContent = searchInput.value
      ? `No movies matching "${searchInput.value}" in ${
          activeGenre.textContent === "All"
            ? "any genre"
            : `the ${activeGenre.textContent} genre`
        }.`
      : `No ${
          activeGenre.textContent === "All" ? "" : activeGenre.textContent
        } movies available.`;

    emptyState.style.display = "block";
    moviesContainer.style.display = "none";
  } else {
    emptyState.style.display = "none";
    moviesContainer.style.display = "grid";

    // Add movies to container
    movies.forEach((movie) => {
      moviesContainer.appendChild(createMovieCard(movie));
    });
  }
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Initialize genre tabs
  const genreTabs = document.getElementById("genre-tabs");
  const genres = getAllGenres();

  genres.forEach((genre, index) => {
    if (index > 0) {
      // Skip "all" as we already have it in the HTML
      const button = document.createElement("button");
      button.classList.add("genre-tab");
      button.setAttribute("data-genre", genre);
      button.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
      genreTabs.appendChild(button);
    }
  });

  // Initial render of all movies
  renderMovies(allMovies);

  // Handle search input
  const searchInput = document.getElementById("movie-search");
  searchInput.addEventListener("input", function () {
    const activeGenre = document
      .querySelector(".genre-tab.active")
      .getAttribute("data-genre");
    const filteredMovies = filterMovies(searchInput.value, activeGenre);
    renderMovies(filteredMovies);
  });

  // Handle genre tab clicks
  document.querySelectorAll(".genre-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      // Update active tab
      document
        .querySelectorAll(".genre-tab")
        .forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const genre = this.getAttribute("data-genre");
      const searchTerm = searchInput.value;
      const filteredMovies = filterMovies(searchTerm, genre);
      renderMovies(filteredMovies);
    });
  });

  // Modal elements
  const trailerModal = document.getElementById('trailer-modal');
  const closeModalBtn = trailerModal.querySelector('.close-btn');
  const trailerContent = document.getElementById('trailer-content');

  // Function to open the trailer modal
  function openTrailerModal(trailerUrl) {
    // Basic check for a valid URL (can be improved)
    if (trailerUrl && trailerUrl.startsWith('http')) { 
      trailerContent.innerHTML = `<iframe src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      trailerModal.classList.add('show');
    } else {
        // Handle cases where there's no valid trailer URL
        trailerContent.innerHTML = '<p>Trailer not available.</p>';
        trailerModal.classList.add('show');
        console.warn('Invalid or missing trailer URL:', trailerUrl);
    }
  }

  // Function to close the trailer modal
  function closeTrailerModal() {
    trailerModal.classList.remove('show');
    trailerContent.innerHTML = ''; // Clear the iframe to stop video playback
  }

  // Event listener for closing modal with button
  closeModalBtn.addEventListener('click', closeTrailerModal);

  // Event listener for closing modal by clicking outside
  trailerModal.addEventListener('click', (event) => {
    if (event.target === trailerModal) { // Clicked on the modal background
      closeTrailerModal();
    }
  });

  // Event listener for Esc key to close modal
  document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && trailerModal.classList.contains('show')) {
          closeTrailerModal();
      }
  });

  // Notification container
  const notificationContainer = document.getElementById('notification-container');

  // Function to show a notification
  function showNotification(message, type = 'success') { // Default to success
      const notification = document.createElement('div');
      notification.classList.add('notification', type);
      
      // Basic structure - you can add icons here later if desired
      notification.innerHTML = `<span>${message}</span>`;
      
      notificationContainer.appendChild(notification);
      
      // Remove the notification after the animation completes (5s total: 0.5s in, 4s wait, 0.5s out)
      setTimeout(() => {
          notification.remove();
      }, 5000); 
  }

  // Add click handlers for movie action buttons
  document.addEventListener("click", function (e) {
    // Handle Watch Trailer button click
    if (e.target.closest(".watch-btn")) {
        e.preventDefault(); // Prevent default button behavior
        const movieCard = e.target.closest(".movie-card");
        const movieId = parseInt(movieCard.getAttribute("data-id"), 10);
        const movie = allMovies.find(m => m.id === movieId);
        if (movie && movie.trailerUrl) {
            openTrailerModal(movie.trailerUrl);
        } else {
            console.error('Could not find movie or trailer URL for ID:', movieId);
            openTrailerModal(null); 
        }
    }

    // Handle Remind Me button click
    if (e.target.closest(".remind-btn")) {
      e.preventDefault();
      e.stopPropagation();
      const movieCard = e.target.closest(".movie-card");
      const movieTitle = movieCard.querySelector('.movie-title')?.textContent || 'this movie';
      showNotification(`Reminder set for ${movieTitle}!`, 'success');
    }
  });
});
