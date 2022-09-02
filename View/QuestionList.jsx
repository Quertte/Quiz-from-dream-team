const React = require('react');
const Layout = require('./Layout');
const CardQuestion = require('./CardQuestion');

module.exports = function QuestionPage({ questions }) {
  return (
    <Layout>
      {/* {themeArr.map((thema) => <Card key={thema.id} thema={thema}/>)} */}
      <div className="allQuestion">
        {questions.map((el) => <CardQuestion el={el} />)}
      </div>
    </Layout>
  );
};
