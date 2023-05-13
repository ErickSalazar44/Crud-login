export function updatelocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}