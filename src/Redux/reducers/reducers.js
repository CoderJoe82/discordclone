import { SET_SUBMIT_POST } from '../types/types'

const initialState = {
    posts: []
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_SUBMIT_POST: {
            return {
                ...state,
                posts: state.posts.push(action.payload)
            }
        }
        default:
            return state
    }

}

export default rootReducer