const React = require('react');

module.exports = function Card({ thema }) {
  return (
    <a href={`/themes/${thema.id}`}>
      { thema.title }
    </a>
  );
};
