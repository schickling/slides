import React, { PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'

export default class TodoApp extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
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
            />
          </header>

          {this.props.children}

        </section>
      </div>
    )
  }
}
