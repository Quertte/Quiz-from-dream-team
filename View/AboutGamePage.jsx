const React = require('react');
const Layout = require('./Layout');

module.exports = function AboutGame() {
  return (
    <Layout>
      <dir className="bg-text">
        Купился? Cыграй и узнаешь!<dir className="return">
         <a style = {{color:'white'}}href='/'>ВЕРНУТЬСЯ</a> </dir>
      </dir>
    </Layout>
  );
};
