let dataBlog = [];

function addBlog() {
  //   event.preventDefault();

  let title = document.getElementById("inputTitle").value;
  let content = document.getElementById("inputContent").value;
  let image = document.getElementById("inputImage").files;
  let nodejs = document.getElementById("nodejs").checked;
  let react = document.getElementById("react").checked;
  let reacteurope = document.getElementById("reacteurope").checked;
  let js = document.getElementById("js").checked;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;

  if (nodejs) {
    nodejs = document.getElementById("nodejs").value;
  }
  if (react) {
    react = document.getElementById("react").value;
  }
  if (reacteurope) {
    reacteurope = document.getElementById("reacteurope").value;
  }
  if (js) {
    js = document.getElementById("js").value;
  }
  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt: "15 September 2022",
    author: "Samsul Rijal",
    nodejs,
    react,
    reacteurope,
    js,
    startDate,
    endDate,
    duration: duration(new Date(startDate), new Date(endDate)),
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        
            <div class="blog-list-item">
                <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
                </div>
                <div class="blog-content">
                
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[index].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    Duration : ${dataBlog[index].duration} 
                </div>
                <p>
                    ${dataBlog[index].contents}
                </p>
                <i class="fa-brands fa-${dataBlog[index].nodejs} fa-4x"></i>
                <i class="fa-brands fa-${dataBlog[index].react} fa-4x"></i>
                <i class="fa-brands fa-${dataBlog[index].reacteurope}  fa-4x"></i>
                <i class="fa-brands fa-${dataBlog[index].js}  fa-4x"></i>

                
                </div>

                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
            </div>

        `;
  }
}

function duration(startDate, endDate) {
  let time = endDate - startDate;

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 detik
  let hoursInDay = 24; // 1 hari 24 jam

  let distanceDay = Math.floor(time / (milisecond * secondInHours * hoursInDay));

  if (distanceDay > 0) {
    return `${distanceDay} day `;
  }
}
