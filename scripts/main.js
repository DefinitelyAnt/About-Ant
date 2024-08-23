
// Trailer

const trailer = document.getElementById("trailer");
// Animation
const animateTrailer = (e, interacting) => {
    // Determine position
    // const x = e.clientX - trailer.offsetWidth / 2,
    //     y = e.clientY - trailer.offsetHeight / 2;
    // Scale trailer
    trailer.style.left = e.clientX + 'px';
    trailer.style.top = e.clientY + 'px';
    const keyframes = {
        transform: `scale(${interacting ? 1.1 : 1})`,
        rotate: `${interacting ? -90 : 0}deg`,
        
    }
    // Animate
    trailer.animate(keyframes, { 
        // Slows cursor down
        duration: 500, 
        fill: "forwards" 
    });
}
// Determines cursor type (Play icon for vids or arrow for links)
const getTrailerIcon = type => {
  switch(type) {
    case "video":
        // Get class of play icon
        return "▶";
    case "search":
        return "?";
    default:
        // Else is probably a link/ can become a link
        return "</>"; 
  }
}

// Check if its close to an interactable
window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
    const icon = document.getElementById("trailer-icon");
  
    animateTrailer(e, interacting);
    // Set dataset type of trailer based on interactable
    trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
    if(interacting) {
        icon.innerText = getTrailerIcon(interactable.dataset.type);
    }
    else{
        icon.innerText = "";
    }
}
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
});
// Sets trailer to visible if PC view
trailer.style.display = "flex";


var $loadingOverlay = $('#loadingOverlay');
// Show loading overlay when the page loads
$loadingOverlay.show();

// Hide loading overlay after animation duration (2 seconds in this case)
setTimeout(function () {
  $loadingOverlay.hide();
}, 2000);