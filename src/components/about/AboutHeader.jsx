import React, {Component} from 'react';
import * as  CONSTANTS from '../constants/api'

class AboutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutHeader: []
        }
    }
    componentDidMount() {
        fetch(CONSTANTS.API_BASE_URL+'/about-header')
            .then(response => response.json())
            .then((data) => {this.setState({aboutHeader: data.data.attributes})},
                (error) => {console.log('About header Data error ', error)})
    }

    render() {
        const {aboutHeader} = this.state
        return (
            <>
                <h3>{aboutHeader.title}</h3>
                <p>
                    {aboutHeader.subtitle}
                </p>
            </>
        );
    }
}

export default AboutHeader;