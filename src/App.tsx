import React, {useEffect, useState} from 'react';
import './App.css';
import UserItem from "./userList/UserItem";
import { useInView } from 'react-intersection-observer';


export type UserType = { name: string, surname: string };
const arrUsers: UserType[] = [];
for (let i = 0; i < 100; i++) {
    arrUsers.push({name: `John`, surname: `Doe`});
}


function App() {
    const [offSet, setOffset] = useState(20)

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setOffset(offSet + 20)
        }
    }, [inView]);


    return <>
        {arrUsers.map((user, index) => {
            if (index < offSet) {
                return <UserItem user={user} index={index}/>
            }
        })}
        <div ref={ref}/>


    </>
}

export default App;
