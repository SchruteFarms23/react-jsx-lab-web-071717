import React from 'react';

export default class RegistrationForm extends React.Component {
  render(){
    return(
      <form>
        <input type='text' />
        <input type='password' />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}





// return React.createElement('form',{},[
//   React.createElement('input',{type:'text'}),
//   React.createElement('input',{type:'password'}),
//   React.createElement('button',{type:'submit'},"Submit")
