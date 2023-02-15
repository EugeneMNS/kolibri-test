import React, {useEffect, useState} from 'react';
import './App.css';
import {UserItem} from "./userList/UserItem";
import {useInView} from 'react-intersection-observer';
import {UserItemWrapper} from "./userList/UserItemWrapper";


export type UserType = { name: string, surname: string };
/*const arrUsers: UserType[] = [];
for (let i = 0; i < 100; i++) {
    arrUsers.push({name: `John`, surname: `Doe`});
}*/

const names = ['John', 'Paul', 'George', 'Ringo', 'Pablo'];
const subNames = ['Doe', 'Hansales', 'Nikolas', 'Kowalski', 'Escobar'];
const arrUsers_: Array<UserType & { id: number }> = [...Array(100)].map((_, index) => ({
    id: index + 1,
    name: names[index % names.length],
    surname: subNames[index % subNames.length],
}))

function App() {
    const [offSet, setOffset] = useState(20)

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setOffset( (prev) => prev + 20)
        }
    }, [inView]);

    return <>
        {arrUsers_.slice(0, offSet).map((user, index) => {
            return <UserItemWrapper index={index}>
                <UserItem user={user} index={index}/>
            </UserItemWrapper>
        })}
        <div ref={ref}/>


    </>
}


export default App;
