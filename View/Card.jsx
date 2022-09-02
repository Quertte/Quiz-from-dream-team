const React = require('react');

module.exports = function Card({ thema }) {
  return (
    <div className = 'theme'><a href='#' className={thema.id} style={{color:'white'}}>
        { thema.title }
      </a></div>
      
     
  );
};
