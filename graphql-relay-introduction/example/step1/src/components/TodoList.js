import Todo from './Todo'
import React from 'react'

const todos = [
  {node: {id: '1', text: 'prepare talk', complete: true}},
  {node: {id: '2', text: 'practice demo', complete: false}},
]

export default class TodoList extends React.Component {
  render () {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {todos.map((edge) =>
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
