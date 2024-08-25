require();
let home = document.querySelector('#/home');
let blogs = document.querySelector('#/blogs');
let about = document.querySelector('#/projects');
let photo = document.querySelector('#/photo');
 
function goto(page_name) {
  home.style.display = 'none';
  blogs.style.display = 'none';
  photo.style.display = 'none';
  projects.style.display = 'none';
  if (page_name === 'home') {
    home.style.display = 'block';
  }
  else if (page_name === 'blogs') {
    blogs.style.display = 'block';
  }
  else if (page_name === 'photo') {
    photo.style.display = 'block';
  }
  else if (page_name === 'projects') {
    projects.style.display = 'block';
  } else {
    home.style.display = 'block';
  }
}
