import React, { useRef } from 'react'
import './CommentCard.css'

const CommentCard = ({ data }) => {
  const cardRef = useRef(null)

  const handleExport = async () => {
    // 简化版导出功能 - 提示用户使用截图
    alert('请使用手机截图功能保存插画，或者在电脑上右键保存图片')
  }

  return (
    <div className="comment-card-container">
      <div className="comment-card" ref={cardRef}>
        <div className="comment-header">
          <div className="avatar-container">
            <div className="avatar-ring">
              <div className="avatar">
                {data.avatar ? (
                  <img src={data.avatar} alt="头像" />
                ) : (
                  <div className="default-avatar">
                    {data.username.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="user-info">
            <div className="username-row">
              <span className="username">{data.username}</span>
              {data.isVip && <span className="vip-badge">VIP·陆</span>}
            </div>
            <div className="date-row">
              <span className="date">{data.date}</span>
              <span className="hot-tag">{data.hotTag}</span>
            </div>
          </div>
          
          <div className="likes-container">
            <span className="likes-count">{data.likes}</span>
            <div className="like-icon">❤️</div>
          </div>
        </div>
        
        <div className="comment-content">
          {data.content}
        </div>
        
        <div className="comment-footer">
          <span className="reply-count">44条回复 ></span>
        </div>
      </div>
      
      <button className="export-btn" onClick={handleExport}>
        导出为图片
      </button>
    </div>
  )
}

export default CommentCard
