import { userAction } from '../Action/ActionConst'
const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    stateAddress: "",
    city: "",
    zip: "",
    authenticating: "",
    authenticated: false
}
// const users=[];
const UserReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case `${userAction.USER_REGISTRATION}_SUCCESS`:
            console.log(action.payload.data)
            return state = {
                ...state,
                firstname: action.payload.data.firstname,
                lastname: action.payload.data.lastname,
                email: action.payload.data.email,
                phone: action.payload.data.phone,
                password: action.payload.data.password
            }

        case `${userAction.USER_ADDRESS}_SUCCESS1`:
            return state = {
                ...state,
                stateAddress: action.payload.data.stateAddress,
                city: action.payload.data.city,
                zip: action.payload.data.zip
            }
        case `${userAction.USER_LOGIN}_SUCCESS2`:
            console.log(state.email, state.password)
            if (state.email === action.payload.data.email && state.password === action.payload.data.password) {
                sessionStorage.setItem('token', action.payload.data.email)
                // sessionStorage.setItem("password",action.payload.data.password)
                return state = {
                    ...state,
                    authenticated: true,
                    authenticating: action.payload.data.email

                }

            }
        case `${userAction.USER_LOGOUT}_CLEAR`:
            return state = {
                ...state,
                authenticating: "",
                authenticated: false
            }
        default:
            return state;
    }
}
export default UserReducer