const exportButton = document.getElementById("exp")

let doci = document.getElementById('UORreport')
function replaceReportType(element) {
    let searchString = "reportType";

    if (element.innerHTML && element.innerHTML == searchString) {
        element.innerHTML = document.getElementById("report-type-dropdown").innerHTML
        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        replaceReportType(element.children[i], searchString);
    }
}


function replaceProjectName(element) {
    let searchString = "projectName"
    if (element.innerHTML && element.innerHTML == searchString) {
        element.innerHTML = document.getElementById("projectName").innerHTML
        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        replaceProjectName(element.children[i], searchString);
    }
}

function replaceProjectMilestone(element) {
    let searchString = "projectMilestone"
    if (element.innerHTML && element.innerHTML == searchString) {
        element.innerHTML = document.getElementById("projectMilestone").innerHTML
        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        replaceProjectMilestone(element.children[i], searchString);
    }
}

function replaceDashboardLink(element) {
    let searchString = "uorDashboard"
    if (element.innerHTML && element.innerHTML == searchString) {
        element.innerHTML = `<a href=${document.getElementById("dashboardLink").innerHTML} Link </a>`


        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        replaceDashboardLink(element.children[i], searchString);
    }
}


function replaceCurrentDate(element) {
    let searchString = "reportDate";

    if (element.innerHTML && element.innerHTML == searchString) {
        let todayDate = new Date().toJSON().slice(0, 10);
        element.innerHTML = todayDate
        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        replaceCurrentDate(element.children[i], searchString);
    }
}

function replacePlatformInfo(element) {
    let searchString = "platformInfo"

    if (j < document.getElementById("buildInfoTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                element.innerHTML = document.getElementById("buildInfoTable").children[j].children[0].innerHTML
                j = j + 1

                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replacePlatformInfo(element.children[i], searchString, j);
    }
}
function replaceComplianceStatus(element) {

    let searchString = "platformCompliance"

    if (j < document.getElementById("buildInfoTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                element.innerHTML = document.getElementById("buildInfoTable").children[j].children[1].innerHTML
                j = j + 1

                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceComplianceStatus(element.children[i], searchString, j);
    }
}
function replaceEnvironment(element) {

    let searchString = "platformEnv"

    if (j < document.getElementById("buildInfoTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                element.innerHTML = document.getElementById("buildInfoTable").children[j].children[2].innerHTML
                j = j + 1

                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceEnvironment(element.children[i], searchString, j);
    }
}
function replaceVersion(element) {

    let searchString = "platformBuild"

    if (j < document.getElementById("buildInfoTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                element.innerHTML = document.getElementById("buildInfoTable").children[j].children[3].innerHTML
                j = j + 1

                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceVersion(element.children[i], searchString, j);
    }
}



function replaceBugID(element) {
    let searchString = "bugId"
    if (j < majorOffenderTable.children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (majorOffenderTable.children[j].classList.contains("hide")) {
                    j = j + 1
                    element.innerHTML = `<a href=${majorOffenderTable.children[j].children[0].href}> ${majorOffenderTable.children[j].children[0].innerHTML}</a>`

                }
                else {
                    element.innerHTML = `<a href=${majorOffenderTable.children[j].children[0].href}> ${majorOffenderTable.children[j].children[0].innerHTML}</a>`


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceBugID(element.children[i], searchString, j);
    }
}

function replaceBugSummary(element) {
    let searchString = "bugSummary"
    let majorOffenderTable = document.getElementById("majorOffenderTable")

    if (j < majorOffenderTable.children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (majorOffenderTable.children[j].classList.contains("hide")) {
                    j = j + 1
                    element.innerHTML = majorOffenderTable.children[j].children[1].innerHTML
                }
                else {
                    element.innerHTML = majorOffenderTable.children[j].children[1].innerHTML

                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceBugSummary(element.children[i], searchString, j);
    }
}

function replaceBugStatus(element) {
    let searchString = "bugStatus"
    let majorOffenderTable = document.getElementById("majorOffenderTable")

    if (j < majorOffenderTable.children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (majorOffenderTable.children[j].classList.contains("hide")) {
                    j = j + 1
                    element.innerHTML = majorOffenderTable.children[j].children[2].innerHTML
                }
                else {
                    element.innerHTML = majorOffenderTable.children[j].children[2].innerHTML

                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceBugStatus(element.children[i], searchString, j);
    }
}



function replaceBugPlatform(element) {
    let searchString = "bugPlatform"
    let majorOffenderTable = document.getElementById("majorOffenderTable")

    if (j < majorOffenderTable.children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (majorOffenderTable.children[j].classList.contains("hide")) {
                    j = j + 1
                    element.innerHTML = majorOffenderTable.children[j].children[3].innerHTML
                }
                else {
                    element.innerHTML = majorOffenderTable.children[j].children[3].innerHTML

                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceBugPlatform(element.children[i], searchString, j);
    }
}


function replaceBugAssignee(element) {
    let searchString = "bugAssignee"
    let majorOffenderTable = document.getElementById("majorOffenderTable")

    if (j < majorOffenderTable.children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (majorOffenderTable.children[j].classList.contains("hide")) {
                    j = j + 1
                    element.innerHTML = majorOffenderTable.children[j].children[4].innerHTML
                }
                else {
                    element.innerHTML = majorOffenderTable.children[j].children[4].innerHTML

                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceBugAssignee(element.children[i], searchString, j);
    }
}
function replaceMajorOffendersTable(element) {
    let majorOffenderTable = document.getElementById("majorOffenderTable")

    if (!majorOffenderTable.children[majorOffenderTable.children.length - 1].classList.contains("hide")) {

        let majorOffenderFunctions = [replaceBugID, replaceBugSummary, replaceBugStatus, replaceBugPlatform, replaceBugAssignee]
        for (const moFunc of majorOffenderFunctions) {
            j = 1
            moFunc(element)
        }
    }
}

function replaceRequirementsTitles(element) {
    let searchString = "uorCat"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[0].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[0].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceRequirementsTitles(element.children[i], searchString, j);
    }
}




function replacePCResults(element) {
    let searchString = "uorPc"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[1].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[1].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replacePCResults(element.children[i], searchString, j);
    }
}
function replaceX1Results(element) {
    let searchString = "uorX"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString) && !element.innerHTML.includes("uorXs")) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[2].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[2].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceX1Results(element.children[i], searchString, j);
    }
}
function replaceXsxResults(element) {
    let searchString = "uorXs"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[3].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[3].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceXsxResults(element.children[i], searchString, j);
    }
}
function replacePS4Results(element) {
    let searchString = "uorPs"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[4].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[4].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replacePS4Results(element.children[i], searchString, j);
    }
}
function replacePS5Results(element) {
    let searchString = "uorScarlett"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[5].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[5].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replacePS5Results(element.children[i], searchString, j);
    }
}
function replaceNXResults(element) {
    let searchString = "uorSwitch"
    if (j < document.getElementById("reportDetailsTable").children.length) {
        if (element.innerHTML && element.innerHTML.includes(searchString)) {
            if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
                if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
                    j = j + 1

                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[6].innerHTML
                }
                else {
                    element.innerHTML = document.getElementById("reportDetailsTable").children[j].children[6].innerHTML


                }

                j = j + 1


                return

            }

        }

    }

    for (let i = 0; i < element.children.length; i++) {

        replaceNXResults(element.children[i], searchString, j);
    }
}
// function replaceX1Results(element) {
//     let searchString = ["uorPc", "uorX", "uorXs", "uorPs", "uorScarlett", "uorSwitch"]

