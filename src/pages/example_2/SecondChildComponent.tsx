type User = {
    name: string,
    id: number,
    email: string,
}

type Props = {
    user: User
}

const SecondChildComponent: React.FC<Props> = ({ user }) => {
    return <div>
        <h1>{user.name}</h1>
        <p>{user.id}</p>
        <p>{user.email}</p>
    </div>;
};

export default SecondChildComponent;
