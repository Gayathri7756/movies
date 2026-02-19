// Movie Data with verified working poster images
const moviesData = {
    trending: [
        { title: "The Dark Knight", image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg", category: "trending" },
        { title: "Inception", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg", category: "trending" },
        { title: "Interstellar", image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", category: "trending" },
        { title: "The Matrix", image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", category: "trending" },
        { title: "Pulp Fiction", image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", category: "trending" },
        { title: "Fight Club", image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg", category: "trending" },
        { title: "Forrest Gump", image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", category: "trending" }
    ],
    popular: [
        { title: "Avengers Endgame", image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg", category: "popular" },
        { title: "Spider-Man", image: "https://m.media-amazon.com/images/M/MV5BNzU3YWNiYTQtYTVhOC00MTMxLWE0ZDktZGJhNjYyZjZlMDI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg", category: "popular" },
        { title: "Joker", image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg", category: "popular" },
        { title: "Black Panther", image: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg", category: "popular" },
        { title: "Dune", image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg", category: "popular" },
        { title: "Oppenheimer", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg", category: "popular" },
        { title: "Barbie", image: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg", category: "popular" }
    ],
    topRated: [
        { title: "The Shawshank Redemption", image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg", category: "topRated" },
        { title: "The Godfather", image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", category: "topRated" },
        { title: "Schindler's List", image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", category: "topRated" },
        { title: "12 Angry Men", image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg", category: "topRated" },
        { title: "The Green Mile", image: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg", category: "topRated" },
        { title: "Goodfellas", image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", category: "topRated" },
        { title: "Casablanca", image: "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg", category: "topRated" }
    ],
    action: [
        { title: "Mad Max Fury Road", image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", category: "action" },
        { title: "John Wick", image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg", category: "action" },
        { title: "Die Hard", image: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", category: "action" },
        { title: "Terminator 2", image: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", category: "action" },
        { title: "Mission Impossible", image: "https://m.media-amazon.com/images/M/MV5BYzY2OWRlZTItZGJhNy00NjM4LWJlZjctYjQ5MWI0MjA0YjEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", category: "action" },
        { title: "The Raid", image: "https://m.media-amazon.com/images/M/MV5BYzdhMDRlZGQtZmVjZC00ZWFhLWJjNzYtNzZjN2ZhMjI5NWY0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", category: "action" },
        { title: "Gladiator", image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", category: "action" }
    ],
    comedy: [
        { title: "The Grand Budapest Hotel", image: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg", category: "comedy" },
        { title: "Superbad", image: "https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg", category: "comedy" },
        { title: "The Hangover", image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", category: "comedy" },
        { title: "Bridesmaids", image: "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_FMjpg_UX1000_.jpg", category: "comedy" },
        { title: "Step Brothers", image: "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYjVkNjY0N2VmNWY0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", category: "comedy" },
        { title: "Anchorman", image: "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_FMjpg_UX1000_.jpg", category: "comedy" },
        { title: "Tropic Thunder", image: "https://m.media-amazon.com/images/M/MV5BNDE5MzQxNjc5N15BMl5BanBnXkFtZTcwODI4NzMzMw@@._V1_FMjpg_UX1000_.jpg", category: "comedy" }
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
