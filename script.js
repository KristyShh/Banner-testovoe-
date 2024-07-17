document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const close = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        loadLoginForm();
    }

    close.onclick = function() {
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
                <label for="contact"></label>
                <input type="text" id="contact" name="contact" required placeholder="Email/Телефон" >
                <label for="password"></label>
                <input type="password" id="password" name="password" placeholder="Пароль" required>
                <label class="checkbox" for="remember">
                    <input type="checkbox" id="remember" name="remember" value="remember-password">Запомнить пароль
                </label><br>
                <a href="#">Восстановить</a>
                <button class='btn-enter' type="submit">Войти</button>
                <button class='btn-registration' type="submit">Зарегистрироваться</button>
            </form>`;
    }
});