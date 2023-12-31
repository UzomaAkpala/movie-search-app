import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}

export default Navbar;
