import { useOthers, useSelf } from "@/liveblocks.config";
import styles from "./index.module.css";
import {generateRandomName} from "@/utils/helper";

export function Avatars() {
    const users = useOthers();
    const currentUser = useSelf();

    const hasMoreUsers = users.length > 3

    return (
        <div className={styles.avatars}>
            {currentUser && (
                <div className="relative ml-8 first:ml-0">
                    <Avatar
                        name="You"
                    />
                </div>
            )}

            {users.slice(0,3).map(({ connectionId, info }) => {
                return (
                    <Avatar key={connectionId} name={generateRandomName()} />
                );
            })}

            {hasMoreUsers && <div>+{users.length - 3} </div>}

        </div>
    );
}

export function Avatar({ name }: { name: string }) {
    return (
        <div className={styles.avatar} data-tooltip={name}>
            <img
                src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
                className={styles.avatar_picture}
                data-tooltip={name}
                alt={name}/>
        </div>
    );
}