let initialState = {
    nextPage: '',
    displayPage: {
        experience: {
            panels: [
                {
                    title: 'Checkbook Inc.',
                    timespace: 'May - August 2019   San Mateo, CA',
                    link: 'https://checkbook.io',
                    description: 'A fintech company that provides digital check services.',
                    img: {
                        src: 'Images/displayPage/checkbook.png',
                        alt: 'Checkbook_Logo'
                    },
                    bulletPoints: [
                        'Used React and Redux to build webpages on checkbook.io',
                        'Built and maintained the internal information portal using React, Redux, and Flask',
                        'Used various REST APIs to track user information for Checkbook',
                    ]
                },
                {
                    title: 'Next Wave!',
                    timespace: 'July 2018',
                    link: 'https://github.com/akong00/next-wave',
                    description: 'A mobile game published on the iOS App Store and Google Play Store.',
                    img: {
                        src: 'Images/displayPage/nextWave.png',
                        alt: 'Next_Wave_Icon'
                    },
                    bulletPoints: [
                        'Built using Unity, C#, and GIMP (for all designs)',
                        'All assets were custom created/processed using GIMP, sound editors, or animation tools in Unity',
                    ]
                },
            ]
        },
    },
    hero: {
        experience: {
            title: 'Experience',
            subtitle: 'Companies I have worked for and notable projects',
        },
    },
    landingPage: {
        home: {
            nextPage: '',
            panels: [
                {
                    position: 'center',
                    colorTheme: ['w'],
                    splatSize: 10,
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
                    splatSize: 1,
                    colorTheme: ['v','v','b'],
                    title: 'Tech Blogs',
                    body: 'all my babies',
                    link: '/blogs',
                },
                {
                    position: 'top',
                    splatSize: 10,
                    colorTheme: ['o','o','o'],
                    title: 'Experience',
                    body: 'all the experience in the world',
                    link: '/experience',
                },
                {
                    position: 'left',
                    splatSize: 1,
                    colorTheme: ['r'],
                    title: 'Education',
                    body: 'all my babies',
                    link: '/education',
                },
                {
                    position: 'bottom',
                    splatSize: 10,
                    colorTheme: ['g','y'],
                    title: 'Activities',
                    body: 'all my babies',
                    link: '/activities',
                }
            ]
        },
    },
};

function setNextPage(state, action) {
    let nextState = {
        ...state,
        nextPage: action.payload.nextPage,
    }
    
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