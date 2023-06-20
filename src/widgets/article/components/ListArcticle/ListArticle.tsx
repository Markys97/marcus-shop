import React from 'react'
import './style/listArticle.css'
import { useAppSelector } from '../../../../shared'
import PreviewArticle from '../../../../entities/article/PreviewArticle/PreviewArticle'

function ListArticle() {
    const listArticle = useAppSelector(state => state.setting.listArticle)
  return (
    <div className="list-articles">
        <div className="list-article__row">
            {
                listArticle.map((article,index) => index<4 && <PreviewArticle key={article.id} data={article}/>)
            }
        </div>
    </div>
  )
}

export default ListArticle