// Movie Data - Using reliable placeholder.com images
const moviesData = {
    trending: [
        { title: "The Dark Knight", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=The+Dark+Knight", category: "trending" },
        { title: "Inception", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Inception", category: "trending" },
        { title: "Interstellar", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Interstellar", category: "trending" },
        { title: "The Matrix", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=The+Matrix", category: "trending" },
        { title: "Pulp Fiction", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Pulp+Fiction", category: "trending" },
        { title: "Fight Club", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Fight+Club", category: "trending" },
        { title: "Forrest Gump", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Forrest+Gump", category: "trending" }
    ],
    popular: [
        { title: "Avengers Endgame", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Avengers+Endgame", category: "popular" },
        { title: "Spider-Man", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Spider-Man", category: "popular" },
        { title: "Joker", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Joker", category: "popular" },
        { title: "Black Panther", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Black+Panther", category: "popular" },
        { title: "Dune", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Dune", category: "popular" },
        { title: "Oppenheimer", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Oppenheimer", category: "popular" },
        { title: "Barbie", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Barbie", category: "popular" }
    ],
    topRated: [
        { title: "The Shawshank Redemption", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Shawshank", category: "topRated" },
        { title: "The Godfather", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=The+Godfather", category: "topRated" },
        { title: "Schindler's List", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Schindler's+List", category: "topRated" },
        { title: "12 Angry Men", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=12+Angry+Men", category: "topRated" },
        { title: "The Green Mile", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=The+Green+Mile", category: "topRated" },
        { title: "Goodfellas", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Goodfellas", category: "topRated" },
        { title: "Casablanca", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Casablanca", category: "topRated" }
    ],
    action: [
        { title: "Mad Max Fury Road", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Mad+Max", category: "action" },
        { title: "John Wick", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=John+Wick", category: "action" },
        { title: "Die Hard", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Die+Hard", category: "action" },
        { title: "Terminator 2", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Terminator+2", category: "action" },
        { title: "Mission Impossible", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Mission+Impossible", category: "action" },
        { title: "The Raid", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=The+Raid", category: "action" },
        { title: "Gladiator", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Gladiator", category: "action" }
    ],
    comedy: [
        { title: "The Grand Budapest Hotel", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Grand+Budapest", category: "comedy" },
        { title: "Superbad", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Superbad", category: "comedy" },
        { title: "The Hangover", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=The+Hangover", category: "comedy" },
        { title: "Bridesmaids", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Bridesmaids", category: "comedy" },
        { title: "Step Brothers", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Step+Brothers", category: "comedy" },
        { title: "Anchorman", image: "https://placehold.co/400x600/1a1a1a/ffffff?text=Anchorman", category: "comedy" },
        { title: "Tropic Thunder", image: "https://placehold.co/400x600/2c2c2c/ffffff?text=Tropic+Thunder", category: "comedy" }
    ]
};

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const img = document.createElement('img');
    img.src = movie.image;
    img.alt = movie.title;
    img.className = 'movie-poster';
    img.loading = 'lazy';
    
    // Add error handling for images
    img.onerror = function() {
        this.src = `https://via.placeholder.com/400x600/1a1a1a/ffffff?text=${encodeURIComponent(movie.title)}`;
    };
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'movie-title';
    titleDiv.textContent = movie.title;
    
    card.appendChild(img);
    card.appendChild(titleDiv);
    
    return card;
}

// Populate movie rows
function populateMovieRow(containerId, movies) {
    const container = document.getElementById(containerId);
    
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// Initialize all movie rows
function initializeMovieRows() {
    populateMovieRow('trending', moviesData.trending);
    populateMovieRow('popular', moviesData.popular);
    populateMovieRow('topRated', moviesData.topRated);
    populateMovieRow('action', moviesData.action);
    populateMovieRow('comedy', moviesData.comedy);
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeMovieRows();
    handleNavbarScroll();
    
    console.log('StreamFlix loaded successfully!');
});
