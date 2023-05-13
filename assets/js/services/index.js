import { updatelocalStorage } from "../helpers/index.js";
// Factory function
export function CRUD() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    function getUsers() {
        return users;
    }

    function getUser(id) {
        return users.find(user => user.id === id);
    }

    function deleteUser(id) {
        users = users.filter((user) => user.id !== id);
        updatelocalStorage(users)
        
    }

    function createUser({name, email}) {
        users.push({id: crypto.randomUUID().slice(-3),
            name,
            email})
            updatelocalStorage(users)
    }

    function deleteAll() {
        users = [];
    }


    function updateUser({id, name, email}) {
        users = users.map((user) => user.id === id ? {id, name: name || user.name, email: email || user.email} : user)
        updatelocalStorage(users);
    }

    return {
        getUsers,
        getUser,
        deleteUser,
        createUser,
        deleteAll,
        updateUser,
    }
}
