import React from "react";
import { useState } from "react";

export default function AerionVault() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      jets: "Jet Portfolio",
      contact: "Contact",
      slogan: "Global Jet Access, Redefined.",
      intro: "Welcome to Aerion Vault – your elite gateway to private aviation."
    },
    tr: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmetler",
      jets: "Jet Portföyü",
      contact: "İletişim",
      slogan: "Özel Uçuşta Yeni Bir Dönem.",
      intro: "Aerion Vault'a hoş geldiniz – özel havacılığın elit kapısı."
    },
    fr: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      jets: "Portefeuille de Jets",
      contact: "Contact",
      slogan: "L'aviation privée réinventée.",
      intro: "Bienvenue chez Aerion Vault – votre passerelle vers l'aviation privée."
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      jets: "أسطول الطائرات",
      contact: "اتصل بنا",
      slogan: "إعادة تعريف الطيران الخاص.",
      intro: "مرحبًا بكم في آيريون فولت – بوابتكم إلى عالم الطيران الفاخر."
    },
    ru: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      jets: "Парк Джетов",
      contact: "Контакты",
      slogan: "Приватная авиация нового уровня.",
      intro: "Добро пожаловать в Aerion Vault – ваш элитный доступ к частной авиации."
    }
  };

  const t = translations[language];

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Aerion Vault Logo" className="h-10" />
          <h1 className="text-xl font-bold tracking-wider">AERION VAULT</h1>
        </div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-yellow-400">{t.home}</a>
          <a href="#" className="hover:text-yellow-400">{t.about}</a>
          <a href="#" className="hover:text-yellow-400">{t.services}</a>
          <a href="#" className="hover:text-yellow-400">{t.jets}</a>
          <a href="#" className="hover:text-yellow-400">{t.contact}</a>
          <select
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            className="bg-black text-white border border-gray-600 px-2 py-1 rounded"
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
            <option value="ru">RU</option>
          </select>
        </nav>
      </header>

      <main className="text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-yellow-400">{t.slogan}</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{t.intro}</p>
      </main>
    </div>
  );
}
