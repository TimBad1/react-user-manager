import {Reducer} from "redux";
import {ADD_USER_TO_LIST, EDIT_EMAIL, EDIT_FIRST_NAME, EDIT_LAST_NAME, GET_LOCALSTORAGE} from "./actions";
// import usersList from "../components/data/usersList";

type TUser = {
  first_name: string,
  last_name: string,
  email: string,
  id: number,
}

export type RootState = {
  newUser: TUser;
  usersList: TUser[];
}

export const initialState: RootState = {
  newUser: {
    first_name: '',
    last_name: '',
    email: '',
    id: 1,
  },
  usersList: [],
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FIRST_NAME:
      return {
        ...state,
        newUser: {...state.newUser, first_name: action.data}
      };
    case EDIT_LAST_NAME:
      return {
        ...state,
        newUser: {...state.newUser, last_name: action.data}
      };
    case EDIT_EMAIL:
      return {
        ...state,
        newUser: {...state.newUser, email: action.data}
      };
    case ADD_USER_TO_LIST:
      let id = state.newUser.id + 1;
      localStorage.setItem('users', JSON.stringify([...state.usersList, action.data]));
      localStorage.setItem('id', String(id));
      console.log(state.usersList, action.data)
      return {
        ...state,
        usersList: [...state.usersList, action.data],
        newUser: {
          first_name: '',
          last_name: '',
          email: '',
          id: id,
        },
      }
    case GET_LOCALSTORAGE:
      return {
        ...state,
        usersList: action.data[0],
        newUser: {
          first_name: '',
          last_name: '',
          email: '',
          id: action.data[1],
        },
      }
    default:
      return {
        ...state,
      }
  }
}