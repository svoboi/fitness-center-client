let navBar = document.createElement("navBar");
navBar.innerHTML ='\
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="navBar">\
        <div class="container-fluid">\
            <a class="navbar-brand" href="./src/presentation/homescreen.html">Fitness center</a>\
            <ul class="navbar-nav">\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./src/presentation/classes.html">Classes</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./src/presentation/users.html">Users</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./src/presentation/rooms.html">Rooms</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./src/presentation/sportTypes.html">Sports</a>\
                </li>\
            </ul>\
        </div>\
    </nav>';
document.body.prepend(navBar);