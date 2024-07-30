import React from "react";
import { Link } from "react-router-dom";

const latestNewsList = ({latest})=>(
    latest?

        latest.map(item =>(
            <Link to={`/article/${item.id}`} key={item.id} className="item">
            <div className="image_cover"
            style={{
                background:`url(/images/articles/${item.img})`
            }}
            >
                <div className="description">
                    <span>{item.category}</span>
                    <div>{item.title}</div>
                </div>
            </div>
            </Link>
        ))

    :null
)

const LatestNews = (props) =>{
   return(
   <div className="home-latest">
        {latestNewsList(props)}
    </div>
)
}

export default LatestNews;