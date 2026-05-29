
// Start jascript for navbar.css


//For hide or shwo menu bar
// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display='flex'
// }
// function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display='none'
// }

// End jascript for navbar.css


// Start JavaScript for Sidenavbar
document.querySelector('.btn').addEventListener('click', function () {
    this.classList.toggle('click');
    document.querySelector('.sidebar').classList.toggle('show');
});

document.querySelector('.feat-btn').addEventListener('click', function () {
    document.querySelector('nav ul .feat-show').classList.toggle('show');
    document.querySelector('nav ul .first').classList.toggle('rotate');
});

document.querySelector('.serv-btn').addEventListener('click', function () {
    document.querySelector('nav ul .serv-show').classList.toggle('show1');
    document.querySelector('nav ul .second').classList.toggle('rotate');
});

document.querySelectorAll('nav ul li').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelectorAll('nav ul li').forEach(function (li) {
            li.classList.remove('active');
        });

        this.classList.add('active');
    });
});

// End JavaScript for Sidenavbar













