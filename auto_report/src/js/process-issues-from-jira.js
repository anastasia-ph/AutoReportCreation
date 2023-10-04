let submitButton = document.getElementById('submit-issues-file')

function sortDictionaryByArrayElement(dict) {


    let priorityList = structuredClone(dict["Ubi Priority"])
    let indexes = []
    for (let i = 0; i < priorityList.length; i++) {
        indexes.push(i)
    }

    for (let j = 0; j < priorityList.length - 1; j++) {
        let min = j;
        for (let k = j + 1; k < priorityList.length; k++) {
            if (priorityList[k] < priorityList[min]) {
                min = k;
            }
        }
        if (min != j) {
            let target = priorityList[j];
            let targetIndex = indexes[j]
            priorityList[j] = priorityList[min];
            indexes[j] = indexes[min]
            priorityList[min] = target;
            indexes[min] = targetIndex

        }
    }
    for (let i = 0; i < 5; i++) {
        indexes.shift()
    }

    Object.keys(dict).forEach((obj) => {

        for (let i = 0; i < indexes.length; i++) {
            delete dict[obj][indexes[i]]
        }

    })

    Object.keys(dict).forEach((obj) => {
        dict[obj] = dict[obj].filter(n => n)
    })
    for (let i = 0; i < Object.values(dict)[0].length; i++) {

        let clone = document.getElementById("hiddenRowIssue")
        clone = clone.cloneNode(true)
        clone.classList.remove("hide")
        document.getElementById('majorOffenderTable').appendChild(clone);
    }


    let counter = 0

    Object.keys(dict).forEach((obj, index) => {

        let a = document.getElementsByClassName("items__major-offenders")[0].children
        for (let i = 0; i < a.length; i++) {
            if (a[i].innerHTML == "Bug ID") {
                if (obj === "Key") {
                    for (let j = 0; j < Object.values(dict)[i].length; j++) {

                        const projectInfoElements = document.getElementById('majorOffenderTable').querySelectorAll(".data__project-info");

                        projectInfoElements.forEach(element => {
                            const children = element.children;
                            for (const child of children) {


                                if (child.tagName == "A") {
                                    let shortURL = dict[obj][counter].slice(dict[obj][counter].lastIndexOf("/") + 1, dict[obj][counter].length)
                                    child.innerHTML = shortURL
                                    child.href = dict[obj][counter]
                                    counter = counter + 1;

                                }


                            }
                        });                        // document.getElementById('majorOffenderTable').querySelectorAll(".data__project-info").children[i].innerHTML = shortURL
                        // document.getElementById('majorOffenderTable').children[j + 2].children[i].href = dict[obj][i]
                    }
                }
                counter = 0

            }

            else if (a[i].innerHTML == "Summary") {
                if (obj === "Summary") {
                    for (let j = 0; j < dict[obj].length; j++) {
                        const projectInfoElements = document.getElementById('majorOffenderTable').querySelectorAll(".data__project-info");

                        projectInfoElements.forEach(element => {
                            const children = element.children;
                            for (const child of children) {
                                if (child.innerHTML == "Specify summary") {
                                    child.innerHTML = dict[obj][counter]
                                    counter = counter + 1;
                                }



                            }
                        });
                    }
                }
                counter = 0

            }
            if (a[i].innerHTML == "Status") {
                if (obj === "Status") {
                    for (let j = 0; j < dict[obj].length; j++) {
                        const projectInfoElements = document.getElementById('majorOffenderTable').querySelectorAll(".data__project-info");

                        projectInfoElements.forEach(element => {
                            const children = element.children;


                            for (const child of children) {
                                if (child.innerHTML == "Specify status") {
                                    child.innerHTML = dict[obj][counter]
                                    counter = counter + 1;
                                }

                            }
                        });
                    }
                }
                counter = 0

            }

            else if (a[i].innerHTML == "Assignee") {
                if (obj === "Assignee") {
                    for (let j = 0; j < dict[obj].length; j++) {
                        const projectInfoElements = document.getElementById('majorOffenderTable').querySelectorAll(".data__project-info");

                        projectInfoElements.forEach(element => {
                            const children = element.children;
                            for (const child of children) {
                                if (child.innerHTML == "Specify assignee") {
                                    child.innerHTML = dict[obj][counter]
                                    counter = counter + 1;
                                }
                            }
                        });
                    }
                    counter = 0

                }

            }

            else if (a[i].innerHTML == "Platform") {
                if (obj === "Platform/Module") {
                    for (let j = 0; j < dict[obj].length; j++) {
                        const projectInfoElements = document.getElementById('majorOffenderTable').querySelectorAll(".data__project-info");

                        projectInfoElements.forEach(element => {
                            const children = element.children;
                            for (const child of children) {
                                if (child.innerHTML == "Specify platform") {
                                    child.innerHTML = dict[obj][counter]
                                    counter = counter + 1;
                                }
                            }
                        });
                    }
                    counter = 0

                }

            }
        }
    })

}

submitButton.addEventListener("change", async function (e) {

    let file = e.target.files[0];
    const reader = new FileReader();
    let parser = new DOMParser()

    reader.onload = function (e) {
        let htmlContent = e.target.result;
        let doc = parser.parseFromString(htmlContent, "text/html")
        let result = doc.documentElement.innerHTML

        document.getElementById('content').innerHTML = result;

        let columnsHeaders = document.getElementsByClassName('rowHeader')[0].children
        let issuesList = document.getElementById('issuetable').getElementsByTagName("tbody")[0].children

        let issueElements = {}

        for (let i = 0; i < columnsHeaders.length; i++) {
            let valuesArray = []

            columnsHeaders[i].innerHTML = columnsHeaders[i].innerHTML.trimStart().trimEnd()


            for (let j = 0; j < issuesList.length; j++) {

                if (issuesList[j].children[i].children.length > 0) {
                    for (let childNode = 0; childNode < issuesList[j].children[i].children.length; childNode++) {

                        if (columnsHeaders[i].innerHTML == "Ubi Priority" && issuesList[j].children[i].children[childNode].innerText[0] == "0") {
                            let result = issuesList[j].children[i].children[childNode].innerText.replace(issuesList[j].children[i].children[childNode].innerText[0], '').trimStart().trimEnd()
                            valuesArray.push(result)
                            break
                        }

                        else if (columnsHeaders[i].innerHTML == "Key") {
                            let result = issuesList[j].children[i].children[childNode].href
                            valuesArray.push(result)
                            break
                        }
                        let result = issuesList[j].children[i].children[childNode].innerText.trimStart().trimEnd()

                        valuesArray.push(result)

                    }

                }
                else {
                    if (columnsHeaders[i].innerHTML == "Ubi Priority" && issuesList[j].children[i].innerText[0] == "0") {
                        let result = issuesList[j].children[i].innerText.replace(issuesList[j].children[i].innerText[0], '').trimStart().trimEnd()
                        valuesArray.push(result)
                        break
                    }
                    else if (columnsHeaders[i].innerHTML == "Key") {
                        let result = issuesList[j].children[i].children[childNode].href
                        valuesArray.push(result)
                        break
                    }

                    let result = issuesList[j].children[i].innerText.trimStart().trimEnd()
                    valuesArray.push(result)



                }

            }
            issueElements[columnsHeaders[i].innerHTML] = valuesArray
        };

        sortDictionaryByArrayElement(issueElements)

    };

    reader.readAsText(file);



})