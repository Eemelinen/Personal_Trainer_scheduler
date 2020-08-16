import React from 'react';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Customers <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Calender">Calender</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Trainings">Trainings</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;