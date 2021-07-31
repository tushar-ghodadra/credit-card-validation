import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


class  CreditCardForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    
  };
  // function for the month
  handleMonth = (e) =>{
    if (this.state.expiry) {
      let monthChange = this.state.expiry.slice(2)
      let newExpiry = e.target.value.concat(monthChange)
      this.setState({ expiry :newExpiry })
    }
   this.setState({ expiryMonth :e.target.value })
  }

  // function for the year
  handleYear = (e) =>{
    let fulldate = this.state.expiryMonth.concat(e.target.value)
    this.setState({ expiry :fulldate })
  }

 // input focus
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }


  // set name
  handleNameInput =(e) =>{
    this.setState({ name:e.target.value })
  }


  // credit card number validation
  handleInputChange = (e) => {
    const value =  e.target.value.replace(/[^0-9]/g, "") 
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    let len;
    for (let i=0, len=match.length; i<len; i+=4) {
     parts.push(match.substring(i, i+4))
 }
    this.setState({ number: parts.join(' ')||value });
 
  }
  // cvc function
  handleCvc =(e)=>{
    const value =  e.target.value.replace(/[^0-9]/g, "");
    if(value.length <= 3){
      this.setState({ cvc:value })
    }
  }

  // click function
  handleClick =() =>{
    alert("Your Card is Successfully Applied")
  }
  render(){
    const buttonDisbaleAnable = this.state.number.length >= 19
    && this.state.name
    && this.state.expiry 
    && this.state.cvc.length == 3 ? true : false;
    console.log(buttonDisbaleAnable,"buttonDisbaleAnable")
  
    return(
      <div>
        <div className="mobile-hide">
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
             <div className="creditCard">
                <Cards
                   cvc={this.state.cvc}
                   expiry={this.state.expiry}
                   focused={this.state.focus}
                   name={this.state.name}
                   number={this.state.number}
                />
             </div>
          <form >
         <input
            type="text"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
           className={"credit-card-number formStyle"}
           value ={this.state.number}
           autocomplete="off"
           autoComplete="off"
          />

         <input
            type="text"
            name="name"
            placeholder="Card Name"
            onChange={this.handleNameInput}
            onFocus={this.handleInputFocus}
           className={"formStyle"}
           autocomplete="off"
           autoComplete="off"
          /> 
          <div className="col-12 d-flex p-0">
             <div className="col-3 p-0 slection">
               <select name='expireMM' 
               id='expireMM'
               className="select_Drop"
               onChange={this.handleMonth}
               onFocus={this.handleInputFocus}>
                      <option value=''>Month</option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                </select> 
             </div>
              <div className="col-3 p-0 slection">
                     <select name='expireYY'
                      id='expireYY'
                       className="select_Drop" 
                       onChange={this.handleYear} 
                       onFocus={this.handleInputFocus} 
                       disabled={this.state.expiryMonth  ?  false : true}>
                          <option value=''>Year</option>
                          <option value='22'>2022</option>
                          <option value='23'>2023</option>
                          <option value='24'>2024</option>
                          <option value='25'>2025</option>
                          <option value='26'>2026</option>
                    </select> 
                 </div>
               <div className="col-5 p-0">

                    <input
                        type="password"
                        onChange={this.handleCvc}
                        onFocus={this.handleInputFocus}
                        className=" expiration-month-and-year formStyle"
                        id="inputEmail4"
                        name ="cvc"
                        placeholder={
                           "CVC"
                        }
                        autocomplete="off"
                        autoComplete="off"
                        value={this.state.cvc}
                      />
                   </div>
                 </div>
                 <div className="col-12 p-0">
                   <button className={buttonDisbaleAnable ?  "button_container" :"disable_button"} onClick={this.handleClick}>
                     SUBMIT
                   </button>
                 </div>
               </form>
          </div>
        </div>
      </div>
      </div>
      <div className="mobile-show">
      <div className="">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
             <div className="">
                <Cards
                   cvc={this.state.cvc}
                   expiry={this.state.expiry}
                   focused={this.state.focus}
                   name={this.state.name}
                   number={this.state.number}
                />
             </div>
          <form className="pt-4">
         <input
            type="text"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
           className={"credit-card-number formStyle"}
           value ={this.state.number}
           autocomplete="off"
           autoComplete="off"
          />

         <input
            type="text"
            name="name"
            placeholder="Card Name"
            onChange={this.handleNameInput}
            onFocus={this.handleInputFocus}
           className={"formStyle"}
           autocomplete="off"
           autoComplete="off"
          /> 
          <div className="col-12 d-flex p-0">
             <div className="col-3 p-0 slection">
               <select name='expireMM' 
               id='expireMM'
               className="select_Drop"
               onChange={this.handleMonth}
               onFocus={this.handleInputFocus}>
                      <option value=''>Month</option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                </select> 
             </div>
              <div className="col-3 p-0 slection">
                     <select name='expireYY'
                      id='expireYY'
                       className="select_Drop" 
                       onChange={this.handleYear} 
                       onFocus={this.handleInputFocus} 
                       disabled={this.state.expiryMonth  ?  false : true}>
                          <option value=''>Year</option>
                          <option value='22'>2022</option>
                          <option value='23'>2023</option>
                          <option value='24'>2024</option>
                          <option value='25'>2025</option>
                          <option value='26'>2026</option>
                    </select> 
                 </div>
               <div className="col-5 pl-0">

                    <input
                        type="password"
                        onChange={this.handleCvc}
                        onFocus={this.handleInputFocus}
                        className=" expiration-month-and-year formStyle"
                        id="inputEmail4"
                        name ="cvc"
                        placeholder={
                           "CVC"
                        }
                        autocomplete="off"
                        autoComplete="off"
                        value={this.state.cvc}
                      />
                   </div>
                 </div>
                 <div className="col-12 p-0">
                   <button className={buttonDisbaleAnable ?  "button_container" :"disable_button"} onClick={this.handleClick}>
                     SUBMIT
                   </button>
                 </div>
               </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
 
 
};

export default CreditCardForm;
