let report_dropdown = document.getElementById("report-type-dropdown")
let report_dropdown_items = document.getElementsByClassName("items_report-type")
report_dropdown.addEventListener('click', function () {
    $('#dropdownMenuReportType').toggleClass('hidden')
})
for (const element of report_dropdown_items) {
    element.addEventListener('click', function (event) {

        document.getElementById("report-type-dropdown").innerHTML = event.currentTarget.innerHTML
        $('#dropdownMenuReportType').addClass('hidden')


    })

}