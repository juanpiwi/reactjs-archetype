import React, { Component, PropTypes } from 'react'

function Body(props) {
  return (
    <div className="layout-wrapper">
      {props.name}
    </div>
  )
}
/*
* PARTIAL APPLICATION
* PAPP
*/
function handleClick(name) {
  return this.setState({
    name: name.split('').reverse().join('')
  })
}


class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Juanpi' }
    this.handleClick = handleClick.bind(this, this.state.name)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      this.handleClick = handleClick.bind(this, nextState.name)
    }
  }

  render() {
    return (
      <div>
        <Body name={this.props.name} />
        <button onClick={this.handleClick}>
                Click me {this.state.name}
        </button>
      </div>
    )
  }
}

Container.propTypes = {
  name: PropTypes.string
}

export default Container
