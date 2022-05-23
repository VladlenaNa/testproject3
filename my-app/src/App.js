import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import { Routes, Route, Link } from "react-router-dom";
import Films from './components/Films/Films';
import Search from './components/Search/Search';
import TMDB from './components/FooterNavigation/TMDB';
import Contact from './components/FooterNavigation/Contact';
import General from './components/FAQMenu/General';
import TVShows from './components/TVShows/TVShows';

export async function getPopularMovies() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/movie/popular/?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}

export async function getUpcomingMovies() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
        return data.results
	})
	.catch(err => alert(err));
}

export async function getTrendingMovies() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}

export async function searchMovie(title) {
  console.log(title)
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+title)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => alert(err))
}

export async function getFilteredMovies(genres, page, filter, releaseDateGte, releaseDateLte) {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&page=1&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => {
		alert(err)
		return []
	});
}

export async function getFilteredTVShows(genres, page, filter, releaseDateGte, releaseDateLte) {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/discover/tv?api_key='+apiKey+'&page=1&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => alert(err));
}

export async function getPopularTVShows() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/tv/popular/?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}

function App() {
  //методы апи
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Films' element={<Films/>}/>
      <Route path='/TvShow' element={<TVShows/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/TMDB' element={<TMDB/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/General' element={<General/>}/>
      <Route path='/Main' element={<Main/>}/>
    </Routes>
  );
}

export default App;
// import { Routes, Route, Link } from "react-router-dom";

// export default function App() {
// 	return (
// 		<div>
// 			<h1>Welcome to React Router!</h1>
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="about" element={<About />} />
// 			</Routes>
// 		</div>
// 	);
// }

// function Home() {
// 	return (
// 		<>
// 			<main>
// 				<h2>Welcome to the homepage!</h2>
// 				<p>You can do this, I believe in you.</p>
// 			</main>
// 			<nav>
// 				<Link to="/about">About</Link>
// 			</nav>
// 		</>
// 	);
// }

// function About() {
// 	return (
// 		<>
// 			<main>
// 				<h2>Who are we?</h2>
// 				<p>
// 					That feels like an existential question, don't you
// 					think?
// 				</p>
// 			</main>
// 			<nav>
// 				<Link to="/">Home</Link>
// 			</nav>
// 		</>
// 	);
// }