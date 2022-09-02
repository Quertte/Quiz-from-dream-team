const React = require('react');

module.exports = function Card({ thema }) {
  return (
      <a href='#' className={thema.id}>
        { thema.title }
      </a>
  );
};
