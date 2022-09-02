const React = require('react');

module.exports = function CardQuestion({ el }) {
  return (
    <div id={el.id} className="container">

      <div>{el.question}</div>
      <input type="text" />
      <button className='answerButton' type='click'>Рискуем</button>
    </div>

  );
};
