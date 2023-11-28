import {UserApi} from "../index";
import {
    timeOut,
    showError,
    insertDeleteButton,
    insertEditButton,
    createNavBar, submittedFormToObject, debugPrint
} from "./general.js";

createNavBar(document);

let userApi = new UserApi();
userApi.getUsers(getUsersCallback);

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', handleSubmitRegister);

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', handleSubmitUpdate);

//https://www.learnwithjason.dev/blog/get-form-values-as-json/
function handleSubmitRegister(event) {
    const user = submittedFormToObject(event)
    userApi.usernameAvailability(user["username"], isUsernameAvailableCallback)
}

function isUsernameAvailableCallback(username, data, response) {
    if (response == null) {
        timeOut();
        return;
    }
    if (response.status == 409) {
        document.getElementById("userNameInCreateForm").classList.add("is-invalid")
        return;
    }
    if (response.status == 204) {
        document.getElementById("userNameInCreateForm").classList.remove("is-invalid")
        // document.getElementById("userNameInCreateForm").classList.add("is-valid")
        let user = new FormData(document.getElementById('createForm'));
        let userJSON = JSON.parse(JSON.stringify(user));
        if (userJSON["phoneNumber"] === "") {
            delete userJSON.phoneNumber;
        }
        userJSON["employee"] = document.getElementById("employeeInCreateForm").checked;
        userJSON["customer"] = document.getElementById("customerInCreateForm").checked;
        userApi.registerUser(userJSON, registerUserCallback)
        return;
    }
    showError(response)
}

function registerUserCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 201) {
        document.getElementById('tableBody').innerHTML = ""
        userApi.getUsers(getUsersCallback);
        const createFormCollapseType = document.getElementById('createFormCollapse');
        let createFormCollapse = bootstrap.Collapse.getInstance(createFormCollapseType)
        createFormCollapse.hide();
    } else {
        showError(response)
    }
}

function prepareUpdateUser(id) {
    let updateModal = new bootstrap.Modal(document.getElementById('updateModal'), {});
    document.getElementById("updateModalTitle").textContent = "Update user with id " + id;
    userApi.getUser(id, prefillUpdateModal)
    updateModal.show();
}

function handleSubmitUpdate(event) {
    const user = submittedFormToObject(event)
    let userJSON = JSON.parse(JSON.stringify(user));
    userJSON["employee"] = document.getElementById("employeeInCreateForm").checked;
    userJSON["customer"] = document.getElementById("customerInCreateForm").checked;
    if (userJSON["phoneNumber"] === "") {
        delete userJSON.phoneNumber;
    }
    let userId = user["id"];
    userApi.putUser(userJSON, userId, updateCallback);
    const updateModalType = document.getElementById('updateModal');
    let updateModal = bootstrap.Modal.getInstance(updateModalType)
    updateModal.hide();
}

function updateCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById('tableBody').innerHTML = ""
        userApi.getUsers(getUsersCallback);
    } else {
        showError(response)
    }
}

function prefillUpdateModal(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById("userIdInUpdateForm").value = data["id"];
        document.getElementById("userNameInUpdateForm").value = data["username"];
        document.getElementById("firstNameInUpdateForm").value = data["firstName"];
        document.getElementById("lastNameInUpdateForm").value = data["lastName"];
        document.getElementById("emailInUpdateForm").value = data["emailAddress"];
        document.getElementById("phoneNumberInUpdateForm").value = data["phoneNumber"];
        document.getElementById("employeeInUpdateForm").checked = data["employee"];
        document.getElementById("customerInUpdateForm").checked = data["customer"];
    } else {
        showError(response)
    }
}

function deleteUser(id) {
    userApi.deleteUser(id, deleteCallback)
}

function deleteCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 204) {
        document.getElementById('tableBody').innerHTML = ""
        userApi.getUsers(getUsersCallback);
    } else {
        showError(response)
    }
}

function getUsersCallback(error, data, response) {
    if (response == null) {
        timeOut()
    } else if (response.status == 200) {
        const tableBody = document.getElementById('tableBody');
        data.sort((a, b)=>(a.id > b.id))
        data.forEach(user => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = user.id;
            row.insertCell(1).textContent = user.username;
            row.insertCell(2).textContent = user.firstName;
            row.insertCell(3).textContent = user.lastName;
            row.insertCell(4).textContent = user.emailAddress;
            row.insertCell(5).textContent = (user.phoneNumber == null || user.phoneNumber == undefined) ? null : user.phoneNumber
            row.insertCell(6).textContent = user.employee;
            row.insertCell(7).textContent = user.customer;

            const centeringContainerActions = document.createElement('div');
            centeringContainerActions.classList.add('d-flex', 'justify-content-evenly');
            insertEditButton(centeringContainerActions, user, prepareUpdateUser)
            insertDeleteButton(centeringContainerActions, user, deleteUser)
            row.insertCell(8).appendChild(centeringContainerActions)
        })
    } else {
        showError(response)
    }
}