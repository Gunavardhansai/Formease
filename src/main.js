document.addEventListener('DOMContentLoaded', function () {
  let currentSection = 1;

  function toggleSection(sectionNumber) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });

    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach((circle, index) => {
      circle.classList.remove('active');
      if (index + 1 <= sectionNumber) {
        circle.classList.add('active');
      }
    });

    const selectedSection = document.getElementById(`section${sectionNumber}`);
    selectedSection.style.display = 'block';
    currentSection = sectionNumber;
  }

  function nextSection() {
    toggleSection(currentSection + 1);
  }

  function goToSection(sectionNumber) {
    toggleSection(sectionNumber);
  }

  document.getElementById('addFormButton').addEventListener('click', function () {
    const additionalFormsContainer = document.getElementById('additionalForms');
    const newForm = document.createElement('div');
    newForm.className = 'added-form';

    const clonedForm = document.getElementById('legalForm').cloneNode(true);
    clonedForm.id = '';

    newForm.appendChild(clonedForm);
    additionalFormsContainer.appendChild(newForm);
  });

  document.getElementById('logisticsForm').addEventListener('submit', function (event) {
    event.preventDefault();
  });
});

