const danhSach = [];
for (let i = 1; i <= 50; i++) {
    danhSach.push("Mục " + i);
}

const soMucMoiTrang = 10;
const tongTrang = Math.ceil(danhSach.length / soMucMoiTrang);

function hienThiTrang(trang) {
    const list = document.getElementById("list");
    list.innerHTML = "";

    const batDau = (trang - 1) * soMucMoiTrang;
    const ketThuc = batDau + soMucMoiTrang;

    for (let i = batDau; i < ketThuc && i < danhSach.length; i++) {
        const li = document.createElement("li");
        li.textContent = danhSach[i];
        list.appendChild(li);
    }

    const buttons = document.querySelectorAll("#pagination button");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[trang - 1].classList.add("active");
}

const pagination = document.getElementById("pagination");

for (let i = 1; i <= tongTrang; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    btn.addEventListener("click", function () {
        hienThiTrang(i);
    });

    pagination.appendChild(btn);
}

hienThiTrang(1);
