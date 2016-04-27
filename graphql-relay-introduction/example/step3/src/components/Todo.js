import React, { PropTypes } from 'react'
import classnames from 'classnames'

export default class Todo extends React.Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
  }

  render () {
    return (
      <li
        className={classnames({
          completed: this.props.todo.complete,
        })}>
        <div className='view'>
          <label onDoubleClick={this._handleLabelDoubleClick}>
            {this.props.todo.text}
          </label>
          <button
            className='destroy'
            onClick={this._handleDestroyClick}
          />
        </div>
      </li>
    )
  }
}

