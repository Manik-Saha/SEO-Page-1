const openModalBtn = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const overlay = document.getElementById("overlay");
const fileInput = document.getElementById("fileInput");
const allFileList = document.getElementById("allFileList");
const fileCountSpan = document.querySelectorAll(".fileCount");
const formSubmit = document.getElementById("submit");
let fileCount = 0;
let count = 0;

// open modal
openModalBtn.forEach((modal, index) => {
    modal.addEventListener("click", () => {
        overlay.style.display = "flex";
        count = index;
        fileInput.value = null;
        while (allFileList.firstChild) {
            allFileList.removeChild(allFileList.firstChild);
            fileCount = 0;
        }
    });
});

// close modal
closeModalBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// close modal after form submission
formSubmit.addEventListener("click", () => {
  overlay.style.display = "none";
});

// view file name after uploading file
fileInput.addEventListener("change", () => {
    for (const file of fileInput.files) {
        const listItem = document.createElement("li");
        listItem.className = "file-item";

        const fileName = document.createElement("span");
        fileName.className = "file-name";
        fileName.textContent = `${file.name}`;

        listItem.appendChild(fileName);
        allFileList.appendChild(listItem.cloneNode(true));

        fileCount++;
        fileInput.value = null;
    }
    fileCountSpan[count].textContent = fileCount;
});

// fetch api for making a api post request
// fetch("api here", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     fileCount: fileCount,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//       console.log(data);
//   })
//   .catch((error) => {
//       console.log(error);
//   });


