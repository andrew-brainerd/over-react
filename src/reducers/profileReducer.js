export default function profileReducer(state = [], action) {
    switch(action.type) {
        case 'UPDATE_GAME_MODE':
            return { ...state, gameMode: action.gameMode }
        default:
            return state;
    }
}