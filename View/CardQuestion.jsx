const React = require('react');


    <div data-id={el.id} className="container">


      <div>{el.question}</div>
      <form action="/" method="post" className="form">

        <input type="text" name="input" />
        <button className="answerButton" type="click">Рискуем</button>
      </form>
    </div>

  );
};
