"use strict";

const texts = {
  de: {
    texts: [
      { text: "Der Käse", location: ".headTitle" },
      { text: "Käse ist lecker!", location: ".footTitle" },
      { text: "Sprache auswählen", location: ".langTitle" },
      {
        text: "Käse ist ein Lebensmittel, das aus der Milch verschiedener Tiere hergestellt wird, indem diese mit Lab oder Milchsäurebakterien gesäuert wird.",
        location: ".content",
      },
    ],
  },

  da: {
    texts: [
      { text: "Osten", location: ".headTitle" },
      { text: "Ost er lækkert!", location: ".footTitle" },
      { text: "Vælg sprog", location: ".langTitle" },
      {
        text: "Ost er et fødemiddel lavet af mælk fra forskellige dyr ved at syrne den med osteløbe eller mælkesyrebakterier.",
        location: ".content",
      },
    ],
  },

  ja: {
    texts: [
      { text: "チーズ", location: ".headTitle" },
      { text: "「チーズはおいしいです。」", location: ".footTitle" },
      { text: "言語を選択", location: ".langTitle" },
      {
        text: "チーズは、さまざまな動物の乳から作られる食品で、レンネット（凝乳酵素）や乳酸菌を使って乳を酸性化させることで作られます。",
        location: ".content",
      },
    ],
  },

  es: {
    texts: [
      { text: "El queso", location: ".headTitle" },
      { text: "¡El queso está delicioso!", location: ".footTitle" },
      { text: "Seleccionar idioma", location: ".langTitle" },
      {
        text: "El queso es un alimento elaborado con la leche de diferentes animales, que se acidifica utilizando cuajo o bacterias del ácido láctico.",
        location: ".content",
      },
    ],
  },

  ko: {
    texts: [
      { text: "치즈", location: ".headTitle" },
      { text: "치즈는 맛있어요!", location: ".footTitle" },
      { text: "언어 선택", location: ".langTitle" },
      {
        text: "치즈는 다양한 동물의 우유로 만든 식품으로, 레닛이나 유산균을 사용하여 우유를 산성화하고 응고시켜 만듭니다.",
        location: ".content",
      },
    ],
  },

  is: {
    texts: [
      { text: "Osturinn", location: ".headTitle" },
      { text: "Ostur er ljúffengur!", location: ".footTitle" },
      { text: "Veldu tungumál", location: ".langTitle" },
      {
        text: "Ostur er matvæli sem er búið til úr mjólk ýmissa dýra með því að sýra hana með ostahleypi eða mjólkursýrugerlum.",
        location: ".content",
      },
    ],
  },
};

const language = document.querySelector("#languages");

language.addEventListener("change", () => {
  const selectedTexts = texts[language.value].texts;

  selectedTexts.forEach((lang) => {
    document.querySelector(lang.location).textContent = lang.text;
  });
});
