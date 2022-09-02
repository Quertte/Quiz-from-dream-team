const React = require('react');
const Layout = require('./Layout');

module.exports = function RegistPage() {
  return (
    <Layout>
      <h1>Зарегистрируйтесь</h1>
      <div>
        <form action="/registration" method="POST">
          <input type="text" placeholder="Enter Name" name="name" required />
          <button type="submit" className="button"> Тыркни меня!</button>
        </form>
      </div>
    </Layout>
  );
};
