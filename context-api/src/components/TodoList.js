import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
            <div className='ui list'>
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go shopping for dinner</p>
                <p className='item'>Go for a walk</p>
            </div>
        )
    }
}

export default TodoList;
