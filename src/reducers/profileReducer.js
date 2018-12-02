export default function profileReducer(state = [], action) {
    switch(action.type) {
        case 'UPDATE_GAME_MODE':
            return { ...state, gameMode: action.gameMode }
        case 'UPDATE_STAT_TYPE':
            return { ...state, statType: action.statType}
        default:
            return state;
    }
}
