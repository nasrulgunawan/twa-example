document.addEventListener('DOMContentLoaded', function () {
  const sideNavElement = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavElement);
  const tabElements = document.querySelectorAll('.tabs');
  M.Tabs.init(tabElements);
});