import React from 'react';

class HalfPage extends React.Component {
 

    render() {
        return (
            <div className={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

export default HalfPage;