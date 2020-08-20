import React from 'react'
import PropTypes from 'prop-types'

function Article(props) {
  return (
    <div className="article">
    <a href={props.authorUrl}>
      <div className="article__author">
        <img className="article__author__img" src={props.authorAvatar} alt="author" />
        <p className="article__author__title">{props.title}</p>
        <p className="article__author__data">{props.data}</p>
      </div>
    </a>

      <a href={props.articleUrl}>
        <div className="article__content__imgContainer" >
        <img src={props.articleImg} alt="article" />
      </div>
      <div className="article__description" dangerouslySetInnerHTML={{ __html: props.description }} />
      </a>


      <button className="article__btn">
        <a target='_blank' rel="noopener noreferrer" href={props.articleUrl}>
          <span>go to article</span>
        </a>
      </button>
      <button className="article__btn">
        <a target='_blank' rel="noopener noreferrer" href={props.authorUrl}>about author</a>
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

