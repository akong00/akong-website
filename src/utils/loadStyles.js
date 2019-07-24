import { spring } from 'react-motion';

export const pageLoadStyle = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: spring(1, {stiffness: 10, damping: 3})
    },
}
export const pageExitStyle = {
    initial: {
        opacity: 1
    },
    final: {
        opacity: spring(0, {stiffness: 20, damping: 7})
    },
}
