import React, { useState } from 'react'
import './App.css'
import CommentCard from './components/CommentCard'
import InputForm from './components/InputForm'

function App() {
  const [commentData, setCommentData] = useState({
    username: 'C崔金灿',
    isVip: true,
    date: '2018年03月05日',
    hotTag: '热评',
    content: '我带上面具 假装你不在我依然开心',
    likes: 31475,
    avatar: null
  })

  const handleDataChange = (newData) => {
    setCommentData(newData)
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>网易云音乐每日推荐插画生成器</h1>
        <p>填写信息生成你的专属评论插画</p>
      </div>
      
      <div className="app-content">
        <div className="form-section">
          <InputForm data={commentData} onChange={handleDataChange} />
        </div>
        
        <div className="preview-section">
          <h3>预览效果</h3>
          <CommentCard data={commentData} />
        </div>
      </div>
    </div>
  )
}

export default App
