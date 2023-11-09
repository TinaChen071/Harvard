// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      autoplay: {
      delay: 3000,
      },

      // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    });
    
});



// ToTop BTN
const backToTopBtn = document.getElementById('backToTopBtn');

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

// ToTop BTN 換顏色
function updateButtonColor() {
  if (window.scrollY > 5000) {
    backToTopBtn.classList.remove('bg-blue-300', 'text-white');
    backToTopBtn.classList.add('bg-white/50', 'text-white');
  } else {
    backToTopBtn.classList.remove('bg-white/50', 'text-white');
    backToTopBtn.classList.add('bg-blue-300', 'text-white');
  }
}

updateButtonColor();
window.addEventListener('scroll', updateButtonColor);

// 顯示狀態
function toggleButtonVisibility() {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove('hidden');
    backToTopBtn.classList.add('opacity-100','transition', 'duration-300');
  } else {
    backToTopBtn.classList.remove('opacity-100');
  }
}

toggleButtonVisibility();
window.addEventListener('scroll', toggleButtonVisibility);


// map
$(document).ready(function() {
  // Select the icon and content elements
  var $icon = $('#taiwan');
  var $content = $('#taiwanTag');

  // Define the hover effect
  $icon.hover(
    function() {
      // On hover (mouse enter), change the content color
      $content.addClass('text-blue-500').removeClass('text-black');
    },
    function() {
      // On hover out (mouse leave), reset the content color
      $content.removeClass('text-blue-500').addClass('text-black');
    }
  );
});