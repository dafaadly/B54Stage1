// // class SayHello {
// //   getName() {
// //     return `Hello Dafa`;
// //   }
// // }

// // console.log(SayHello);

// // const data = new SayHello();

// // console.log(data.getName());

// class Testimonial {
//   #quote = ""; // property privat
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }
//   get image() {
//     return this.#image;
//   }

//   get ShowTestimonials() {
//     return `<div class="testimonial">
//     <img
//       class="profile-testimonial"
//       src="${this.image}"
//       alt="profile"
//     />
//     <p class="quote">${this.quote}</p>
//     <p class="author">${this.author}</p>
//   </div>`;
//   }
// }

// class Author extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// const user1 = new Author(
//   "Muhamad Dafa Adly",
//   "Bismillah Cepat Bisa",
//   "https://i.pinimg.com/originals/87/6e/b8/876eb805bf4e7d2f6bdb396193f6873c.jpg"
// );

// const user2 = new Author(
//   "Muhamad Dafa",
//   "Bismillah Cepat",
//   "https://asset-apac.unileversolutions.com/content/dam/unilever/axe/indonesia/general_image/model_rambut_pria_untuk_wajah_bulat_side_part_hair-2195972-jpg.jpg.ulenscale.687x687.jpg"
// );

// const user3 = new Author(
//   "Dafa Adly",
//   "Cepat Bisa",
//   "https://www.dailysia.com/wp-content/uploads/2020/04/amanda-rawles.jpg?x99839"
// );

// let data = [user1, user2, user3];
// let dataForHTML = "";

// for (let i = 0; i < data.length; i++) {
//   dataForHTML += data[i].ShowTestimonials;
// }

// document.getElementById("testimonials").innerHTML = dataForHTML;

const data = [
  {
    name: "Muhamad Dafa Adly",
    comment: "Ingin Belajar",
    image:
      "https://img.freepik.com/free-photo/front-view-man-pointing-up_23-2148946191.jpg?t=st=1710684687~exp=1710688287~hmac=597137e5f83a581f0393c2e87cc91b37475677b9c126cd54828cb29749ee991c&w=740",

    rating: 3,
  },
  {
    name: "Lemon Soda",
    comment: "Seru Sekali",
    image:
      "https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg?t=st=1710684791~exp=1710688391~hmac=07b7d8c054e7852e3b3fa06c80111bdbadd45a7b6291968ac386bd04fe62b9ca&w=740",
    rating: 4,
  },
  {
    name: "Skuy Aja",
    comment: "Menyalaa Abang Ku",
    image:
      "https://img.freepik.com/free-photo/image-young-asian-business-woman-female-entrepreneur-glasses-holding-tablet-looking-professional-glasses-white-background_1258-89375.jpg?t=st=1710684836~exp=1710688436~hmac=f6dd69550c8187b0825a4ed7d11e696112937bb170ab6d5fa1534d812f14f779&w=1060",
    rating: 4,
  },
  {
    name: "Combi",
    comment: "Minum Yang Banyak",
    image:
      "https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?t=st=1710684870~exp=1710688470~hmac=1d8d374d46bf84fb92703b3bee2d7c6cc9a77a02b0580e6e2fb80388a95f06d2&w=360",
    rating: 5,
  },
  {
    name: "Marina",
    comment: "Putih Banget",
    image:
      "https://img.freepik.com/free-photo/picture-young-pretty-woman-model-pointing-opened-palm_114579-67123.jpg?t=st=1710684907~exp=1710688507~hmac=561abba17fce64463aa06e95aa902a079d71cb1a88b4bbeefed1dd150d3fa884&w=1060",
    rating: 1,
  },
];

console.log(data);

function Testimonials() {
  let dataHTML = "";

  data.forEach(function (data) {
    dataHTML += `
        <div class="testimonial">
        <img
          class="profile-testimonial"
          src="${data.image}"
        />
        <p class="quote">${data.comment}</p>
        <p class="author">${data.name}</p>
        <p class="rating">${data.rating}⭐</p>
        </div>`;
  });

  document.getElementById("testimonials").innerHTML = dataHTML;
}

Testimonials();

const FilterTestimonial = (rating) => {
  let dataHTML = "";

  const dataFiltered = data.filter((data) => {
    return data.rating === rating;
  });

  if (!dataFiltered.length) {
    dataHTML += "<h1> Tidak Ada Data </>";
  } else {
    dataFiltered.forEach((data) => {
      console.log(data);
      dataHTML += `
          <div class="testimonial">
                <img
                  class="profile-testimonial"
                  src="${data.image}"
                />
                <p class="quote">${data.comment}</p>
                <p class="author">${data.name}</p>
                <p class="rating">${data.rating}⭐</p>
            </div>`;
    });
  }

  document.getElementById("testimonials").innerHTML = dataHTML;
};

FilterTestimonial();
