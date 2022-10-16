import userActions from '../../../modules/actions/userActions'
import actionTypes from "./../../../modules/actionTypes"

describe('user actions', () => {
    it('should create an action to add user', () => {
        const payload = {
            email: "test@test.com",
            token: "test-token",
            email_verified_at: "2020-01-01"
        }

        const expectedAction = {
            type: actionTypes.CREATE_USER,
            payload
        }

        expect(userActions.createUser(payload)).toEqual(expectedAction)
    })
})