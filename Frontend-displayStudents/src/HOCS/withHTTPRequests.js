/* withHTTPRequests ia a Higher-order component:
which is a function that takes a component and returns a new component.
This has a state : studentList which is an array, and
fetchstudents which is a method used to fetch the students data from API.
*/

import React, { Component } from 'react';
export default function withHTTPRequests(WrappedComponent, selectData) {

    return class extends Component {
      constructor(props){
        super(props);

        this.state = {
            studentList:[],
        }
      }

      fetchstudents = () => {
        fetch('http://localhost:2000/students')
        .then((response)=> response.json().then((response)=>{
          this.setState({studentList:response});
        }));
      }

      render() {
        /*we pass through WrappedComponent a method fetchstudents and studentList as props*/
        return (
          <WrappedComponent
            fetchstudents={this.fetchstudents}
            studentList={this.state.studentList}
            {...this.props}
          />
        )
      }
    };
  }
