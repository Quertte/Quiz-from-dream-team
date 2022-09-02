const React = require('react')

module.exports = function Navbar() {
  return (<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/registration">Регистрация</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/aboutgame">Об игре</a>
  </li>
</ul>)
  
}