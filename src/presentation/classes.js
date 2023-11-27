import {
    createNavBar,
    debugPrint,
    insertDeleteButton,
    insertEditButton,
    showError,
    submittedFormToObject,
    timeOut
} from "./general.js";
import {GroupClass, GroupClassApi} from "../index.js";

createNavBar(document);

let groupClassApi = new GroupClassApi();
groupClassApi.getGroupClasses(getClassesCallback);

const addTrainerButtonInCreateForm = document.getElementById('addTrainerButtonInCreateForm');
addTrainerButtonInCreateForm.addEventListener('click', addTrainerFieldToCreateForm);

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', handleSubmitRegister);

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', handleSubmitUpdate);

window.globalNumberOfTrainerFields = 0;

function addTrainerFieldToCreateForm(event) {
    const trainersContainerInCreateForm = document.getElementById('trainersContainerInCreateForm');
    const trainerField = document.createElement('div');
    trainerField.innerHTML = '<div class="mb-3  my-3">\
        <input type="number" class="form-control"\
               placeholder="trainer" name="trainer' + globalNumberOfTrainerFields.toString() + '">\
    </div>';
    globalNumberOfTrainerFields++;
    trainersContainerInCreateForm.append(trainerField);
}

function handleSubmitRegister(event) {
    let groupClassObj = submittedFormToObject(event);
    let groupClassJSON = JSON.parse(JSON.stringify(groupClassObj));

    if (globalNumberOfTrainerFields > 0) {
        addTrainersCorrectly(groupClassJSON)
    }

    addIDToRoom(groupClassJSON);
    addIDToSportType(groupClassJSON);
    groupClassApi.registerGroupClass(groupClassJSON, registerClassCallback);
}

function addTrainersCorrectly (groupClassJSON, trainersIds) {
    groupClassJSON.trainers = []
    for (let i = 0; i < globalNumberOfTrainerFields; i++) {
        let nameOfAttribute = "trainer" + i.toString()
        groupClassJSON.trainers.push({"id": groupClassJSON[nameOfAttribute]})
        delete groupClassJSON[nameOfAttribute]
    }
}

function addIDToRoom (groupClassJSON) {
    if (groupClassJSON["room"].toString().length > 0) {
        let roomNo = groupClassJSON["room"].toString();
        Object.assign(groupClassJSON, {
            room: {
                id: roomNo
            }
        });
        return;
    }
    delete groupClassJSON.room;
}

function addIDToSportType (groupClassJSON) {
    if (groupClassJSON["sportType"].toString().length > 0) {
        let sportTypeNo = groupClassJSON["sportType"].toString();
        Object.assign(groupClassJSON, {
            sportType: {
                id: sportTypeNo
            }
        });
        return;
    }
    delete groupClassJSON.sportType;
}

function registerClassCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 201) {
        document.getElementById('tableBody').innerHTML = ""
        groupClassApi.getGroupClasses(getClassesCallback);
        const createFormCollapseType = document.getElementById('createFormCollapse');
        let createFormCollapse = bootstrap.Collapse.getInstance(createFormCollapseType)
        createFormCollapse.hide();
        globalNumberOfTrainerFields = 0;
    } else {
        showError(response)
    }
}

function getClassesCallback(error, data, response) {
    if (response == null) {
        timeOut()
    } else if (response.status == 200) {
        const tableBody = document.getElementById('tableBody');
        data.sort((a, b)=>(a.id > b.id))
        data.forEach(groupClass => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = groupClass.id;
            row.insertCell(1).textContent = groupClass.timeFrom.toLocaleString();
            row.insertCell(2).textContent = groupClass.timeTo.toLocaleString();
            row.insertCell(3).textContent = groupClass.capacity;
            row.insertCell(4).textContent = (groupClass.room == null) ? null : groupClass.room.id
            row.insertCell(5).textContent = (groupClass.sportType == null) ? null : groupClass.sportType.id
            row.insertCell(6).textContent
            insertEditButton(row, groupClass, 6, prepareUpdateClass)
            insertDeleteButton(row, groupClass, 6, deleteClass)
        })
    } else {
        showError(response)
    }
}

function prepareUpdateClass(row, id) {
    let updateModal = new bootstrap.Modal(document.getElementById('updateModal'), {});
    document.getElementById("updateModalTitle").textContent = "Update class with id " + id;
    groupClassApi.getGroupClass(id, prefillUpdateModal)
    updateModal.show();
}

function prefillUpdateModal(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById("classIdUpdateForm").value = data["id"];
        document.getElementById("timeFromInUpdateForm").value = countISODateTime(data["timeFrom"]);
        document.getElementById("timeToInUpdateForm").value = countISODateTime(data["timeTo"]);
        document.getElementById("capacityInUpdateForm").value = data["capacity"];
        if (data["room"] != null) {
            document.getElementById("roomInUpdateForm").value = data["room"].id;
        }
        else {
            document.getElementById("roomInUpdateForm").value = "";
        }
        if (data["sportType"] != null) {
            document.getElementById("sportTypeInUpdateForm").value = data["sportType"].id;
        }
        else {
            document.getElementById("sportTypeInUpdateForm").value = "";
        }
    } else {
        showError(response)
    }
}

function countISODateTime(time) {
    let date = new Date(time);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().substring(0, 16);
}

function deleteClass(id) {
    groupClassApi.deleteGroupClass(id, deleteCallback)
}

function deleteCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 204) {
        document.getElementById('tableBody').innerHTML = ""
        groupClassApi.getGroupClasses(getClassesCallback);
    } else {
        showError(response)
    }
}

function handleSubmitUpdate(event) {
    let groupClassObj = submittedFormToObject(event);
    let groupClassJSON = JSON.parse(JSON.stringify(groupClassObj));

    let groupClassId = groupClassJSON["id"];

    addIDToRoom(groupClassJSON);
    addIDToSportType(groupClassJSON);

    groupClassApi.putGroupClass(groupClassJSON, groupClassId, updateCallback);
    const updateModalType = document.getElementById('updateModal');
    let updateModal = bootstrap.Modal.getInstance(updateModalType)
    updateModal.hide();
}

function updateCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById('tableBody').innerHTML = ""
        groupClassApi.getGroupClasses(getClassesCallback);
    } else {
        showError(response)
    }
}