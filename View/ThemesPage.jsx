const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemePage() {
  return (
    <Layout>
      <h1>Выбирай, в чем опопзориться</h1>
      <div>
        <form action="/themes" method="POST">
          <input type="text" placeholder="Enter Name" name="name" required />
          <button type="submit" className="button"> Тыркни меня!</button>
        </form>
      </div>
    </Layout>
  );
};