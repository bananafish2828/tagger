import React, { Component } from 'react';

import Button from '../globals/Button';

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.note.title,
      text: props.note.text,
      id: props.note.id,
      editing: !!props.note.title
    };

    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(() => {
      const newState = {};
      newState[name] = value;
      return newState;
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.props.note.id) {
      this.setState({
        title: this.props.note.title,
        text: this.props.note.text,
        id: this.props.note.id,
        editing: !!this.props.note.title
      });
    }
  }

  handleFormSubmission(e) {
    const { editing, title, text } = this.state;
    e.preventDefault();
    this.props.handleNoteSubmission(editing, {
      title,
      text,
      id: this.props.note.id
    });
  }

  render() {
    const { title, text, editing } = this.state;
    return (
      <div className="row note-editor">
        <div className="col-xs-12">
          <h3>{title}</h3>
          <textarea
            value={text}
            name="text"
            onChange={this.handleChange}
          />
          <Button
            onClick={this.handleFormSubmission}
            text={editing ? 'Edit Note' : 'Create Note'}
            className="blue"
          />
        </div>
      </div>
    );
  }
}

export default NoteEditor;
