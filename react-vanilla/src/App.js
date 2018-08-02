import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        //Initialise Bullet Train with an environment ID, these are created per project at https://bullet-train.io
        const environmentID = 'QjgYur4LQTwe5HpvbvhpzK';
        bulletTrain.init({
            environmentID: environmentID,
            defaultFlags: {
                font_size: 10
            },
            onChange: () => {
                //Features have been retrieved from bullet train, either from the server or Local AsyncStorage
                console.log("Received flags", bulletTrain.getAllFlags())
                this.setState({
                    has_loaded: true,
                    instant_messaging: bulletTrain.hasFeature('instant_messaging'),
                    font_size: bulletTrain.getValue('font_size')
                })
            }
        });
    }

    render() {
        const {has_loaded, instant_messaging, font_size} = this.state;
        return (
            <div>
                {has_loaded && (
                    <div>
                        {instant_messaging ? ( //User has the instant messaging feature
                            <div>
                                You have the instant messaging feature
                            </div>
                        ) : ( //User does not have the messaging feature
                            <div>
                                You do not have the feature
                            </div>
                        )}
                        {/*Create a span with the font size is determined remotely*/}
                        <span style={{fontSize: font_size}}>Font size controlled by BulletTrain</span>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
