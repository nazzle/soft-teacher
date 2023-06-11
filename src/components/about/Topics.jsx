import React, {Component} from 'react';
import * as CONSTANTS from '../constants/api'

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            delay: 0
        }
    }

    componentDidMount() {
        fetch(CONSTANTS.API_BASE_URL+'/topics')
            .then(response => response.json())
            .then((data) => {this.setState({topics: data.data.sort((a, b) => a.id - b.id)})},
                (error) => {console.log('Topics Data error ', error)})
    }

    topicFadeDelay() {
        this.setState({
            delay: this.state.delay + 1
        })
        console.log(this.state.delay)
    }

    render() {
        const {topics} = this.state
        const {delay} = this.state
        return (
            <>
                {
                    topics.length ?
                        topics.map(topic =>
                            <div key={topic.id} className="icon-box wow fadeInUp">
                               <div className="icon"><i className={topic.attributes.icon} /></div>
                               <h4 className="title"><a href>{topic.attributes.header}</a></h4>
                               <p className="description">{topic.attributes.description}</p>
                            </div>
                        ):null
                }
                {/*<div className="icon-box wow fadeInUp">*/}
                {/*    <div className="icon"><i className="fa fa-shopping-bag" /></div>*/}
                {/*    <h4 className="title"><a href>Mathematics</a></h4>*/}
                {/*    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>*/}
                {/*</div>*/}
                {/*<div className="icon-box wow fadeInUp" data-wow-delay="0.2s">*/}
                {/*    <div className="icon"><i className="fa fa-photo" /></div>*/}
                {/*    <h4 className="title"><a href>English</a></h4>*/}
                {/*    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>*/}
                {/*</div>*/}
            </>
        );
    }
}

export default Topics;