import { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
       {this.props.sub}
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JAVASCRIPT</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN'S DOGS</a>
        <button>PUSH</button>
      </article>
    );
  }
}

class Footer extends Component {
  render() {
    return(
      <footer>
        <p>@2022 GITHUB, INC.</p>
        <a href="https://github.com/">https://github.com</a>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="WORLD WIDE WEB"></Subject>
        <Subject title="REACT" sub="FOR UI"></Subject>
        <Toc></Toc>
        <Toc></Toc>
        <Toc></Toc>
        <Toc></Toc>
        <Toc></Toc>
        <Content title="HTML" desc="HTML IS HYPER TEXT MARKUP LANGUAGE"></Content>
        <Content title="CSS" desc="CSS IS CASCADING STYLE SHEETS."></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
