import './Header.css';

function Header({ title = "Frigo Anti-Gaspillage" }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">
          <span className="header__icon">🥬</span>
          {title}
        </h1>
      </div>
    </header>
  );
}

export default Header;
