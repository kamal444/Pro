import React from 'react'
import './Profile.css';
const Content = () => {
    return (
      <div className='content'>
      <div>
        <img src="https://worldtravelgid.ru/wp-content/uploads/2018/12/venice-main-1.jpg "></img>
      </div>
      <div>
        Ava+description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className='Posts'>
          <div className='item'>
            Post 1
          </div>
          <div className='item'>
            Post 2
          </div>
        </div>
      </div>
    </div>
    )
}
export default Content;