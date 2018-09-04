import React from 'react';
import ProfilePage from './ProfilePage';

const ProfilePageContainer = ({ match }) => (
    <div className="player-page">
        <ProfilePage userId={match.params.id} />
    </div>
);

export default ProfilePageContainer;
