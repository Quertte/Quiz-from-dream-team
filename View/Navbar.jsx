const React = require('react');

module.exports = function Navbar() {
  return (
   <div className = "bg-navbar"><ul>
      <li >
        <a style={{color:'white',fontSize:'20px'}} href="/registration">Регистрация</a>
      </li>
      <li >
        <a style={{color:'white',fontSize:'20px'}} href="/aboutgame">Об игре</a>
      </li>
    </ul></div>
    
  );
};
