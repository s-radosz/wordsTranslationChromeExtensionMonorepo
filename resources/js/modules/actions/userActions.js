import actionTypes from "./../actionTypes"

const createUser = task => ({
    type: actionTypes.CREATE_USER,
    payload: task
});

const logoutUser = () => ({
    type: actionTypes.LOGOUT_USER
});

const updateUserWordsCounts = task => ({
    type: actionTypes.UPDATE_USER_WORDS_COUNTS,
    payload: task
});

export default {
    createUser,
    logoutUser,
    updateUserWordsCounts
};