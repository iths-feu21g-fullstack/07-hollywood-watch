import './Header.css'

interface Props {
	searchString: string;
}
const Header = (props: Props) => (
  <header>
    <h1> Hollywood watch </h1>
    <input type='text' />
    <span className='magnify-search'>🔍</span>
  </header>
);

export default Header
