let initialState = {
    home: {
        panels: [
            {
                position: 'center',
                colorTheme: ['w'],
                title: 'Albert Kong',
                body: [
                    {
                        name: 'Github',
                        link: 'https://github.com/akong00',
                    },
                    {
                        name: 'Resume',
                        link: '#',
                    },
                    {
                        name: 'Email',
                        link: 'mailto:albert.kong00@gmail.com',
                    },
                ],
            },
            {
                position: 'right',
                colorTheme: ['v','v','b'],
                title: 'Projects',
                body: 'all my babies',
                link: '/projects',
            },
            {
                position: 'top',
                colorTheme: ['o','o','o'],
                title: 'Work Experience',
                body: 'all the experience in the world',
                link: '/experience',
            },
            {
                position: 'left',
                colorTheme: ['r'],
                title: 'Education',
                body: 'all my babies',
                link: '/education',
            },
            {
                position: 'bottom',
                colorTheme: ['g','y'],
                title: 'Activities',
                body: 'all my babies',
                link: '/activities',
            }
        ]
    }
};

function setLayer1(state, action) {
    let nextState = {
        ...state,
        home: {
            ...state.home,
            layer1: action.payload.data,
        }
    }

    return nextState
}

function content(state = initialState, action) {
    switch (action.type) {
        case 'SET_LAYER_1':
            return setLayer1(state, action);
        
        default:
            return state;
    }
}

export default content;