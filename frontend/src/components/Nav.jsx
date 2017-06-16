import * as React from 'react';
import '../styles/Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="/">密码管理</a></li>
          </ul>
        </nav>  
      </div>  
    )
  }
}

export default Nav;