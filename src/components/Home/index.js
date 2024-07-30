import React, { Component } from 'react'
import { connect } from 'react-redux';
import { latestnews, othernews } from '../../store/actions';

// home page component 
import LatestNews from './latestNews';
import OtherNews from './otherNews';

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(latestnews())
    this.props.dispatch(othernews())
  }

  render() {
    console.log(this.props)
    return (
      <>
        <LatestNews latest={this.props.articles.latestnews}/>
        <OtherNews othernews={this.props.articles.othernews}/>
      </>
    )
  }
}

function mapStateToProps(state){
  return{
    articles : state.articles
  }
}

export default connect(mapStateToProps)(Home);