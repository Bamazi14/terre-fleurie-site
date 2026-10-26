// Menu pour téléphone et tablette
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function () {
      const ouvert = navLinks.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", ouvert);
      menuBtn.textContent = ouvert ? "✕" : "☰";
    });

    // Fermer le menu après un clic sur un lien
    document.querySelectorAll(".nav-links a").forEach(function (lien) {
      lien.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });

    // Année automatique
    document.getElementById("year").textContent =
      new Date().getFullYear();

    // Préparer un message à envoyer par le logiciel de messagerie
    document.getElementById("contactForm").addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const sujet = document.getElementById("sujet").value.trim();
        const message = document.getElementById("message").value.trim();

        const corps =
          "Nom : " + nom + "\n" +
          "E-mail : " + email + "\n\n" +
          message;

        const statut = document.getElementById("formStatus");

        // Remplacer cette adresse par l'e-mail officiel de la ferme.
        const emailFerme = "";

        if (!emailFerme) {
          statut.textContent =
            "Le formulaire est prêt. Pour recevoir les messages, " +
            "ajoutez l'adresse e-mail officielle de la ferme dans le code.";
          return;
        }

        window.location.href =
          "mailto:" + emailFerme +
          "?subject=" + encodeURIComponent(sujet) +
          "&body=" + encodeURIComponent(corps);
      }
    );
document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.querySelector(".google-button");

  if (!bouton) return;

  bouton.addEventListener("click", () => {
    bouton.style.filter = "brightness(0.92)";

    setTimeout(() => {
      bouton.style.filter = "";
    }, 180);
  });
});

