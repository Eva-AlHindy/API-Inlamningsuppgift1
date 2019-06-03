/* DashBoardComponent is a class component which has the information about student in the constructor:

the component has also five methods:
1-componentDidMount:is a lifecycle method which called after the function fetchstudents from HOCS to display all
the students in database.
2-handleInputChange: To control and change the value of the input field in the form by using setState.
3-addstudentName: To add the informations of the student to the database.
4-removstudentName: To remove the informations of the student from the database.
*/
import React, { Component , Fragment} from 'react';
import CardComponent from '../components/CardComponent';
import {Container,Row,Col,Button,Form,ListGroup} from 'react-bootstrap';

/* withHTTPRequests is a Higher-order component which takes DashBoardComponent and returns a
new component*/
import withHTTPRequests from './../HOCS/withHTTPRequests';
import PropTypes from 'prop-types';

class DashBoardComponent extends Component {

  static propTypes = {
      studentList: PropTypes.array,// throws a warning if studentList is not array.
      fetchstudents: PropTypes.func.isRequired// The function fetchstudents is required .
    }

  constructor(props) {
    super(props);
        this.state ={
             name: '',
             email: '',
             gata:'',
             postnummer:null,
             ort:'',
             address:{
               gata:'',
               postnummer:null,
               ort:''
             }
          };
    }

  /*A method that calls the function (fetchstudents()) which is
  props received from withHTTPRequests component. */
  componentDidMount(){
          this.props.fetchstudents();
  }

/*One function to handle all the input field data changes, where 'name' is field changed
 and event is the incoming data change to that field. This function then sets the appropriate state.
*/
  handleInputChange = name => event => {
    const state = {};
      state[name] = event.target.value;
      this.setState(state);
  };

/*A method which adds an object (newstudent) to API,
 by using Post method.
}*/
  addstudentName= event => {
    event.preventDefault();
    let url = 'http://localhost:2000/students';
    const newstudent = {
      email: this.state.email,
      name: this.state.name ,
      address: {
        gata: this.state.gata,
        postnummer:this.state.postnummer,
        ort:this.state.ort
      }
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newstudent),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      // console.log('Success:', JSON.stringify(response));
      this.props.fetchstudents();
      this.setState({
        name: '',
        email: '',
        gata:'',
        postnummer:null,
        ort:'',
        address:{
          gata:'',
          postnummer:null,
          ort:''
        }
    })
    })
    .catch(error => console.error('Error:', error));
  }

  /*A method which delete a special student from API,
   by using Delete method.
  }*/
  removstudentName(id) {
    fetch('http://localhost:2000/students/' + id, {
           method: 'delete'
         })
         .then(response => {
           // console.log('Success:', JSON.stringify(response));
           this.props.fetchstudents();
         })
         .catch(error => console.error('Error:', error));
  }

/*We render two card's components*/
  render(){
    const { name,email,gata,postnummer,ort} = this.state;
    return (
      <Fragment>
        <Container>
          <Row>
            <Col  lg="6">
              <div >
                <CardComponent >
                  <ListGroup>
                    {/*We render the newstudentList array by using map method and we use (student.id) as a key.*/}
                    {this.props.studentList.map((student) =>

                      <ListGroup.Item className="studentListItem" key={student._id} >

                          {student.name}
                          <br/>
                          <Button variant="danger" onClick={(e) => this.removstudentName(student._id, e)} >Remove</Button>

                      </ListGroup.Item>
                    )}
                </ListGroup>

                <br />
              </CardComponent>
            </div>
          </Col>

          <Col  lg="6">
            <div >
              <CardComponent >
                <Form onSubmit={this.addstudentName}>
                  <Form.Control className="inputForm" size="lg" type="text" placeholder="Name"
                    value={name}  onChange={this.handleInputChange('name')} />
                  <br />
                  <Form.Control className="inputForm" size="lg" type="email" placeholder="Email"
                    value={email}  onChange={this.handleInputChange('email')} />
                  <br />
                  <Form.Control className="inputForm" size="lg" type="text" placeholder="Gata"
                    value={gata}  onChange={this.handleInputChange('gata')} />
                  <br />
                  <Form.Control className="inputForm" size="lg" type="number" placeholder="Postnummer"
                    value={postnummer}  onChange={this.handleInputChange('postnummer')} />
                  <br />
                  <Form.Control className="inputForm" size="lg" type="text" placeholder="Ort"
                    value={ort}  onChange={this.handleInputChange('ort')} />
                  <br />
                  {/*We call addstudentName method when we click the submit button in the form .*/}
                  <Button variant="success" type="submit">Add student to database</Button>
                </Form>

                <br />
            </CardComponent>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
    );
  }
}

export default withHTTPRequests(DashBoardComponent);
