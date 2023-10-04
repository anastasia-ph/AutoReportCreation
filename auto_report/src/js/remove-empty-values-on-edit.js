let fields = $(".data__project-info").children()

for (const key of Object.keys(fields)) {
    let field = fields[key]
    field.addEventListener('click', function () {
        (field.innerHTML).indexOf('-') === 0 ? field.innerHTML = ' ' : null
    })
    field.addEventListener('focusout', function () {
        field.innerHTML === ' ' ? field.innerHTML = '-' : null
    })
}