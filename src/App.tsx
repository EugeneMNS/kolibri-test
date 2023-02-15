import React, {useState} from 'react';
import './App.css';
import UserItem from "./userList/UserItem";

export type UserType = { name: string, surname: string };
const arrUsers: UserType[] = [];
for (let i = 0; i < 100; i++) {
    arrUsers.push({name: `John`, surname: `Doe`});
}


function App() {
    const [offSet, setOffset] = useState(20)

    return <>
        {arrUsers.map((user, index) => {
            if (index < offSet) {
                return <UserItem user={user} index={index}/>
            }
        })}
        // создай невидимый элемент, который будет отслеживать, когда он появится в зоне видимости

    </>
}

export default App;
