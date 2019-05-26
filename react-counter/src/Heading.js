import React from 'react';

    const Heading = (props) => {
        return <h1 className="main-heading">{props.headingText}</h1>
    }

export default Heading;


// import React, {Component} from 'react';

// class Heading extends Component {

//     render () {
//         return (
//             <div className="heading">
//                 <h1 className="main-heading">{this.props.headingText}</h1>

//             </div>
//         );
//     }

// }

// export default Heading;


