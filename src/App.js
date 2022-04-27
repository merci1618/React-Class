import { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        WORLD WIDE WEB!
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

class ContentHtml extends Component {
  render() {
    return(
      <article>
        <h2>HTML</h2>
        HTML IS HYPERTEXT MARKUP LANGUAGE.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">HTML : MDN'S DOGS</a>
        <button>PUSH</button>
      </article>
    );
  }
}

class ContentCSS extends Component {
  render() {
    return(
      <article>
        <h2>CSS</h2>
        CSS IS CASCADING STYLE SHEETS.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS : MDN'S DOGS</a>
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
        <Subject></Subject>
        <Toc></Toc>
        <Toc></Toc>
        <Toc></Toc>
        <Toc></Toc>
        <Toc></Toc>
        <ContentHtml></ContentHtml>
        <ContentCSS></ContentCSS>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
