
function addNote() {
  // Mendapatkan teks dari form input
  const usernameInput = document.getElementById("username-input");
  const noteInput = document.getElementById("note-input");

  if (!usernameInput || !noteInput) {
    console.error("Form input tidak ditemukan.");
    return;
  }

  // Membersihkan karakter tidak perlu dengan method trim()
  const username = usernameInput.value.trim();
  const noteText = noteInput.value.trim();

  // Pengkondisian jika form tidak kosong atau form sedang diisi
  if (username !== "" && noteText !== "") {
    // Ambil class notes, yaitu tempat untuk menaruh catatan setelah diinputkan user
    const notesContainer = document.getElementById("notes");

    if (!notesContainer) {
      console.error("Container untuk catatan tidak ditemukan.");
      return;
    }

    // Membuat elemen baru berupa tempat untuk menaruh teks
    const noteElement = document.createElement("div");
    noteElement.className = "note";

    // Membuat elemen baru untuk di tambahkan ke tempat teks
    const noteContent = document.createElement("div");
    noteContent.className = "note-text teko-catatan";

    // Memformat teks agar nama di sebelah kiri dan teks catatan di kanan
    noteContent.textContent = `${username}: ${noteText}`;

    // Membuat elemen tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "X";
    // Fungsi untuk menghapus catatan saat tombol X ditekan
    deleteButton.addEventListener("click", () => {
      notesContainer.removeChild(noteElement);
    });

    // Menambahkan anak class di bawah class notes
    noteElement.appendChild(noteContent);
    noteElement.appendChild(deleteButton);

    // Menambahkan semua nya ke di bawah div dengan id notes
    notesContainer.appendChild(noteElement);

    // Menghapus semua tulisan ketika sudah menekan tombol tambah
    usernameInput.value = "";
    noteInput.value = "";
  }
}

