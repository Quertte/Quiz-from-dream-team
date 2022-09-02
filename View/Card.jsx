const React = require('react');

module.exports = function Card({ thema }) {
  return (

    <div ><a href={`/themes/${thema.id}`} className={thema.id} style={{color:'white'}}>
        { thema.title }
      </a></div>
    
    
    

  );
};
