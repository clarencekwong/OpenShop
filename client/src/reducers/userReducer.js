const initialUserState = {
  user: null,
  orders: []
}

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "FETCH_USER_ORDER":
      return {...state, orders: action.payload}
    case "SET_USER":
      return {...state, user: action.payload}
    default:
      return state
  }
}

export default userReducer
