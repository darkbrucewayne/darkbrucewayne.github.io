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

loadCookie();

let mobileNavExpanded = false;

function toggleNav() {
    let classes = document.getElementById('mobile-menu').classList;
    let closeIcon = document.getElementById('nav-menu-closed').classList;
    let openIcon = document.getElementById('nav-menu-open').classList;
    if (!mobileNavExpanded) {
        classes.remove('hidden');
        classes.remove('sm:hidden');
        classes.add('block');
        classes.add('sm:block');

        openIcon.remove('hidden');
        openIcon.add('block');

        closeIcon.remove('block');
        closeIcon.add('hidden');
    } else {
        classes.add('hidden');
        classes.add('sm:hidden');
        classes.remove('block');
        classes.remove('sm:block');

        openIcon.remove('block');
        openIcon.add('hidden');

        closeIcon.remove('hidden');
        closeIcon.add('block');
    }
    mobileNavExpanded = !mobileNavExpanded;
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
