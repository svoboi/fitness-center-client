// import {RoomApi} from "./ApiClient.js";
// import RoomApi from "/api/RoomApi.js";
import {Room, RoomApi} from "../index";
import {
    timeOut,
    showError,
    insertDeleteButton,
    insertEditButton,
    debugPrint
} from "./general.js";

let roomApi = new RoomApi();
roomApi.getRooms(getRoomsCallback);

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', handleSubmitRegister);

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', handleSubmitUpdate);

const createFormButton = document.getElementById('createFormButton');
createFormButton.addEventListener('click', showCreateForm);


//https://www.learnwithjason.dev/blog/get-form-values-as-json/
function handleSubmitRegister(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
    debugPrint(JSON.stringify(value));
}

function handleSubmitUpdate(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
    let roomId = value["id"];
    roomApi.putRoom(value, roomId, updateCallback);
    const updateModalType = document.getElementById('updateModal');
    let updateModal = bootstrap.Modal.getInstance(updateModalType)
    updateModal.hide();
}

function updateCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById('tableBody').innerHTML = ""
        roomApi.getRooms(getRoomsCallback);
    } else {
        showError(response)
    }
}

function updateRoom(row, id) {
    // trying to make form in line:
    // row.innerHTML = "";
    // row.insertCell(0)
    // row.cells[0].appendChild(document.getElementById('editLine'));
    // row.cells[0].children.item(0).hidden = false
    let updateModal = new bootstrap.Modal(document.getElementById('updateModal'), {});
    document.getElementById("updateModalTitle").textContent = "Update room with id " + id;
    roomApi.getRoom(id, prefillUpdateModal)
    updateModal.show();
}

function prefillUpdateModal(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById("roomIdInModal").value = data["id"];
        document.getElementById("roomNameInModal").value = data["name"];
        document.getElementById("roomCapacityInModal").value = data["capacity"];
    } else {
        showError(response)
    }
}

function deleteRoom(id) {
    roomApi.deleteRoom(id, deleteCallback)
}

function deleteCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 204) {
        document.getElementById('tableBody').innerHTML = ""
        roomApi.getRooms(getRoomsCallback);
    } else {
        showError(response)
    }
}

function getRoomsCallback(error, data, response) {
    if (response == null) {
        timeOut()
    } else if (response.status == 200) {
        const tableBody = document.getElementById('tableBody');
        data.sort((a, b)=>(a.id > b.id))
        data.forEach(room => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = room.id;
            row.insertCell(1).textContent = room.name;
            row.insertCell(2).textContent = room.capacity;
            row.insertCell(3).textContent

            // insertEditButtonForRoom(row, room, 3)
            insertEditButton(row, room, 3, updateRoom)
            // insertDeleteButtonForRoom(row, room, 3)
            insertDeleteButton(row, room, 3, deleteRoom)
        })
    } else {
        showError(response)
    }
}

function showCreateForm(event) {
    const form = document.getElementById('createForm');
    form.hidden = false;
}
