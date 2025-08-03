import type React from "react";
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers: () => Promise<void> = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log("Error: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <p>Loading Please Wait...</p>;

    return (
        <div>
            <h1>Users List:</h1>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default UserList;
