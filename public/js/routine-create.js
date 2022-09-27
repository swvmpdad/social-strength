var exerciseIds = []
const routineForm = document.querySelector('.routine-form');

async function handleRoutineForm(event) {
    event.preventDefault();

    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        exerciseIds.push(checkboxes[i].name);
    }

    const routine_name = document.querySelector('textarea[name="routine-name"]').value.trim();
    if (routine_name && exerciseIds) {
        const response = await fetch('/api/routines', {
            method: 'POST',
            body: JSON.stringify({ routine_name, exerciseIds }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add routine!');
        }
    }
};

routineForm.addEventListener('submit', handleRoutineForm);
