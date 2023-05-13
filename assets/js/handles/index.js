import { printUser } from "../UI/index.js";

export function agregarUser(store) {
    document.querySelector("#formUsers").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = e.target.nameUser.value.trim();
        const email = e.target.emailUser.value.trim()
        const nameExists = store.crud.getUsers().some(user => user.name === name); // devuelvoe True o False
        const emailExists = store.crud.getUsers().some(user => user.email === email); // devuelvoe True o False
        if (!name || !email) return alert("Todos los campos son necesarios");

        if (store.userEditing) {
            const btnHTML = document.querySelector(".btn");
            store.crud.updateUser({
                id: store.userEditing.id,
                name,
                email,
            });
            // edit btn 
            btnHTML.classList.toggle("btn-edit");
            btnHTML.textContent = "Sign up";
            // edit tittle
            tittle.classList.replace("editTitle","loginTittle");
            tittle.classList.toggle("enfoque");
            edit.classList.replace("loginTittle","editTitle");
            edit.classList.toggle("enfoque");
            console.log("editado")
        } else {
            if (nameExists) return alert("Name user no disponible");
            if (emailExists) return alert("e-mail ya se encuentra registrado");
            store.crud.createUser({name, email})
        }
        printUser(store)
        store.userEditing = null;
        e.target.reset();
    })
}

export function deleteUserFunction(store) {
    const userHTML = document.querySelector(".User");
    const btnHTML = document.querySelector(".btn");

    userHTML.addEventListener("click", (e)=> {
        if (e.target.classList.contains('bx-trash')) {
            const idUser = e.target.parentElement.id;
            store.crud.deleteUser(idUser)
            printUser(store)
        }
        if (e.target.classList.contains('bx-edit-alt')) {
            const idUser = e.target.parentElement.id;

            store.userEditing = store.crud.getUser(idUser);
            // edit btn 
            btnHTML.classList.toggle("btn-edit");
            btnHTML.textContent = "Editing";
            // edit tittle
            edit.classList.replace("editTitle","loginTittle");
            edit.classList.toggle("enfoque");
            tittle.classList.replace("loginTittle","editTitle");
            tittle.classList.toggle("enfoque");
            // textContent
            formUsers.nameUser.value = store.crud.getUser(idUser).name;
            formUsers.emailUser.value = store.crud.getUser(idUser).email;
        }

    })
}