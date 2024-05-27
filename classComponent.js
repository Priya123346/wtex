import React, { Component } from "react";
class ClassComponent extends React.Component{
    render(){
        return (
            <div>
                <h2>This is class component without props</h2>
            </div>
        );
    }
}
class ClassComponentWithProps extends Component{
    render(){
        const {message,user}=this.props;
        return (
            <div>
                <h1>This is class component with props.</h1>
                <p>{message}</p>
                <p>Name:{user.name}</p>
                <p>Age:{user.age}</p>
            </div>
        );
    }
}
export { ClassComponent };
export default ClassComponentWithProps;