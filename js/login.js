function switchToAdmin() {
    const title = document.getElementById('title');
    title.textContent = "Admin Login";
    localStorage.setItem('loginState', 'admin');
}

window.onload = function () {
    const storedState = localStorage.getItem('loginState');
    if (storedState === 'admin') {
        switchToAdmin();
    }
};
