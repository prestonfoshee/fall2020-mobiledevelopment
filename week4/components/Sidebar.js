import Component from './Component.js';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let responseHTML = '';

    this.props.menu.forEach((item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      responseHTML = `<ul>` + `<li>${item}</li>` + `</ul>`;
    });

    return responseHTML;
  }
}

export default Sidebar;
