const cow = [
  [50, 55, 60, 65, 70],
  [55, 60, 65, 70, 75],
  [60, 65, 70, 75, 80],
  [65, 70, 75, 80, 85],
  [70, 75, 80, 85, 90],
  [75, 80, 85, 90, 95],
  [80, 85, 90, 95, 100],
];

let totalBeratPerminggu = 0;
let totalSapi = 0;

for (let index = 0; index < cow.length; index++) {
  const totalPerHari = cow[index];
  let totalBeratPerminggu = 0;
  for (let j = 0; j < totalPerHari.length; j++) {
    totalBeratPerminggu += totalPerHari[j];
  }

  totalBeratPerminggu += totalBeratPerminggu;
  totalSapi += totalPerHari.length;
}

const averageWeight = totalBeratPerminggu / totalSapi;

console.log(
  `Rata-rata berat badan sapi selama seminggu: ${averageWeight.toFixed(3)} kg`
);
