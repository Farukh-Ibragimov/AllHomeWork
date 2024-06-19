import React from 'react';

function FaultPage({user}) {
    return (
        <div>
            Тебе сюда нельзя - {user.name} {user.lastname}
        </div>
    );
}

export default FaultPage;
