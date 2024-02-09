//toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function toggleIcon(){
    var sun = document.getElementById('sun');
    var moon = document.getElementById('moon');
    
    // sun.toggle('hidden');
    // moon.toggle('moon-icon');
    sun.classList.toggle('hidden');
    moon.classList.toggle('hidden');
}

// action for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    toggleTheme();
    toggleIcon();
});
