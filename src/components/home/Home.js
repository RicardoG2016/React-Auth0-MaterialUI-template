import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import Landing from './Landing';
import EditProfile from '../profile/EditProfile'

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
              {(this.props.profile) ? <EditProfile /> : <Landing />}
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
