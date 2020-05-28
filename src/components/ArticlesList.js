import React from 'react';
import PropTypes from 'prop-types'

import Article from './Article'

function ArticlesList(props) {
  return (
    <div id="wrapper">

      {props.posts.map(post =>(
            <Article
              authorAvatar={post.author.avatar_URL}
              title={post.title}
              data={post.date.substring(0,10)}
              articleImg={post.featured_image}
              description={post.content.substring(0,250)}
              articleUrl={post.URL}
              authorUrl={post.author.profile_URL}
            />
          )
        )
      }
    </div>
  )
}

ArticlesList.propTypes = {
  posts: PropTypes.array
}

export default ArticlesList



