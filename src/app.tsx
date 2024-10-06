import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes'
import VConsole from 'vconsole'

new VConsole({ theme: 'dark' });

import './app.scss'

type Props = object
type State = object
class App extends React.Component<Props, State> {
    render () {
        return <BrowserRouter>
            <Routes>
                {
                    routes.map(item => (
                        <Route key={item.path} path={item.path} element={<item.element />} />
                    ))
                }
            </Routes>
        </BrowserRouter> 
    }
}

export default App
