// import colors from 'Utils/styleVariables.scss';

export const hiddenStyle = {
    // overflow: 'hidden',
    position: 'absolute',
    display: 'none',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: 0,
    border: 0
}

export function createPanelStyle(section) {
    let r = {
        position: 'fixed',
        width: window.innerWidth,
        height: window.innerHeight,
        clipPath: '',
        cursor: 'pointer',
    };

    switch(section) {
        case 'right':
            r.clipPath = 'polygon(100% 0, 0 33.33%, 0 66.67%, 100% 100%)';
            r.left = r.width / 3 * 2;
            r.width = r.width / 3;
            break;
        case 'top':
            r.clipPath = 'polygon(0 0, 33.33% 100%, 66.67% 100%, 100% 0)';
            r.height = Math.round(r.height / 3);
            break;
        case 'left':
            r.clipPath = 'polygon(0 0, 100% 33.33%, 100% 66.67%, 0 100%)';
            r.width = Math.round(r.width / 3);
            break;
        case 'bottom':
            r.clipPath = 'polygon(33.33% 0, 0 100%, 100% 100%, 66.67% 0)';
            r.top = r.height / 3 * 2;
            r.height = r.height / 3;
            break;
        case 'center':
            r.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 100% 0)';
            r.top = r.height / 3;
            r.left = r.width / 3;
            r.width = Math.floor(r.width / 3) + 1;
            r.height = Math.floor(r.height / 3) + 1;
            r.cursor = 'default';
            break;
        
        default:
            r.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 100% 0)';
            r.paddingLeft = Math.round(r.width / 3);
            r.paddingTop = Math.round(r.height / 3);
            r.width = Math.floor(r.width / 3) + 1;
            r.height = Math.floor(r.height / 3) + 1;
    }

    return r
}

export function createTextContainerStyle(section) {
    let r = {
        position: 'fixed',
        pointerEvents: 'none',
    };

    let height = window.innerHeight;
    let width = window.innerWidth;
    let fontHeight = width / height < 1 ? width / 20 : height / 20;

    switch(section) {
        case 'right':
            r.top = height / 2;
            r.bottom = height / 2;
            r.right = -(20 + fontHeight * 2);
            r.textAlign = 'center';
            r.transform = 'rotate(90deg)';
            break;
        case 'top':
            r.top = 0;
            r.left = 0;
            r.right = 0;
            r.textAlign = 'center';
            break;
        case 'left':
            r.top = height / 2;
            r.bottom = height / 2;
            r.left = -(20 + fontHeight * 2);
            r.textAlign = 'center';
            r.transform = 'rotate(-90deg)';
            break;
        case 'bottom':
            r.bottom = 0;
            r.left = 0;
            r.right = 0;
            r.textAlign = 'center';
            break;
        case 'center':
            r.right = 0;
            r.left = 0;
            r.top = height / 3;
            r.height = height / 3;
            r.textAlign = 'center';
            break;
        default:
            break;
    }

    return r
}

export function createTextStyle(section) {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let r = {
        pointerEvents: 'all',
        minWidth: '5em',
        fontSize: width / height < 1 ? Math.floor(width / 20) : Math.floor(height / 20),
        cursor: 'pointer',
    }

    switch(section) {
        case 'right':
        case 'left':
            break;
        case 'top':
        case 'bottom':
            r.marginRight = 'auto';
            r.marginLeft = 'auto';
            r.maxWidth = '6em';
            break;
        case 'center':
            r.marginRight = 'auto';
            r.marginLeft = 'auto';
            r.margin = '0.4em auto 0.3em';
            r.maxWidth = '7em';
            r.cursor = 'default';
            r.hover = 'white';
            break;
        
        default:
            break;
    }

    return r
}

export function createPostStyle() {
    let width = window.innerWidth;
    let r = {};

    if(width > 1000) r.margin = '50px 27%';
    else if(width > 600) {
        r.width = 460;
        r.margin = '50px auto'
    }
    else if(width > 400) r.margin = 50;
    else r.margin = 15;

    return r;
}