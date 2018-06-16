import React from 'react';
import ProfilePage from './ProfilePage';

const ProfilePageLoader = ({ match }) => (
    <div className="statsPage">
      <ProfilePage userId={match.params.id} />
    </div>
);

export default ProfilePageLoader;