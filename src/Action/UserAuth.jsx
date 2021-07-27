import {userAction} from '../Action/ActionConst'
export const register=(user)=>{
    return async (dispatch)=>{
        dispatch({type:`${userAction.USER_REGISTRATION}_SUCCESS`,payload:{data:user}});
    }

}
export const address=(user)=>{
    return async (dispatch)=>{
        dispatch({type:`${userAction.USER_ADDRESS}_SUCCESS1`,payload:{data:user}})
    }
}
export const login=(user)=>{
    return async(dispatch)=>{
        dispatch({type:`${userAction.USER_LOGIN}_SUCCESS2`,payload:{data:user}})
    }
}
export const logout=()=>{
    return async(dispatch)=>{
        dispatch({type:`${userAction.USER_LOGOUT}_CLEAR`});
        if(sessionStorage.getItem('token')!==""){
            console.log(sessionStorage.clear())
            sessionStorage.clear();

        }
    }
}