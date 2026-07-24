const danhSach = [
    "Tiger I",
    "Tiger II (King Tiger)",
    "Panther",
    "Panzer III",
    "Panzer IV",
    "StuG III",
    "Jagdpanther",
    "JagdTiger",
    "Elefant",
    "Maus",
    "IS-1",
    "IS-2",
    "KV-1",
    "KV-2",
    "T-34",
    "T-34-85",
    "SU-85",
    "SU-100",
    "SU-152",
    "ISU-152",
    "M4 Sherman",
    "M4A3E8 Easy Eight",
    "M26 Pershing",
    "M3 Lee",
    "M10 Wolverine",
    "M18 Hellcat",
    "M36 Jackson",
    "Churchill",
    "Cromwell",
    "Comet",
    "Matilda II",
    "Valentine",
    "Crusader",
    "A30 Challenger",
    "Char B1",
    "Somua S35",
    "Renault R35",
    "Hotchkiss H39",
    "Type 95 Ha-Go",
    "Type 97 Chi-Ha",
    "Type 1 Chi-He",
    "Type 3 Chi-Nu",
    "Semovente 75/18",
    "M13/40",
    "Turán I",
    "Turán II",
    "Hetzer",
    "LT vz.38",
    "Toldi I",
    "38M Nimród"
];

const soMucMoiTrang = 10;
const tongTrang = Math.ceil(danhSach.length / soMucMoiTrang);

const list = document.getElementById("list");
const pagination = document.getElementById("pagination");

function hienThiTrang(trang) {
    list.innerHTML = "";

    const batDau = (trang - 1) * soMucMoiTrang;
    const ketThuc = batDau + soMucMoiTrang;

    for (let i = batDau; i < ketThuc && i < danhSach.length; i++) {
        const li = document.createElement("li");
        li.textContent = danhSach[i];
        list.appendChild(li);
    }

    document.querySelectorAll("#pagination button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById("page" + trang).classList.add("active");
}

for (let i = 1; i <= tongTrang; i++) {
    const btn = document.createElement("button");
    btn.id = "page" + i;
    btn.textContent = i;

    btn.addEventListener("click", function () {
        hienThiTrang(i);
    });

    pagination.appendChild(btn);
}

hienThiTrang(1);
