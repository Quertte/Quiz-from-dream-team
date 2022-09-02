const React = require('react');
const Layout = require('./Layout');
const CardQuestion = require('./CardQuestion');

module.exports = function QuestionPage({ questions }) {
  return (
    <Layout>
     
      <div className = "questions">
        {questions.map(el => <CardQuestion el={el}/>)}
        </div>
    </Layout>
  );
};
