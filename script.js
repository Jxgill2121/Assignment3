document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleTheme');

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
    });
});
