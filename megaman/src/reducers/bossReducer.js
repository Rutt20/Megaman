import { 
    REQUEST,
    FAILURE,
    GET_BOSSES,
    GET_BOSS,
    UPDATE_BOSS,
    DELETE_BOSS,
    CREATE_BOSS
} from "../constants"

const initalState = {
    loading: false,
    bosses: [],
    boss:{}
}

export const bossReducer = (state=initalState, action) => {
    switch(action.type) {
        case REQUEST:  
            return {
                ... state,
                loading: true
            }
        case FAILURE:
            initalState.error = action.payload;
            return initalState;
        case GET_BOSSES:
            return {
                loading: false,
                bosses: action.payload,
                boss: {}
            }
        case GET_BOSS:
            return {
                loading: false,
                bosses: state.bosses,
                boss: action.payload
            }
        case UPDATE_BOSS:
            return {
                loading: false,
                ... state,
                boss: action.payload
            }
        case DELETE_BOSS:
            return {
                loading: false,
                bosses: action.payload,
                boss: {}
            }

        case CREATE_BOSS:
            return {
                loading: false,
                bosses: action.payload,
                boss: {}
            }
        default: return state;
    }
}