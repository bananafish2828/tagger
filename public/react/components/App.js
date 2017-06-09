import React, { Component } from 'react';
import axios from 'axios';

import Logo from './globals/Logo';
import Button from './globals/Button';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import { 
  getNotes,
  deleteNote,
  editNote,
  addNote
} from '../service';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentNote: {
        title: '',
        text: '',
        id: -1
      },
      notes: [],
      error: '',
      loading: true,
    };
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
    this.handleCreateNoteClick = this.handleCreateNoteClick.bind(this);
  }

  handleCreateNoteClick(e) {
    e.preventDefault();
    this.setState({
      currentNote: {
        title: '',
        text: '',
        id: -1
      }
    });
  }

  handleEditNote(editing, { id, title, text }) {
    if (editing) {
      editNote(id, { title, text })
        .then(() => {
          this.setState({
            loading: false,
          });
        })
        .catch(err => {
          this.setState({
            error: 'error editing note',
            loading: false
          });
        })
        .then(() => {
          this.refreshNotes();
        });
    } else {
      addNote(body)
        .then(() => {
          this.setState({
            loading: false,
          });
        })
        .catch(err => {
          console.log('error adding note. err = ', err);
          this.setState({
            loading: false
          });
        })
        .then(() => {
          this.refreshNotes()
        });
    }
  }

  handleEditButtonClick(note) {
    this.setState({
      currentNote: note
    });
  }

  handleDeleteButtonClick(note) {
    this.setState({ loading: true }, () => {
      deleteNote(note.id)
        .then(() => this.setState({ loading: false }))
        .catch(err => {
          console.log('error deleting note. err = ', err);
          this.setState({
            error: 'error deleting note',
            loading: false
          });
        })
        .then(() => {
          this.refreshNotes()
        });
    });
  }

  refreshNotes() {
    getNotes()
      .then(notes => {
        this.setState({
          loading: false,
          notes: notes
        });
      })
      .catch(err => {
        console.log('error fetching notes. e = ', err.toString());
        this.setState({
          error: 'Hmm, something went wrong when fetching the latest notes.',
          loading: false,
        });
      });
  }

  componentDidMount() {
    this.refreshNotes();
  }

  render() {
    const { currentNote, notes } = this.state;

    return (
      <div className="row wrapper">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <Logo />
        </div>
        <div className="col-xs-12 col-sm-3"/>
        <div className="col-xs-12 col-sm-4">
          <NotesList
            notes={notes}
            onEdit={this.handleEditButtonClick}
            onDelete={this.handleDeleteButtonClick}  
          />
        </div>
        <div className="col-xs-12 col-sm-8">
          <div className="row">
            <div className="col-xs-9">
              <h2>{!!this.state.currentNote.title ? 'Editing Note' : 'Create New Note'}</h2>
            </div>
            <div className="col-xs-3">
              {this.state.currentNote.id !== -1 && (
                <Button
                  text="Create New Note"
                  onClick={this.handleCreateNoteClick}
                  className="blue"
                />
              )}
            </div>
          </div>
          <NoteEditor
            handleNoteSubmission={this.handleEditNote}
            note={currentNote}
          />
        </div>
      </div>
    );
  }
};

export default App;
