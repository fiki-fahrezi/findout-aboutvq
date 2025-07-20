function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('hidden');
}

document.querySelector('a[href="#experience"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
  if (!document.querySelector('.about').id) document.querySelector('.about').id = 'about';
  if (!document.querySelector('.education').id) document.querySelector('.education').id = 'education';
  if (!document.querySelector('.experience').id) document.querySelector('.experience').id = 'experience';

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

function tampilkanKomentar() {
  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;

  const daftar = document.getElementById('daftarKomentar');
  const komentarBaru = document.createElement('p');
  komentarBaru.innerHTML = `<strong>${nama}:</strong> ${pesan}`;
  daftar.appendChild(komentarBaru);

  document.getElementById('nama').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subjek').value = '';
  document.getElementById('pesan').value = '';
}

async function fetchLastUpdate() {
  const repoOwner = 'fiki-fahrezi';   // Ganti username kamu
  const repoName = 'findout-aboutvq';        // Ganti nama repo kamu

  try {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`);
    const data = await response.json();

    const lastCommitDate = new Date(data[0].commit.committer.date);
    document.getElementById('last-update').innerHTML =
      'Last updated: ' + lastCommitDate.toLocaleString();
  } catch (error) {
    document.getElementById('last-update').innerHTML = 'Last updated: gagal mengambil data';
  }
}

fetchLastUpdate();
