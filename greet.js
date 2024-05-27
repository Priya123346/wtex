import React from "react";

function Greet(){
    return (<div>
        <h2>Hi this is functional components without props</h2>
    </div>);
}
function GreetWithProps(Props){
    return (<div><h2>This is {Props.name}!</h2>
    <h2>This is functional component with props</h2>
    <hr></hr>
    </div>);
}
export default GreetWithProps;
export { Greet };
