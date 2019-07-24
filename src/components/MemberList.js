import React from 'react';
import Members from './Members';

const MemberList = ({ newUser }) => {

    return (
        <div className="member-list">
            {newUser}
        </div>
    )
}

export default MemberList;