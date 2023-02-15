import React from "react";
import {motion, Variants} from 'framer-motion';

type WrapperPropsType = {
    children: React.ReactNode
    index: number
    setDisable: (disabled: boolean) => void
}

const itemVariants: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
}

export const UserItemWrapper = ({children, index, setDisable}: WrapperPropsType) => {
    if (index < 20) {
        return <>{children}</>
    }
    return <motion.div
        key={index}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{delay: (index % 20) * 0.3}}
        onAnimationComplete={() => {
            if (!(index % 20)) {
                setDisable(false)
                console.log(`animation complete setDisable(false)`)
            }
            //console.log(`animation complete ${index}`)
        }}
    >{children}</motion.div>

}
