const startDate = new Date('2022-01-17');
const today = new Date();
const diff = today - startDate;
const years = diff / (1000 * 60 * 60 * 24 * 365.25);
const formatted = years.toFixed(1);
const experienceValue = document.getElementById('experience-value');
if (experienceValue) {
  experienceValue.textContent = `${formatted} Years`;
}
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
