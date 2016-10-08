import React, {Component, PropTypes} from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (



        // <div className="pane-group">
        //   <div className="pane-cs sidebar">
        //     <div>Test</div>
        //   </div>
        //   <div className="pane">
        //     <h1>Welcome to Photon</h1>
        //     <p>
        //       Thanks for downloading Photon. This is an example HTML page that's linked up to compiled Photon CSS, has the proper meta tags
        //       and the HTML structure.
        //     </p>
        //   </div>
        // </div>

      <div style={{height: '100%'}}>
        {this.props.children}
      </div>
    );
  }
}
