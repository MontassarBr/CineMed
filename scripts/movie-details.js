(function() {
  const params = new URLSearchParams(window.location.search);
  const movieId = parseInt(params.get('id'), 10);

  const moviesList = [];
  if (typeof allMovies !== 'undefined') moviesList.push(...allMovies);
  if (typeof upcomingMovies !== 'undefined') moviesList.push(...upcomingMovies);
  const movie = moviesList.find(m => m.id === movieId);

  // Populate details or show not found
  const titleEl = document.getElementById('details-title');
  const posterEl = document.getElementById('details-poster');
  const descEl = document.getElementById('details-description');
  const listEl = document.getElementById('details-list');

  if (!movie) {
    titleEl.textContent = 'Movie not found';
    descEl.textContent = '';
    listEl.innerHTML = '';
    return;
  }

  // Set poster and title
  posterEl.src = movie.poster;
  posterEl.alt = movie.title;
  titleEl.textContent = `${movie.title} (${movie.releaseYear})`;

  // Synopsis (placeholder if not provided)
  descEl.textContent = movie.description || 'Synopsis not available.';

  // Details list
  listEl.innerHTML = '';
  const details = [
    { label: 'Genres', value: movie.genres.join(', ') },
    { label: 'Duration', value: movie.duration },
    { label: 'Rating', value: movie.rating },
    { label: 'Content Rating', value: movie.contentRating }
  ];
  if (movie.releaseDate) {
    details.push({ label: 'Release Date', value: movie.releaseDate });
  }
  details.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
    listEl.appendChild(li);
  });

  // Trailer modal logic
  const watchBtn = document.getElementById('watch-trailer-btn');
  const trailerModal = document.getElementById('trailer-modal');
  const trailerContent = document.getElementById('trailer-content');
  const closeBtn = trailerModal.querySelector('.close-btn');

  function openModal() {
    if (movie.trailerUrl) {
      trailerContent.innerHTML = `<iframe src="${movie.trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      trailerContent.innerHTML = '<p>Trailer not available.</p>';
    }
    trailerModal.classList.add('show');
  }

  function closeModal() {
    trailerModal.classList.remove('show');
    trailerContent.innerHTML = '';
  }

  if (watchBtn) watchBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  trailerModal.addEventListener('click', e => {
    if (e.target === trailerModal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && trailerModal.classList.contains('show')) {
      closeModal();
    }
  });
})();
