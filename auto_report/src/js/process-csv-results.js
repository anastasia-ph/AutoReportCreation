

let xrayButtons = document.getElementsByClassName("xray-data__input-button")
let parsedData;
let requirementsList;
let parsedDataSorted;
let indexOfCell;

fetch("./../../src/config/requirementsList.json")
    .then(response => response.json())
    .then(data => { requirementsList = data })
    .catch(err => console.log(err))

function identifyMe() {

    let xrayButtonsContainers = document.getElementsByClassName("data_percentage__button-container")

    let ids = []
    for (let button of xrayButtons) {
        ids.push(button.parentElement.id)
    }
    for (let container of xrayButtonsContainers) {


        container.addEventListener("click", function (e) {
            indexOfCell = ids.indexOf(e.currentTarget.id)

        })

    }
}
identifyMe()


let overallPercentage = [];


function countPercentage(data) {
    let previousKey
    let numberOfCases = 0
    let notPassed = 0
    Object.keys(data).forEach(function (key, index) {
        const lastElement = data.length - 1

        if (!previousKey || previousKey === data[index]["Key"] && (index !== lastElement)) {
            if (data[index]["Result"] != "PASS") {
                notPassed += 1
                numberOfCases += 1
            }
            else {
                numberOfCases += 1
            }
            previousKey = data[index]["Key"]

        }

        else if (index === lastElement) {
            if (data[index]["Result"] != "PASS") {
                notPassed += 1
                numberOfCases += 1
            }
            else {
                numberOfCases += 1
            }
            let result = notPassed === 0 ? 100 : ((1 - (notPassed / numberOfCases)) * 100)
            result = Math.round(result)

            overallPercentage.push(`${data[index]["Key"]}, ${result}`)
        }

        else {
            let result = notPassed === 0 ? 100 : ((1 - (notPassed / numberOfCases)) * 100)
            result = Math.round(result)
            overallPercentage.push(`${data[index - 1]["Key"]}, ${result}`)
            numberOfCases = 0;
            notPassed = 0
            if (data[index]["Result"] != "PASS") {
                notPassed += 1
                numberOfCases += 1
            }
            else {
                numberOfCases += 1
            }
            previousKey = data[index]["Key"]

        }

    })


}


async function processCSV(file) {
    return new Promise((resolve, reject) => {


        Papa.parse(file, {
            complete: function (results) {
                parsedData = results.data;
                parsedData = parsedData.map(el => ({ "Key": el["Test Summary"], "Result": el["Status"] }))
                Object.keys(parsedData).forEach(function (key, index) {
                    let newKey = parsedData[index]["Key"].replace('[UOR]', ' ').slice(0, parsedData[index]["Key"].replace('[UOR]', ' ').indexOf(".")).replace(/ /g, '')
                    parsedData[key]["Key"] = newKey

                })
                parsedDataSorted = Object.keys(parsedData).sort(function (a, b) { return parsedData[a]["Key"] - parsedData[b]["Key"] }).map(key => parsedData[key])
                resolve(parsedDataSorted)
            },
            header: true,
            skipEmptyLines: true


        })
    })
        ;
}

function pasteResults() {
    let newOverallPercentage = [];
    //to sum up the result
    let resultsArray = []

    for (let i = 0; i < overallPercentage.length; i++) {
        let overallPercKey = overallPercentage[i].slice(0, (overallPercentage[i]).indexOf(","))

        Object.values(requirementsList).forEach(async function (element) {
            Object.keys(element).forEach(async function (key) {
                if (overallPercKey === key) {
                    newOverallPercentage.push(overallPercentage[i].replace(overallPercKey, element[key]))
                }
            })
        })
    }


    let container = document.getElementById("reportDetailsTable")
    container = container.children

    for (let i = 0; i < newOverallPercentage.length; i++) {
        let firstFeature;
        let splitted = newOverallPercentage[i].split(",")
        if (splitted[0] === "Cross-Play & Cross-Progression" || splitted[0] === "Reputation & Sanctions") {
            firstFeature = splitted[0].split("&")
            firstFeature = firstFeature[0].replace(/\s+/g, '')
        }
        for (let j = 1; j < container.length; j++) {
            if (firstFeature != undefined && container[j].children[0].innerHTML.includes(firstFeature)) {
                container[j].children[indexOfCell].innerHTML = splitted[1]
                resultsArray.push(splitted[1].replace(/\s+/g, ''))

            }
            else if (splitted[0] === container[j].children[0].innerHTML) {
                container[j].children[indexOfCell].innerHTML = splitted[1]
                resultsArray.push(splitted[1].replace(/\s+/g, ''))

            }
        }
    }
    let result = resultsArray.reduce((a, b) => Number(a) + Number(b))
    result = result / resultsArray.length
    container[container.length - 1].children[indexOfCell].innerHTML = Math.round(result)

}


for (let button of xrayButtons) {
    button.addEventListener("change", async function (event) {
        const doc = event.target.files[0]
        parsedDataSorted = await processCSV(doc);
        countPercentage(parsedDataSorted)
        pasteResults(overallPercentage)
        overallPercentage.splice(0)
    })

}

// button.addEventListener("change", async function (event) {
//     const doc = event.target.files[0]
//     let parsedDataSorted = await processCSV(doc);
//     countPercentage(parsedDataSorted)
//     pasteResults(overallPercentage)
// })








