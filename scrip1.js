const offenders = [
    { name: 'kabera fred', age: 45, location: 'Kimihurura', crime: 'Assault' },
    { name: 'Habimana Alphonse', age: 37, location: 'Gatenga', crime: 'Harassment' },
    { name: 'Kwizera Wilson', age: 52, location: 'Rwamagana', crime: 'Abuse' }
];

function searchOffender() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = '';

    const filteredOffenders = offenders.filter(offender => {
        return (
            offender.name.toLowerCase().includes(searchInput) ||
            offender.location.toLowerCase().includes(searchInput)
        );
    });

    filteredOffenders.forEach(offender => {
        const row = resultsTable.insertRow();
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const locationCell = row.insertCell(2);
        const crimeCell = row.insertCell(3);

        nameCell.textContent = offender.name;
        ageCell.textContent = offender.age;
        locationCell.textContent = offender.location;
        crimeCell.textContent = offender.crime;
    });

    if (filteredOffenders.length === 0) {
        const row = resultsTable.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 4;
        cell.textContent = 'No results found';
        cell.style.textAlign = 'center';
    }
}

function navigate(sectionId) {
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

function reportCrime() {
    const description = document.getElementById('crimeDescription').value;
    if (description) {
        alert('Crime reported: ' + description);
    } else {
        alert('Please describe the crime.');
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// Set the default section to be visible
document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
});
