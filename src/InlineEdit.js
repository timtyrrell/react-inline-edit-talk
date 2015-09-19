import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

class InlineEdit extends Component {
  constructor(props){
    super(props);
  }

  state = {
    editing: false,
    text: this.props.text
  }

  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: "Some Words"
  }

  _goToEditMode = () => {
    this.setState({editing: true}, () => {
      $(this.refs.editText.getDOMNode()).select();
    });
  }

  _keyAction = (e) => {
    if(e.keyCode === 27){
      this.setState({editing: false});
    } else if (e.keyCode === 13) {
      this.setState({editing: false, text: e.target.value});
    }
  }

  _renderElement = () => {
    if(this.state.editing){
      return <input type="text"
                    defaultValue={this.state.text}
                    onKeyUp={this._keyAction}
                    ref='editText'
              />
    } else {
      return <div onDoubleClick={this._goToEditMode}>{this.state.text}</div>;
    }
  }

  render() {
    return this._renderElement()
  }
}

export default InlineEdit;
