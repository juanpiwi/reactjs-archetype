import React from 'react'

function Container(props) {
  const payloadProp = { className: 'layout-container' }
  return (
    <div {...payloadProp}>
      {props.name}
    </div>
  )
}

export default class Header extends React.Component {
  render() {
    const name = this.props.name
    return (
      <header>
        <Container name={name} />
      </header>
    )
  }
}
