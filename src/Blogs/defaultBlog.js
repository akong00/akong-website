import t from 'Blogs/tags';

const title = 'Interesting Title';
const subtitle = '';
const author = 'Albert Kong';
const links = [
    {
        img: {
            src: require(`${'Images/icons/github.png'}`),
            alt: 'Github',
        },
        link: 'https://github.com/akong00'
    },
    {
        img: {
            src: require(`${'Images/icons/linkedIn.png'}`),
            alt: 'LinkedIn',
        },
        link: 'https://www.linkedin.com/in/albert-kong'
    },
]
const date = 'Today';
const tags = [t.tutorial];
const img = {
    src: '',
    alt: '',
};

const content = `
Content creation in progress.
`;

const defaultPost = {
    title,
    subtitle,
    author,
    links,
    date,
    tags,
    img,
    content,
}

export default defaultPost;