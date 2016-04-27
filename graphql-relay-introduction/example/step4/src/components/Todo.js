import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Relay from 'react-relay'
import ChangeTodoStatusMutation from '../mutations/ChangeTodoStatusMutation'

class Todo extends React.Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
  }

  _handleCompleteChange = (e) => {
    const complete = e.target.checked
    Relay.Store.commitUpdate(
      new ChangeTodoStatusMutation({
        complete,
        viewer: this.props.viewer,
        todo: this.props.todo,
      })
    )
  }

  render () {
    return (
      <li
        className={classnames({
          completed: this.props.todo.complete,
        })}>
        <div className='view'>
          <input
            checked={this.props.todo.complete}
            className='toggle'
            type='checkbox'
            onChange={this._handleCompleteChange} />
          <label>
            {this.props.todo.text}
          </label>
        </div>
      </li>
    )
  }
}

export default Relay.createContainer(Todo, {
  fragments: {
    todo: () => Relay.QL`
      fragment on Todo {
        complete,
        text,
        id,
        ${ChangeTodoStatusMutation.getFragment('todo')},
      }
    `,
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        ${ChangeTodoStatusMutation.getFragment('viewer')},
      }
    `,
  },
})
