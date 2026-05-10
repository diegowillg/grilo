document.addEventListener("DOMContentLoaded", function () {
  /* =========================
     SLIDER AUTOMÁTICO - NOVIDADES
  ========================= */

  const novSlideA = document.getElementById("novSlideA");
  const novSlideB = document.getElementById("novSlideB");

  const imagensNovidades = [
    "./img/nov-1.png",
    "./img/nov-2.png",
    "./img/nov-3.png",
    "./img/nov-4.png",
    "./img/nov-5.png",
    "./img/nov-6.png",
    "./img/nov-7.png",
  ];

  let indiceNovidades = 0;
  let usandoSlideA = true;

  imagensNovidades.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  if (novSlideA && novSlideB) {
    novSlideA.style.backgroundImage = `url("${imagensNovidades[0]}")`;
    novSlideB.style.backgroundImage = `url("${imagensNovidades[1]}")`;

    setInterval(() => {
      indiceNovidades++;

      if (indiceNovidades >= imagensNovidades.length) {
        indiceNovidades = 0;
      }

      const proximaImagem = imagensNovidades[indiceNovidades];

      if (usandoSlideA) {
        novSlideB.style.backgroundImage = `url("${proximaImagem}")`;
        novSlideB.classList.add("active");
        novSlideA.classList.remove("active");
      } else {
        novSlideA.style.backgroundImage = `url("${proximaImagem}")`;
        novSlideA.classList.add("active");
        novSlideB.classList.remove("active");
      }

      usandoSlideA = !usandoSlideA;
    }, 4000);
  }

  /* =========================
     POP-UP WHATSAPP
  ========================= */

  const abrirPopupWhatsapp = document.getElementById("abrirPopupWhatsapp");
  const popupWhatsapp = document.getElementById("popupWhatsapp");
  const fecharPopupWhatsapp = document.getElementById("fecharPopupWhatsapp");

  if (abrirPopupWhatsapp && popupWhatsapp) {
    abrirPopupWhatsapp.addEventListener("click", () => {
      popupWhatsapp.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (fecharPopupWhatsapp && popupWhatsapp) {
    fecharPopupWhatsapp.addEventListener("click", () => {
      popupWhatsapp.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (popupWhatsapp) {
    popupWhatsapp.addEventListener("click", (event) => {
      if (event.target === popupWhatsapp) {
        popupWhatsapp.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && popupWhatsapp) {
      popupWhatsapp.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  /* =========================
     LOCALIZAÇÃO - LOJAS
  ========================= */

  const lojas = [
    {
      nome: "Grilo Surf - Loja Desterro",
      endereco: "Av. Nossa Senhora do Desterro, 115 - Jardim Esplanada",
      cidade: "Uberaba - MG",
      horario: "Segunda a sábado, das 9h às 19h",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.9364551922763!2d-47.906282524018934!3d-19.757854232972697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bacfeaee865049%3A0x9b5884d7a5532f86!2sAv.%20Nossa%20Senhora%20do%20Desterro%2C%20115%20-%20Jardim%20Esplanada%2C%20Uberaba%20-%20MG%2C%2038082-025!5e0!3m2!1spt-BR!2sbr!4v1778338479399!5m2!1spt-BR!2sbr",
      linkMapa: "https://maps.app.goo.gl/6ADhbirZ1bFGC1Gc8",
    },
    {
      nome: "Grilo Surf - Ramid Mauad",
      endereco: "Av. Ramid Mauad, 585 - Res. Morumbi",
      cidade: "Uberaba - MG",
      horario: "Segunda a sábado, das 9h às 19h",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.8789020260674!2d-47.98928619999999!3d-19.760298999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad127bcbf5089%3A0x2e8aa34cb47126b2!2sAv.%20Ramid%20Mauad%2C%20585%20-%20Res.%20Morumbi%2C%20Uberaba%20-%20MG%2C%2038051-570!5e0!3m2!1spt-BR!2sbr!4v1778338393031!5m2!1spt-BR!2sbr",
      linkMapa: "https://share.google/x93WAiOZqjW2sVL2T",
    },
    {
      nome: "Grilo Surf - Prudente de Morais",
      endereco: "Av. Prudente de Morais, 1018 - Vila Nossa Sra. Abadia",
      cidade: "Uberaba - MG",
      horario: "Segunda a sábado, das 9h às 19h",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.837511291987!2d-47.92016592401899!3d-19.762057033102334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bacfe0c5160fe7%3A0x8143bd99e5f2587b!2sAv.%20Prudente%20de%20Morais%2C%201018%20-%20Vila%20Nossa%20Sra.%20Abadia%2C%20Uberaba%20-%20MG%2C%2038026-250!5e0!3m2!1spt-BR!2sbr!4v1778338585731!5m2!1spt-BR!2sbr",
      linkMapa: "https://maps.app.goo.gl/QQhzbsPYDJCLBKDZ7",
    },
  ];

  const lojaTabs = document.querySelectorAll(".loja-tab");

  const lojaNome = document.getElementById("lojaNome");
  const lojaEndereco = document.getElementById("lojaEndereco");
  const lojaCidade = document.getElementById("lojaCidade");
  const lojaHorario = document.getElementById("lojaHorario");
  const lojaMapa = document.getElementById("lojaMapa");
  const lojaLinkMapa = document.getElementById("lojaLinkMapa");

  function atualizarLoja(indice) {
    const loja = lojas[indice];

    if (!loja) return;

    if (lojaNome) lojaNome.textContent = loja.nome;
    if (lojaEndereco) lojaEndereco.textContent = loja.endereco;
    if (lojaCidade) lojaCidade.textContent = loja.cidade;
    if (lojaHorario) lojaHorario.textContent = loja.horario;
    if (lojaMapa) lojaMapa.src = loja.mapa;
    if (lojaLinkMapa) lojaLinkMapa.href = loja.linkMapa;

    lojaTabs.forEach((botao) => {
      botao.classList.remove("active");
    });

    if (lojaTabs[indice]) {
      lojaTabs[indice].classList.add("active");
    }
  }

  lojaTabs.forEach((botao, indice) => {
    botao.addEventListener("click", function () {
      atualizarLoja(indice);
    });
  });

  atualizarLoja(0);
});
