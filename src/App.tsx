import React, {useEffect, useState} from 'react';
import './App.css';
import UserItem from "./userList/UserItem";
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';


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
            setOffset(offSet + 20)
        }
    }, [inView]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }


    return <>
        {arrUsers_.map((user, index) => {
            if (index < 20) {
                return <UserItem user={user} index={index}/>
            }
            if (index >= 20 && index < offSet) {
                return (
                    <motion.div
                        key={user.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                    >
                        <UserItem user={user} index={index}/>
                    </motion.div>
                )
            }
        })}
        <div ref={ref}/>


    </>
}

export default App;
