async function handleFormSubmit(event) {
    event.preventDefault();

    const exercise_name = document.querySelector('textarea[name="exercise-name"]').value.trim();
    const muscle_group = document.querySelector('textarea[name="muscle-group"').value.trim();
    const description = document.querySelector('textarea[name="description"').value.trim();
    const video = document.querySelector('textarea[name="video-link"').value.trim();

    if (exercise_name && muscle_group && description) {
        const response = await fetch('/api/exercises', {
            method: 'POST',
            body: JSON.stringify({ exercise_name, muscle_group, description, video }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add routine!');
        }
    }
}

document
    .querySelector('.exercise-create')
    .addEventListener('submit', handleFormSubmit);