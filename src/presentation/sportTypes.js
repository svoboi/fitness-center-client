import {SportTypeApi} from "../index";
import {
    timeOut,
    showError,
    insertDeleteButton,
    insertEditButton,
    createNavBar, submittedFormToObject
} from "./general.js";

createNavBar(document);

let sportApi = new SportTypeApi();
sportApi.getSportTypes(getSportsCallback);

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', handleSubmitRegister);

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', handleSubmitUpdate);

//https://www.learnwithjason.dev/blog/get-form-values-as-json/
function handleSubmitRegister(event) {
    const sport = submittedFormToObject(event)
    sportApi.registerSportType(sport, registerSportCallback)
}

function registerSportCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 201) {
        document.getElementById('tableBody').innerHTML = ""
        sportApi.getSportTypes(getSportsCallback);
        const createFormCollapseType = document.getElementById('createFormCollapse');
        let createFormCollapse = bootstrap.Collapse.getInstance(createFormCollapseType)
        createFormCollapse.hide();
    } else {
        showError(response)
    }
}

function prepareUpdateSport(id) {
    let updateModal = new bootstrap.Modal(document.getElementById('updateModal'), {});
    document.getElementById("updateModalTitle").textContent = "Update sport with id " + id;
    sportApi.getSportType(id, prefillUpdateModal)
    updateModal.show();
}

function handleSubmitUpdate(event) {
    const sport = submittedFormToObject(event)
    let sportId = sport["id"];
    sportApi.putSportType(sport, sportId, updateCallback);
    const updateModalType = document.getElementById('updateModal');
    let updateModal = bootstrap.Modal.getInstance(updateModalType)
    updateModal.hide();
}

function updateCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById('tableBody').innerHTML = ""
        sportApi.getSportTypes(getSportsCallback);
    } else {
        showError(response)
    }
}

function prefillUpdateModal(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 200) {
        document.getElementById("sportIdInUpdateForm").value = data["id"];
        document.getElementById("sportTypeInUpdateForm").value = data["typeName"];
    } else {
        showError(response)
    }
}

function deleteSport(id) {
    sportApi.deleteSportType(id, deleteCallback)
}

function deleteCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 204) {
        document.getElementById('tableBody').innerHTML = ""
        sportApi.getSportTypes(getSportsCallback);
    } else {
        showError(response)
    }
}

function getSportsCallback(error, data, response) {
    if (response == null) {
        timeOut()
    } else if (response.status == 200) {
        const tableBody = document.getElementById('tableBody');
        data.sort((a, b)=>(a.id > b.id))
        data.forEach(sport => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = sport.id;
            row.insertCell(1).textContent = sport.typeName;

            const centeringContainerActions = document.createElement('div');
            centeringContainerActions.classList.add('d-flex', 'justify-content-evenly');
            insertEditButton(centeringContainerActions, sport, prepareUpdateSport)
            insertDeleteButton(centeringContainerActions, sport, deleteSport)
            row.insertCell(2).appendChild(centeringContainerActions)
        })
    } else {
        showError(response)
    }
}