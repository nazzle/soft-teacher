import React, {Component} from 'react';
import * as CONSTANTS from '../constants/api'

class HeaderNavsAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: []
        }
    }

    componentDidMount() {
        fetch(CONSTANTS.API_BASE_URL+'/header-navs')
            .then(response => response.json())
            .then((data) => {this.setState({navs: data.data.sort((a, b) => a.id - b.id)})},
                (error) => {console.log('Navs Data error ', error)})
    }

    render() {
        const { navs } = this.state
        return (
            <>
                {
                    navs.length ?
                        navs.slice(0, 6).map(nav => <li key={nav.id}><a href={nav.attributes.target}>{nav.attributes.name}</a></li>) :
                        null
                }
            </>
        );
    }
}

export default HeaderNavsAPI;