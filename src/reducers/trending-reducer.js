export default function(state = [], action) {
    switch (action.type) {
        case 'GIPHY_SEARCH':
        return [...action.payload.data.data]
    }
    return state;
}