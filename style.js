const draggable = document.querySelector(".draggable");
const container = document.querySelector(".container");
const target = document.querySelector(".target");

let isDragging = false;
let offsetX = 0;

// Sichqoncha hodisalari
draggable.addEventListener("mousedown", (e) => {
  startDrag(e.clientX);
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    drag(e.clientX);
  }
});

document.addEventListener("mouseup", () => {
  stopDrag();
});

// Sensor (Touch) hodisalari
draggable.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  startDrag(touch.clientX);
});

document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    drag(touch.clientX);
  }
});

document.addEventListener("touchend", () => {
  stopDrag();
});

// Drag funksiyalari
function startDrag(clientX) {
  isDragging = true;
  const rect = draggable.getBoundingClientRect();
  offsetX = clientX - rect.left;
  draggable.style.cursor = "grabbing";
}

function drag(clientX) {
  const containerRect = container.getBoundingClientRect();
  let x = clientX - offsetX - containerRect.left;

  // Chegaradan chiqmaslikni tekshirish
  x = Math.max(0, Math.min(x, containerRect.width - draggable.offsetWidth));
  draggable.style.left = `${x}px`;

  // Maqsadga yetishni tekshirish
  const draggableRect = draggable.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  if (
    draggableRect.right >= targetRect.left &&
    draggableRect.left <= targetRect.right
  ) {
    window.location.href = "src/main/index.html"; // Yo‘naltirish
  }
}

function stopDrag() {
  isDragging = false;
  draggable.style.cursor = "grab";
}

