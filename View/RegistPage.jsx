const React = require('react');
const Layout = require('./Layout');

module.exports = function RegistPage() {

  return (
    <Layout>
      <dir className='register'>Зарегистрируйтесь<div className = 'name'>
        <form action="/registration" method="POST">
          <input type="text" placeholder="Enter Name" name="name" required />
          <button type="submit" className="button">Тыркни меня!  </button>
        </form>
      </div></dir>
      
    </Layout>
  );
};

