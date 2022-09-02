const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card')

module.exports = function ThemePage( { themeArr} ) {
  return (
    <Layout>
      {/* <h1>Выбирай, в чем опопзориться</h1>
      <div>
        <form action="/themes" method="POST">
          <input type="text" placeholder="Enter Name" name="name" required />
          <button type="submit" className="button"> Тыркни меня!</button>
        </form>
      </div> */}

      {themeArr.map((thema) => <Card key={thema.id} thema={thema}/>)}
    </Layout>
  );
};