function toggleLanguageMenu() {
  var languageList = document.getElementById("languageList");
  if (languageList.style.display === "block") {
    languageList.style.display = "none";
  } else {
    languageList.style.display = "block";
  }
}
window.addEventListener('wheel', function(event) {
    const header = document.querySelector('header');
    if (event.deltaY > 0) {
        header.style.transition = 'background-color 0.3s ease'; // Geçiş efekti
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Beyaz renk, %50 saydamlık
        header.style.backdropFilter = 'blur(10px)'; // Blur efekti
    } else {
        header.style.transition = 'background-color 0.3s ease'; // Geçiş efekti
        header.style.backgroundColor = 'transparent'; // Varsayılan renk
        header.style.backdropFilter = 'none'; // Blur efektini kaldır
    }
});
const groups = document.querySelectorAll('.rate');

groups.forEach((group) => {
  const stars = group.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      // Tıklanan yıldıza kadar olan tüm yıldızları içi dolu yap
      for (let i = 0; i <= index; i++) {
        stars[i].setAttribute('type', 'solid');
      }
      // Tıklanan yıldızdan sonraki tüm yıldızları içi boş yap
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].setAttribute('type', 'regular');
      }
    });
  });
});