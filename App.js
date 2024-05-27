import React from "react";
import './App.css';
import ClassComponentWithProps, { ClassComponent } from "./classComponent";
import GreetWithProps, { Greet } from "./greet";
// class ClassComponentWithProps extends Component {
//     render() {
//         const { message, user } = this.props;
//         return (
//             <div>
//                 <h1>This is class component.</h1>
//                 <p>{message}</p>
//                 <p>Name: {user.name}</p>
//                 <p>Age: {user.age}</p>
//             </div>
//         );
//     }
// }

function App() {
    const message = "Hello everyone";
    const user = { name: 'Priya', age: 19 };
    
    return (
        <div className="App">
            <Greet/>
            <GreetWithProps name="Priya" />
            <ClassComponent/>
            <ClassComponentWithProps message={message} user={user} />
        </div>
    );
}

export default App;
