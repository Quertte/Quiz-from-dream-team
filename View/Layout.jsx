const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/style/layout.css" />
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
