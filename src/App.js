import { Component } from 'react';
import Subject from './components/subject';
import Toc from "./components/Toc"
import Content from "./components/content"
import Footer from './components/footer';
import './App.css';

// Componet가 실행 될 때 constructor라는 함수가 있다면 제일 먼저 실행 돼서 초기화를 담당한다.
// React에서는 props, state의 값이 바뀌면 해당 component의 render()함수가 호출된다. => props, state가 바뀌면 화면이 다시 그려진다는 뜻.


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'WELCOME!',
      subject:{title:'WEB', sub:'WORLD WIDE WEB!!!'},
      welcome:{title:'WELCOME', dese:'HELLO, REACT!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML IS HYPER TEXT MARKUP LANGUAGE.'},
        {id:2, title:'CSS', desc:'CSS IS CASCADING STYLE SHEETS.'},
        {id:3, title:'JAVASERIPT', desc:'JAVASCRIPT IS FOR INTERACTIVE.'}
      ]
    }
  }

  render() {
    console.log('App Render');
    
    var _title, _dese = null;

    if(this.state.mode === 'WELCOME!') {
      _title = this.state.welcome.title;
      _dese = this.state.welcome.dese;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _dese = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="REACT" sub="FOR UI"></Subject>
        <Toc data={this.state.contents}></Toc>
        <Content title={_title} desc={_dese}></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
