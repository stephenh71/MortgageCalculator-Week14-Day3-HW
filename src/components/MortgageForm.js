import React, { Component } from 'react';

class MortgageForm extends Component{
  constructor(props){
    super(props);
    this.state={
      name: '',
      salary: '',
      rate:'',
      years:''
    };

  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleSalaryChange = this.handleSalaryChange.bind(this);
  this.handleRateChange = this.handleRateChange.bind(this);
  this.handleYearsChange = this.handleYearsChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
};

handleNameChange(event){
  this.setState({name: event.target.value});
};

handleSalaryChange(event){
  this.setState({salary: event.target.value});
};

handleRateChange(event){
  this.setState({rate: event.target.value});
};

handleYearsChange(event){
  this.setState({years: event.target.value});
};

handleSubmit(event){
  event.preventDefault();
  const name = this.state.name;
  const salary = this.state.salary;
  const rate = this.state.rate;
  const years = this.state.years;
    if(!name || !salary || !rate || !years) return;

    this.props.onFormSubmit(name, salary, rate, years);

    this.setState({name:'',salary:'', rate:'', years:''});
}

  render() {
    return (
      <form id = "mortgage-form" onSubmit={this.handleSubmit}>

      <input type="text"
      placeholder="Your name"
      value={this.state.name}
      onChange={(this.handleNameChange)} />

      <input type="number"
      placeholder="Your salary"
      value={this.state.salary}
      onChange={(this.handleSalaryChange)} />

      <input type="number"
      placeholder="Interest rate"
      value={this.state.rate}
      onChange={(this.handleRateChange)} />

      <input type="number"
      placeholder="Term (years)"
      value={this.state.years}
      onChange={(this.handleYearsChange)} />

      <input id="button" type="submit"
      value="Calculate"/>

      </form>
    );
  };
};

export default MortgageForm
