type UserProps = {
    username: string,
    password: string
}

// simulate api check
export const isAuthenticated = ({ username, password }: UserProps) => {
    if (username === 'admin' && password === 'admin') {
        return true;
    }
    return false;
}

export const getRoomName = (id: string, dictionary: any[]) => dictionary.find(room => room.id === id)?.name;