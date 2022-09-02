const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

       
        <link rel="stylesheet" href="/style/layout.css" />
        <script defer src="/client.js" />
        <title>{title}</title>
      </head>
      <body className="layout">
        <div className="fon"> </div>
        <div class="words word-1">
          <span>Q</span>
          <span>U</span>
          <span>I</span>
          <span>Z</span>
        </div>

        <div class="words word-2">
          <span>B</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
        </div>

        <div class="words word-3">
          <span>G</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
        </div>
        {children}
      </body>
    </html>
  );
};
