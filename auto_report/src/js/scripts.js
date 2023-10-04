//initialize const variables and assign the initial value to number of issue

const WRAPPER = document.getElementById('wrapper')
const PROJECT = document.getElementById('tableProjectInfo');
const BUILD = document.getElementById('tableBuildInfo');
const MAJOR = document.getElementById('tableMajorOffender');
const IMPORTANT = document.getElementById('tableImportantNotes');
const REPORT = document.getElementById('tableReportDetails');
const BTN = document.getElementById('export-btn');
const EXPORT = document.getElementById('export');
let numberOfIssues = 0;

$('span[name="buildInfo"').click(function () {
    let clone = document.getElementById("hiddenRow")
    clone = clone.cloneNode(true)
    clone.classList.remove("hide")

    document.getElementById('buildInfoTable').appendChild(clone);
});

// ^works


$('span[name="majorOffender"').click(function () {
    let clone = document.getElementById("hiddenRowIssue")
    clone = clone.cloneNode(true)
    clone.classList.remove("hide")

    document.getElementById('majorOffenderTable').appendChild(clone);
});

$('span[name="importantNotes"').click(function () {
    let clone = document.getElementById("hiddenRow")
    clone = clone.cloneNode(true)
    clone.classList.remove("hide")
    document.getElementById('importantNotesTable').appendChild(clone);
});


$('span[name="reportDetails"').click(function () {
    let clone = document.getElementById("hiddenRow")
    clone = clone.cloneNode(true)
    clone.classList.remove("hide")
    document.getElementById('reportDetailsTable').appendChild(clone);
});


// //not used in this version of tool
// $('.td-add').click(function () {

//     $('#reportDetails tr').append($('<td id="td-remove">'));
//     $('#reportDetails thead tr>td:last').html('<span class="td-remove glyphicon glyphicon-remove" style="color:#700"></span>');
//     $('#reportDetails tbody tr').each(function () {
//         $(this).children('td:last').replaceWith('<td contenteditable="true">-')
//     });
//     // < !--fix -->
//     $('table').delegate('#td-remove', 'click', function () {
//         let index = this.cellIndex;
//         $(this).closest('table').find('tr').each(function () {
//             this.removeChild(this.cells[index]);
//         });
//     });


// });
// ///////////


// $('.td-remove').click(function () {
//     $('table').delegate('#td-remove', 'click', function () {
//         let index = this.cellIndex;
//         $(this).closest('table').find('tr').each(function () {
//             this.removeChild(this.cells[index]);
//         });
//     });
// });



$('.table-remove').click(function () {
    let row = $(this).parent().parent()
    row.remove()
});




// $('td').click(function () {
//     if ($(this).closest('td').text() == "Not Compliant") {
//         $(this).closest('td').css('color', 'red');
//     }
//     if ($(this).closest('td').text() == "Compliant") {
//         $(this).closest('td').css('color', 'green');
//     }
// })

// $(document).on('click', '.table-remove', function (event) {
//     $(this).parents('tr').detach();
// });

$(document).on('click', '.table-up', function (event) {
    let glyphWrapper = $(this).parent();
    let row = glyphWrapper.parent()
    let previousRow = row.prev()
    let r = row[0].classList[0];
    let wrapperID = row.parent()
    if (wrapperID.children(`.${r}`).index(previousRow) !== -1) {
        row.insertBefore(wrapperID.find(previousRow))
    }
});

$(document).on('click', '.table-down', function (event) {
    let glyphWrapper = $(this).parent();
    let row = glyphWrapper.parent()
    let nextRow = row.next()
    let r = row[0].classList[0];
    let wrapperID = row.parent()
    if (wrapperID.children(`.${r}`).index(nextRow) !== -1) {
        row.insertAfter(wrapperID.find(nextRow))
    }
});
//add a prevention from moving the element lower than last index we have 

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

// BTN.click(function () {
//     EXPORT.text(" ");

//     let rows_project = PROJECT.find('tr:not(:hidden)');

//     let headers_project = [];
//     let data_project = [];

