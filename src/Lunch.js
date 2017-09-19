import React, { Component } from 'react';
import './css/Lunch.css';

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
      data : [
        {
          id: 1,
          name: '麺や 福十八',
          category: 1,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13047200/'
        },
        {
          id: 2,
          name: '豚骨一燈',
          category: 1,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13205715/'
        },
        {
          id: 3,
          name: 'らーめん雅ノ屋',
          category: 1,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13113746/'
        },
        {
          id: 4,
          name: 'ヌードル・サウンズ',
          category: 1,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13207459/'
        },
        {
          id: 5,
          name: '長崎らーめん 琴海',
          category: 1,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13184581/'
        },
        {
          id: 6,
          name: '江戸銀食堂',
          category: 2,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13114571/'
        },
        {
          id: 7,
          name: '香鶏酒房 鳥八',
          category: 2,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13119625/'
        },
        {
          id: 8,
          name: '日平亭',
          category: 2,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13034275/'
        },
        {
          id: 9,
          name: 'まさむら',
          category: 2,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13178968/'
        },
        {
          id: 10,
          name: '36番倉庫',
          category: 2,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13167878/'
        },
        {
          id: 11,
          name: '中華料理 菜香',
          category: 3,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13137051/'
        },
        {
          id: 12,
          name: '中華料理 天慶',
          category: 3,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13178423/'
        },
        {
          id: 13,
          name: '栄児 家庭料理',
          category: 3,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13035863/'
        },
        {
          id: 14,
          name: 'すし屋の磯はな',
          category: 4,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13101683/'
        },
        {
          id: 15,
          name: 'すし屋の源さん',
          category: 4,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13044172/'
        },
        {
          id: 16,
          name: 'た喜ち',
          category: 5,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13018354/'
        },
        {
          id: 17,
          name: 'ピアンタモッチ',
          category: 5,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13030239/'
        },
        {
          id: 18,
          name: 'Quel',
          category: 5,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13188275/'
        },
        {
          id: 19,
          name: 'ソレイユ ドゥ マタン',
          category: 6,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13167448/'
        },
        {
          id: 20,
          name: '韓国料理ノダジ',
          category: 7,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13188055/'
        },
        {
          id: 21,
          name: 'とん豚テジ',
          category: 7,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13042693/'
        },
        {
          id: 22,
          name: 'ナマステ',
          category: 8,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13093276/'
        },
        {
          id: 23,
          name: 'マリカ',
          category: 8,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13090103/'
        },
        {
          id: 24,
          name: '蕎麦切 森の',
          category: 9,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13018364/'
        },
        {
          id: 25,
          name: '二代目 甚八',
          category: 10,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13121200/'
        },
        {
          id: 26,
          name: '味噌煮込罠',
          category: 10,
          url: 'https://tabelog.com/tokyo/A1310/A131004/13036030/'
        }
      ],
      result: '',
      result_url: ''
    }
  }

  renderCategory(i) {
    return <Category key={this.state.category[i].name}
                     value={this.state.category[i]}
                     onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    this.state.category[i].selected = !this.state.category[i].selected;
  }

  roulette() {
    var list = [];
    var category_id = 0;
    for(var i in this.state.data) {
      category_id = this.state.data[i].category;
      if(this.state.category[category_id - 1].selected === true) {
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
      return <div>{'今日は「' + this.state.result + '」に行こう'}</div>;
    }
    return;
  }

  getLink() {
    if(this.state.result_url) {
      return (
        <div>
          <span>食べログ: </span>
          <a href={this.state.result_url}>{this.state.result}</a>
        </div>
      );
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
        <h1>今日のお昼ごはん</h1>
        <div className="lunch__category-block">
          { list }
        </div>
        <button className="lunch__btn"
                onClick={() => this.roulette()}>
          選ぶ
        </button>
        <div className="lunch__result">
          {this.getName()}
          {this.getLink()}
        </div>
      </div>
    );
  }
}

export default Lunch;
