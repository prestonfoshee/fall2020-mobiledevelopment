// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  // added super(props); to get rid of error requiring super constructor before accessing "this" later in the program
  constructor(props) {
    super(props);
    // Send what it gets to its parent object
  }

  render() {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    // added ${} to each expression, allowing the values to be passed through
    return (`
      <Article>
        <Title>${this.props.title}</Title>
        <Author>${this.props.author}</Author>
        <Text>${this.props.text}</Text>
      </Article>
    `
    );

  }

}

export default Article;
