const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemePage() {
  return (
    <Layout>
      <div>
        <form action="/themes" method="POST">
          <a href='#'> <button type="submit" className="button"> Тыркни меня!</button> </a>
          <a href='#'> <button type="submit" className="button"> Тыркни меня!</button> </a>
          <a href='#'> <button type="submit" className="button"> Тыркни меня!</button> </a>
        </form>
      </div>
    </Layout>
  );
};