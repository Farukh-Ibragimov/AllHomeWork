import './App.css';
import FaultPage from "./pages/faultPage/FaultPage";
import MainPage from "./pages/mainPage/MainPage";
import React, {useState, useEffect} from 'react';

function App() {
    const [user, setUser] = useState({name: '', lastname: ''});
    const [showMainPage, setShowMainPage] = useState(false);

    useEffect(() => {
        if (user.name === 'John' && user.lastname === 'Johns') {
            setShowMainPage(true);
        } else {
            setShowMainPage(false);
        }
    }, [user]);

    const askUserDetails = () => {
        const name = prompt('Как вас зовут?');
        const lastname = prompt('Какая у вас фамилия?');
        setUser({name, lastname});
    };

    useEffect(() => {
        askUserDetails();
    }, []);

    return (
        <div>
            {showMainPage ? (
                <MainPage user={user}/>
            ) : (
                <FaultPage user={user}/>
            )}
        </div>
    );
}


export default App;


