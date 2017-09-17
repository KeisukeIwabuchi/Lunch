import React, { Component } from 'react';

class FormArea extends Component {
  handleSubmit: function(e){
    e.preventDefault();
  },
  render() {
    return (
      <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" value="Japan">
          <input type="checkbox" value="China">
          <input type="submit" value="選択">
        </form>
      </div>
    );
  }
}

export default FormArea;
