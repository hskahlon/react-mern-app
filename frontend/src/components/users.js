import React, {useState, useEffect} from 'react';
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users/").then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then(jsonRes => setUsers(jsonRes.userList));
    })

    return (<div>
        {users.map( user => <li>{user}</li>)}
    </div>)
}
export default Users;