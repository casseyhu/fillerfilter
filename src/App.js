import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Entry from './components/entry/Entry'
import Main from './components/entry/Main'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './css/transitions.scss'

class App extends Component {
    state={
        prevDepth: this.getPathDepth(this.props.location)
    }

    componentWillReceiveProps() {
        this.setState({ prevDepth: this.getPathDepth(this.props.location) });
    }
      
    getPathDepth(location) {
        let pathArr = location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");
        return pathArr.length;
    }

    render() {
        const {location} = this.props;
        return (
            <TransitionGroup component="div" className="App">
                <CSSTransition key={location.pathname.split("/")[1] || "/" } timeout={{enter:800, exit:800}} classNames="slider" mountOnEnter={false} unmountOnExit={true}>
                <div className="right">
                    <Switch location={location}> 
                        <Route path='/' exact component={Entry} />
                        <Route path="/home" exact component={Main} />
                    </Switch>
                </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
    
}

export default withRouter(App);
