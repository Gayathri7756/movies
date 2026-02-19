// Movie Data
const moviesData = {
    trending: [
        { title: "The Dark Knight", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400", category: "trending" },
        { title: "Inception", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400", category: "trending" },
        { title: "Interstellar", image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400", category: "trending" },
        { title: "The Matrix", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400", category: "trending" },
        { title: "Pulp Fiction", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400", category: "trending" },
        { title: "Fight Club", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400", category: "trending" },
        { title: "Forrest Gump", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400", category: "trending" }
    ],
    popular: [
        { title: "Avengers Endgame", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", category: "popular" },
        { title: "Spider-Man", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400", category: "popular" },
        { title: "Joker", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400", category: "popular" },
        { title: "Black Panther", image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400", category: "popular" },
        { title: "Dune", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", category: "popular" },
        { title: "Oppenheimer", image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400", category: "popular" },
        { title: "Barbie", image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400", category: "popular" }
    ],
    topRated: [
        { title: "The Shawshank Redemption", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400", category: "topRated" },
        { title: "The Godfather", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400", category: "topRated" },
        { title: "Schindler's List", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400", category: "topRated" },
        { title: "12 Angry Men", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400", category: "topRated" },
        { title: "The Green Mile", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400", category: "topRated" },
        { title: "Goodfellas", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400", category: "topRated" },
        { title: "Casablanca", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400", category: "topRated" }
    ],
    action: [
        { title: "Mad Max Fury Road", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", category: "action" },
        { title: "John Wick", image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400", category: "action" },
        { title: "Die Hard", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400", category: "action" },
        { title: "Terminator 2", image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400", category: "action" },
        { title: "Mission Impossible", image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400", category: "action" },
        { title: "The Raid", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400", category: "action" },
        { title: "Gladiator", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", category: "action" }
    ],
    comedy: [
        { title: "The Grand Budapest Hotel", image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400", category: "comedy" },
        { title: "Superbad", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400", category: "comedy" },
        { title: "The Hangover", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400", category: "comedy" },
        { title: "Bridesmaids", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400", category: "comedy" },
        { title: "Step Brothers", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400", category: "comedy" },
        { title: "Anchorman", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400", category: "comedy" },
        { title: "Tropic Thunder", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400", category: "comedy" }
    ]
};

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
        <div class="movie-title">${movie.title}</div>
    `;
    
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
