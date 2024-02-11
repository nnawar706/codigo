'use client'

import {useEffect, useState} from "react";

const useKey = (target: string) => {
    const [keyPressed, setKeyPressed] = useState<boolean>(false)

    const onKeyDown = ({ key }: { key: any }) => {
        if (key === target) setKeyPressed(true)
    }

    const onKeyUp = ({ key }: { key: any }) => {
        if(key === target) setKeyPressed(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        document.addEventListener('keyup', onKeyUp)
    }, []);

    return keyPressed
}

export default useKey