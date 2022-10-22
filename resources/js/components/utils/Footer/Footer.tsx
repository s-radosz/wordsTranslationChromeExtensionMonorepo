import * as React from 'react'
import facebook from './../../../../assets/images/facebook.png'
import instagram from './../../../../assets/images/instagram.png'

const Footer = () => {
  return (
    <div className='homepage__footer--container'>
      <div className='homepage__footer--wrapper'>
        <div className='homepage__footer--left'>
          <p>&copy; {new Date()?.getFullYear()} 4 words Translation Chrome Extension Monorepo </p>
        </div>
        <div className='homepage__footer--right'>
          <a href='https://www.facebook.com' title='Odwiedź stronę na facebook' target='_blank'>
            <img src={facebook} />
          </a>
          <a href='https://www.instagram.com' title='Odwiedź stronę na instagram' target='_blank'>
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
