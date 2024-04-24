function getTestimonialData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    //  CRUD => CREATE, READ, UPDATE, DELETE

    xhr.open("GET", url, true);

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject("Jaringan Error !");
    };

    xhr.send();
  });
}

async function Testimonials() {
  const testimonials = await getTestimonialData(
    "https://api.npoint.io/194ecf117457c7105c16"
  );

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

Testimonials(testimonials);

async function filterTestimonial(rating) {
  const testimonials = await getTestimonialData(
    "https://api.npoint.io/194ecf117457c7105c16"
  );

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
}

filterTestimonial(testimonials);
