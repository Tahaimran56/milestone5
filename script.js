const form = document.getElementById('resume-form');
const resumePreview = document.getElementById('resume-preview');
const downloadButton = document.getElementById('download-button');

if (form && resumePreview && downloadButton) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const resumeData = {
      name: formData.get('name') ? formData.get('name') : '',
      email: formData.get('email') ? formData.get('email') : '',
      phone: formData.get('phone') ? formData.get('phone') : '',
      objective: formData.get('objective') ? formData.get('objective') : '',
      education: formData.get('education') ? formData.get('education') : '',
      workExperience: formData.get('work-experience') ? formData.get('work-experience') : '',
      skills: formData.get('skills') ? formData.get('skills') : '',
    };

    const resumeHtml = `
      <h2>${resumeData.name}</h2>
      <p>${resumeData.email}</p>
      <p>${resumeData.phone}</p>
      <h3>Objective:</h3>
      <p>${resumeData.objective}</p>
      <h3>Education:</h3>
      <p>${resumeData.education}</p>
      <h3>Work Experience:</h3>
      <p>${resumeData.workExperience}</p>
      <h3>Skills:</h3>
      <p>${resumeData.skills}</p>
    `;

    resumePreview.innerHTML = resumeHtml;

    downloadButton.addEventListener('click', () => {
      const pdf = new jsPDF();
      pdf.fromHTML(resumeHtml, 15, 15);
      pdf.save(`${resumeData.name}_resume.pdf`);
    });
  });
} else {
  console.error('Form or resume preview element not found');
}