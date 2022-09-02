const React = require('react');

module.exports = function CardQuestion({ el }) {
  return (
    <div data-id={el.id} className="container">

      <div>{el.question}</div>
      <form action="/" method="post" className="form">

        <input type="text" name="input" />
        <button className="answerButton" type="click">Рискуем</button>
      </form>
    </div>

  );
};
