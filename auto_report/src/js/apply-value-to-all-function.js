let items_status = document.getElementsByClassName("compliance-status_dropdown")
let items_env = document.getElementsByClassName("data__environment-value")
let items_version = document.getElementsByClassName("data__build-value")
let items_project = document.getElementsByClassName("data__platform-note")
let items_detailedReport = document.getElementsByClassName("data_percentage")
items_detailedReport = items_detailedReport[0].children
const button = `<span id="apply-button" class="apply-button">Apply to all</span>`

let items = [items_status, items_env, items_version, items_project]


// for (const element of items_status) {
//     element.addEventListener('click', function () {
//         document.contains(document.getElementById("apply-button")) ? document.getElementById("apply-button").remove() : null
//         element.insertAdjacentHTML("afterend", button)
//         document.getElementById("apply-button").addEventListener('click', function () {
//             let value = $('#apply-button').prev()[0].innerHTML
//             for (const element of items_status) {
//                 element.innerHTML = value
//             }

//         })


//     })
//     element.addEventListener('focusout', function () {
//         setTimeout(() => { document.getElementById("apply-button").remove() }, 250)
//     })
// }
for (const item of items) {
    for (const element of item) {
        element.addEventListener('click', function () {
            document.contains(document.getElementById("apply-button")) ? document.getElementById("apply-button").remove() : null
            element.insertAdjacentHTML("afterend", button)
            if ((element.className).indexOf("environment") > -1) {
                document.getElementById("apply-button").classList.add('apply-button_margin-env')
            }
            else if ((element.className).indexOf("build") !== -1) {
                document.getElementById("apply-button").classList.add('apply-button__margin-build')
            }
            else if ((element.className).indexOf("note") !== -1) {
                document.getElementById("apply-button").classList.add('apply-button__margin-platform')
            }
            else {
                document.getElementById("apply-button").classList.add('apply-button_margin-compliance')

            }


            document.getElementById("apply-button").addEventListener('click', function () {
                let value = $('#apply-button').prev()[0].innerHTML
                for (const element of item) {
                    element.innerHTML = value
                }

            })


        })
        // element.addEventListener('focusout', function () {
        //     setTimeout(() => { document.getElementById("apply-button").remove() }, 250)
        // })
    }
}
for (let i = 1; i < items_detailedReport.length; i++) {

    items_detailedReport[i].addEventListener("click", function (e) {
        document.contains(document.getElementById("apply-button")) ? document.getElementById("apply-button").remove() : null
        items_detailedReport[i].insertAdjacentHTML("beforeend", button)
        document.getElementById("apply-button").classList.add('apply-button__detailed_report')
        if (e.target.id === "apply-button") {

            let clickedButtonIndex = Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget);

            for (let i = 1; i < (document.getElementById("reportDetailsTable").children).length; i++) {

                for (let j = 1; j < ((document.getElementById("reportDetailsTable").children[i]).children).length; j++) {
                    if (j === clickedButtonIndex) {
                        continue
                    }
                    let valueReplacement = document.getElementById("reportDetailsTable").children[i].children[clickedButtonIndex].innerHTML;
                    document.getElementById("reportDetailsTable").children[i].children[j].innerHTML = valueReplacement;
                }
            }


        }

    })
}
// for (const element of items_env) {
//     element.addEventListener('click', function () {
//         document.contains(document.getElementById("apply-button")) ? document.getElementById("apply-button").remove() : null
//         element.insertAdjacentHTML("afterend", button)
//         document.getElementById("apply-button").addEventListener('click', function () {
//             let value = $('#apply-button').prev()[0].innerHTML
//             console.log($('#apply-button').prev())

//             for (const element of items_env) {
//                 element.innerHTML = value
//             }

//         })


//     })
//     element.addEventListener('focusout', function () {
//         setTimeout(() => { document.getElementById("apply-button").remove() }, 250)
//     })
// }
