const React = require('react')
const Navbar = require('./Navbar')

module.exports = function ({title,children}) {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      <Navbar/>
      {children}
    </body>
    </html>
  )
}