export function createNavBar(page) {
    let navBar = page.createElement("navBar");
    navBar.innerHTML ='\
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="navBar">\
        <div class="container-fluid">\
            <a class="navbar-brand" href="./homescreen.html">Fitness center</a>\
            <ul class="navbar-nav">\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./classes.html">Classes</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./users.html">Users</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./rooms.html">Rooms</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link text-light" href="./sportTypes.html">Sports</a>\
                </li>\
            </ul>\
        </div>\
    </nav>';
    page.body.prepend(navBar);
}

export function timeOut() {
    let errorModal = new bootstrap.Modal(document.getElementById('errorModal'), {});
    document.getElementById("errorModalTitle").textContent = "Time out"
    document.getElementById("errorModalBody").textContent = "Server didn't respond in time."
    errorModal.show();
}

export function showError(response) {
    let errorModal = new bootstrap.Modal(document.getElementById('errorModal'), {});
    document.getElementById("errorModalTitle").textContent = "Error " + response.status
    if (response.body.message != null)
        document.getElementById("errorModalBody").textContent = response.body.message
    else
        document.getElementById("errorModalBody").textContent = "Unable to read request";
    errorModal.show();
}

export function debugPrint(message) {
    let errorModal = new bootstrap.Modal(document.getElementById('errorModal'), {});
    document.getElementById("errorModalTitle").textContent = message
    errorModal.show();
}

export function insertDeleteButton(row, entity, index, deleteFunction) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteFunction(entity.id)
    });
    deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
    row.cells[index].appendChild(deleteButton);
}

export function insertEditButton(row, entity, index, updateFunction) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        updateFunction(row, entity.id)
    });
    editButton.classList.add('btn', 'btn-secondary');
    row.cells[index].appendChild(editButton);
}

export function submittedFormToObject(form)
{
    form.preventDefault();
    const data = new FormData(form.target);
    return Object.fromEntries(data.entries());
}