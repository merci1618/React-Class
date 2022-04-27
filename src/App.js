import { Component } from 'react';
import Subject from './components/subject';
import Toc from "./components/Toc"
import Content from "./components/content"
import Footer from './components/footer';
import './App.css';


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
