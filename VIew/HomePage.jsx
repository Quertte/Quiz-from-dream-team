const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar')

module.exports = function HomePage(props) {
  return (
    <Layout>
            <Navbar/>
      <h1>Викторина</h1>
    </Layout>
  );
};
