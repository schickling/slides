import React, { PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'
import Relay from 'react-relay'
import AddTodoMutation from '../mutations/AddTodoMutation'

class TodoApp extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    viewer: PropTypes.object.isRequired,
  }

  _handleOnSave = (text) => {
    Relay.Store.commitUpdate(
      new AddTodoMutation({text: text, viewer: this.props.viewer})
    )
  }

  render () {
    return (
      <div>
        <section className='todoapp'>
          <header className='header'>
            <h1>
              todos
            </h1>
            <TodoTextInput
              autoFocus
              className='new-todo'
              placeholder='What needs to be done?'
              onSave={this._handleOnSave}
            />
          </header>

          {this.props.children}

        </section>
      </div>
    )
  }
}

export default Relay.createContainer(TodoApp, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${AddTodoMutation.getFragment('viewer')}
      }
    `,
  },
})
