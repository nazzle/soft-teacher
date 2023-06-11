import React, {Component} from 'react';
import * as CONSTANTS from '../constants/api'

class IntroHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introHeaders: []
        }
    }

    componentDidMount() {
        fetch(CONSTANTS.API_BASE_URL+'/intro-header ')
            .then(response => response.json())
            .then((data) => {this.setState({introHeaders: data.data.attributes})},
                (error) => {console.log('Intro header Data error ', error)})
    }

    render() {
        const { introHeaders } = this.state
        return (
            <>
                <h2>{introHeaders.headerText}<br /><span>{introHeaders.headerTextSpan}</span><br /></h2>
            </>
        );
    }
}

export default IntroHeader;