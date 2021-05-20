import "./style.css"
import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from "./components/MessageField.jsx"




 ReactDOM.render(
    <MessageField />,
   document.getElementById('root'),
);


// let messages = ['Привет', 'Как дела?'];
// const title = "Push the button!";
// const button = "push me";
// const MessageComponent = (props) => <div>{props.text}</div>;

// const Title = (props) =>
//     <div>
//         <h1 className="element">{props.title}</h1>
//         <button className="button">{props.button}</button>
//         <div className="field">{props.messages.map(mes => <MessageComponent text={mes} />)}</div>
//     </div>

// ReactDOM.render(
//     <Title title={title} button={button} messages={messages} TextField />,
//    document.getElementById('root'),
// );

// const normal = () => {
    
//     let message = "Нормально";
//     messages.push(message);
//     const field = document.getElementsByClassName('field');
//     field[0].scrollTo(0, field[0].scrollHeight);
//     const MessageField = (props) => {
//    return props.messages.map(mes => <MessageComponent text={ mes } />);
// };

//     ReactDOM.render(
//         <MessageField messages={ messages } />,
//         field[0]);
    
// }   
// const push = document.getElementsByClassName("button")
// push[0].addEventListener("click", normal);


