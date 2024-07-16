document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        loadLoginForm();
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function loadLoginForm() {
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = `
            <h2>Войти в систему</h2>
            <form id="loginForm">
                <label for="email/tel"></label>
                <input type="email/telephone" id="email" name="email/tel" required placeholder="Email/Телефон" ><br><br>
                <label for="password"></label>
                <input type="password" id="password" name="password" placeholder="Пароль" required><br><br>
                <label for="remember">
                    <input type="checkbox" id="remember" name="remember" value="remember-password">Запомнить пароль
                </label><br>
                <a href="#">Восстановить</a>
                <button type="submit">Войти</button>
                <button type="submit">Зарегистрироваться</button>
            </form>`;
    }
});