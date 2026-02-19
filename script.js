// Movie Data with real poster images from image.tmdb.org
const moviesData = {
    trending: [
        { title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", category: "trending" },
        { title: "Inception", image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", category: "trending" },
        { title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", category: "trending" },
        { title: "The Matrix", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", category: "trending" },
        { title: "Pulp Fiction", image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", category: "trending" },
        { title: "Fight Club", image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", category: "trending" },
        { title: "Forrest Gump", image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", category: "trending" }
    ],
    popular: [
        { title: "Avengers Endgame", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", category: "popular" },
        { title: "Spider-Man", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", category: "popular" },
        { title: "Joker", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", category: "popular" },
        { title: "Black Panther", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", category: "popular" },
        { title: "Dune", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", category: "popular" },
        { title: "Oppenheimer", image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", category: "popular" },
        { title: "Barbie", image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", category: "popular" }
    ],
    topRated: [
        { title: "The Shawshank Redemption", image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", category: "topRated" },
        { title: "The Godfather", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", category: "topRated" },
        { title: "Schindler's List", image: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", category: "topRated" },
        { title: "12 Angry Men", image: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg", category: "topRated" },
        { title: "The Green Mile", image: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", category: "topRated" },
        { title: "Goodfellas", image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", category: "topRated" },
        { title: "Casablanca", image: "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg", category: "topRated" }
    ],
    action: [
        { title: "Mad Max Fury Road", image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg", category: "action" },
        { title: "John Wick", image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", category: "action" },
        { title: "Die Hard", image: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", category: "action" },
        { title: "Terminator 2", image: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg", category: "action" },
        { title: "Mission Impossible", image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", category: "action" },
        { title: "The Raid", image: "https://image.tmdb.org/t/p/w500/mDQjGxMkN6XoWr6l6pFLxGmTrj5.jpg", category: "action" },
        { title: "Gladiator", image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", category: "action" }
    ],
    comedy: [
        { title: "The Grand Budapest Hotel", image: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg", category: "comedy" },
        { title: "Superbad", image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", category: "comedy" },
        { title: "The Hangover", image: "https://image.tmdb.org/t/p/w500/uluhlXhjRbRs4YyPy0N9xVjCUXx.jpg", category: "comedy" },
        { title: "Bridesmaids", image: "https://image.tmdb.org/t/p/w500/gJtA7hYsBMQ7EM3sPBMUdBfU7a0.jpg", category: "comedy" },
        { title: "Step Brothers", image: "https://image.tmdb.org/t/p/w500/wRR62XHgEGGCbr6WKtb7Y4YuGpI.jpg", category: "comedy" },
        { title: "Anchorman", image: "https://image.tmdb.org/t/p/w500/7f2CH2RvZZP6sTVe7Hhzfz0Aw0k.jpg", category: "comedy" },
        { title: "Tropic Thunder", image: "https://image.tmdb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg", category: "comedy" }
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
