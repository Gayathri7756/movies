// Movie Data with verified working poster images from TMDB
const moviesData = {
    trending: [
        { title: "Oppenheimer", image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", category: "trending" },
        { title: "Barbie", image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", category: "trending" },
        { title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", category: "trending" },
        { title: "Inception", image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", category: "trending" },
        { title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", category: "trending" },
        { title: "The Matrix", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", category: "trending" },
        { title: "Avatar The Way of Water", image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", category: "trending" },
        { title: "Top Gun Maverick", image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", category: "trending" },
        { title: "Everything Everywhere All at Once", image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", category: "trending" },
        { title: "The Batman", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", category: "trending" }
    ],
    popular: [
        { title: "Avengers Endgame", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", category: "popular" },
        { title: "Spider-Man No Way Home", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", category: "popular" },
        { title: "Joker", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", category: "popular" },
        { title: "Black Panther", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", category: "popular" },
        { title: "Dune", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", category: "popular" },
        { title: "Guardians of the Galaxy Vol. 3", image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", category: "popular" },
        { title: "Doctor Strange", image: "https://image.tmdb.org/t/p/w500/4G6FNNLSIVrwSRZyFs91hQ3lZtD.jpg", category: "popular" },
        { title: "Thor Love and Thunder", image: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", category: "popular" },
        { title: "Black Panther Wakanda Forever", image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg", category: "popular" },
        { title: "Ant-Man and the Wasp Quantumania", image: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg", category: "popular" }
    ],
    topRated: [
        { title: "The Shawshank Redemption", image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", category: "topRated" },
        { title: "The Godfather", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", category: "topRated" },
        { title: "The Godfather Part II", image: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", category: "topRated" },
        { title: "Schindler's List", image: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", category: "topRated" },
        { title: "12 Angry Men", image: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg", category: "topRated" },
        { title: "The Green Mile", image: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", category: "topRated" },
        { title: "Pulp Fiction", image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", category: "topRated" },
        { title: "Forrest Gump", image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", category: "topRated" },
        { title: "Fight Club", image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", category: "topRated" },
        { title: "The Lord of the Rings", image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", category: "topRated" }
    ],
    action: [
        { title: "Mad Max Fury Road", image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg", category: "action" },
        { title: "John Wick", image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", category: "action" },
        { title: "Die Hard", image: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", category: "action" },
        { title: "Terminator 2", image: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg", category: "action" },
        { title: "Mission Impossible Fallout", image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", category: "action" },
        { title: "The Raid", image: "https://image.tmdb.org/t/p/w500/yXCbOiVDCxO71zI7cuwBRXdftq8.jpg", category: "action" },
        { title: "Gladiator", image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", category: "action" },
        { title: "The Bourne Ultimatum", image: "https://image.tmdb.org/t/p/w500/5aw4KYKFilYTKBJVcH3ySDJJ7Hn.jpg", category: "action" },
        { title: "Casino Royale", image: "https://image.tmdb.org/t/p/w500/zlWBxz2pTA9p45kUThxiUrXhkdf.jpg", category: "action" },
        { title: "Extraction", image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg", category: "action" }
    ],
    comedy: [
        { title: "The Grand Budapest Hotel", image: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg", category: "comedy" },
        { title: "Superbad", image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", category: "comedy" },
        { title: "The Hangover", image: "https://image.tmdb.org/t/p/w500/uluhlXhjRbRs4YyPy0N9xVjCUXx.jpg", category: "comedy" },
        { title: "Bridesmaids", image: "https://image.tmdb.org/t/p/w500/gJtA7hYsBMQ7EM3sPBMUdBfU7a0.jpg", category: "comedy" },
        { title: "Step Brothers", image: "https://image.tmdb.org/t/p/w500/wRR62XHgEGGCbr6WKtb7Y4YuGpI.jpg", category: "comedy" },
        { title: "Anchorman", image: "https://image.tmdb.org/t/p/w500/7f2CH2RvZZP6sTVe7Hhzfz0Aw0k.jpg", category: "comedy" },
        { title: "Tropic Thunder", image: "https://image.tmdb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg", category: "comedy" },
        { title: "21 Jump Street", image: "https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg", category: "comedy" },
        { title: "The Other Guys", image: "https://image.tmdb.org/t/p/w500/wNEHwC36WkJWrHSxmPFnZeYdVxA.jpg", category: "comedy" },
        { title: "Knives Out", image: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg", category: "comedy" }
    ]
};

// Default fallback poster image
const DEFAULT_POSTER = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

// Create movie card element with fallback handling
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const img = document.createElement('img');
    img.src = movie.image;
    img.alt = movie.title;
    img.className = 'movie-poster';
    img.loading = 'lazy';
    
    // Add error handling for images - fallback to default poster
    img.onerror = function() {
        console.warn(`Failed to load image for ${movie.title}, using fallback`);
        this.onerror = null; // Prevent infinite loop
        this.src = DEFAULT_POSTER;
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
    
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }
    
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
    
    if (!navbar) return;
    
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
    
    console.log('StreamFlix loaded successfully with', 
        Object.values(moviesData).reduce((sum, arr) => sum + arr.length, 0), 
        'movies');
});
