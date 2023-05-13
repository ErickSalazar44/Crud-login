export function printUser(store) {
    let html = '';
    store.crud.getUsers().forEach(({name,id,email}) => {
        html += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td id="${id}">
                    <i class="bx bx-trash"></i>
                    <i class="bx bx-edit-alt"></i>
                </td>
            </tr>
        `
    });
    document.querySelector(".User").innerHTML = html
}
