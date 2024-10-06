import Home from './Home'
import Article from './Article'
import NotFound from './NotFound'

const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/article',
        element: Article
    },
    {
        path: '/notFound',
        element: NotFound,
    },
    {
        path: '*',
        element: NotFound,
    }
]

export default routes