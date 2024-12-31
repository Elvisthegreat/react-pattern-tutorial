import React, { useState} from 'react';

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://reqres.in//api/users")
        } catch(error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }
    return <div></div>
};

export default UserContainer;