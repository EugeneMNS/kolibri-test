import React from "react";
import {motion, Variants} from 'framer-motion';

type WrapperPropsType = {
    children: React.ReactNode
    index: number
}

const itemVariants: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
}

export const UserItemWrapper = ({children, index}: WrapperPropsType) => {
    if (index < 20) {
        //return React.Children.only(children)
        return <>{children}</>
    }
    return <motion.div
        key={index}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{delay: (index % 20) * 0.3}}
    >{children}</motion.div>

}