//     // Get the headers (add special header logic here)
//     $(rows_project.shift()).find('th:not(:empty)').each(function () {
//         headers_project.push($(this).text().toLowerCase());
//     });

//     // Turn all existing rows into a loopable array
//     rows_project.each(function () {
//         let td_project = $(this).find('td');
//         let h_project = {};

//         // Use the headers from earlier to name our hash keys
//         headers_project.forEach(function (header, i) {
//             h_project[header] = $td_project.eq(i).text();
//         });




//         data_project.push(h_project);
//     });

//     // Output the result
//     EXPORT.append(JSON.stringify(data_project)).append('ENDOFTHEBLOCK');

//     //BUILDS
//     let rows_build = $BUILD.find('tr:not(:hidden)');

//     let headers_build = [];
//     let data_build = [];

//     // Get the headers (add special header logic here)
//     $(rows_build.shift()).find('th:not(:empty)').each(function () {
//         headers_build.push($(this).text().toLowerCase());
//     });

//     // Turn all existing rows into a loopable array
//     rows_build.each(function () {
//         let td_build = $(this).find('td');
//         let h_build = {};

//         // Use the headers from earlier to name our hash keys
//         headers.forEach(function (header, i) {
//             h_build[header] = td_build.eq(i).text();
//         });




//         data_build.push(h_build);
//     });

//     // Output the result
//     EXPORT.append(JSON.stringify(data_build)).append('ENDOFTHEBLOCK');

//     //MAJOR
//     let rows_major = MAJOR.find('tr:not(:hidden)');

//     let headers_major = [];
//     let data_major = [];

//     // Get the headers (add special header logic here)
//     $(rows_major.shift()).find('th:not(:empty)').each(function () {
//         headers_major.push($(this).text().toLowerCase());
//     });

//     // Turn all existing rows into a loopable array
//     rows_major.each(function () {
//         let td_major = $(this).find('td');
//         let h_major = {};

//         // Use the headers from earlier to name our hash keys
//         headers_major.forEach(function (header, i) {
//             h_major[header] = td_major.eq(i).text();
//         });




//         data_major.push(h_major);
//     });

//     // Output the result
//     EXPORT.append(JSON.stringify(data_major)).append('ENDOFTHEBLOCK');
//     //IMPORTANT
//     let rows_important = IMPORTANT.find('tr:not(:hidden)');

//     let headers_important = [];
//     let data_important = [];

//     // Get the headers (add special header logic here)
//     $(rows_important.shift()).find('th:not(:empty)').each(function () {
//         headers_important.push($(this).text().toLowerCase());
//     });

//     // Turn all existing rows into a loopable array
//     rows_important.each(function () {
//         let td_important = $(this).find('td');
//         let h_important = {};

//         // Use the headers from earlier to name our hash keys
//         headers_important.forEach(function (header, i) {
//             h_important[header] = td_important.eq(i).text();
//         });




//         data_important.push(h_important);
//     });

//     // Output the result
//     EXPORT.append(JSON.stringify(data_important)).append('ENDOFTHEBLOCK');
//     //REPORT
//     let rows_report = REPORT.find('tr:not(:hidden)');

//     let headers_report = [];
//     let data_report = [];

//     // Get the headers (add special header logic here)
//     $(rows_report.shift()).find('th:not(:empty)').each(function () {
//         headers_report.push($(this).text().toLowerCase());
//     });

//     // Turn all existing rows into a loopable array
//     rows_report.each(function () {
//         let td_report = $(this).find('td');
//         let h_report = {};

//         // Use the headers from earlier to name our hash keys
//         headers_report.forEach(function (header, i) {
//             h_report[header] = td_report.eq(i).text();
//         });




//         data_report.push(h_report);
//     });

//     // Output the result
//     EXPORT.append(JSON.stringify(data_report)).append('ENDOFTHEBLOCK');

//     $('#sendData').attr('value', EXPORT.text());

