import { User } from 'src/user/entities';
export declare class Entry {
    id: number;
    content: string;
    category: string;
    intensity: number;
    createdAt: Date;
    author: User;
}
