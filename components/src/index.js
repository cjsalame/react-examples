import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Seba"
          date="Today at 13:00 PM"
          comment="Very Nice!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jorge"
          date="Today at 14:00 PM"
          comment="Just Nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Charly"
          date="Today at 15:00 PM"
          comment="Awesome!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
