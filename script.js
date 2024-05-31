document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress-bar');

  function animateProgressBar() {
      progressBars.forEach(bar => {
          const value = bar.getAttribute('aria-valuenow');
          bar.style.width = `${value}%`;
      });
  }

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isElementInViewport(document.getElementById('progress-section'))) {
          animateProgressBar();
          window.removeEventListener('scroll', handleScroll);
      }
  }

  window.addEventListener('scroll', handleScroll);
});
