export default function(state = [], action) {
    switch (action.type) {
        case 'UPDATE_HISTORY':
        return [action.payload, ...state]
    }
    return state;
}