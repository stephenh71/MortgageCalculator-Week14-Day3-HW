import React, { Component } from "react";
import MortgageForm from "../components/MortgageForm";
import MortgageView from "../components/MortgageView";

class MortgageContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      salary: 0,
      mortgage:'',
      rate:0,
      years:0
    };

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  handleFormSubmit(name, salary, rate, years){
    this.setState({name: name, salary:salary, rate: rate, years:years, mortgage: salary*3});
  };

  calculateMonthlyPayment(rate, years){
    const decimalRate = rate / 1200;
    const compounder = (1 + decimalRate)**(this.state.years*12);
    const multiplier = ((compounder * decimalRate)/(compounder -1));
    const monthlyPayment = multiplier * this.state.mortgage;
    return Math.round(monthlyPayment*100,2)/100;
  }


  render(){
    return(
      <>
      <h1>Mortgage Calculator</h1>
        <h3>Please enter your name, salary, interest rate and mortgage term :</h3>
        <MortgageForm onFormSubmit = {this.handleFormSubmit} />
        <h3>Thank you {this.state.name}</h3>
        <h3>Based on your salary of £{this.state.salary}</h3>
        <MortgageView mortgage = {this.state.mortgage}/>
        <h3>At an interest rate of {this.state.rate}% (over {this.state.years} years) your monthly repayment would be £{this.calculateMonthlyPayment(this.state.rate,this.state.years)}</h3>
        </>
    )
  };
}

export default MortgageContainer;
