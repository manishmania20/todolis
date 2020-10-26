import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#d8e2eb',
            padding: '18px',
            borderBottom: '1px #000000 dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.checkComplete.bind(this, id)} />
                    {' '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={buttonStyle}>x</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

//css for delete button
const buttonStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}



export default Todoitem
