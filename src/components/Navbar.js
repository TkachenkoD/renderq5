import React, {Component} from 'react';

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar">
            <div className="nav-center">
              <div className="nav-header">
                {/* <Link to="/"> */}
                  {/* <img src={logo} alt="Beach Resort" /> */}
                {/* </Link> */}
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}
                >
                  {/* <FaAlignRight className="nav-icon" /> */}
                </button>
              </div>
              <ul
                // className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
              >
                <li>
                  {/* <Link to="/">Home</Link> */} Cars
                </li>
                <li>
                  {/* <Link to="/rooms">Rooms</Link> */} Get Order
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}