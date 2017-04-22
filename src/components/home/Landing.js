import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    const homeIntro = {
      fontSize: "large"
    };

    return (
        <div className="Home">
          <div style={homeIntro}>
            Create landing Page to show here.
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
