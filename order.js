/*hàm tự động điền tên phim vào thanh input*/
function fillInput(movieName) {
  document.getElementById("movieInput").value = movieName;
}
/**hàm chọn ghế */
const seats = document.querySelectorAll(".seat:not(.occupied)");
seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    /*hàm chạy khi có sự kiện click, mouseover, keydown...*/
    seat.classList.toggle(
      "selected"
    ); /**seat.classList.toggle nếu có class selected thì xóa không có thì thêm vào */
  });
});
/**hành chọn giờ */
const times = document.querySelectorAll(".time");
times.forEach((time) => {
  time.addEventListener("click", () => {
    time.classList.toggle("selected");
  });
});
/**hàm chọn food */
const menus = document.querySelectorAll(".menu");
menus.forEach((mn) => {
  mn.addEventListener("click", () => {
    mn.classList.toggle("selected");
  });
});
/**giờ */
const timeBlocks = document.querySelectorAll(".time");

timeBlocks.forEach((block) => {
  const startEl = block.querySelector(".gioBatdau");
  const endEl = block.querySelector(".gioKetthuc");

  // Lấy nội dung giờ bắt đầu, ví dụ "14h-" hoặc "15h30-"
  const startText = startEl.textContent
    .replace("h", ":")
    .replace("-", "")
    .trim(); // "14:" -> "14:", "15h30-" -> "15:30"

  // Chuyển thành đối tượng Date
  const now = new Date(); // chỉ để lấy ngày tháng hiện tại
  const [hour, minute = 0] = startText.split(":").map(Number);
  const startTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute
  );

  // Cộng 1 giờ 30 phút
  startTime.setMinutes(startTime.getMinutes() + 90);

  // Định dạng lại giờ kết thúc
  const hours = startTime.getHours().toString().padStart(2, "0");
  const minutes = startTime.getMinutes().toString().padStart(2, "0");
  const result = `${hours}h${minutes}`;

  // Hiển thị
  endEl.textContent = result;
});
