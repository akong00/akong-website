import t from 'Blogs/tags';

const title = 'Images Unable to Import with Paths Passed from Redux';
const subtitle = '';
const author = 'Albert Kong';
const links = [
    {
        img: {
            src: '',
            alt: 'Github',
        },
        link: 'https://github.com/akong00'
    }
]
const date = 'July 29, 2019';
const tags = [t.issue, t.react];
const img = {
    src: '',
    alt: '',
};
const content = `
## Issue
Images are not being rendered when the image path is passed as a prop with Redux. The issue persists sometimes even when using require inside the component.

### Redux
${'```'}
const img = {
    src: './images/example.png',
    alt: 'example_image'
}
${'```'}

### Component
${'```'}
<img src={img.src} alt={img.alt}/>
${'```'}

## Solution
Use require() along with a template literal and placeholder in the redux when passing in the image path to the component. Using require inside the component will only work for relative paths inside the same directory, but using it in the redux allows absolute and relative paths in any directory.

<pre><code>const img = {
    src: require(\${'./images/example.png'}), 
    alt: 'example_image'
}</code></pre>
`;

const post = {
    title,
    subtitle,
    author,
    date,
    tags,
    img,
    content,
}

export default post;