//     for (let string of searchString) {
//         let index = searchString.findIndex((el) => el === string)
//         if (j < document.getElementById("reportDetailsTable").children.length) {
//             if (element.innerHTML && element.innerHTML.includes(string)) {
//                 if (element.children.length == 0 || element.children[0].tagName.toLowerCase() == "o:p") {
//                     if (document.getElementById("reportDetailsTable").children[j].classList.contains("hide")) {
//                         j = j + 1

//                         element.innerHTML = document.getElementById("reportDetailsTable").children[index + 1].children[j].innerHTML
//                     }
//                     else {
//                         element.innerHTML = document.getElementById("reportDetailsTable").children[index + 1].children[j].innerHTML
//                     }
//                 }

//                 j = j + 1


//             }

//         }

//     }
//     for (let i = 0; i < element.children.length; i++) {
//         let searchString = ["uorPc", "uorX", "uorXs", "uorPs", "uorScarlett", "uorSwitch"]

//         replaceX1Results(element.children[i], searchString, j);
//     }

// }
function replaceApplicable(element) {
    let applicablePlatforms = []
    let checkboxes = document.querySelectorAll('.na-button input');


    checkboxes.forEach((checkbox) => !checkbox.checked ? applicablePlatforms.push(document.querySelector(`#${checkbox.parentElement.parentElement.id} label`).innerHTML) : null)
    applicablePlatforms.forEach((platform) => {
        const functionName = `replace${platform}Results`;
        j = 1
        window[functionName](element)
    })
}



function replacePlaceholders() {
    let functions_to_call = [
        replaceProjectName, replaceProjectMilestone, replaceDashboardLink,
        replaceReportType, replaceCurrentDate, replacePlatformInfo,
        replaceComplianceStatus, replaceEnvironment, replaceVersion, replaceMajorOffendersTable,
        replaceRequirementsTitles,
        replaceApplicable
    ]

    for (func of functions_to_call) {
        j = 1
        try {
            func(doci)

        }
        catch (error) {
            console.log(error)
        }
    }
}




exportButton.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './uortemplate.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('UORreport').innerHTML = xhr.responseText;
            replacePlaceholders();


        }
    };
    xhr.send();
})



