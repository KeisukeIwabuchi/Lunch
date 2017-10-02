import React, { Component } from 'react';

function Category(props) {
  return (
    <div className="lunch__category">
      <input type="checkbox"
             id={'category' + props.value.id}
             onClick={props.onClick}
             defaultChecked={props.value.selected}/>
      <label htmlFor={'category' + props.value.id}>{props.value.name}</label>
    </div>
  );
}

export default Category;
