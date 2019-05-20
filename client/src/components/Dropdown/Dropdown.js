import React, { Component } from 'react';
import "./Dropdown.css";

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className="row dropdown">
        <button className='dropdown-trigger btn col l12' onClick={this.showMenu}>
          Chose activity
        </button>
        <br></br>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <br></br>
                <button className="btn filter-activity"> Basketball </button><br></br>
                <button className="btn filter-activity"> Tennis </button><br></br>
                <button className="btn filter-activity"> Soccer </button><br></br>
                <button className="btn filter-activity"> Running </button><br></br>
                <button className="btn filter-activity"> Football </button><br></br>
                <button className="btn filter-activity"> Beach Yoga </button><br></br>
                <button className="btn filter-activity"> Golf </button><br></br>
                <button className="btn filter-activity"> Volleyball </button><br></br>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}


export default Dropdown;