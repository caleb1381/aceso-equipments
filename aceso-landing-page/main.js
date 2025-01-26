import "./style.css";

if (document.documentElement.scrollTop < 200) {
  document.querySelector(".second_header").classList.remove("fixed");
}

document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 500) {
    document.querySelector(".second_header").classList.add("fixed");
  } else {
    document.querySelector(".second_header").classList.remove("fixed");
    document.querySelector(".navs").classList.remove("mobile");
  }
});

document.querySelector(".bar").addEventListener("click", () => {
  document.querySelector(".navs").classList.toggle("mobile");
});

var map = L.map("map", { zoom: 19, scrollWheelZoom: false }).setView(
  [4.878150611533037, 6.963034530882102],
  19
);

L.tileLayer(
  "https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
  {
    attribution:
      '&copy; <a href="https://www.google.com/maps/search/+White-House+Obio-akpo+LGA+Rivers+State/@4.8782231,6.9625183,18.97z?entry=ttu">Google map</a>',
  }
).addTo(map);
