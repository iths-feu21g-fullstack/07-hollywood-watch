import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import MovieGrid from './components/grid/MovieGrid'

const App = () => {
	const [searchString, setSearchString] = useState<string>('')
	return (
    <>
      <Header searchString={searchString} setSearchString={setSearchString} />
      <MovieGrid searchString={searchString} />
    </>
  );
}

export default App
