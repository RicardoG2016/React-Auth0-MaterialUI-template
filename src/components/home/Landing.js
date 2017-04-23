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
            <h1>Create landing Page to show here</h1>
            <p>Reminder: Make sure to create .env file in the root of your app to use Auth0.</p>
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
