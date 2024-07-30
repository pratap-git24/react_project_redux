import React, { Component } from 'react'
import { getArticleData } from '../../store/actions';
import { connect } from 'react-redux';

class Article extends Component {

    componentDidMount(){
        this.props.dispatch(getArticleData(this.props.match.params.id))
    }

    renderArticle = ({articleData}) =>(
        articleData?
            <div>
                <div className='tags'>
                    <span>
                        <i className="fa fa-eye">{articleData[0].views}</i>
                    </span>
                    <span>
                        <i className="fa fa-thumbs-up">{articleData[0].likes[0]}</i>
                    </span>
                    <span>
                        <i className="fa fa-thumbs-down">{articleData[0].likes[1]}</i>
                    </span>
                </div>
                <div className='top'>
                   <h2>{articleData[0].title}</h2>
                   <span>Author By:<strong>{articleData[0].author}</strong></span>
                </div>
                <img alt={articleData[0]} src={`/images/articles/${articleData[0].img}`}/>
                <div className="body_news">
                    {articleData[0].body}
                </div>
            </div>
        :null
    )

    render() {
        console.log(this.props);
        return (
            <div className="news_container">
                {this.renderArticle(this.props.articles)}
            </div>
        )
    }
}

function mapStateTOProps(state){
    return {
        articles:state.articles
    }
}

export default connect(mapStateTOProps)(Article);