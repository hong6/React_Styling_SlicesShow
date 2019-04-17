import React from 'react'

import Carousel from './carousel.js'
import Frame from './frame.js'
import Nav from './nav.js'
import Slide from './slide.js'

import css from './app.css'

export default class SliceApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.state = {
      showIndex: 0,
      numSlides: 6
    }
  }
  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    })
  }
  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    })
  }
  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    )
  }
  render() {
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          nav={this.renderNav()}
          width={640}
        >
          <Slide image={require('./images/1.jpg')} title="Lady Kind 文静妹">
            A Labradoodle is a crossbreed dog created by crossing the Labrador retriever 
            and the Standard, Medium, or Miniature poodle. 
          </Slide>
          <Slide image={require('./images/2.jpg')} title="Learn to Social">
            It’s not surprising that the Labradoodle has gained such popularity so quickly.             
          </Slide>
          <Slide
            image={require('./images/3.jpg')}
            title="Taste of Snow First Time"
          >
            Internships work! When determining a career path, it is wise to
            first find someone currently in that line of work. They will likely
            be able to show you what it's really like before you commit your
            future.
          </Slide>
          <Slide image={require('./images/4.jpg')} title="Puppy - only 8 weeks">
          Labradoodles' coat colors include chocolate, cafe, parchment, 
          cream, gold, apricot, red, black, silver, chalk, lavender, and blue. 
          Coat patterns can be solid, white abstract markings, parti, phantom, 
          or tri-coloured. In general, Labradoodles may have any coat-color a poodle can have.
          </Slide>
          <Slide
            image={require('./images/5.jpg')} title="New Hair Cut"
          >
            Labradoodles' hair can be anywhere from wiry to soft, 
            and may be straight, wavy, or curly. Some Labradoodles do shed, 
            although the coat usually sheds less and has less "dog odor" than that of a Labrador retriever.
          </Slide>
          <Slide
            image={require('./images/6.jpg')} title="Wild 风一般的女纸 ~~~ 哈哈哈"
          >
            Labradoodles' hair can be anywhere from wiry to soft, 
            and may be straight, wavy, or curly. Some Labradoodles do shed, 
            although the coat usually sheds less and has less "dog odor" than that of a Labrador retriever.
          </Slide>
        </Carousel>
      </Frame>
    )
  }
}
