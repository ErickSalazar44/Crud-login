import { printUser } from "./UI/index.js";
import { agregarUser, deleteUserFunction } from "./handles/index.js";
import { CRUD } from "./services/index.js";
function main() {
    const store = {
        crud: CRUD(),
        userEditing: null
    }
    agregarUser(store) // agregamos new user
    printUser(store) // pintamos el user
    deleteUserFunction(store) // Eliminar user
}
window.addEventListener("load",() => {
    main()
})