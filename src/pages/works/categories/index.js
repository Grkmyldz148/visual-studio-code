import React, { Component } from 'react'
import Muzik from '../categories/views/music'
import Software from '../categories/views/software'
import Graphics from '../categories/views/graphics'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: window.location.pathname.replace("/", "")
    }
  }
  render() {
    if (this.state.page === "muzik") {
      return <Muzik/>
    } else if (this.state.page === "yazilim") {
      return <Software/>
    } else if (this.state.page === "grafik") {
      return <Graphics/>
    }
  }
}
export default Index;