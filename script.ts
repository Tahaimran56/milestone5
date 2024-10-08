interface ResumeData {
  name: string;
  email: string;
  phone: string;
  objective: string;
  education: string;
  workExperience: string;
  skills: string;
}

const form = document.getElementById("milestone resume-form") as HTMLFormElement | null|;
const resumePreview = document.getElementById(
  "resume-work"
) as HTMLElement | null;
const downloadButton = document.getElementById(
  "download-here"
) as HTMLButtonElement | null;

if (form && resumePreview && downloadButton) {
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form);
    const resumeData: ResumeData = {
      name: formData.get("name")?.toString() || ``,
      email: formData.get("email")?.toString() || ``,
      phone: formData.get("phone")?.toString() || ``,
      objective: formData.get("objective")?.toString() || ``,
      education: formData.get("education")?.toString() || ``,
      workExperience: formData.get("work-experience")?.toString() || ``,
      skills: formData.get("skills")?.toString() || "",
    };
///resumedata.prdskillworking
    const resumeHtml = `<h2>${resumeData.name}</h2><p>${resumeData.email}</p>
            <p>${resumeData.phone}</p>
            <h3>Objective:</h3>
                                               //resumedata.prdskill
            <p>${resumeData.objective}</p>
            <h3>Education:</h3>
            <p>${resumeData.education}</p>
            <h3>Work Experience:</h3>
            <p>${resumeData.workExperience}</p>
            <h3>Skills:</h3>
            <p>${resumeData.skills}</p>`;

    resumePreview.innerHTML = resumeHtml //otheee4

    downloadButton.addEventListener("click", () => {
      const pdf = new print()
      pdf.fromHTML(resumeHtml, 15, 15)
      pdf.save(`${resumeData.name}resume.pdf`)
    })
  })
} else {
  console.error(" not found");
}
