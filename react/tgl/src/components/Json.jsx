import React from 'react'

export default class Products extends React.Component {
  state = {
    content: [],
  }
  async componentDidMount() {
      if (typeof fetch == 'undefined') return
      const response = await fetch('https://hyqizwlialyogdk.form.io/items/submission')
      const content = await response.json()
      console.dir({ content })

      this.setState({ content: JSON.stringify(content) })
    }
  render() {
    return (
      <div style={{ color: 'white' }}>
        <h2>Data received from <code>https://hyqizwlialyogdk.form.io/items/submission</code>:</h2>
        <p>props={this.state.content}</p>
        <br />
      </div>
    )
  }
}