/* =====================================================
   MAHESH SERVICES
   Website JavaScript
===================================================== */


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= MOBILE MENU ================= */

const menuButton =
    document.querySelector(".menu-button");

const navContainer =
    document.querySelector(".nav-container");

const navigationLinks =
    document.querySelectorAll(".navigation a");


if (menuButton && navContainer) {

    menuButton.addEventListener(
        "click",
        function () {

            navContainer.classList.toggle("open");

        }
    );

}


/* ================= CLOSE MOBILE MENU ================= */

navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navContainer.classList.remove("open");

            }
        );

    }
);
