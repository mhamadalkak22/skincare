const fs = require('fs');

// COMPREHENSIVE translation dictionary for ALL benefits
const translations = {
  // Percentages and measurements
  "-30% redness in 28 days": "تقليل الاحمرار بنسبة 30% في 28 يوم",
  "-87% pain or  discomfort on the lips": "تقليل الألم أو عدم الراحة على الشفاه بنسبة 87%",
  "-90% of itching after 28 days of application": "تقليل الحكة بنسبة 90% بعد 28 يوم من الاستخدام",
  "84% reduction of feeling of itching": "تقليل الشعور بالحكة بنسبة 84%",
  "+115% hydration booster": "معزز للترطيب بنسبة 115%",
  "- 28% of imperfections since 2 nights": "تقليل العيوب بنسبة 28% منذ ليلتين",
  "90% reduced wrinkles": "تقليل التجاعيد بنسبة 90%",
  "+111% resistance of hair": "زيادة مقاومة الشعر بنسبة 111%",
  "96% prettier hair curls": "تحسين تجاعيد الشعر بنسبة 96%",
  "100% perfectly nourished hair": "شعر مغذى بنسبة 100%",
  "100% hydration & nutrition bath": "حمام ترطيب وتغذية بنسبة 100%",
  "100% nourished feet after 21 days of application": "أقدام مغذية بنسبة 100% بعد 21 يوم",
  "95% reduces the appearance of puffiness": "تقليل مظهر الانتفاخ بنسبة 95%",
  "98% corrects dark spots": "تصحيح البقع الداكنة بنسبة 98%",
  
  // Skin types and suitability
  "Perfect for dry skins": "مثالي للبشرة الجافة",
  "Very dry, damaged hands": "للأيدي الجافة جداً والمتضررة",
  "For the whole family": "لجميع أفراد العائلة",
  "Children and adults": "للأطفال والبالغين",
  "Children from 3 y.o., adults": "للأطفال من 3 سنوات والبالغين",
  "Suitable for sensitive eyes and contact lens wearers": "مناسب للعيون الحساسة ولمستخدمي العدسات اللاصقة",
  "Suitable for sensitive eyes": "مناسب للعيون الحساسة",
  
  // Multi-action benefits
  "3 in 1 Action": "فعالية 3 في 1",
  "4 in 1: wrinkles, slackening, radiance, dark spots": "4 في 1: التجاعيد، الترهل، الإشراق، البقع الداكنة",
  "Triple action: hydration – radiance – anti-pollution": "فعالية ثلاثية: ترطيب - إشراق - مضاد للتلوث",
  
  // Coverage and appearance
  "Coverage , Hydration": "تغطية، ترطيب",
  "Evens & Brightens": "يوحد ويُنير",
  "High SPF Protection": "حماية عالية من الشمس",
  "Very high sun protection": "حماية عالية جداً من الشمس",
  
  // Dark spots and pigmentation
  "360° anti-dark spot action": "فعالية 360° ضد البقع الداكنة",
  "Efficacy even on installed dark spots and melasma": "فعال حتى على البقع الداكنة الثابتة والكلف",
  "Visible results in 7 days on dark spots": "نتائج مرئية في 7 أيام على البقع الداكنة",
  "N°1 of Depigmenting Body Milk": "رقم 1 في حليب الجسم المزيل للتصبغ",
  "Corrects, prevents & protects": "يصحح، يمنع ويحمي",
  "It corrects stains & reduces pigment": "يصحح البقع ويقلل الصبغة",
  "Anti  hyperpigmented scars": "مضاد لندبات فرط التصبغ",
  
  // Photosensitivity
  "Non photosensitizing": "غير محسس للضوء",
  "OK eye contour": "آمن لمحيط العين",
  
  // Usage areas
  "Face, body, hair": "للوجه، الجسم والشعر",
  "Face, body": "للوجه والجسم",
  "Face, body and babies' scalp": "للوجه، الجسم وفروة رأس الأطفال",
  "Face, body and babies' scalp": "للوجه، الجسم وفروة رأس الأطفال",
  "Face, body, external intimate mucosa": "للوجه، الجسم والمناطق الحميمة الخارجية",
  "Face, body, scalp, intimate external mucosa": "للوجه، الجسم، فروة الرأس والمناطق الحميمة الخارجية",
  "Face , body & bikini": "للوجه، الجسم ومنطقة البكيني",
  
  // Soap and eye safety
  "Soap free, does not sting the eyes": "خالي من الصابون، لا يلسع العيون",
  "Does not sting the eyes": "لا يلسع العيون",
  "Does not weigh hair down": "لا يثقل الشعر",
  
  // Fragrance
  "Delicate fragrance of Orange Blossom": "عطر رقيق من زهر البرتقال",
  "Delicious and addictive fragrance": "عطر لذيذ وممتع",
  
  // Texture and application
  "Non greasy, non sticky – quickly penetrates": "غير دهني، غير لزج - يتغلغل بسرعة",
  "Non greasy and light texture": "ملمس خفيف وغير دهني",
  "Light texture: immediate dressing": "ملمس خفيف: ارتداء الملابس فوري",
  "Application on dry or wet hair": "للاستخدام على الشعر الجاف أو الرطب",
  "Pleasant foam, easy to rinse": "رغوة لطيفة، سهلة الشطف",
  
  // Hydration and moisturizing
  "Long lasting hydration": "ترطيب طويل الأمد",
  "Maintains hydration of the skin": "يحافظ على ترطيب البشرة",
  "Hydration coach for the skin": "مدرب الترطيب للبشرة",
  "Comfort restored after 3 days of use": "استعادة الراحة بعد 3 أيام من الاستخدام",
  "Hydration booster*": "معزز للترطيب*",
  
  // Skin effects
  "Reduces reactivity of skin and reinforces skin barrier": "يقلل تفاعل البشرة ويقوي حاجز البشرة",
  "Softens": "يُنعم",
  "Mattifies (Fluid)": "يمنح مظهر غير لامع (سائل)",
  "Immediate and until 12hr mattifying effect": "تأثير غير لامع فوري ولمدة 12 ساعة",
  "Refines skin texture": "يحسن ملمس البشرة",
  "Refines skin texture and tightens the pores for combination skins": "يحسن ملمس البشرة ويشد المسام للبشرة المختلطة",
  "Smoothes, soothes, nourishes": "ينعم، يهدئ، يغذي",
  "Repairs in 3 days": "إصلاح في 3 أيام",
  "New skin effect": "تأثير البشرة الجديدة",
  
  // Cleansing and exfoliating
  "Cleanses and exfoliates": "ينظف ويقشر",
  "Purifying action.": "فعالية تنقية",
  "Mattifying action": "فعالية غير لامعة",
  "Anti-blemish action": "فعالية مضادة للعيوب",
  
  // Anti-aging and wrinkles
  "Results in 28 days": "نتائج في 28 يوم",
  "Non comedogenic (Fluid)": "لا يسبب انسداد المسام (سائل)",
  "Anti-dark circle and puffiness": "مضاد للهالات السوداء والانتفاخ",
  "ANTI-WRINKLES: up to 50% fewer wrinkles around the eye in 21 days*": "مضاد للتجاعيد: تقليل التجاعيد حول العين بنسبة 50% في 21 يوم*",
  "ANTI-DARK CIRCLES &amp; ANTI-POCKETS: 95% of users find their dark circles less visible and their bags reduced in 21 days": "مضاد للهالات والانتفاخ: 95% من المستخدمين وجدوا هالاتهم أقل وضوحاً وانتفاخهم مقلل في 21 يوم",
  
  // Medical/treatment use
  "To use in complement of isotretinoin treatments": "للاستخدام مع علاجات الإيزوتريتينوين",
  "Action on all types of lesions (retentional & inflammatory)": "فعالية على جميع أنواع الآفات (احتباسية والتهابية)",
  "Efficacient since 2 nights": "فعال منذ ليلتين",
  "Better tolerance than salicylic acid": "تحمل أفضل من حمض الساليسيليك",
  
  // Body care specific
  "N°1 Body Milk": "حليب الجسم رقم 1",
  
  // Hair care specific
  "Frequent use": "للاستخدام المتكرر",
  "Sulfate and silicone free": "خالي من الكبريتات والسيليكون",
  
  // Sun protection
  "Powerfull Antioxidant": "مضاد أكسدة قوي",
  "A powerful Antioxidant": "مضاد أكسدة قوي",
  "Anti pollution*": "مضاد للتلوث*",
  
  // Novexpert specific - complex benefits
  "Radiant  Complexion": "بشرة مشرقة",
  "Anti-Ageing": "مضاد للشيخوخة",
  "smoothed skin relief": "ملمس بشرة ناعم",
  "The Booster Serum has established itself as one of the indisputable references in anti-aging care with Hyaluronic Acid.": "مصل معزز أصبح واحداً من المراجع الأساسية في العناية المضادة للشيخوخة مع حمض الهيالورونيك",
  "Powerful ANTI-AGING thanks to a patented active ingredient: Novaxyline which increases by 20%* the expression of sirtuins, nicknamed the \"youth proteins\". Skin cells become 11 years younger": "مضاد قوي للشيخوخة بفضل المكون الحاصل على براءة اختراع: نوفاكسيلين الذي يزيد من تعبير السيرتوينات بنسبة 20%*، الملقبة ببروتينات الشباب. تصبح خلايا البشرة أصغر بـ 11 عاماً",
  "Powerful ANTI-AGING thanks to a patented active ingredient: Novaxyline which increases by 20%* the expression of sirtuins, nicknamed the "youth proteins". Skin cells become 11 years younger": "مضاد قوي للشيخوخة بفضل المكون الحاصل على براءة اختراع: نوفاكسيلين الذي يزيد من تعبير السيرتوينات بنسبة 20%*، الملقبة ببروتينات الشباب. تصبح خلايا البشرة أصغر بـ 11 عاماً",
  "Clear, smooth skin in 20 seconds flat! And here's how the Flash Radiance Cleansing Foam works:": "بشرة صافية وناعمة في 20 ثانية! وهكذا تعمل رغوة التنظيف المشرقة السريعة:",
  "- Anti pollution*": "- مضاد للتلوث*",
  "- Hydration booster*": "- معزز للترطيب*",
  "IMMEDIATE "GOOD GLOW" EFFECT": "تأثير \"توهج جيد\" فوري",
  
  // Lip care
  "3-in-1 AESTHETIC treatment: +10.6% volume*, a natural gloss effect* for 92% of women and a redefined lip contour* for 88% of them.": "علاج جمالي 3 في 1: حجم أكبر بنسبة 10.6%*، تأثير لمعان طبيعي* لـ 92% من النساء وتحديد محيط الشفاه* لـ 88% منهن",
  "2-in-1 COSMETIC treatment: smoothing treatment with -23.6% microgrooves* and 21.3% more even lip color*.": "علاج تجميلي 2 في 1: علاج تنعيم مع تقليل التجاعيد الدقيقة بنسبة 23.6%* ولون شفاه أكثر توحيداً بنسبة 21.3%*",
  "2-in-1 DERMATOLOGICAL treatment: +38.2% intense nutrition* for guaranteed anti-chapping action and repaired lips* for 96% of users.": "علاج جلدي 2 في 1: تغذية مكثفة بنسبة 38.2%* لفعالية مضمونة ضد التشقق وشفاه مصلحة* لـ 96% من المستخدمين",
  
  // Radiance
  "INSTANT LIFTING action": "فعالية رفع فورية",
  "DEEP ANTI-AGING action": "فعالية عميقة مضادة للشيخوخة",
  "RADIANCE OF THE EYES action": "فعالية إشراق العيون",
  "Clear, smooth skin in 20 seconds flat! And here's how the Flash Radiance Cleansing Foam works:": "بشرة صافية وناعمة في 20 ثانية! وهكذا تعمل رغوة التنظيف المشرقة السريعة:",
  "A MASK for a radiant complexion: in just a few minutes, the Expert Exfoliant illuminates the complexion": "قناع لبشرة مشرقة: في دقائق قليلة، يضيء المقشر الخبير البشرة",
  "A SCRUB for smoothed skin: this time, it's mechanical peeling that comes into action": "مقشر لبشرة ناعمة: هذه المرة، التقشير الميكانيكي هو الذي يعمل",
  
  // Hydro-biotic range
  "Soothing Effect": "تأثير مهدئ",
  "For Irritated Skin & Genetic Dryness": "للبشرة المتهيجة والجفاف الوراثي",
  "For Atopic Skin": "للبشرة الأتوبية",
  "- Tonic (after cleansing)": "- منشط (بعد التنظيف)",
  "- Makeup fixative": "- مثبت مكياج",
  "- In case of redness": "- في حالة الاحمرار",
  "- In case of discomfort": "- في حالة عدم الراحة",
  "- NOURISH": "- تغذية",
  "- PROTECT": "- حماية",
  "- SOOTH": "- تهدئة",
  "4-IN-1 COSMETIC TREATMENT:": "علاج تجميلي 4 في 1:",
  "4-IN-1 DERMATOLOGICAL CARE:": "عناية جلدية 4 في 1:",
  
  // Imperfections
  "Anti-imperfection action": "فعالية مضادة للعيوب",
  "Anti-aging action": "فعالية مضادة للشيخوخة",
  "PREVENTION of  inflammation": "الوقاية من الالتهاب",
  "CORRECTION of pimples": "تصحيح البثور",
  "AN ANTI-POLLUTION CLEANER": "منظف مضاد للتلوث",
  "A 3-IN-1 ANTI-IMPERFECTION TREATMENT": "علاج 3 في 1 مضاد للعيوب",
  
  // Dark spots advanced
  "A serum that reduces spots in less than 2 months, whereas they take several years to form!": "مصل يقلل البقع في أقل من شهرين، بينما تستغرق سنوات لتتشكل!",
  "It also contains an active ingredient that stimulates the protein responsible for the absence of spots on the palms of the hands. Using what the skin knows how to do by itself to reduce spots, nothing more natural!": "يحتوي أيضاً على مكون نشط يحفز البروتين المسؤول عن غياب البقع على راحة اليدين. استخدام ما تعرفه البشرة بنفسها لتقليل البقع، لا شيء أكثر طبيعية!",
  
  // Tinted creams
  "IMMEDIATE \"GOOD GLOW\" EFFECT": "تأثير \"توهج جيد\" فوري",
  "LASTING TANNED COMPLEXION": "بشرة برونزية دائمة",
  "MOISTURIZING  ANTI-AGING EFFEC": "تأثير مرطب مضاد للشيخوخة",
  
  // Pro collagen
  "AT TISSUE LEVEL: Increase in collagens in the first and second layers of the skin to reduce deep wrinkles.": "على مستوى الأنسجة: زيادة الكولاجين في الطبقتين الأولى والثانية من البشرة لتقليل التجاعيد العميقة",
  "EPIDERMIS: +130%* collagen 17.": "البشرة: زيادة الكولاجين 17 بنسبة 130%*",
  "DERMIS: +45% of total collagens*.": "الأدمة: زيادة الكولاجين الكلي بنسبة 45%*",
  "AT THE CELLULAR LEVEL: Rejuvenated epidermis thanks to the stimulation and organization of cell renewal. Result? Thickened epidermis up to +26%*.": "على المستوى الخلوي: بشرة متجددة بفضل تحفيز وتنظيم تجديد الخلايا. النتيجة؟ بشرة أكثر سمكاً بنسبة تصل إلى 26%*",
  
  // Empty string
  "": "",
};

