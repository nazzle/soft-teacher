import React, {Component} from 'react';
import  * as CONSTANTS from '../constants/api'

class TopicsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicsHeader: []
        }
    }

    componentDidMount() {
        fetch(CONSTANTS.API_BASE_URL+'/topics-header')
            .then(response => response.json())
            .then((data) => {this.setState({topicsHeader: data.data.attributes})},
                (error) => {console.log('Topics header Data error ', error)})
    }

    render() {
        const {topicsHeader} = this.state
        return (
            <>
                <p>
                    {topicsHeader.header}
                </p>
            </>
        );
    }
}

export default TopicsHeader;