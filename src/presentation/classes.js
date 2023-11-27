import {createNavBar, debugPrint, submittedFormToObject} from "./general.js";
import {GroupClassApi} from "../index.js";

createNavBar(document);

// let groupClassApi = new GroupClassApi();
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
    // trainerField.classList.add('form-control', 'mt-3');
    // trainerField.inputMode = "number";
    // trainerField.placeholder = "Trainer";
    trainerField.innerHTML = '<div class="mb-3  my-3">\
        <input type="number" class="form-control"\
               placeholder="trainer" name="trainer' + globalNumberOfTrainerFields.toString() + '">\
    </div>';
    // trainerField.name = "trainer" + globalNumberOfTrainerFields.toString();
    globalNumberOfTrainerFields++;
    trainersContainerInCreateForm.append(trainerField);
}

function handleSubmitRegister(event) {
    const groupClass = submittedFormToObject(event);

    let trainersIds = [];
    for (let i = 0; i < globalNumberOfTrainerFields; i++) {
        let trainerId = groupClass["trainer" + i.toString()];
        trainersIds.push(groupClass["trainer" + i.toString()]);
    }
    let trainers = "";
    if (!trainersIds.empty) {
        trainers = trainers.concat('[ { "id":' + trainersIds[0].toString() + '}');
    }
    for (let i = 1; i < globalNumberOfTrainerFields; i++) {
        trainers = trainers.concat(', { "id":' + trainersIds[i].toString() + '}');
    }
    if (!trainersIds.empty) {
        trainers = trainers.concat(' ]')
    }
    // debugPrint(trainers);
    groupClass.add("trainers", trainers)

    // [ { "id": 1 }, { "id": 2 } ]
    debugPrint(JSON.stringify(groupClass));
    // groupClassApi.registerGroupClass(groupClass, registerRoomCallback);
    // globalNumberOfTrainerFields = 0;
}