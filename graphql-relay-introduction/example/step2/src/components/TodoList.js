import Todo from './Todo'
import React, { PropTypes } from 'react'
import Relay from 'react-relay'

class TodoList extends React.Component {

  static propTypes = {
    viewer: PropTypes.object.isRequired,
  }

  render () {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {this.props.viewer.allTodos.edges.map((edge) =>
            <Todo
              key={edge.node.id}
              todo={edge.node}
            />
          )}
        </ul>
      </section>
    )
  }
}

export default Relay.createContainer(TodoList, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        allTodos(first: 100) {
          edges {
            node {
              id
              text
              complete
            }
          }
        }
      }
    `,
  },
})
