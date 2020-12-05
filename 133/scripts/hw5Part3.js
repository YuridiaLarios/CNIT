let usStates = [
    { name: 'ALABAMA', abbreviation: 'AL', availableInfo: true, capital: 'Montgomery', population:'4,887,871'},
    { name: 'ALASKA', abbreviation: 'AK', availableInfo: true, capital: 'Juneau', population: '737,438'},
    { name: 'ARIZONA', abbreviation: 'AZ', availableInfo: true, capital: 'Phoenix', population: '7,171,646'},
    { name: 'ARKANSAS', abbreviation: 'AR', availableInfo: true, capital: 'Little Rock', population: '3,010,825'},
    { name: 'CALIFORNIA', abbreviation: 'CA', availableInfo: true, capital: 'Sacramento', population: '39,557,045'},
    { name: 'COLORADO', abbreviation: 'CO', availableInfo: true, capital: 'Colorado', population: '5,694,564'},
    { name: 'CONNECTICUT', abbreviation: 'CT', availableInfo: false},
    { name: 'DELAWARE', abbreviation: 'DE', availableInfo: false},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC', availableInfo: false},
    { name: 'FLORIDA', abbreviation: 'FL', availableInfo: false},
    { name: 'GEORGIA', abbreviation: 'GA', availableInfo: false},
    { name: 'HAWAII', abbreviation: 'HI', availableInfo: false},
    { name: 'IDAHO', abbreviation: 'ID', availableInfo: false},
    { name: 'ILLINOIS', abbreviation: 'IL', availableInfo: false},
    { name: 'INDIANA', abbreviation: 'IN', availableInfo: false},
    { name: 'IOWA', abbreviation: 'IA', availableInfo: false},
    { name: 'KANSAS', abbreviation: 'KS', availableInfo: false},
    { name: 'KENTUCKY', abbreviation: 'KY', availableInfo: false},
    { name: 'LOUISIANA', abbreviation: 'LA', availableInfo: false},
    { name: 'MAINE', abbreviation: 'ME', availableInfo: false},
    { name: 'MARYLAND', abbreviation: 'MD', availableInfo: false},
    { name: 'MASSACHUSETTS', abbreviation: 'MA', availableInfo: false},
    { name: 'MICHIGAN', abbreviation: 'MI', availableInfo: false},
    { name: 'MINNESOTA', abbreviation: 'MN', availableInfo: false},
    { name: 'MISSISSIPPI', abbreviation: 'MS', availableInfo: false},
    { name: 'MISSOURI', abbreviation: 'MO', availableInfo: false},
    { name: 'MONTANA', abbreviation: 'MT', availableInfo: false},
    { name: 'NEBRASKA', abbreviation: 'NE', availableInfo: false},
    { name: 'NEVADA', abbreviation: 'NV', availableInfo: false},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH', availableInfo: false},
    { name: 'NEW JERSEY', abbreviation: 'NJ', availableInfo: false},
    { name: 'NEW MEXICO', abbreviation: 'NM', availableInfo: false},
    { name: 'NEW YORK', abbreviation: 'NY', availableInfo: false},
    { name: 'NORTH CAROLINA', abbreviation: 'NC', availableInfo: false},
    { name: 'NORTH DAKOTA', abbreviation: 'ND', availableInfo: false},
    { name: 'OHIO', abbreviation: 'OH', availableInfo: false},
    { name: 'OKLAHOMA', abbreviation: 'OK', availableInfo: false},
    { name: 'OREGON', abbreviation: 'OR', availableInfo: false},
    { name: 'PENNSYLVANIA', abbreviation: 'PA', availableInfo: false},
    { name: 'PUERTO RICO', abbreviation: 'PR', availableInfo: false},
    { name: 'RHODE ISLAND', abbreviation: 'RI', availableInfo: false},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC', availableInfo: false},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD', availableInfo: false},
    { name: 'TENNESSEE', abbreviation: 'TN', availableInfo: false},
    { name: 'TEXAS', abbreviation: 'TX', availableInfo: false},
    { name: 'UTAH', abbreviation: 'UT', availableInfo: false},
    { name: 'VERMONT', abbreviation: 'VT', availableInfo: false},
    { name: 'VIRGINIA', abbreviation: 'VA', availableInfo: false},
    { name: 'WASHINGTON', abbreviation: 'WA', availableInfo: false},
    { name: 'WEST VIRGINIA', abbreviation: 'WV', availableInfo: false},
    { name: 'WISCONSIN', abbreviation: 'WI', availableInfo: false},
    { name: 'WYOMING', abbreviation: 'WY', availableInfo: false }
];

let usStatesInfoAvailable = usStates.filter(state => state.availableInfo).map(state => state.name);

let pageErrors = false;
let foundResults = false;

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
},false;

function createErrorDiv(message, currentContainer) {
    let errorDiv = document.createElement("div");
    let errorDivID = currentContainer.getAttribute("id") + "ErrorMessage";
    errorDiv.setAttribute("id", errorDivID);
    errorDiv.classList.add("errorContainer");
    errorDiv.textContent = message;
    errorDiv.appendAfter(currentContainer);
}

function removeCurrentErrorState() {
    let errorContainersArray = document.querySelectorAll(".errorContainer");
    errorContainersArray.forEach(errorContainer => {errorContainer.style.display = "none"});
    let errorRedStage = document.getElementsByClassName("errorRedStage");
    while (errorRedStage.length)
        errorRedStage[0].className = errorRedStage[0].className.replace(/\berrorRedStage\b/g, "");
}

function removePreviousResults(stateInfoResults) {
    stateInfoResults.innerHTML = "";
}

function getStateInfo() {
    let stateInfoResults = document.getElementById("stateInfoResults");
    let stateInputField = document.getElementById("stateInputField");
    let stateInputFieldValue = stateInputField.value.trim().toUpperCase();

    if (pageErrors) {
        removeCurrentErrorState();
    }
    if (foundResults) {
        removePreviousResults(stateInfoResults);
    }
    if (stateInputFieldValue === "") {
        pageErrors = true;
        stateInputField.classList.add("errorRedStage");
        createErrorDiv("Field cannot be empty, please enter a state name/abbreviation.", stateInputField);
    } else {
        let results = "";
        for(let i = 0; i < usStates.length; i++) {
            if(usStates[i].name === stateInputFieldValue || usStates[i].abbreviation === stateInputFieldValue) {
                if(!usStates[i].availableInfo) {
                    results = "We only have information for: " + usStatesInfoAvailable.join(", ");
                } else {
                    results = `Thanks for your inquiry, here is the information you requested:<br>
                        State abbr = ${usStates[i].abbreviation}<br>
                        State Name = ${usStates[i].name}<br>
                        Capital = ${usStates[i].capital}<br>
                        Population = ${usStates[i].population}<br>`
                }
                break;
            }
        }

        if (results === ""){
            pageErrors = true;
            stateInputField.classList.add("errorRedStage");
            createErrorDiv("Invalid state name, please try again.", stateInputField);
        } else {
            stateInfoResults.innerHTML =  results;
            stateInfoResults.classList.add("stateInfoResults");
            foundResults = true;
        }
    }
}
