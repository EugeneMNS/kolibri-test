import React, {useEffect, useState} from 'react';
import './App.css';
import {UserItem} from "./userList/UserItem";
import {useInView} from 'react-intersection-observer';
import {motion, Variants} from 'framer-motion';


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

const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

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


    //arrUsers_.slice(0, offSet).map((user, index) => {
    return <>
        {arrUsers_.slice(0, offSet).map((user, index) => {
            /*if (index < 20) {
                return <UserItem user={user} index={index}/>
            }
            if (index >= 20 && index < offSet) {
                return (
                    <motion.div
                        key={user.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: (index % 20) * 0.5 }}
                    >
                        <UserItem user={user} index={index}/>
                    </motion.div>
                )
            }*/
            return <Wrapper index={index}>
                <UserItem user={user} index={index}/>
            </Wrapper>
        })}
        <div ref={ref}/>


    </>
}

type WrapperPropsType = {
    children: React.ReactNode
    index: number
}
const Wrapper = ({ children, index }: WrapperPropsType) => {
    if (index<20) {
        //return React.Children.only(children)
        return <>{children}</>
    }
    return <motion.div
        //key={user.id}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: (index % 20) * 0.3 }}
    >{children}</motion.div>

}

export default App;
