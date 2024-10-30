window.addEventListener('load', () => {
    const getElement = id => document.getElementById(id)
    const form = getElement('addEmployeeForm')

    form.addEventListener('submit', e => {
        e.preventDefault()
        const info = ['8-digit Employee ID', 'full Name', '4-digit Extension', 'Email', 'Department' ]

            .map(id=> `${id}: ${getElement(id).value}`)
            .join('\n')
        console.log(`Employee Added: \n${info}`)
    })
})
