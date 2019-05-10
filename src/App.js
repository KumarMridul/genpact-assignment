import React from 'react';
import { connect } from "react-redux";
import { fetchUser } from "./modules/fetchUserAction";
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Dropdown} from 'office-ui-fabric-react/lib/Dropdown';

const dept_options = [
  { key: 'HR', text: 'HR' }, 
  { key: 'ENGINEERING', text: 'ENGINEERING' }
];

const employee_HR_options = [
  { key: '1', text: '1' }, 
  { key: '2', text: '2' },
  { key: '3', text: '3'}, 
  { key: '4', text: '4' },
  { key: '5', text: '5' }
];

const employee_ENGINEERING_options = [
  { key: '6', text: '6' }, 
  { key: '7', text: '7' },
  { key: '8', text: '8' }, 
  { key: '9', text: '9' },
  { key: '10', text: '10' }
];

const dropdownStyles = {
  dropdown: { width: 300 }
};

const employeeIdSelected = {
  value: ''
};

export class App extends React.Component  {
  constructor() {
    super();
    this.state= {
      employeeDropDown: '',
      showDetails: false
    }
    this.depatmentClickedFn = this.depatmentClickedFn.bind(this);
    this.employeeClickedFn = this.employeeClickedFn.bind(this);
    this.getEmployeeDetails = this.getEmployeeDetails.bind(this);
  }
  
  depatmentClickedFn(evt) {
    const depatmentSelected= evt.key;
    if (depatmentSelected === "HR"){
      this.setState({
        employeeDropDown: 'HR'
      })
    }
    else {
      this.setState({
        employeeDropDown: 'ENG'
      })
    }
  }
  employeeClickedFn(evt) {
    employeeIdSelected.value = evt.key;
  }
  getEmployeeDetails() {
    let employeeId = parseInt(employeeIdSelected.value);
    this.props.dispatch(fetchUser(employeeId));
    this.setState({showDetails: true});
  }
  render() {
    const { error, loading, item } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <div className='mainContainer'>
           <Dropdown placeholder="Select Department" label="Department" options={dept_options} styles={dropdownStyles}  onChanged={ this.depatmentClickedFn }/>
           {this.state.employeeDropDown === '' && <Dropdown placeholder="Select Employee id" label="Employee id"  styles={dropdownStyles} /> } 
          {this.state.employeeDropDown === 'HR' && <Dropdown placeholder="Select Employee id" label="Employee id" options={employee_HR_options} styles={dropdownStyles} onChanged={ this.employeeClickedFn }/> }
          {this.state.employeeDropDown === 'ENG' && <Dropdown placeholder="Select Employee id" label="Employee id" options={employee_ENGINEERING_options} styles={dropdownStyles} onChanged={ this.employeeClickedFn }/> }
          
          <Button onClick={this.getEmployeeDetails}>GetDetails</Button>
          <Button>Clear</Button>
          {
          this.state.showDetails && <div>
          <img
          src={item.avatar}
          alt= {'employee image'}
          />
          ID: <span>{item.id}   </span> 
          Name: <span>{item.first_name} {item.last_name}</span> 
          </div>}
        </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);

