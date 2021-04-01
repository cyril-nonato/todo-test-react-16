import React, { Component } from 'react'
import * as S from './todo.styled';

class TodoComponent extends Component {

  state = {
    showButton: false
  }

  handleDelete = () => {
    const { deleteTodo, item } = this.props;

    deleteTodo(item.id)
  }

  // componentDidMount() {
  //   window.addEventListener("mouseover", (e) => {
  //     console.log(e.target)
  //   })
  // }

  render() {
    const { item } = this.props;

    const { showButton } = this.state;

    return (
      <S.Container
        onMouseEnter={(e) => {
          this.setState({showButton: true})
        }}

        onMouseLeave={(e) => {
          this.setState({showButton: false})
        }}
      >
        <span>
          {
            item.name
          }
        </span>
        {
          showButton ?
          <S.ButtonContainer>
            <S.Button
              onClick={this.handleDelete}
            >
                Delete
            </S.Button>
          </S.ButtonContainer>
           : null
        }
      </S.Container>
    )
  }
}

export default TodoComponent;