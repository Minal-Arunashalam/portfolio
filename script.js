//toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// action for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    toggleTheme();
});
