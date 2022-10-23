import userActions from '../../../store/actions/userActions'
import actionTypes from './../../../store/actionTypes'

describe('user actions', () => {
  it('should create an action to add user', () => {
    const payload = {
      email: 'test@test.com',
      token: 'test-token',
      email_verified_at: '2020-01-01',
    }

    const expectedAction = {
      type: actionTypes.CREATE_USER,
      payload,
    }

    expect(userActions.createUser(payload)).toEqual(expectedAction)
  })
})
