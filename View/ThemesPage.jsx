const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card')

module.exports = function ThemePage( { themeArr} ) {
  return (
    <Layout>
      <div className = 'theme'>  {themeArr.map((thema) => <Card key={thema.id} thema={thema} />)}</div>
    
    </Layout>
  );
};