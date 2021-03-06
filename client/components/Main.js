import React from 'react';
import { Link } from 'react-router';
//
// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           <Link to="/">Instagrum</Link>
//         </h1>
//         {React.Children.map(this.props.children, (child) => React.cloneElement(child))}
//       </div>
//     )
//   }
// }
// console.log('in main');
//
// const Main = ({children}) => {
//   console.log(children);
//   return (
//     <div className="main-container">
//       <nav className="navbar navbar-default" role="navigation">
//         <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
//           <Link to="/">Instagrum</Link>
//         </div>
//       </nav>
//       <div className="container">
//         {children}
//       </div>
//     </div>
//   )
// }

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
});

export default Main
