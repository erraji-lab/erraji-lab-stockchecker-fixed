document.addEventListener("DOMContentLoaded", () => {
  const jsonResult = document.getElementById("jsonResult");

  document.getElementById("testForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams(formData).toString();

    const res = await fetch("/api/stock-prices?" + params);
    const data = await res.json();
    jsonResult.textContent = JSON.stringify(data);
  });

  document.getElementById("testForm2").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams(formData).toString();

    const res = await fetch("/api/stock-prices?" + params);
    const data = await res.json();
    jsonResult.textContent = JSON.stringify(data);
  });
});
