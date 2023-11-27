import {createNavBar, debugPrint, showError, submittedFormToObject, timeOut} from "./general.js";
import {GroupClass, GroupClassApi} from "../index.js";

createNavBar(document);

let groupClassApi = new GroupClassApi();
// groupClassApi.getGroupClasses(getClassesCallback);

const addTrainerButtonInCreateForm = document.getElementById('addTrainerButtonInCreateForm');
addTrainerButtonInCreateForm.addEventListener('click', addTrainerFieldToCreateForm);

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', handleSubmitRegister);

// const updateForm = document.getElementById('updateForm');
// updateForm.addEventListener('submit', handleSubmitUpdate);

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
    event.preventDefault();
    const groupClass = new FormData(event.target);
    let groupClassObj = Object.fromEntries(groupClass.entries());
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
    }
}

function addIDToSportType (groupClassJSON) {
    if (groupClassJSON["sportType"].toString().length > 0) {
        let sportTypeNo = groupClassJSON["sportType"].toString();
        Object.assign(groupClassJSON, {
            sportType: {
                id: sportTypeNo
            }
        });
    }
}

function registerClassCallback(error, data, response) {
    if (response == null) {
        timeOut();
    } else if (response.status == 201) {
        // document.getElementById('tableBody').innerHTML = ""
        // groupClassApi.getGroupClasses(getClassCallback);
        const createFormCollapseType = document.getElementById('createFormCollapse');
        let createFormCollapse = bootstrap.Collapse.getInstance(createFormCollapseType)
        createFormCollapse.hide();
        globalNumberOfTrainerFields = 0;
    } else {
        showError(response)
    }
}