import { Link } from "react-router-dom";

const DefaultHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Магазинчик</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Головна</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add_product">Додати продукт</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/register">Реєстрація</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">Вхід</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
