const fs = require('fs');
const data = JSON.parse(fs.readFileSync('brands_cleaned.json', 'utf8'));

let needsTranslation = 0;
const untranslated = [];

data.forEach((product, idx) => {
  if (product.benefits && product.benefits.en && product.benefits.ar) {
    product.benefits.ar.forEach((arBenefit, i) => {
      const enBenefit = product.benefits.en[i];
      if (arBenefit === enBenefit) {
        untranslated.push({ product: product.name, benefit: enBenefit });
        needsTranslation++;
      }
    });
  }
});

console.log('Products with untranslated benefits:');
untranslated.forEach((item, idx) => {
  console.log(`${idx + 1}. ${item.product}: "${item.benefit}"`);
});

console.log(`\n✋ Total untranslated benefits: ${needsTranslation}`);
console.log(`   Across ${new Set(untranslated.map(u => u.product)).size} products`);
