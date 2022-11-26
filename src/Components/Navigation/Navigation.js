import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navigation.css'

const Navigation = (props) =>{

    return(
        <form>
        <div>
          <nav class="navbar navbar-dark bg-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <label className="divStyle">Ract Coding challenge</label>
          </nav>
        </div>
      </form>
    );
}

export default Navigation;