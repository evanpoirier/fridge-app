import Header from './Header';
import './Layout.css';

function Layout({ children, title }) {
  return (
    <div className="layout">
      <Header title={title} />
      <main className="layout__content">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
