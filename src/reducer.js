export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Remove after finisching developing
 //token: 'BQBI2SnOqtEB_sn-zItMliso-iHbXTO_nRYZcongEywUMXk_6CrIF6JVt8TCum7B7Z8SgTdYyaOPjEUGCR7Pb13XBQOTj5G40sokaVdXYfUEK4JJo2wcKJ1Mn53HZaT8PR8PHovC2d75caZSUabmcLoioUyPw5rHWA',
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }

            case 'SET_DISCOVER_WEEKLY':
            return {
                ... state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }





}

export default reducer