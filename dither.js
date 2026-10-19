// Ordered (Bayer 8x8) grey dither over slate blue, densest top left, fading out diagonally,
// with a lighter patch in the top right so the edge isn't a straight line.
// Drawn small and scaled up.
const canvas = document.getElementById("dither");
const ctx = canvas.getContext("2d");
const PIXEL = 3;
const DARK = [27, 37, 57];
const LIGHT = [62, 66, 74];
const BAYER = [
  0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26,
  12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,
  3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25,
  15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
];

function draw() {
  const w = Math.ceil(innerWidth / PIXEL);
  const h = Math.ceil(innerHeight / PIXEL);
  canvas.width = w;
  canvas.height = h;
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const u = x / w, v = y / h;
      const t = Math.max(
        0.5 * Math.max(0, 1 - (u + v) / 1.1) ** 1.5,
        0.3 * Math.max(0, 1 - (1 - u + v * 1.6) / 0.7) ** 1.5,
      );
      const c = t > (BAYER[(y % 8) * 8 + (x % 8)] + 0.5) / 64 ? LIGHT : DARK;
      const i = (y * w + x) * 4;
      img.data[i] = c[0];
      img.data[i + 1] = c[1];
      img.data[i + 2] = c[2];
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

let pending;
addEventListener("resize", () => {
  cancelAnimationFrame(pending);
  pending = requestAnimationFrame(draw);
});
draw();
