import { SUCCESS_AUTH, AUTH_LOGOUT } from './../actionTypes';


export const successAuth =  (payload) => ({
    type: SUCCESS_AUTH ,
    payload
})

export const authLogout =  () => ({
    type: AUTH_LOGOUT,
})