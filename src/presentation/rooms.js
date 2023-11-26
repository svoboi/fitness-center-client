import {RoomApi} from "../index";
import {
    timeOut,
    showError,
    insertDeleteButton,
    insertEditButton,
    createNavBar, submittedFormToObject
} from "./general.js";

createNavBar(document);

let roomApi = new RoomApi();
roomApi.getRooms(getRoomsCallback);

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', handleSubmitRegister);

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', handleSubmitUpdate);

//https://www.learnwithjason.dev/blog/get-form-values-as-json/
function handleSubmitRegister(event) {
    const room = submittedFormToObject(event)
    roomApi.registerRoom(room, registerRoomCallback)
}

function registerRoomCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 201) {
        document.getElementById('tableBody').innerHTML = ""
        roomApi.getRooms(getRoomsCallback);
        const createFormCollapseType = document.getElementById('createFormCollapse');
        let createFormCollapse = bootstrap.Collapse.getInstance(createFormCollapseType)
        createFormCollapse.hide();
    } else {
        showError(response)
    }
}

function prepareUpdateRoom(row, id) {
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

function handleSubmitUpdate(event) {
    const room = submittedFormToObject(event)
    let roomId = room["id"];
    roomApi.putRoom(room, roomId, updateCallback);
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
            insertEditButton(row, room, 3, prepareUpdateRoom)
            // insertDeleteButtonForRoom(row, room, 3)
            insertDeleteButton(row, room, 3, deleteRoom)
        })
    } else {
        showError(response)
    }
}