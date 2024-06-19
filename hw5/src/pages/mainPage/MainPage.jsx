import React from 'react';

function MainPage({user}) {
    return (
        <div>
            Добро пожаловать {user.name} {user.lastname}, мы тебя ждали!
        </div>
    );
}

export default MainPage;