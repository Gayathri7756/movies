import React, { useEffect, useState } from 'react'
import './App.css'

const TMDB_API_KEY = '6062ff36dd0c731bbd383d16'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMG_BASE = 'https://image.tmdb.org/t/p/original'

async function fetchJson(url, signal) {
  const res = await fetch(url, { signal })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res.json()
}

function buildUrl(path, params = {}) {
  const search = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params,
  })
  return `${TMDB_BASE_URL}${path}?${search.toString()}`
}

function useMoviesRow(path, params) {
  const [state, setState] = useState({
    items: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const data = await fetchJson(buildUrl(path, params), controller.signal)
        setState({
          items: data.results ?? [],
          loading: false,
          error: null,
        })
      } catch (err) {
        if (err.name === 'AbortError') return
        setState((prev) => ({
          ...prev,
          loading: false,
          error: 'Unable to load titles right now.',
        }))
      }
    }

    load()
    return () => controller.abort()
  }, [path, JSON.stringify(params)])

  return state
}

function MoviesRow({ title, path, params = {}, large }) {
  const { items, loading, error } = useMoviesRow(path, params)

  return (
    <section className="row">
      <h2 className="row__title">{title}</h2>
      {loading && <div className="row__empty">Loading…</div>}
      {error && !loading && <div className="row__error">{error}</div>}
      {!loading && !error && (
        <div className="row__scroller">
          {items.map((movie) => {
            const posterPath = large ? movie.poster_path : movie.backdrop_path || movie.poster_path
            const imgSrc = posterPath ? `${TMDB_IMG_BASE}${posterPath}` : null
            const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null

            return (
              <article key={movie.id} className="row__item" title={movie.title || movie.name}>
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={movie.title || movie.name}
                    className="row__poster"
                    loading="lazy"
                  />
                ) : (
                  <div className="row__poster row__placeholder">No image</div>
                )}
                <div className="row__info">
                  <div className="row__info-title">{movie.title || movie.name}</div>
                  {rating && <div className="row__info-rating">★ {rating}</div>}
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

function Hero({ movie }) {
  const hasMovie = Boolean(movie)
  const backdrop = hasMovie && (movie.backdrop_path || movie.poster_path)
  const backdropUrl = backdrop ? `${TMDB_IMG_BASE}${backdrop}` : null

  const year =
    hasMovie && movie.release_date ? new Date(movie.release_date).getFullYear() : null
  const rating = hasMovie && movie.vote_average ? movie.vote_average.toFixed(1) : null

  const title = hasMovie ? movie.title || movie.name : 'Money Heist'
  const overview =
    hasMovie && movie.overview
      ? movie.overview
      : 'A criminal mastermind who goes by “The Professor” plans the biggest heist in recorded history to print billions of euros in the Royal Mint of Spain.'

  return (
    <header className="app__hero">
      <div className="hero__backdrop">
        {backdropUrl && (
          <img
            src={backdropUrl}
            alt={title}
            className="hero__backdrop-img"
          />
        )}
        <div className="hero__backdrop-gradient" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <div className="hero__meta">
          {year && <span>{year}</span>}
          {year && rating && <span> • </span>}
          {rating && <span>IMDb {rating}</span>}
        </div>
        <p className="hero__overview">{overview}</p>
        <div className="hero__actions">
          <button className="hero__button hero__button--primary">
            <span className="hero__button-icon">▶</span>
            <span>Play</span>
          </button>
          <button className="hero__button hero__button--secondary">
            <span className="hero__button-icon">ℹ</span>
            <span>More info</span>
          </button>
        </div>
      </div>
    </header>
  )
}

function App() {
  const [trending, setTrending] = useState([])
  const [initialLoaded, setInitialLoaded] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadTrending() {
      try {
        const trendingData = await fetchJson(
          buildUrl('/trending/movie/week', {}),
          controller.signal,
        )
        const results = trendingData.results ?? []
        setTrending(results)
      } catch (e) {
        // fail silently; rows will still attempt to load individually
      } finally {
        setInitialLoaded(true)
      }
    }

    loadTrending()
    return () => controller.abort()
  }, [])

  const heroMovie = trending.length > 0 ? trending[0] : null

  return (
    <div className="app">
      <aside className="app__sidebar">
        <div className="sidebar__logo">N</div>
        <div className="sidebar__nav">
          <button className="sidebar__icon sidebar__icon--active">🏠</button>
          <button className="sidebar__icon">🔍</button>
          <button className="sidebar__icon">▶</button>
          <button className="sidebar__icon">★</button>
        </div>
      </aside>

      <div className="app__shell">
        <nav className="app__nav">
          <div className="nav__logo">NETFLIX</div>
          <div className="nav__actions">
            <button className="nav__button nav__button--lang">English</button>
            <button className="nav__button nav__button--signin">Sign In</button>
          </div>
        </nav>

        {initialLoaded ? <Hero movie={heroMovie} /> : <div className="app__loading">Loading movies…</div>}

        <main className="app__content">
          <div className="rows">
            {trending.length > 0 && (
              <section className="row">
                <h2 className="row__title">Trending Now</h2>
                <div className="row__scroller">
                  {trending.map((movie) => {
                    const posterPath = movie.poster_path || movie.backdrop_path
                    const imgSrc = posterPath ? `${TMDB_IMG_BASE}${posterPath}` : null
                    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null

                    return (
                      <article
                        key={movie.id}
                        className="row__item"
                        title={movie.title || movie.name}
                      >
                        {imgSrc ? (
                          <img
                            src={imgSrc}
                            alt={movie.title || movie.name}
                            className="row__poster"
                            loading="lazy"
                          />
                        ) : (
                          <div className="row__poster row__placeholder">No image</div>
                        )}
                        <div className="row__info">
                          <div className="row__info-title">{movie.title || movie.name}</div>
                          {rating && <div className="row__info-rating">★ {rating}</div>}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </section>
            )}
            <MoviesRow
              title="New this week"
              path="/movie/now_playing"
              params={{ region: 'US' }}
              large
            />
            <MoviesRow
              title="Top Rated"
              path="/movie/top_rated"
              params={{}}
            />
            <MoviesRow
              title="Popular on Netflix"
              path="/movie/popular"
              params={{}}
            />
          </div>
          <div className="app__footer-space" />
        </main>
      </div>
    </div>
  )
}

export default App