//     //json string of all data converted to few arrays
//     let getAllInfo = EXPORT.text().split('ENDOFTHEBLOCK');
//     let projectInfoObj = JSON.parse(getAllInfo[0]);
//     let buildInfoObj = JSON.parse(getAllInfo[1]);
//     let majorIssuesObj = JSON.parse(getAllInfo[2]);
//     let importantNotesObj = JSON.parse(getAllInfo[3]);
//     let reportObj = JSON.parse(getAllInfo[4]);


//     //url to load template.html
//     $('#loadTemplate').load("uortemplate.html");

//     setTimeout(function () {

//         // change data in template with data from the tool
//         $('body *').contents().each(function () {
//             if (this.nodeType == 3) {

//                 this.nodeValue = this.nodeValue.replace('reportType', projectInfoObj[0]["report type"])
//                 this.nodeValue = this.nodeValue.replace('projectName', projectInfoObj[0]["project name"])
//                 this.nodeValue = this.nodeValue.replace('projectMilestone', projectInfoObj[0]["milestone"])
//                 this.nodeValue = this.nodeValue.replace('uorDashboard', projectInfoObj[0]["dashboard link"])
//                 this.nodeValue = this.nodeValue.replace('reportDate', projectInfoObj[0]["report date"])
//                 this.nodeValue = this.nodeValue.replace('numberOfIssues', numberOfIssues)

//                 //Build info block
//                 for (let q = 1; q <= buildInfoObj.length; q++) {
//                     this.nodeValue = this.nodeValue.replace('platformInfo' + q + '', buildInfoObj[q - 1]["platform"])
//                     this.nodeValue = this.nodeValue.replace('platformCompliance' + q + '', buildInfoObj[q - 1]["compliance"])
//                     this.nodeValue = this.nodeValue.replace('platformEnv' + q + '', buildInfoObj[q - 1]["environment"])
//                     this.nodeValue = this.nodeValue.replace('platformBuild' + q + '', buildInfoObj[q - 1]["version"])
//                 }

//                 //Major offenders block
//                 for (let q = 1; q <= majorIssuesObj.length; q++) {
//                     this.nodeValue = this.nodeValue.replace('bugId' + q + '', majorIssuesObj[q - 1]["bug id"])
//                     this.nodeValue = this.nodeValue.replace('bugSummary' + q + '', majorIssuesObj[q - 1]["summary"])
//                     this.nodeValue = this.nodeValue.replace('bugStatus' + q + '', majorIssuesObj[q - 1]["status"])
//                     this.nodeValue = this.nodeValue.replace('bugPlatform' + q + '', majorIssuesObj[q - 1]["platform"])
//                     this.nodeValue = this.nodeValue.replace('bugAssignee' + q + '', majorIssuesObj[q - 1]["assignee"])
//                 }

//                 //Important notes block
//                 for (let q = 1; q <= importantNotesObj.length; q++) {
//                     this.nodeValue = this.nodeValue.replace('plNotes' + q + '', importantNotesObj[q - 1]["platform"])
//                     this.nodeValue = this.nodeValue.replace('importantNotes' + q + '', importantNotesObj[q - 1]["note"])
//                 }

//                 //Report block
//                 for (let q = 20; q <= (19 + reportObj.length); q++) {
//                     this.nodeValue = this.nodeValue.replace('uorCat' + q + '', reportObj[q - 20]["uor category"])
//                     this.nodeValue = this.nodeValue.replace('uorPc' + q + '', reportObj[q - 20]["pc"])
//                     this.nodeValue = this.nodeValue.replace('uorStadia' + q + '', reportObj[q - 20]["stadia"])
//                     this.nodeValue = this.nodeValue.replace('uorX' + q + '', reportObj[q - 20]["x1"])
//                     this.nodeValue = this.nodeValue.replace('uorXs' + q + '', reportObj[q - 20]["xs"])
//                     this.nodeValue = this.nodeValue.replace('uorPs' + q + '', reportObj[q - 20]["ps4"])
//                     this.nodeValue = this.nodeValue.replace('uorScarlett' + q + '', reportObj[q - 20]["ps5"])
//                     this.nodeValue = this.nodeValue.replace('uorSwitch' + q + '', reportObj[q - 20]["switch"])
//                 }

