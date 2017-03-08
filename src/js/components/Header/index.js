import React from 'react'

function Container(props) {
  const payloadProp = { className: 'layout-container' }
  return (
    <div {...payloadProp}>
      {props.name}
    </div>
  )
}

const Header = (props) => {
  const name = props.name
  return (
    <header>
      <Container name={name} />
    </header>
  )
}
/* class Header extends PureComponent {
  render() {
    const name = this.props.name
    return (
      <header>
        <Container name={name} />
      </header>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string
}*/

export default Header
