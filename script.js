// Získejte odkazy na potřebné elementy
const modal = document.getElementById("myModal");
const openButton = document.getElementById("changeDescription");
const closeButton = document.querySelector(".close");
const saveButton = document.getElementById("saveDescription");
const descriptionInput = document.getElementById("descriptionInput");
const uploadImageInput = document.getElementById("uploadImage");
const changeImageLink = document.getElementById("changeImage");
const userAvatarImage = document.querySelector('.user-avatar img');

// Otevření modálního okna
openButton.addEventListener("click", () => {
    modal.style.display = "block";
    descriptionInput.value = document.querySelector('.user-info p').textContent; // Načte aktuální popis uživatele do textového pole
});

// Uložení popisu
saveButton.addEventListener("click", () => {
    const newDescription = descriptionInput.value;
    document.querySelector('.user-info p').textContent = newDescription; // Nastaví nový popis do kolonky "Popis uživatele"
    modal.style.display = "none"; // Zavře modální okno
});

// Zavření modálního okna
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});
// Získejte odkazy na potřebné elementy

// Přidejte posluchače událostí na tlačítko "Změnit obrázek"
changeImageLink.addEventListener("click", () => {
    // Spusťte dialog pro výběr souboru po kliknutí na tlačítko
    uploadImageInput.click();
});

// Přidejte posluchače události na vstup souboru
uploadImageInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0]; // Získání vybraného souboru

    if (selectedFile) {
        // Pokud uživatel vybral soubor, zobrazte ho jako obrázek
        const reader = new FileReader();
        reader.onload = (e) => {
            userAvatarImage.src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
});
