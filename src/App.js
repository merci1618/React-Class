import { Component } from 'react';
import Subject from './components/subject';
import Toc from "./components/Toc"
import Content from "./components/content"
import Footer from './components/footer';
import './App.css';

// Componet가 실행 될 때 constructor라는 함수가 있다면 제일 먼저 실행 돼서 초기화를 담당한다.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'WORLD WIDE WEB!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML IS HYPER TEXT MARKUP LANGUAGE.'},
        {id:2, title:'CSS', desc:'CSS IS CASCADING STYLE SHEETS.'},
        {id:3, title:'JAVASERIPT', desc:'JAVASCRIPT IS FOR INTERACTIVE.'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="REACT" sub="FOR UI"></Subject>
        <Toc data={this.state.contents}></Toc>
        <Content title='HTML' desc='HTML IS HYPER TEXT MARKUP LANGUAGE.'></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
