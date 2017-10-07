import React, { Component } from 'react';
import $ from 'jquery';
import Category from './Category.js';
import './css/Lunch.css';

class Lunch extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        { id: 1, name: 'ラーメン', selected: true },
        { id: 2, name: '定食', selected: true },
        { id: 3, name: '中華', selected: true },
        { id: 4, name: '寿司', selected: true },
        { id: 5, name: 'イタリアン', selected: true },
        { id: 6, name: 'フレンチ', selected: true },
        { id: 7, name: '韓国料理', selected: true },
        { id: 8, name: 'カレー', selected: true },
        { id: 9, name: '蕎麦', selected: true },
        { id: 10, name: 'うどん', selected: true },
      ],
      data : [],
      result: '',
      result_url: '',
      public_holiday: false
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'data.json',
      data: {
        q: "select title from feed where url = 'data.json'",
        format: "json"
      },
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        this.setState({data: res});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(status, err.toString());
      }
    });
  }

  renderCategory(i) {
    return <Category key={this.state.category[i].name}
                     value={this.state.category[i]}
                     onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    var value = this.state.category;
    value[i].selected = !value[i].selected;
    this.setState((prevState) => ({category: value}));
  }

  roulette() {
    var list = [];
    var category_id = 0;
    var date = new Date();
    var day_of_week = date.getDay();

    for(var i in this.state.data) {
      if(this.state.public_holiday === true) {
        if(this.state.data[i].close.indexOf(7) !== -1) continue;
      }
      category_id = this.state.data[i].category;
      if(this.state.category[category_id - 1].selected === true &&
         this.state.data[i].close.indexOf(day_of_week) === -1) {
        list.push(this.state.data[i]);
      }
    }
    var index = Math.floor(Math.random() * list.length);
    if(list.length > 0) {
      this.setState({
        result: list[index].name,
        result_url: list[index].url
      });
    }
  }

  getName() {
    if(this.state.result) {
      return <div>今日は「{this.getLink()}」に行こう</div>;
    }
    return;
  }

  getLink() {
    if(this.state.result_url) {
      return <a href={this.state.result_url} target="_blank">{this.state.result}</a>;
    }
    return;
  }

  getOpen() {
    var count = 0;
    var date = new Date();
    var day_of_week = date.getDay();

    for(var i = 0; i < this.state.data.length; i++) {
      if(this.state.public_holiday === true) {
        if(this.state.data[i].close.indexOf(7) !== -1) continue;
      }
      if(this.state.data[i].close.indexOf(day_of_week) === -1) count++;
    }
    return count;
  }

  changeHoliday() {
    var value = this.state.public_holiday;
    value = !value;
    this.setState((prevState) => ({public_holiday: value}));
  }

  render() {
    var list = [];
    for(var i in this.state.category) {
      list.push(this.renderCategory(i));
    }

    return (
      <div className="lunch">
        <h1 className="lunch__title">
          <i className="material-icons">restaurant</i>
          本日のお昼ごはん
          <i className="material-icons">local_cafe</i>
        </h1>
        <div className="lunch__restaurant-count">
          <i className="material-icons">flag</i>
          今日営業中のお店 : {this.getOpen()}件
        </div>
        <div className="lunch__restaurant-count">
          <input type="checkbox" id="public-holiday" onClick={() => this.changeHoliday()}/>
          <label htmlFor="public-holiday">祝日</label>
        </div>
        <div className="lunch__category-block">
          { list }
        </div>
        <div className="lunch__result">
          {this.getName()}
        </div>
        <button className="lunch__btn"
                onClick={() => this.roulette()}>
          <i className="material-icons">cached</i>
          選ぶ
        </button>
      </div>
    );
  }
}

export default Lunch;
