
// Start jascript for navbar.css

//For hide or shwo menu bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'
}

// End jascript for navbar.css


// Start JavaScript for Sidenavbar
    $('.btn').click(function(){
        $(this).toggleClass("click");
        $('.sidebar').toggleClass("show");
    });
    $('.feat-btn').click(function(){
        $('nav ul .feat-show').toggleClass("show");
        $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
        $('nav ul .serv-show').toggleClass("show1");
        $('nav ul .second').toggleClass("rotate");
    });
    $('nave ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

// End JavaScript for Sidenavbar










