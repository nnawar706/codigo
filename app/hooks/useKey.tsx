"use client"

import {useEffect, useState} from "react";

const useKey = function (target: string) {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const onKeyDown = ({ key }: { key: string }) => {
        if (key === target) setKeyPressed(true)
    }

    const onKeyUp = ({ key }: { key: string }) => {
        if (key === target) setKeyPressed(false)
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("keyup", onKeyDown);
        };
    });

    return keyPressed;
}

export default useKey