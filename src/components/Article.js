import React from 'react'
import PropTypes from 'prop-types'

function Article(props) {
  return (
    <div className="article">
        <div className="article__author">
          <img className="article__author__img" src={props.authorAvatar} alt="author"/>
            <p className="article__author__title">{props.title}</p>
            <p className="article__author__data">{props.data}</p>
        </div>
        <div className="article__content__img" >
          <img src={props.articleImg} alt="article"/>
        </div>
        <div className="article__description" dangerouslySetInnerHTML={{ __html: props.description }} />
        <button className="article__btn blue">
         <a href={props.articleUrl}>go to article</a>
        </button>
        <button className="article__btn red">
          <a href={props.authorUrl}>about author</a>
        </button>
        </div>
  )
}

Article.propTypes = {
  authorAvatar: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.string,
  articleImg: PropTypes.string,
  description: PropTypes.string,
  articleUrl: PropTypes.string,
  authorUrl: PropTypes.string
}

export default Article

