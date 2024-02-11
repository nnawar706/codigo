"use client"

import { ToastData } from "@/types/General"
import * as Toast from "@radix-ui/react-toast"

const ShowToast = ({message, show}: ToastData) => {
    return (
        <Toast.Provider duration={3000} swipeDirection="right">
            <Toast.Root open={show}>
                <Toast.Description>{message}</Toast.Description>
            </Toast.Root>
            <Toast.Viewport />
        </Toast.Provider>
    )
}

export default ShowToast