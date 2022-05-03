import { useState } from 'react'
import './Grid.css'
import { Movie } from '../../models/Movie'
import { testData } from './movieData'


interface Props {
  searchString: string;
}
const MovieGrid = (props: Props) => {
	const [movies, setMovies] = useState<Movie[]>(testData)

	return (
    <main className='card-grid'>
      {movies.map((movie) => (
        <section key={movie.id} className='card'>
          <div className='image'> {movie.imageUrl} </div>
          <h3> {movie.title} </h3>
          <p> {movie.premiereDate} </p>
        </section>
      ))}
    </main>
  );
};

export default MovieGrid
