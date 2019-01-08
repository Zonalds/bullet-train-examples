import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import config from './reducers/index'
import bulletTrain from 'bullet-train-client'
import App from './components/App'

//Setup store
const store = createStore(config)

//Intialise Bullet Train
const environmentID = 'QjgYur4LQTwe5HpvbvhpzK'
bulletTrain.init({
    environmentID: environmentID,
    defaultFlags: {
        font_size: 10
    },
    onChange: () => {
        console.log("Received flags", bulletTrain.getAllFlags())
        store.dispatch({
            type: 'CONFIG_CHANGED',
            data: {
                instant_messaging: bulletTrain.hasFeature('instant_messaging'),
                font_size: bulletTrain.getValue('font_size')
            }
        })
    }
});

//Setup root component
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App {...store.getState()}/>,
    rootEl
)

render()
store.subscribe(render)
