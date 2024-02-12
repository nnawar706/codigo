import {adjectives, animals} from "@/constants/usernames";

export function generateRandomName(): string {
    const randomAdjective =
        adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    return `${randomAdjective} ${randomAnimal}`;
}