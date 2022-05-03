import { useState } from 'react'
import './Grid.css'
import { Movie } from '../../models/Movie'
import { testData } from './movieData'


interface Props {
  searchString: string;
}
const MovieGrid = (props: Props) => {
	const [movies, setMovies] = useState<Movie[]>(testData)

	// computed property
	let filteredMovies: Movie[] = movies.filter(movie => {
		if( props.searchString === '' ) return true;
		return movie.title.toLowerCase().includes(props.searchString.toLowerCase()) || movie.premiereDate.includes(props.searchString);
	})
	// movies.filter --> ger en ny lista

	return (
    <main className='card-grid'>
      {filteredMovies.map((movie) => (
        <section key={movie.id} className='card'>
          <img className='image' src={movie.imageUrl} />
          <h3> {movie.title} </h3>
          <p> {movie.premiereDate} </p>
        </section>
      ))}
    </main>
  );
};

export default MovieGrid
