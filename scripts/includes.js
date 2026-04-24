const includes = document.querySelectorAll("[data-include]");

includes.forEach(async (include) => {
  const file = include.dataset.include;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Could not load ${file}`);
    }

    include.innerHTML = await response.text();
  } catch (error) {
    include.innerHTML = `<p class="include-error">Unable to load ${file}.</p>`;
    console.error(error);
  }
});
