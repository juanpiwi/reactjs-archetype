import React from 'react'

export default class Header extends React.Component {
  render() {
    const props = { className: 'layout-container' }
    return (
      <header>
          <div {...props}>
              HEADER
          </div>
      </header>
    )
  }
}
