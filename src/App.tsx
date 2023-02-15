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

const names = ['John', 'Paul', 'George', 'Ringo', 'Rodrigo'];
const subNames = ['Doe', 'Hansales', 'Nikolas', 'Kowalski', 'Petrov'];
const arrUsers_: Array<UserType & { id: number }> = [...Array(100)].map((_, index) => ({
    id: index + 1,
    name: names[index % names.length],
    surname: subNames[index % subNames.length],
}))

function App() {
    const [offSet, setOffset] = useState(20)
    const [disable, setDisable] = useState(false)
    //console.log('disable => ', disable)
    const { ref, inView } = useInView({
        threshold: 1,
        onChange: (inView, entry) => {

        }
    });

    useEffect(() => {
        if (inView) {
            setDisable(true)
            if(disable) return
            setOffset((prev) => prev + 20)
        }
    }, [inView]);

    useEffect(() => {
        if(disable) return
        //setOffset((prev) => prev + 20)
    }, [disable])
    console.log('12313', arrUsers_.slice(0, offSet).length)
    return <>
        {arrUsers_.slice(0, offSet).map((user, index) => {
            return <UserItemWrapper key={`UserItemWrapper.${index}`} index={index} setDisable={setDisable}>
                <UserItem user={user} index={index}/>
            </UserItemWrapper>
        })}
        {!disable && <div ref={ref} style={{height: '100px', background: 'red'}}>Loading...</div>}
    </>
}


export default App;
