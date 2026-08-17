// Stage Wrappers
const envelopeStage = document.getElementById("envelope-wrapper");
const letterStage = document.getElementById("letter-wrapper");
const proposalStage = document.getElementById("proposal-wrapper");

// Elements
const envelope = document.getElementById("envelope");
const ring = document.getElementById("ring");
const textEl = document.getElementById("text");
const nextBtn = document.getElementById("next-btn");
const modal = document.getElementById("custom-modal");

const message = `Hi My Sweetyyy ❤️,

Aku bingung harus mulai dari mana karena rasanya kata-kata saja tidak akan pernah cukup untuk menyampaikan betapa berartinya kamu buat aku. Tapi di hari ini, aku mau menuliskan ini dari hati supaya bisa kamu baca dan simpan.

Satu tahun aku menjalani kehidupan di pondok ini tentu bukan hal yang mudah buat kita. Ada begitu banyak hal yang sudah kita lalui, hari-hari yang menyenangkan, hari yang berat, tawa, salah paham, sampai momen-momen tenang di mana semuanya terasa tepat karena ada kamu. Terima kasih ya sudah bertahan dan berjalan bersamaku sejauh ini. Terima kasih atas kesabaranmu, dan terima kasih karena tidak pernah menyerah.

Sekarang, kamu lagi berjuang buat mengejar PTN impianmu. Aku mau kamu tahu kalau aku percaya penuh sama kamu dan kemampuanmu. Usaha dan kerja kerasmu tidak akan menipu hasil. Kamu pasti bisa melaluinya satu per satu, jadi tetap semangat dan kejarlah impianmu itu sampai dapat!

Tapi ingat ya, sekeras apa pun kamu belajar, kesehatanmu tetap yang paling utama. Jangan pernah lupa makan teratur, jaga pola tidur, dan istirahat yang cukup. Jangan sampai kamu sakit hanya karena memaksakan diri. Kamu harus selalu menjaga diri baik-baik untuk aku juga.

Terakhir, jangan sedih atau terlalu dipikirkan ya soal aku yang sedang mondok dan cuma bisa pegang HP dua minggu sekali, itu pun kalau memenuhi ketentuan dan syarat di sini. Walaupun komunikasi kita terbatas dan ada aturannya, pikiran dan doaku selalu ada buat kamu. Anggap saja ini jeda sebentar supaya kita sama-sama bisa berkembang jadi versi yang lebih baik.

Terima kasih sudah menjadi kedamaian, kebahagiaan, dan tempatku pulang.

Yours, always. I love you Sarah. ❤️`;

let i = 0;

/* 🖼️ BACKGROUND SLIDESHOW ROTATION */
const bgSlides = document.querySelectorAll(".bg-slide");
let currentSlide = 0;

setInterval(() => {
  bgSlides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % bgSlides.length;
  bgSlides[currentSlide].classList.add("active");
}, 5000); // Gambar berganti secara otomatis setiap 5 detik

/* 💌 1. BUKA AMPLOP & PINDAH KE NOTEBOOK */
function openEnvelope() {
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeStage.classList.remove("active");
    
    setTimeout(() => {
      letterStage.classList.add("active");
      typeLetter();
    }, 400);
  }, 1200);
}

/* 📜 2. ANIMASI MENGETIK TEKS */
function typeLetter() {
  const container = document.querySelector(".text-container");
  
  let t = setInterval(() => {
    textEl.innerHTML += message[i];
    i++;

    // Scroll otomatis ke bawah saat mengetik
    container.scrollTop = container.scrollHeight;

    if (i >= message.length) {
      clearInterval(t);
      nextBtn.classList.remove("hidden");
    }
  }, 35);
}

/* 💍 3. TRANSISI KE PROPOSAL */
function transitionToProposal() {
  letterStage.classList.remove("active");

  setTimeout(() => {
    proposalStage.classList.add("active");
  }, 500);
}

/* 💍 4. INTERAKSI CINCIN & POPUP MODAL */
function takeRing() {
  ring.style.transform = "scale(1.4) rotate(10deg)";
  ring.style.filter = "drop-shadow(0 0 50px gold)";
  
  setTimeout(() => {
    modal.classList.add("show");
  }, 600);
}

function closeModal() {
  modal.classList.remove("show");
  
  setTimeout(() => {
    ring.style.transform = "scale(1) rotate(0deg)";
    ring.style.filter = "drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))";
  }, 400);
}