//             }
//         });
//     }, 1000);



// });



BTN.addEventListener("click", function () {
    // let wrapper_length = WRAPPER.querySelectorAll("div")
    // console.log(wrapper_length)
    // for (let i = 0; i > wrapper_length; i++) { }
    // let rows_project = PROJECT.querySelectorAll('div:not(.hidden)');
    // let rows_importantInfo = IMPORTANT.querySelectorAll('div:not(.hidden)');
    // let headers_project = [];
    // let data_project = [];
    // let headers_importantInfo = [];
    // let data_importantInfo = [];

    const USED_DATA = [PROJECT, BUILD,MAJOR,IMPORTANT,REPORT]
    // // Get the innerHTML of all the spans that are children of the divs
    // rows_project.forEach(item => {
    //     if (item.classList.contains("header__project-info")) {

    //         Array.from(item.childNodes).forEach(childNode => {

    //             if (childNode.nodeName.toLocaleLowerCase() === "p" && childNode.innerHTML !== ' ') {
    //                 headers_project.push(childNode.innerHTML)
    //             }



    //         });
    //     }

    //     else {
    //         Array.from(item.childNodes).forEach(childNode => {

    //             if (childNode.nodeName.toLocaleLowerCase() === "p" && childNode.innerHTML !== ' ') {
    //                 data_project.push(childNode.innerHTML)
    //             }



    //         });
    //     }
    // });
    // rows_importantInfo.forEach(item => {
    //     if (item.classList.contains("header__project-info")) {

    //         Array.from(item.childNodes).forEach(childNode => {

    //             if (childNode.innerHTML !== "" && childNode.nodeName.toLocaleLowerCase() === "p") {
    //                 headers_importantInfo.push(childNode.innerHTML)
    //             }



    //         });
    //     }

    //     else {
    //         Array.from(item.childNodes).forEach(childNode => {

    //             if (childNode.nodeName.toLocaleLowerCase() === "p" && childNode.innerHTML != "") {
    //                 data_importantInfo.push(childNode.innerHTML)
    //             }



    //         });
    //     }
    // });

    let project_data = [];
    // let data0 = data_importantInfo.filter((item, i) => i % 2 == 0)
    // let data1 = data_importantInfo.filter((item, i) => i % 2 !== 0)
    for (let i = 0; i < USED_DATA.length; i++) {
        let data_row = USED_DATA[i].querySelectorAll('div:not(.hidden)')
        let data = []
        let headers = []
        data_row.forEach(item => {
            if (item.classList.contains("header__project-info")) {
    
                Array.from(item.childNodes).forEach(childNode => {
    
                    if (childNode.innerHTML !== "" && childNode.nodeName.toLocaleLowerCase() === "p" ) {
                        headers.push(childNode.innerHTML)
                    }
    
    
    
                });
            }
    
            else {
                Array.from(item.childNodes).forEach(childNode => {
    
                    if (childNode.nodeName.toLocaleLowerCase() === "p" && childNode.innerHTML != "" && !childNode.classList.contains("glyphs__wrapper")) {
                        data.push(childNode.innerHTML)
                    }
    
    
    
                });
            }
        });
        const keyValue = {}
        // const dataValue = eval(`data${i}`)
        for(let j=0; j<data.length; j++){
            let headers_length = headers.length
            const index = j%headers_length
            if (keyValue.hasOwnProperty(headers[index])){
                keyValue[headers[index]] += ` ${data[j]}`
            project_data.push(keyValue)
            }
            else{
                keyValue[headers[index]] = data[j]
                project_data.push(keyValue)
            }
            
        }
    }
    project_data = project_data.filter(function (item, pos, self) {return self.indexOf(item)==pos})
    console.log(project_data)


})
//придумать как универсально фильтровать данные в зависмости 
// от того сколько хедеров чтоб в каждій шлі верніе данніе 