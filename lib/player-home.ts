import type { Language } from "@/lib/translations";
import { MAIL_LINK, TELEGRAM_LINK } from "@/lib/links";

type HomeCard = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  metric?: string;
};

type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    chips: string[];
    stats: {
      label: string;
      value: string;
    }[];
    stage: HomeCard;
    sideCards: HomeCard[];
  };
  games: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeCard[];
  };
  sports: {
    eyebrow: string;
    title: string;
    body: string;
    lead: HomeCard;
    rails: HomeCard[];
  };
  offers: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
  footer: {
    body: string;
    homeLabel: string;
    routesLabel: string;
    supportLabel: string;
  };
};

const homeContent: Record<Language, HomeContent> = {
  en: {
    hero: {
      eyebrow: "Play online",
      title: "Start with live sports, casino games, and offers made for quick play.",
      body:
        "Start fast, move between sports and casino with ease, and keep rewards close from your first session.",
      primary: "Explore games",
      secondary: "View offers",
      chips: ["Live sports", "Casino games", "Welcome gifts", "Mobile play"],
      stats: [
        { label: "Live access", value: "Fast" },
        { label: "Top sport", value: "Football" },
        { label: "Player support", value: "Online" },
      ],
      stage: {
        eyebrow: "Live football",
        title: "Follow live matches, check your markets, and move into the action fast.",
        body: "Stay close to the biggest football moments and jump into play without losing time.",
        image: "/patterns/Nefertiti.svg",
        metric: "Featured",
      },
      sideCards: [
        {
          eyebrow: "Casino",
          title: "Open live tables, slots, and quick games in one place.",
          body: "Move from roulette and blackjack to faster casino titles whenever you want a change of pace.",
          image: "/patterns/AnubisLong.svg",
          metric: "Live tables",
        },
        {
          eyebrow: "Gifts",
          title: "Check gifts, boosts, and cashback before you play.",
          body: "Keep available offers close and use the ones that fit your next session.",
          image: "/patterns/EyeandKey.svg",
          metric: "Daily gifts",
        },
      ],
    },
    games: {
      eyebrow: "Games and casino",
      title: "Choose the games you want and start in a few taps.",
      body:
        "Move between live casino, slots, and quick games without slowing down. Everything stays easy to reach on mobile.",
      cards: [
        {
          eyebrow: "Live tables",
          title: "Join live tables and real-time casino action.",
          body: "Play roulette, blackjack, and other live games when you want a more interactive session.",
          image: "/home/games/live.png",
          metric: "Live",
        },
        {
          eyebrow: "Slots",
          title: "Spin through slots built for fast rounds.",
          body: "Open popular slot titles, keep the pace light, and jump back in whenever you want.",
          image: "/home/games/slots.png",
          metric: "Spins",
        },
        {
          eyebrow: "Quick play",
          title: "Open quick games for short mobile sessions.",
          body: "Good for a fast visit, a short break, or a quick second pick after sports.",
          image: "/home/games/quick.png",
          metric: "Mobile",
        },
      ],
    },
    sports: {
      eyebrow: "Sports",
      title: "Follow the sports you care about and move into live action fast.",
      body:
        "Football leads the way, with more sports ready when you want quicker markets, sharper turns, or late-night action.",
      lead: {
        eyebrow: "Football",
        title: "Stay close to football with strong match coverage and quick access to live play.",
        body: "Start with the sport most players open first and keep the biggest events within easy reach.",
        image: "/home/sports/sports.png",
        metric: "Live board",
      },
      rails: [
        {
          eyebrow: "Basketball",
          title: "Jump into faster moves and sharper momentum swings.",
          body: "Basketball suits players who want quick markets and more action from one minute to the next.",
          image: "/home/sports/basketball.png",
          metric: "Fast",
        },
        {
          eyebrow: "Tennis",
          title: "Track every turn point by point with quick in-play updates.",
          body: "Tennis works well when you want tighter rhythm and live moments that can change quickly.",
          image: "/home/sports/tennis.png",
          metric: "In play",
        },
        {
          eyebrow: "Night events",
          title: "Stay ready for late matches and high-attention fixtures.",
          body: "Keep late action close when you want another game after the main schedule.",
          image: "/home/sports/night.png",
          metric: "Prime",
        },
      ],
    },
    offers: {
      eyebrow: "Offers and gifts",
      title: "Claim gifts, boosts, and cashback that keep play moving.",
      body:
        "Start with welcome value, check daily offers before the match, and keep cashback close for later sessions.",
      cards: [
        {
          eyebrow: "Welcome gift",
          title: "Start with a welcome gift on your first steps.",
          body: "Check the available welcome offer and begin with extra value from the start.",
          image: "/home/gifts/gift.png",
          metric: "Welcome",
        },
        {
          eyebrow: "Daily boost",
          title: "Use daily boosts when football is in focus.",
          body: "Look for the active boost before the match starts and get more from the events you follow.",
          image: "/home/gifts/boost.png",
          metric: "Boost",
        },
        {
          eyebrow: "Cashback",
          title: "Keep cashback close for repeat sessions.",
          body: "Come back with extra support when you want another round later in the day.",
          image: "/home/gifts/cashback.png",
          metric: "Cashback",
        },
      ],
    },
    finalCta: {
      eyebrow: "Support",
      title: "Need help before you start or while you play?",
      body: "Message the support team on Telegram or mail for quick help with getting started, games, or available offers.",
      primary: "Telegram",
      primaryHref: TELEGRAM_LINK,
      secondary: "Mail",
      secondaryHref: MAIL_LINK,
    },
    footer: {
      body: "Live sports, casino games, clear offers, and direct support in one place.",
      homeLabel: "Explore",
      routesLabel: "Pages",
      supportLabel: "Support",
    },
  },
  ar: {
    hero: {
      eyebrow: "ابدأ الآن",
      title: "ابدأ بالرياضة المباشرة وألعاب الكازينو والعروض الجاهزة لك.",
      body:
        "تحرك بسرعة بين المباريات والألعاب، واستفد من العروض المتاحة، وابق قريبًا من الدعم من أول خطوة.",
      primary: "استكشف الألعاب",
      secondary: "شاهد العروض",
      chips: ["رياضة مباشرة", "ألعاب كازينو", "هدايا ترحيب", "لعب عبر الهاتف"],
      stats: [
        { label: "دخول سريع", value: "جاهز" },
        { label: "الرياضة الأبرز", value: "كرة القدم" },
        { label: "الدعم", value: "متصل" },
      ],
      stage: {
        eyebrow: "كرة قدم مباشرة",
        title: "تابع المباريات الحية، اختر أسواقك المفضلة، وادخل الأجواء بسرعة.",
        body: "ابدأ بأقوى مباريات كرة القدم وابق قريبًا من الأحداث التي يعود إليها اللاعبون أولًا.",
        image: "/patterns/Nefertiti.svg",
        metric: "مميز",
      },
      sideCards: [
        {
          eyebrow: "الكازينو",
          title: "افتح الطاولات المباشرة والسلوتس والألعاب السريعة من مكان واحد.",
          body: "انتقل بين الروليت والبلاك جاك وألعاب الكازينو السريعة بدون تأخير.",
          image: "/patterns/AnubisLong.svg",
          metric: "طاولات مباشرة",
        },
        {
          eyebrow: "الهدايا",
          title: "شاهد الهدايا والتعزيزات والكاش باك قبل أن تبدأ.",
          body: "احتفظ بالعروض القريبة منك واختر ما يناسب جلستك قبل اللعب.",
          image: "/patterns/EyeandKey.svg",
          metric: "هدايا يومية",
        },
      ],
    },
    games: {
      eyebrow: "الألعاب والكازينو",
      title: "اختر لعبتك وابدأ خلال ثوانٍ.",
      body:
        "تنقل بين الكازينو المباشر والسلوتس والألعاب السريعة بسهولة، وكل شيء يبقى قريبًا منك على الهاتف.",
      cards: [
        {
          eyebrow: "طاولات مباشرة",
          title: "ادخل طاولات مباشرة وحركة كازينو لحظية.",
          body: "العب الروليت والبلاك جاك وغيرها عندما تريد جلسة تفاعلية أكثر.",
          image: "/home/games/live.png",
          metric: "مباشر",
        },
        {
          eyebrow: "سلوتس",
          title: "جرّب سلوتس بإيقاع سريع وجولات خفيفة.",
          body: "افتح ألعابًا شائعة وابدأ بسرعة ثم عد إليها في أي وقت.",
          image: "/home/games/slots.png",
          metric: "لفّات",
        },
        {
          eyebrow: "ألعاب سريعة",
          title: "افتح ألعابًا سريعة لجلسات قصيرة على الهاتف.",
          body: "مناسبة لزيارة سريعة أو استراحة قصيرة أو خطوة ثانية بعد الرياضة.",
          image: "/home/games/quick.png",
          metric: "هاتف",
        },
      ],
    },
    sports: {
      eyebrow: "الرياضة",
      title: "تابع الرياضات التي تهمك وادخل اللعب المباشر بسرعة.",
      body:
        "ابدأ بكرة القدم، ثم انتقل إلى رياضات أسرع عندما تريد حركة أكبر أو مباريات ليلية.",
      lead: {
        eyebrow: "كرة القدم",
        title: "ابق قريبًا من كرة القدم مع مباريات قوية ودخول سريع إلى اللعب المباشر.",
        body: "ابدأ بالرياضة التي يتابعها معظم اللاعبين أولًا واحتفظ بأهم الأحداث في متناولك.",
        image: "/home/sports/sports.png",
        metric: "لوحة مباشرة",
      },
      rails: [
        {
          eyebrow: "كرة السلة",
          title: "ادخل إلى حركة أسرع وتقلبات أوضح في كل لحظة.",
          body: "كرة السلة تناسبك عندما تريد أسواقًا سريعة وإيقاعًا أعلى من دقيقة إلى أخرى.",
          image: "/home/sports/basketball.png",
          metric: "سريع",
        },
        {
          eyebrow: "التنس",
          title: "تابع كل نقطة مع تحديثات مباشرة وتحولات سريعة.",
          body: "التنس مناسب عندما تريد إيقاعًا سريعًا ولحظات قد تتغير خلال ثوانٍ.",
          image: "/home/sports/tennis.png",
          metric: "داخل اللعب",
        },
        {
          eyebrow: "مباريات ليلية",
          title: "ابق جاهزًا للمباريات المتأخرة والأحداث التي تحظى بأكبر اهتمام.",
          body: "احتفظ بالحركة الليلية قريبة منك عندما تريد جولة جديدة بعد الجدول الأساسي.",
          image: "/home/sports/night.png",
          metric: "مميز",
        },
      ],
    },
    offers: {
      eyebrow: "العروض والهدايا",
      title: "استفد من الهدايا والتعزيزات والكاش باك أثناء اللعب.",
      body:
        "ابدأ بهدية ترحيب، راقب التعزيزات اليومية، واحتفظ بالكاش باك للجلسات التالية.",
      cards: [
        {
          eyebrow: "هدية ترحيب",
          title: "ابدأ بهدية ترحيب من أول خطوة.",
          body: "تحقق من عرض الترحيب المتاح وابدأ بقيمة إضافية منذ البداية.",
          image: "/home/gifts/gift.png",
          metric: "ترحيب",
        },
        {
          eyebrow: "تعزيز يومي",
          title: "استخدم التعزيزات اليومية عندما تكون كرة القدم في الواجهة.",
          body: "تابع التعزيز المتاح قبل المباراة واستفد أكثر من الأحداث التي تتابعها.",
          image: "/home/gifts/boost.png",
          metric: "تعزيز",
        },
        {
          eyebrow: "كاش باك",
          title: "احتفظ بالكاش باك قريبًا من جلساتك المتكررة.",
          body: "عد إلى اللعب مع دعم إضافي عندما تريد جولة أخرى لاحقًا.",
          image: "/home/gifts/cashback.png",
          metric: "كاش باك",
        },
      ],
    },
    finalCta: {
      eyebrow: "الدعم",
      title: "تحتاج مساعدة قبل أن تبدأ أو أثناء اللعب؟",
      body: "راسل فريق الدعم عبر تيليجرام أو البريد لتحصل على رد سريع حول البداية أو الألعاب أو العروض المتاحة.",
      primary: "تيليجرام",
      primaryHref: TELEGRAM_LINK,
      secondary: "Mail",
      secondaryHref: MAIL_LINK,
    },
    footer: {
      body: "رياضة مباشرة، ألعاب كازينو، عروض واضحة، ودعم سريع في مكان واحد.",
      homeLabel: "استكشف",
      routesLabel: "الصفحات",
      supportLabel: "الدعم",
    },
  },
};

export function getLandingPlayerHomeContent(language: Language) {
  return homeContent[language];
}
