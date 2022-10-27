import * as React from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import USERACTIONS from '../../../store/actions/userActions'
import LanguageSwitch from './../LanguageSwitch/LanguageSwitch'
import useReturnTranslation from './../../../hooks/useReturnTranslation'

const Menu = ({ translation, user, logoutUser, handleChangePath }) => {
  const handleLogout = () => {
    logoutUser()
    handleChangePath('')
  }

  return (
    <div className='menu box-shadow'>
      <div className='menu-container'>
        <Link to='/'>
          <div className='menu__logo'>
            <p className='menu__logo--main'>
              <span className='menu__logo--red text-blue-500 text-3xl font-bold underline'>
                Praktyczny
              </span>
              <span className='menu__logo--blue'>Angielski</span>
            </p>
            <p className='menu__logo--description'>Ucz się angielskiego jakiego potrzebujesz!</p>
          </div>
        </Link>

        <div className='menu__right'>
          <div className='menu__right-routes'>
            {user?.email ? (
              <>
                <div className='menu__right-routes--top'>
                  {/* <p className='menu-link'>
                    {useReturnTranslation(translation, 'hi')}, {user?.email}
                  </p> */}

                  <Link to='/panel' className='menu-link menu-link__panel'>
                    {useReturnTranslation(translation, 'startLearning')}
                  </Link>
                  <Link to='/settings' className='menu-link menu-link__settings'>
                    {useReturnTranslation(translation, 'settings')}
                  </Link>
                </div>
                {/* <button className='menu-btn blue-btn' onClick={handleLogout} id='logout-btn'>
                  {useReturnTranslation(translation, 'logOut')}
                </button> */}
              </>
            ) : (
              <>
                <div className='menu__right-routes--top'>
                  <Link to='/login' className='menu-link'>
                    {useReturnTranslation(translation, 'login')}
                  </Link>
                </div>
                <Link to='/register'>
                  <button className='red-btn box-shadow'>
                    {useReturnTranslation(translation, 'register')}
                  </button>
                </Link>
              </>
            )}

            <LanguageSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  translation: state.translation.list,
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(USERACTIONS.logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
