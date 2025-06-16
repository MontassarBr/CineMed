const movies = [
  {
    id: 1,
    title: "Moana 2",
    releaseYear: 2024,
    genres: ["sci-fi", "adventure"],
    duration: "2h 45m",
    rating: 4.8,
    status: "now-playing",
    contentRating: "PG-13",
    poster: "./imgs/moana.png",
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
    poster: "./imgs/sahbekRajel.png",
  },
  {
    id: 3,
    title: "Papillon d'Or",
    releaseYear: 2021,
    genres: ["drama"],
    duration: "2h 28m",
    rating: 8.2,
    status: "now-playing",
    contentRating: "PG",
    poster: "./imgs/fartatou dhhab.png",
  },
  {
    id: 4,
    title: "Super Tounsi",
    releaseYear: 2024,
    genres: ["drama", "comedy"],
    duration: "1h 55m",
    rating: 4.4,
    status: "now-playing",
    contentRating: "R",
    poster: "./imgs/superTounsi.png",
  },
];

const upcomingMovies = [
  {
    id: 5,
    title: "Inception",
    releaseYear: 2024,
    genres: ["sci-fi", "action"],
    duration: "2h 10m",
    rating: 0,
    status: "upcoming",
    contentRating: "PG-13",
    releaseDate: "Apr 28, 2024",
    poster: "./imgs/inception.jpg",
  },
  {
    id: 6,
    title: "Bolice",
    releaseYear: 2024,
    genres: ["thriller", "comedy"],
    duration: "1h 58m",
    rating: 0,
    status: "upcoming",
    contentRating: "PG",
    releaseDate: "May 15, 2024",
    poster: "./imgs/boulice.png",
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
    poster: "./imgs/dachra.png",
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
    poster: "./imgs/spiderman.png",
  },
];

const trailerUrls = {
  1: "https://www.youtube.com/embed/hDZ7y8RP5HE",
  2: "https://www.youtube.com/embed/mGYNGk0O0PM",
  3: "https://www.youtube.com/embed/8ARqmkbXJLU",
  4: "https://www.youtube.com/embed/nt8yOBic55c?si=bqgsgI5VUXuOoQaS",
  5: "https://www.youtube.com/embed/YoHD9XEInc0?si=MTAtK9TZBoPOZZtu",
  6: "https://www.youtube.com/embed/l_wyg8Vd1IA?si=PoNJRkWrpNMq9WB_",
  7: "https://www.youtube.com/embed/a5_WTF7KtYQ?si=nb9nVCPfWnff90S4",
  8: "https://www.youtube.com/embed/JfVOs4VSpmA?si=hhG4-vIRcdidBr5o"
};
movies.forEach(m => m.trailerUrl = trailerUrls[m.id] || null);
upcomingMovies.forEach(m => m.trailerUrl = trailerUrls[m.id] || null);

// Function to create movie cards
function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");
  movieCard.setAttribute("data-id", movie.id);

  movieCard.innerHTML = `
    <div class="movie-poster">
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-overlay">
        <div class="movie-actions">
          <button class="movie-action-btn watch-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="action-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            Watch Trailer
          </button>
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
      <div class="movie-rating">
        <div class="stars" style="--rating: ${movie.rating};"></div>
        <span>${movie.rating}</span>
      </div>
    </div>
  `;

  movieCard.addEventListener("click", () => {
    window.location.href = `movie-details.html?id=${movie.id}`;
  });

  return movieCard;
}

// Function to create upcoming movie cards
function createUpcomingMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card", "upcoming");
  movieCard.setAttribute("data-id", movie.id);

  movieCard.innerHTML = `
    <div class="movie-poster">
      <div class="release-date">${movie.releaseDate}</div>
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-overlay">
        <div class="movie-actions">
          <button class="movie-action-btn remind-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Remind Me
          </button>
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
      <div class="genre-tags">
        ${movie.genres
          .map((genre) => `<span class="genre-tag">${genre}</span>`)
          .join("")}
      </div>
    </div>
  `;

  movieCard.addEventListener("click", () => {
    window.location.href = `movie-details.html?id=${movie.id}`;
  });

  return movieCard;
}

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Load movie cards
document.addEventListener("DOMContentLoaded", function () {
  // Load now playing movies
  const nowPlayingContainer = document.getElementById("now-playing-movies");
  movies.forEach((movie) => {
    nowPlayingContainer.appendChild(createMovieCard(movie));
  });

  // Load upcoming movies
  const upcomingContainer = document.getElementById("upcoming-movies");
  upcomingMovies.forEach((movie) => {
    upcomingContainer.appendChild(createUpcomingMovieCard(movie));
  });

  // Add fade-in animations
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkFade() {
    fadeElements.forEach((element) => {
      if (isInViewport(element) && !element.classList.contains("visible")) {
        element.classList.add("visible");
      }
    });
  }

  // Initial check
  checkFade();

  // Check on scroll
  window.addEventListener("scroll", checkFade);

  // Add hero animation
  const hero = document.querySelector(".hero");
  setTimeout(() => {
    hero.classList.add("loaded");
  }, 300);

  // Modal & Notification Setup
  const trailerModal = document.getElementById('trailer-modal');
  const closeModalBtn = trailerModal.querySelector('.close-btn');
  const trailerContent = document.getElementById('trailer-content');

  function openTrailerModal(trailerUrl) {
    if (trailerUrl && trailerUrl.startsWith('http')) {
      trailerContent.innerHTML = `<iframe src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      trailerModal.classList.add('show');
    } else {
      trailerContent.innerHTML = '<p>Trailer not available.</p>';
      trailerModal.classList.add('show');
      console.warn('Invalid or missing trailer URL:', trailerUrl);
    }
  }

  function closeTrailerModal() {
    trailerModal.classList.remove('show');
    trailerContent.innerHTML = '';
  }

  closeModalBtn.addEventListener('click', closeTrailerModal);
  trailerModal.addEventListener('click', (event) => { if (event.target === trailerModal) closeTrailerModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && trailerModal.classList.contains('show')) closeTrailerModal(); });

  const notificationContainer = document.getElementById('notification-container');
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerHTML = `<span>${message}</span>`;
    notificationContainer.appendChild(notification);
    setTimeout(() => { notification.remove(); }, 5000);
  }

  // Add click handlers for movie action buttons
  document.querySelectorAll(".watch-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const movieCard = btn.closest(".movie-card");
      const movieId = parseInt(movieCard.getAttribute("data-id"), 10);
      const movie = movies.find(m => m.id === movieId) || upcomingMovies.find(m => m.id === movieId);
      if (movie && movie.trailerUrl) openTrailerModal(movie.trailerUrl); else openTrailerModal(null);
    });
  });

  document.querySelectorAll(".remind-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const movieCard = btn.closest(".movie-card");
      const movieTitle = movieCard.querySelector('.movie-title')?.textContent || 'this movie';
      showNotification(`Reminder set for ${movieTitle}!`, 'success');
    });
  });

  document.querySelectorAll(".info-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const movieCard = btn.closest(".movie-card");
      const movieId = movieCard.getAttribute("data-id");
      window.location.href = `movie-details.html?id=${movieId}`;
    });
  });
});
