// ------------------------------------------------------------------
// Shared auth logic used across all pages.
// Updates the nav bar (Login vs Logout) and exposes helpers.
// ------------------------------------------------------------------

const auth = firebase.auth();

function renderNavAuthState(user){
  const slot = document.getElementById('nav-auth-slot');
  if(!slot) return;

  if(user){
    slot.innerHTML = `<button class="nav-cta" id="logout-btn">Log out</button>`;
    document.getElementById('logout-btn').addEventListener('click', () => {
      auth.signOut();
    });
  } else {
    slot.innerHTML = `<a class="nav-cta" href="login.html">Log in</a>`;
  }
}

auth.onAuthStateChanged((user) => {
  renderNavAuthState(user);
});

// Mobile nav toggle (shared across pages)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
});

// ------------------------------------------------------------------
// Page guard: call protectPage() on any page that should only be
// visible to signed-in users. It shows a loading state, then either
// reveals the content or redirects to login.html.
// ------------------------------------------------------------------
function protectPage(){
  const gate = document.getElementById('gate-loading');
  const content = document.getElementById('protected-content');

  auth.onAuthStateChanged((user) => {
    if(user){
      if(gate) gate.style.display = 'none';
      if(content) content.style.display = 'block';
      const emailSlot = document.getElementById('user-email');
      if(emailSlot) emailSlot.textContent = user.email;
    } else {
      window.location.href = 'login.html';
    }
  });
}
