const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function HomePage(props) {
  return (
    <Layout>
      <Navbar></Navbar>
    </Layout>
  );
};
