import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Entry from './components/entry/Entry'
import Main from './components/entry/Main'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './css/transitions.scss'

class App extends Component {
    render() {
        const {location} = this.props
        return (
            <BrowserRouter>
                <TransitionGroup component="div" className="App">
                    <CSSTransition key="/" timeout={{enter:800, exit:400}} classNames="slider" mountOnEnter={false} unmountOnExit={true}>
                    <div className="right">
                        <Switch>
                            <Route path='/' exact component={Entry} />
                            <Route path="/home" exact component={Main} />
                        </Switch>
                    </div>
                    </CSSTransition>
                </TransitionGroup>
            </BrowserRouter>
        );
    }
    
}

export default App;
