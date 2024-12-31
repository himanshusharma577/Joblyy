
function updateValue(value) {
    document.getElementById('selectedValue').textContent = value;
}

const skillsSelect = document.getElementById('skills');
const selectedSkillsDisplay = document.getElementById('selectedSkills');

skillsSelect.addEventListener('change', () => {
    const selectedOptions = Array.from(skillsSelect.selectedOptions).map(option => option.text);
    selectedSkillsDisplay.textContent = selectedOptions.length ? selectedOptions.join(', ') : 'None';
});