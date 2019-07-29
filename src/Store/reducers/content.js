import React from 'react';
import * as images from 'Images';

let initialState = {
    content: {
        curPage: window.location.hash.slice(1),
        nextPage: '',
    },
    navbar: {
        items: [
            {
                name: 'Experience',
                link: '/experience'
            },
            {
                name: 'Education',
                link: '/education'
            },
            {
                name: 'Activities',
                link: '/activities'
            },
            {
                name: 'Blogs',
                items: [
                    {
                        name: 'Tech Blogs',
                        link: '/blogs/tech'
                    }
                ]
            },
        ]
    },
    displayPage: {
        experience: {
            categories: [
                {
                    title: 'Companies',
                    panels: [
                        {
                            title: 'Checkbook Inc.',
                            details: 'May - August 2019          San Mateo, CA',
                            link: 'https://checkbook.io',
                            description: 'Fintech company that provides digital check services',
                            img: {
                                src: require('Images/displayPage/checkbook.png'),
                                alt: 'Checkbook_Logo'
                            },
                            bulletPoints: [
                                'Used React and Redux to build webpages on checkbook.io.',
                                'Built and maintained the internal information portal using React, Redux, and Flask.',
                                'Used various REST APIs to track user information for Checkbook.',
                            ]
                        },
                        {
                            title: 'Kumon',
                            details: 'July 2016 - July 2017        Libertyville, IL',
                            link: 'https://www.kumon.com',
                            description: 'Tutoring center that teaches math and reading',
                            img: {
                                src: require('Images/displayPage/kumon.png'),
                                alt: 'Kumon_Logo'
                            },
                            bulletPoints: [
                                'Taught kids ranging from 7-17 years old in math (calculus II and under) and literature',
                            ]
                        },
                        {
                            title: 'Capstone Investment',
                            details: 'June - July 2016         Shanghai, China',
                            link: 'http://www.capstone-invest.com/statics/?type=detail&id=11',
                            description: 'Hedge fund and investment company that trades stocks, futures, and commodities',
                            img: {
                                src: require('Images/displayPage/capstone.png'),
                                alt: 'Capstone_Logo'
                            },
                            bulletPoints: [
                                'Learned about IPOs, the stock market, media/news tactics, hedging strategies, speculation, and the futures market in China',
                                'Observed traders, researchers/analysts, IT department, and the daily processes of the company',
                                'Used simulated trading tools to speculate the market',
                            ]
                        },
                    ],        
                },
                {
                    title: 'Projects',
                    panels: [
                        {
                            title: 'Personal Website',
                            details: 'July 2019',
                            link: 'https://github.com/akong00/akong-website',
                            description: 'My first personal website built from scratch!',
                            img: {
                                src: require('Images/displayPage/react.png'),
                                alt: 'React_Icon'
                            },
                            bulletPoints: [
                                'Built using React and Redux.',
                                'Created and designed without any templates. Everything was custom built.',
                            ]
                        },
                        {
                            title: 'Next Wave!',
                            details: 'July 2018',
                            link: 'https://github.com/akong00/next-wave',
                            description: 'Mobile game published on the iOS App Store and Google Play Store',
                            img: {
                                src: require('Images/displayPage/nextWave.png'),
                                alt: 'Next_Wave_Icon'
                            },
                            bulletPoints: [
                                'Built using Unity, C#, and GIMP (for all designs).',
                                'All assets were custom created/processed using GIMP, sound editors, or animation tools in Unity.',
                            ]
                        },
                    ]
                }
            ]
        },
        education: {
            categories: [
                {
                    title: 'Schools',
                    panels: [
                        {
                            title: 'University of Illinois at Urbana-Champaign',
                            details: 'August 2018 - Present          Champaign, IL',
                            link: 'https://illinois.edu/',
                            description: 'Bachelor of Science in Computer Engineering',
                            img: {
                                src: require('Images/displayPage/uiuc.png'),
                                alt: 'UIUC_Logo'
                            },
                            bulletPoints: [
                                'GPA: 4.0/4.0'
                            ]
                        },
                        {
                            title: 'Vernon Hills High School',
                            details: 'August 2014 - May 2018          Vernon Hills, IL',
                            link: 'https://www.d128.org/vhhs/',
                            description: 'Mr. Walgren was a cool teacher',
                            img: {
                                src: require('Images/displayPage/vhhs.png'),
                                alt: 'VHHS_Logo'
                            },
                            bulletPoints: [
                                'Unweighted GPA: 3.83/4.0',
                                'Weighted GPA: 4.40'
                            ]
                        },
                    ],
                },
                {
                    title: 'Courses',
                    panels: [
                        {
                            title: 'Computer Systems and Programming',
                            details: 'January - May 2018',
                            link: 'https://ece.illinois.edu/academics/courses/profile/ECE220',
                            description: 'ECE - 220',
                            img: {
                                src: require('Images/displayPage/uiuc.png'),
                                alt: 'UIUC_Logo'
                            },
                            bulletPoints: [
                                'Advanced use of LC-3 assembly language for I/O and function calling convention.',
                                'C programming, covering basic programming concepts, functions, arrays, pointers, I/O, recursion, simple data structures, linked lists, dynamic memory management, and basic algorithms.',
                                'Information hiding and object-oriented design as commonly implemented in modern software and computer systems programming.'
                            ]
                        },
                    ],
                },
            ],
        },
        activities: {
            categories: [
                {
                    title: 'Student Associations',
                    panels: [
                        {
                            title: 'SIGPwny',
                            details: 'August 2018 - Present          Champaign, IL',
                            link: 'https://sigpwny.github.io/',
                            description: 'A special interest group focused on cyber security and CTF competitions',
                            img: {
                                src: require('Images/displayPage/sigPwny.png'),
                                alt: 'SIGPwny_Logo'
                            },
                            bulletPoints: [
                                'Learn various internet security features and practices.',
                                'Do CTF (capture the flag) competitions, where we solve problems through hacking.',
                            ]
                        },
                    ],
                },
                {
                    title: 'Volunteering',
                    panels: [
                        {
                            title: 'Feed My Starving Children (FMSC)',
                            details: 'September 2018 - Present          Libertyville, IL',
                            link: 'https://fmsc.org',
                            description: 'An organization dedicated to feeding starving children around the world',
                            img: {
                                src: require('Images/displayPage/fmsc.png'),
                                alt: 'FMSC_Logo'
                            },
                            bulletPoints: [
                                'Pack ingredients, box meals, and help out with operations in food packing.',
                            ]
                        },
                    ],
                },
            ],
        }
    },
    hero: {
        experience: {
            title: 'Experience',
            subtitle: 'Companies and Projects',
        },
        education: {
            title: 'Education',
            subtitle: 'Schools and Classes',
        },
        activities: {
            title: 'Activities',
            subtitile: 'Student Organizations and Volunteering',
        },
        blogs: {
            title: 'Tech Blogs',
            subtitile: 'Tutorials and Solved Issues',
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
    blog: {
        curPost: '',
    },
};

function setNextPage(state, action) {
    let nextState = {
        ...state,
        content: {
            curPage: state.content.nextPage ? state.content.nextPage : state.content.curPage,
            nextPage: action.payload.nextPage,
        }
    }
    return nextState;
}

function setBlogPost(state, action) {
    let nextState = {
        ...state,
        blog: {
            ...state.blog,
            curPost: action.payload.type,
        }
    }
    return nextState;
}

function content(state = initialState, action) {
    switch (action.type) {
        case 'SET_NEXT_PAGE':
            return setNextPage(state, action);
        case 'SET_BLOG_POST':
            return setBlogPost(state, action);

        default:
            return state;
    }
}

export default content;