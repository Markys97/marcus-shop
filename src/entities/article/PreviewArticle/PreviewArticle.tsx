import React from 'react'
import './style/previewArticle.css'
import { articleType } from '../../../shared'
import { Link } from 'react-router-dom';

interface previewArticleType {
    data:articleType;
}

function PreviewArticle({data}:previewArticleType) {
    const {id,title,createAt,place,preview} = data
  return (
    <Link to={`article/${id}`}>
        <div className="article-preview">
            <div className="article-preview__content">
                <h4 className="article-preview__title">{title}</h4>
                <div className="article-preview__place">{place}</div>
                <div className="article-preview__date">{createAt}</div>
            </div>
            

            <div className="article-preview__img">
                <img src={`/images/blogs/${preview}`} alt={title} />
            </div>
        </div>
    </Link>
       
  )
}

export default PreviewArticle