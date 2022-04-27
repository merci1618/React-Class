import { Component } from 'react';

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

export default Content;
