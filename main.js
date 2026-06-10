document.documentElement.classList.add("js");

(() => {
  "use strict";

  const STORAGE_KEY = "saibaken.language";
  const SUPPORTED_LANGUAGES = ["ja", "en", "zh-Hant", "zh-Hans"];
  const LANGUAGE_LABELS = {
    ja: "日本語",
    en: "English",
    "zh-Hant": "繁體中文",
    "zh-Hans": "简体中文",
  };

  const translations = {
    en: {
      meta: {
        title: "SaibaKen Studio | Quick, satisfying games",
        description: "SaibaKen Studio creates quick, satisfying mobile games including Dodon Ninja, Candy Beads, Neji Hacker, and Sengoku Puzzle.",
      },
      nav: { home: "Home", games: "Games", menu: "Open menu" },
      hero: {
        copy: "Small games, sharp ideas, and satisfying play you can enjoy anytime.",
      },
      actions: { googlePlay: "Get it on Google Play", comingSoon: "Coming Soon" },
      games: {
        dodon: {
          name: "Thunder Ninja: Dragon Shooter",
          short: "Fast ninja shooting action with weapons, upgrades, and dragon battles!",
          description: "Jump into quick arcade battles, collect equipment, and shape your style with 12 weapons, 30 upgrades, and 360 combinations.",
          downloadLabel: "Download Thunder Ninja on Google Play",
          iconAlt: "Thunder Ninja app icon",
          characterAlt: "Thunder Ninja character",
          screenAlt1: "Thunder Ninja shooting battle",
          screenAlt2: "Thunder Ninja weapon upgrades",
        },
        candy: {
          name: "Candy Beads: Color Puzzle",
          short: "Move colorful beads, match colors, and enjoy a cute casual puzzle!",
          description: "Plan each move, bring matching colors together, and enjoy a bright puzzle that balances relaxation with a little strategy.",
          iconAlt: "Candy Beads app icon",
          characterAlt: "Candy Beads character",
          screenAlt1: "Candy Beads color puzzle",
          screenAlt2: "Candy Beads puzzle stage",
        },
        neji: {
          name: "Neji Hacker: Screw Puzzle",
          short: "Unscrew bolts, unlock mechanisms, and clear cyberpunk puzzle stages!",
          description: "Remove screws in the right order, move parts, and unlock clever mechanisms in quick cyberpunk puzzle stages.",
          downloadLabel: "Download Neji Hacker on Google Play",
          iconAlt: "Neji Hacker app icon",
          characterAlt: "Neji Hacker character",
          screenAlt1: "Neji Hacker screw puzzle",
          screenAlt2: "Neji Hacker cleared stage",
        },
        sengoku: {
          name: "SengokuPazuru: Puzzle Battle",
          short: "Connect warlord pieces, trigger combos, and win Sengoku puzzle battles!",
          description: "Trace a route through warlord pieces, build chain combos, and use skills at the right moment to turn the battle around.",
          downloadLabel: "Download Sengoku Puzzle on Google Play",
          iconAlt: "Sengoku Puzzle app icon",
          characterAlt: "Sengoku Puzzle warrior",
          screenAlt1: "Sengoku Puzzle battle board",
          screenAlt2: "Sengoku Puzzle stage map",
        },
      },
    },
    ja: {
      meta: {
        title: "SaibaKen Studio | サクッと遊べて、楽しい。",
        description: "SaibaKen Studioは、短時間で気軽に楽しめるモバイルゲームを制作しています。",
      },
      nav: { home: "ホーム", games: "ゲーム", menu: "メニューを開く" },
      hero: {
        copy: "いつでも気軽に楽しめる、小さなゲームとひらめきのある遊び。",
      },
      actions: { googlePlay: "Google Playで入手", comingSoon: "近日公開" },
      games: {
        dodon: {
          name: "ドドン忍者：爽快STG",
          short: "かんたん操作で火力全開！ドラゴンに挑む忍者シューティング！",
          description: "敵を倒して装備を集め、12種類の武器と30種類のアップグレードから自分だけの戦闘スタイルを作ろう。",
          downloadLabel: "ドドン忍者をGoogle Playでダウンロード",
          iconAlt: "ドドン忍者のアプリアイコン",
          characterAlt: "ドドン忍者のキャラクター",
          screenAlt1: "ドドン忍者のシューティングバトル",
          screenAlt2: "ドドン忍者の武器アップグレード",
        },
        candy: {
          name: "キャンディビーズ：色合わせパズル",
          short: "カラフルなビーズを動かして楽しむ、かわいい色合わせパズル！",
          description: "同じ色のビーズをそろえて、リラックス感とちょっとした戦略を楽しめるカラフルなパズルです。",
          iconAlt: "キャンディビーズのアプリアイコン",
          characterAlt: "キャンディビーズのキャラクター",
          screenAlt1: "キャンディビーズの色合わせパズル",
          screenAlt2: "キャンディビーズのパズルステージ",
        },
        neji: {
          name: "ねじねじハッカー：ネジパズル",
          short: "ネジを外して仕掛けを解除！サイバーパンクなかんたんパズル！",
          description: "正しい順番でネジを外し、パーツを動かして、テンポよく仕掛けを解除しよう。",
          downloadLabel: "ねじねじハッカーをGoogle Playでダウンロード",
          iconAlt: "ねじねじハッカーのアプリアイコン",
          characterAlt: "ねじねじハッカーのキャラクター",
          screenAlt1: "ねじねじハッカーのネジパズル",
          screenAlt2: "ねじねじハッカーのステージクリア画面",
        },
        sengoku: {
          name: "戦国パズル：武将バトル",
          short: "武将ピースをつなげて連鎖コンボ！爽快な戦国パズルバトル！",
          description: "武将ピースをなぞって連鎖を作り、スキルを使うタイミングを見極めて戦局を逆転しよう。",
          downloadLabel: "戦国パズルをGoogle Playでダウンロード",
          iconAlt: "戦国パズルのアプリアイコン",
          characterAlt: "戦国パズルの武将キャラクター",
          screenAlt1: "戦国パズルのバトル画面",
          screenAlt2: "戦国パズルのステージ画面",
        },
      },
    },
    "zh-Hant": {
      meta: {
        title: "SaibaKen Studio | 輕鬆上手，樂趣滿滿",
        description: "SaibaKen Studio 製作隨時都能輕鬆享受的手機遊戲。",
      },
      nav: { home: "首頁", games: "遊戲", menu: "開啟選單" },
      hero: {
        copy: "小巧的遊戲、俐落的創意，以及隨時都能享受的爽快體驗。",
      },
      actions: { googlePlay: "前往 Google Play", comingSoon: "即將上線" },
      games: {
        dodon: {
          name: "怒雷忍者：爽快射擊",
          short: "輕鬆操作，火力全開！挑戰巨龍的爽快忍者射擊！",
          description: "擊敗敵人、收集裝備，從12種武器與30種升級路線中打造自己的戰鬥風格。",
          downloadLabel: "前往 Google Play 下載怒雷忍者",
          iconAlt: "怒雷忍者應用程式圖示",
          characterAlt: "怒雷忍者角色",
          screenAlt1: "怒雷忍者射擊戰鬥畫面",
          screenAlt2: "怒雷忍者武器升級畫面",
        },
        candy: {
          name: "甜心拼豆：休閒益智",
          short: "移動彩色拼豆，同色歸位，享受輕鬆又耐玩的益智消除！",
          description: "規劃每一步，讓相同顏色順利歸位，在明亮可愛的拼圖中享受放鬆與策略。",
          iconAlt: "甜心拼豆應用程式圖示",
          characterAlt: "甜心拼豆角色",
          screenAlt1: "甜心拼豆顏色拼圖",
          screenAlt2: "甜心拼豆遊戲關卡",
        },
        neji: {
          name: "螺絲駭客：螺絲解謎",
          short: "擰開螺絲，破解機關！賽博龐克風的輕鬆解謎淘汰遊戲！",
          description: "按照正確順序擰開螺絲、移動零件，在節奏明快的關卡中破解各種機關。",
          downloadLabel: "前往 Google Play 下載螺絲駭客",
          iconAlt: "螺絲駭客應用程式圖示",
          characterAlt: "螺絲駭客角色",
          screenAlt1: "螺絲駭客解謎畫面",
          screenAlt2: "螺絲駭客過關畫面",
        },
        sengoku: {
          name: "戰國消消樂：武將連線",
          short: "連接武將方塊，打出連鎖連擊，體驗爽快戰國消除戰鬥！",
          description: "連接武將圖塊打出連鎖，掌握技能時機，在危急時刻逆轉戰局。",
          downloadLabel: "前往 Google Play 下載戰國消消樂",
          iconAlt: "戰國消消樂應用程式圖示",
          characterAlt: "戰國消消樂武將角色",
          screenAlt1: "戰國消消樂戰鬥畫面",
          screenAlt2: "戰國消消樂關卡畫面",
        },
      },
    },
    "zh-Hans": {
      meta: {
        title: "SaibaKen Studio | 轻松上手，乐趣满满",
        description: "SaibaKen Studio 制作随时都能轻松享受的手机游戏。",
      },
      nav: { home: "首页", games: "游戏", menu: "打开菜单" },
      hero: {
        copy: "小巧的游戏、利落的创意，以及随时都能享受的爽快体验。",
      },
      actions: { googlePlay: "前往 Google Play", comingSoon: "即将上线" },
      games: {
        dodon: {
          name: "怒雷忍者：爽快射击",
          short: "轻松操作，火力全开！挑战巨龙的爽快忍者射击！",
          description: "击败敌人、收集装备，从12种武器与30种升级路线中打造自己的战斗风格。",
          downloadLabel: "前往 Google Play 下载怒雷忍者",
          iconAlt: "怒雷忍者应用图标",
          characterAlt: "怒雷忍者角色",
          screenAlt1: "怒雷忍者射击战斗画面",
          screenAlt2: "怒雷忍者武器升级画面",
        },
        candy: {
          name: "甜心拼豆：休闲益智",
          short: "移动彩色拼豆，同色归位，享受轻松又耐玩的益智消除！",
          description: "规划每一步，让相同颜色顺利归位，在明亮可爱的拼图中享受放松与策略。",
          iconAlt: "甜心拼豆应用图标",
          characterAlt: "甜心拼豆角色",
          screenAlt1: "甜心拼豆颜色拼图",
          screenAlt2: "甜心拼豆游戏关卡",
        },
        neji: {
          name: "螺丝骇客：螺丝解谜",
          short: "拧开螺丝，破解机关！赛博朋克风的轻松解谜淘汰游戏！",
          description: "按照正确顺序拧开螺丝、移动零件，在节奏明快的关卡中破解各种机关。",
          downloadLabel: "前往 Google Play 下载螺丝骇客",
          iconAlt: "螺丝骇客应用图标",
          characterAlt: "螺丝骇客角色",
          screenAlt1: "螺丝骇客解谜画面",
          screenAlt2: "螺丝骇客过关画面",
        },
        sengoku: {
          name: "战国消消乐：武将连线",
          short: "连接武将方块，打出连锁连击，体验爽快战国消除战斗！",
          description: "连接武将图块打出连锁，掌握技能时机，在危急时刻逆转战局。",
          downloadLabel: "前往 Google Play 下载战国消消乐",
          iconAlt: "战国消消乐应用图标",
          characterAlt: "战国消消乐武将角色",
          screenAlt1: "战国消消乐战斗画面",
          screenAlt2: "战国消消乐关卡画面",
        },
      },
    },
  };

  const warned = new Set();
  const isDevelopment = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);

  function warnOnce(key, message) {
    if (!isDevelopment || warned.has(key)) return;
    warned.add(key);
    console.warn(`[SaibaKen] ${message}`);
  }

  function getByPath(source, path) {
    return path.split(".").reduce((value, key) => value?.[key], source);
  }

  function translatedValue(language, key) {
    return getByPath(translations[language], key)
      ?? getByPath(translations.en, key)
      ?? getByPath(translations.ja, key)
      ?? "";
  }

  function normaliseLanguage(language) {
    if (!language || typeof language !== "string") return null;
    const value = language.replace("_", "-").toLowerCase();
    if (value === "zh-cn" || value === "zh-sg" || value.startsWith("zh-hans")) return "zh-Hans";
    if (value.startsWith("zh")) return "zh-Hant";
    if (value.startsWith("ja")) return "ja";
    if (value.startsWith("en")) return "en";
    return "en";
  }

  function renderDisplayGameName(element, value) {
    const separatorIndex = value.search(/[:：]/);
    if (separatorIndex < 0) {
      element.textContent = value;
      return;
    }

    const suffix = document.createElement("span");
    suffix.className = "game-name-suffix";
    suffix.textContent = `·${value.slice(separatorIndex + 1).trim()}`;
    element.replaceChildren(document.createTextNode(value.slice(0, separatorIndex)), suffix);
  }

  function detectLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
    } catch {
      warnOnce("storage-read", "Language preference storage is unavailable.");
    }

    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language];

    for (const language of browserLanguages) {
      const normalised = normaliseLanguage(language);
      if (normalised) return normalised;
    }

    warnOnce("language", "Browser language was not recognised; English is being used.");
    return "en";
  }

  function applyLanguage(language, persist = false) {
    const selected = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translatedValue(selected, element.dataset.i18n);
      if (element.matches(".game-tab h3, .game-copy h2") && element.dataset.i18n.endsWith(".name")) {
        renderDisplayGameName(element, value);
      } else {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-alt-i18n]").forEach((element) => {
      element.alt = translatedValue(selected, element.dataset.altI18n);
    });

    document.querySelectorAll("[data-aria-i18n]").forEach((element) => {
      element.setAttribute("aria-label", translatedValue(selected, element.dataset.ariaI18n));
    });

    document.title = translatedValue(selected, "meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = translatedValue(selected, "meta.description");

    document.querySelectorAll("[data-language]").forEach((button) => {
      if (button.dataset.language === selected) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    document.querySelectorAll("[data-current-language]").forEach((currentLabel) => {
      currentLabel.textContent = LANGUAGE_LABELS[selected];
    });

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, selected);
      } catch {
        warnOnce("storage-write", "Language preference could not be saved.");
      }
    }
  }

  function closeMenus(except = null) {
    document.querySelectorAll(".menu-group.is-open").forEach((group) => {
      if (group === except) return;
      group.classList.remove("is-open");
      group.querySelector(".menu-button")?.setAttribute("aria-expanded", "false");
    });
  }

  document.querySelectorAll(".menu-button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".menu-group");
      const willOpen = !group.classList.contains("is-open");
      closeMenus(group);
      group.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  navToggle?.addEventListener("click", () => {
    const willOpen = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu-group")) closeMenus();
    if (!event.target.closest(".site-header") && siteNav?.classList.contains("is-open")) {
      siteNav.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMenus();
    siteNav?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.focus();
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.language, true);
      closeMenus();
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.dataset.scrollTarget);
      if (!target) return;
      event.preventDefault();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${target.id}`);
      closeMenus();
      siteNav?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("image-error");
      warnOnce("image", "An image failed to load.");
    });
  });

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  applyLanguage(detectLanguage());
})();
