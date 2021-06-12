function loadCookie() {
    let theme = Cookies.get('theme');
    if (theme) {
        if (theme === 'dark') {
            document.getElementsByTagName('html')[0].classList.add('dark');
            $(document).ready(function() {
                document.getElementById('dark-mode-toggle').checked = true;
            });
        } else if (theme === 'light') {
        }
    } else {
        Cookies.set('theme', 'dark');
        loadCookie();
    }
}

$(document).ready(function() {
    $('#dark-mode-toggle').change(function() {
        if (this.checked) {
            document.getElementsByTagName('html')[0].classList.add('dark');
            Cookies.set('theme', 'dark');
        } else {
            document.getElementsByTagName('html')[0].classList.remove('dark');
            Cookies.set('theme', 'light');
        }
    });
});
