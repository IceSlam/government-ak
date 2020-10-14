function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('show');
}

document.querySelectorAll('.is-sidebar__menu navbar-nav nav-item nav-link').onclick(function() {
    document.querySelectorAll('.is-subm').classList.toggle('open');
});
