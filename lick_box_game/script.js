const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const text = "Hiện Tại Chưa Có Phim";
ctx.font = "bold 80px Arial"; // To hơn
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText(text, canvas.width / 2, canvas.height / 2);

const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Lấy các điểm có chữ và tạo particle
for (let y = 0; y < canvas.height; y += 4) {
  // nhỏ hơn để rõ nét hơn
  for (let x = 0; x < canvas.width; x += 4) {
    const index = (y * canvas.width + x) * 4;
    const alpha = textData.data[index + 3];
    if (alpha > 128) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: x,
        targetY: y,
        size: 1.8,
      });
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    const dx = p.targetX - p.x;
    const dy = p.targetY - p.y;
    p.x += dx * 0.02; // Chậm lại
    p.y += dy * 0.02;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "aqua";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();
