import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            Are you sure you want to do approve?
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam"
                timeAgo="Today at 4PM"
                avatar={faker.image.avatar()}
                content="this is first comment" />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 4AM"
                avatar={faker.image.avatar()}
                content="this is second comment" />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
                author="Henry"
                timeAgo="Today at 5PM"
                avatar={faker.image.avatar()}
                content="this is third comment" />
        </ApprovalCard>

        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);