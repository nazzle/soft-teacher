import React, {Component} from 'react';

class IntroButtons extends Component {
    render() {
        return (
            <>
                <a href="#about" className="btn-get-started scrollto">Download</a>
                <a href="#services" className="btn-services scrollto">Learn More</a>
            </>
        );
    }
}

export default IntroButtons;