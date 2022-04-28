import { Component } from 'react';
import Subject from './components/subject';
import Toc from "./components/Toc"
import Content from "./components/content"
// import Footer from './components/footer';
import './App.css';

// Componet가 실행 될 때 constructor라는 함수가 있다면 제일 먼저 실행 돼서 초기화를 담당한다.
// React에서는 props, state의 값이 바뀌면 해당 component의 render()함수가 호출된다. => props, state가 바뀌면 화면이 다시 그려진다는 뜻.


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'WORLD WIDE WEB!!!'},
      welcome:{title:'WELCOME', desc:'HELLO, REACT!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML IS HYPER TEXT MARKUP LANGUAGE.'},
        {id:2, title:'CSS', desc:'CSS IS CASCADING STYLE SHEETS.'},
        {id:3, title:'JAVASERIPT', desc:'JAVASCRIPT IS FOR INTERACTIVE.'}
      ]
    }
  }

  render() {
    console.log('App Render');

    var _title, _desc = null;

    if(this.state.mode === 'Welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    return (
      <div className="App">
        {/* Subject라는 component는 onChangePage라는 event가 있어서 component안에서 a link를 클릭 했을 때, evnet에 설치한 함수를 호출 할 수 있다. */}
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'Welcome'});
          }.bind(this)}
          >
        </Subject>

        {/* App이라는 component 자체를 가르키는 객체를 해당 함수 안으로 주입해서 함수 안에서 this가 그 객체가 되도록 한다. => bind() */}
        {/* <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'WELCOME!'
            this.setState({
              mode:'Welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <Toc 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}>
        </Toc>
        <Content title={_title} desc={_desc}></Content>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
