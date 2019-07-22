export function createPanelStyle(section) {
    let r = {
        position: 'fixed',
        zIndex: 1,
        width: window.innerWidth,
        height: window.innerHeight,
        clipPath: ''
    };

    switch(section) {
        case 'right':
            r.clipPath = 'polygon(100% 0, 0 100%, 0 0, 100% 100%)';
            r.paddingLeft = Math.round(r.width / 3 * 2);
            r.width = Math.round(r.width / 3);
            break;
        case 'top':
            r.clipPath = 'polygon(0 0, 33.3% 100%, 66.7% 100%, 100% 0)';
            r.height = Math.round(r.height / 3);
            r.zIndex = 2;
            break;
        case 'left':
            r.clipPath = 'polygon(0 0, 100% 33.3%, 100% 66.7%, 0 100%)';
            r.width = Math.round(r.width / 3);
            r.zIndex = 2;
            break;
        case 'bottom':
            r.clipPath = 'polygon(100% 0, 0 100%, 100% 100%, 0 0)';
            r.paddingTop = Math.round(r.height / 3 * 2);
            r.height = Math.round(r.height / 3);
            break;
        case 'center':
            r.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 100% 0)';
            r.paddingLeft = Math.round(r.width / 3);
            r.paddingTop = Math.round(r.height / 3);
            r.width = Math.floor(r.width / 3) + 1;
            r.height = Math.floor(r.height / 3) + 1;
            r.zIndex = 2;
            break;
        
        default :
            r.clipPath = 'polygon(33.3% 33.3%, 33.3% 66.7%, 66.7% 66.7%, 66.7% 33.3%)';
            r.height = Math.round(r.height / 3);
            r.width = Math.round(r.width / 3);
            r.zIndex = 2;
    }

    return r
}

export function createTextContainerStyle(section) {
    let r = {
        position: 'fixed',
        zIndex: 0,
    };

    switch(section) {
        case 'right':
            break;
        case 'top':
            r.top = 10;
            r.left = 0;
            r.right = 0;
            r.textAlign = 'center';
            r.pointerEvents = 'none';
            break;
        case 'left':
            break;
        case 'bottom':
            
            break;
        case 'center':
           
            break;
        
        default :
            r.top = 10
    }

    return r
}

export function createTextStyle(section) {
    let r = {
        pointerEvents: 'all',
        maxWidth: '10em',
        marginRight: 'auto',
        marginLeft: 'auto'
    }

    switch(section) {
        case 'right':
            r.transform = '';
            break;
        case 'top':
            break;
        case 'left':
            
            break;
        case 'bottom':
            
            break;
        case 'center':
           
            break;
        
        default :
            r.top = 10
    }

    return r
}