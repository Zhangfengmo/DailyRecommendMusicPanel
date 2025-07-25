import React from 'react'
import './InputForm.css'

const InputForm = ({ data, onChange }) => {
  const handleInputChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    })
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        handleInputChange('avatar', e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const getCurrentDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}年${month}月${day}日`
  }

  return (
    <div className="input-form">
      <div className="form-group">
        <label htmlFor="username">用户名</label>
        <input
          type="text"
          id="username"
          value={data.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          placeholder="请输入用户名"
        />
      </div>

      <div className="form-group">
        <label htmlFor="avatar">头像</label>
        <div className="avatar-upload">
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            className="upload-btn"
            onClick={() => document.getElementById('avatar').click()}
          >
            {data.avatar ? '更换头像' : '上传头像'}
          </button>
          {data.avatar && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => handleInputChange('avatar', null)}
            >
              移除头像
            </button>
          )}
        </div>
        <small>不上传头像将显示用户名首字母</small>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={data.isVip}
            onChange={(e) => handleInputChange('isVip', e.target.checked)}
          />
          VIP用户
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="date">日期</label>
        <input
          type="text"
          id="date"
          value={data.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          placeholder="2018年03月05日"
        />
        <button
          type="button"
          className="today-btn"
          onClick={() => handleInputChange('date', getCurrentDate())}
        >
          使用今天
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="hotTag">标签</label>
        <select
          id="hotTag"
          value={data.hotTag}
          onChange={(e) => handleInputChange('hotTag', e.target.value)}
        >
          <option value="热评">热评</option>
          <option value="精彩评论">精彩评论</option>
          <option value="最新评论">最新评论</option>
          <option value="">无标签</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="content">评论内容</label>
        <textarea
          id="content"
          value={data.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
          placeholder="请输入评论内容"
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="likes">点赞数</label>
        <input
          type="number"
          id="likes"
          value={data.likes}
          onChange={(e) => handleInputChange('likes', parseInt(e.target.value) || 0)}
          placeholder="31475"
          min="0"
        />
      </div>
    </div>
  )
}

export default InputForm
