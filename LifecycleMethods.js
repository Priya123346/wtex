import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Initialize state and bind methods');
  }

  // 2. static getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Sync state with props if necessary');
    return null; // Return updated state or null if no changes
  }

  // 3. render
  render() {
    console.log('Render: Render the component');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }

  // 4. componentDidMount
  componentDidMount() {
    console.log('componentDidMount: Component mounted');
    // Perform any side-effects or data fetching here
  }

  // 5. shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Decide if component should re-render');
    return true; // Return true or false based on conditions
  }

  // 6. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture some information before DOM changes');
    return null; // Return a value to pass to componentDidUpdate
  }

  // 7. componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Perform operations after component updated');
    // Access snapshot here if needed
  }

  // 8. componentWillUnmount
  componentWillUnmount() {
    console.log('componentWillUnmount: Clean up before component is removed');
    // Clean up any side-effects here
  }

  // Example of setState usage
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
}

export default LifecycleExample;