// Movie Data - Using placeholder images that work reliably
const moviesData = {
    trending: [
        { title: "The Dark Knight", image: "https://picsum.photos/seed/dark-knight/400/600", category: "trending" },
        { title: "Inception", image: "https://picsum.photos/seed/inception/400/600", category: "trending" },
        { title: "Interstellar", image: "https://picsum.photos/seed/interstellar/400/600", category: "trending" },
        { title: "The Matrix", image: "https://picsum.photos/seed/matrix/400/600", category: "trending" },
        { title: "Pulp Fiction", image: "https://picsum.photos/seed/pulp-fiction/400/600", category: "trending" },
        { title: "Fight Club", image: "https://picsum.photos/seed/fight-club/400/600", category: "trending" },
        { title: "Forrest Gump", image: "https://picsum.photos/seed/forrest-gump/400/600", category: "trending" }
    ],
    popular: [
        { title: "Avengers Endgame", image: "https://picsum.photos/seed/avengers/400/600", category: "popular" },
        { title: "Spider-Man", image: "https://picsum.photos/seed/spiderman/400/600", category: "popular" },
        { title: "Joker", image: "https://picsum.photos/seed/joker/400/600", category: "popular" },
        { title: "Black Panther", image: "https://picsum.photos/seed/black-panther/400/600", category: "popular" },
        { title: "Dune", image: "https://picsum.photos/seed/dune/400/600", category: "popular" },
        { title: "Oppenheimer", image: "https://picsum.photos/seed/oppenheimer/400/600", category: "popular" },
        { title: "Barbie", image: "https://picsum.photos/seed/barbie/400/600", category: "popular" }
    ],
    topRated: [
        { title: "The Shawshank Redemption", image: "https://picsum.photos/seed/shawshank/400/600", category: "topRated" },
        { title: "The Godfather", image: "https://picsum.photos/seed/godfather/400/600", category: "topRated" },
        { title: "Schindler's List", image: "https://picsum.photos/seed/schindlers/400/600", category: "topRated" },
        { title: "12 Angry Men", image: "https://picsum.photos/seed/12-angry/400/600", category: "topRated" },
        { title: "The Green Mile", image: "https://picsum.photos/seed/green-mile/400/600", category: "topRated" },
        { title: "Goodfellas", image: "https://picsum.photos/seed/goodfellas/400/600", category: "topRated" },
        { title: "Casablanca", image: "https://picsum.photos/seed/casablanca/400/600", category: "topRated" }
    ],
    action: [
        { title: "Mad Max Fury Road", image: "https://picsum.photos/seed/mad-max/400/600", category: "action" },
        { title: "John Wick", image: "https://picsum.photos/seed/john-wick/400/600", category: "action" },
        { title: "Die Hard", image: "https://picsum.photos/seed/die-hard/400/600", category: "action" },
        { title: "Terminator 2", image: "https://picsum.photos/seed/terminator/400/600", category: "action" },
        { title: "Mission Impossible", image: "https://picsum.photos/seed/mission/400/600", category: "action" },
        { title: "The Raid", image: "https://picsum.photos/seed/raid/400/600", category: "action" },
        { title: "Gladiator", image: "https://picsum.photos/seed/gladiator/400/600", category: "action" }
    ],
    comedy: [
        { title: "The Grand Budapest Hotel", image: "https://picsum.photos/seed/budapest/400/600", category: "comedy" },
        { title: "Superbad", image: "https://picsum.photos/seed/superbad/400/600", category: "comedy" },
        { title: "The Hangover", image: "https://picsum.photos/seed/hangover/400/600", category: "comedy" },
        { title: "Bridesmaids", image: "https://picsum.photos/seed/bridesmaids/400/600", category: "comedy" },
        { title: "Step Brothers", image: "https://picsum.photos/seed/step-brothers/400/600", category: "comedy" },
        { title: "Anchorman", image: "https://picsum.photos/seed/anchorman/400/600", category: "comedy" },
        { title: "Tropic Thunder", image: "https://picsum.photos/seed/tropic/400/600", category: "comedy" }
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
