import React, { Component } from 'react';
import axios from 'axios';
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
      result_url: ''
    }
  }

  componentDidMount() {
    let url = 'https://keisukeiwabuchi.github.io/Lunch';
    const api = axios.create({
      baseURL: url,
      headers: {
        'ContentType': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    });
    api.get('/data.json')
         .then(function(response) {
           for(var i in response) this.state.data.push(response[i]);
         })
         .catch(function(error) {
           console.log('Error Occured!', error);
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
    this.setState({category: value});
  }

  roulette() {
    var list = [];
    var category_id = 0;
    var date = new Date();
    var day_of_week = date.getDay();
    for(var i in this.state.data) {
      category_id = this.state.data[i].category;
      if(this.state.category[category_id - 1].selected === true &&
         this.state.data[i].close === day_of_week) {
        list.push(this.state.data[i]);
      }
    }
    var index = Math.floor(Math.random() * list.length);
    this.setState({
      result: list[index].name,
      result_url: list[index].url
    });
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

  render() {
    var list = [];
    for(var i in this.state.category) {
      list.push(this.renderCategory(i));
    }

    return (
      <div className="lunch">
        <h1>本日のお昼ごはん</h1>
        <div className="lunch__category-block">
          { list }
        </div>
        <button className="lunch__btn"
                onClick={() => this.roulette()}>
          選ぶ
        </button>
        <div className="lunch__result">
          {this.getName()}
        </div>
      </div>
    );
  }
}

export default Lunch;
