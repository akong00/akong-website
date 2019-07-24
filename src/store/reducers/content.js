let initialState = {
    landingPage: {
        home: {
            nextPage: '',
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
        },
    },
    displayPage: {
        experience: {
            title: 'Work Experience',
            panels: [
                {
                    title: 'Checkbook Inc.',
                    description: '',
                    img: {
                        src: 'Images/displayPage/checkbook.png',
                        alt: 'Checkbook_Logo'
                    },
                    bulletPoints: [
                        'Used React and Redux to build webpages on checkbook.io',
                        'Built and maintained the internal information portal using React, Redux, and Flask',
                        'Used various REST APIs to track user information for Checkbook'
                    ]
                }
            ]
        },
    },
};

function setNextPage(state, action) {
    let nextState = {
        ...state,
        [action.payload.componentId]: {
            ...state[action.payload.componentId],
            [action.payload.id]: {
                ...state[action.payload.componentId][action.payload.id],
                nextPage: action.payload.nextPage,
            }
        }
    }
    console.log('working', nextState);
    return nextState;
}

function content(state = initialState, action) {
    switch (action.type) {
        case 'SET_NEXT_PAGE':
            return setNextPage(state, action);
        
        default:
            return state;
    }
}

export default content;