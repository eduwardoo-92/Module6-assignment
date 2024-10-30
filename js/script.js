window.addEventListener('load', () => {
    const getElement = id => document.getElementById(id)
    const form = getElement('addEmployeeForm')

    form.addEventListener('submit', e => {
        e.preventDefault()
        const info = ['employeeID', 'fullName', 'extension', 'email', 'department' ]

            .map(id=> `${id}: ${getElement(id).value}`)
            .join('\n')
        console.log(`Employee Added: \n${info}`)
    })
})