// Read the JSON file
const data = JSON.parse(fs.readFileSync('brands_cleaned.json', 'utf8'));

let translatedCount = 0;
let productCount = 0;
const notFound = [];

// Process each product
data.forEach((product, idx) => {
  if (!product.benefits || typeof product.benefits !== 'object') return;
  
  const { en, ar } = product.benefits;
  if (!Array.isArray(en) || !Array.isArray(ar)) return;
  
  let changed = false;
  const newAr = ar.map((arBenefit, i) => {
    const enBenefit = en[i];
    
    // If Arabic is same as English, it needs translation
    if (arBenefit === enBenefit) {
      if (translations[enBenefit] !== undefined) {
        changed = true;
        translatedCount++;
        return translations[enBenefit];
      } else if (enBenefit !== "") {
        notFound.push({ product: product.name, benefit: enBenefit });
      }
    }
    
    return arBenefit;
  });
  
  if (changed) {
    product.benefits.ar = newAr;
    productCount++;
    console.log(`✓ Translated benefits for: ${product.name}`);
  }
});

// Write back to file
fs.writeFileSync('brands_cleaned.json', JSON.stringify(data, null, 2));

console.log(`\n✅ Done!`);
console.log(`   Translated ${translatedCount} benefits`);
console.log(`   Updated ${productCount} products`);

if (notFound.length > 0) {
  console.log(`\n⚠️  ${notFound.length} benefits not found in dictionary:`);
  notFound.forEach((item, idx) => {
    if (idx < 10) { // Only show first 10
      console.log(`   - "${item.benefit}" in ${item.product}`);
    }
  });
  if (notFound.length > 10) {
    console.log(`   ... and ${notFound.length - 10} more`);
  }
}
