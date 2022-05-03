import './Header.css'

interface Props {
  searchString: string;
  setSearchString: (s: string) => void;
}
const Header = (props: Props) => (
  <header>
    <h1> Hollywood watch </h1>
    <input type='text' value={props.searchString}
			onChange={ event => props.setSearchString(event.target.value) } />
    <span className='magnify-search'>🔍</span>
  </header>
);

export default Header
