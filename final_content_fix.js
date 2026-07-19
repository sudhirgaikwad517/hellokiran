const fs = require('fs');

// 1. Fix checkout.html
const checkoutFile = 'd:/hellokiran/checkout.html';
let checkoutHtml = fs.readFileSync(checkoutFile, 'utf8');

// Testimonial 1: Shivaji Kulal
checkoutHtml = checkoutHtml.replace(
  'With Kiran\'s guidance, we improved our brand positioning, ad strategy, creatives, and customer acquisition process.</div>',
  'With Kiran\'s guidance, we improved our brand positioning, ad strategy, creatives, and customer acquisition process. This helped Bramhayog Ayurved build a stronger digital presence and create a predictable growth system.</div>'
);

// Testimonial 2: Ram Kale
checkoutHtml = checkoutHtml.replace(
  'After implementing Kiran\'s growth strategy, we improved our brand positioning, creatives, ad campaigns, and customer journey.</div>',
  'After implementing Kiran\'s growth strategy, we improved our brand positioning, creatives, ad campaigns, and customer journey. This helped Gurumauli Skin Brand attract better customers and build a more predictable growth system.</div>'
);

// Testimonial 3: Rivas Fashion
checkoutHtml = checkoutHtml.replace(
  'With Kiran\'s growth strategy, we improved our brand positioning, creatives, ad campaigns, and customer journey."</div>',
  'With Kiran\'s growth strategy, we improved our brand positioning, creatives, ad campaigns, and customer journey. This helped Rivas Fashion generate better customer response and build a stronger foundation for scalable online growth."</div>'
);

// Testimonial 4: Paridhan Collection
checkoutHtml = checkoutHtml.replace(
  'With Kiran\'s growth strategy, we optimized our creatives, targeting, offers, and campaign structure.</div>',
  'With Kiran\'s growth strategy, we optimized our creatives, targeting, offers, and campaign structure. This helped Paridhan Collection achieve better ad performance, generate consistent sales, and build a stronger foundation for scalable growth.</div>'
);

// Testimonial 5: Pravara Healthcare
checkoutHtml = checkoutHtml.replace(
  'With Kiran\'s growth strategy, we improved the brand positioning, creatives, campaign strategy, and customer journey."</div>',
  'With Kiran\'s growth strategy, we improved the brand positioning, creatives, campaign strategy, and customer journey. This helped Pravara Healthcare generate better-quality enquiries and build a more predictable growth system."<br><br>Generated ₹15 Lakhs+ Growth Through Strategic Digital Marketing & Performance Campaigns 🚀</div>'
);

// Stats section addition (4th Stat)
const oldStats = '<div class="cred-stat-item-h7n"><div id="igqk1g" class="cred-stat-num-m3a">₹5Cr+</div><div class="cred-stat-label-c9e">Meta Ad Spend Managed</div></div></div>';
const newStats = '<div class="cred-stat-item-h7n"><div id="igqk1g" class="cred-stat-num-m3a">₹5Cr+</div><div class="cred-stat-label-c9e">Meta Ad Spend Managed</div></div><div class="cred-stat-item-h7n"><div class="cred-stat-num-m3a">5+</div><div class="cred-stat-label-c9e">Years of Performance Marketing Experience</div></div></div>';
checkoutHtml = checkoutHtml.replace(oldStats, newStats);

// Urgency Section
const oldUrgencyBody = `I personally take a limited number of D2C Growth Strategy Sessions every week to ensure every brand gets a proper analysis and actionable roadmap. This week, <strong id="i5usco">only 2 spots remain.</strong> If you leave this page without booking, your reserved slot will be released to the next person in line.<br><br>
  The brands that take action today are already identifying their growth leaks, improving their marketing systems, and building a clear scaling roadmap. The only risk of waiting is staying stuck with the same problems — inconsistent sales, wasted ad spend, and unclear growth direction.<br><br>
  The ₹199 deposit is fully refundable. The call is free. The only thing you risk by booking now is getting clarity that changes everything. The only thing you risk by waiting is losing your spot to someone who won't hesitate.`;

const newUrgencyBody = `I personally take a limited number of D2C Growth Strategy Sessions every week to ensure every brand gets a proper analysis and actionable roadmap. This week, <strong id="i5usco">only a few strategy slots are available.</strong> If you leave this page without booking, your slot may be offered to another serious D2C brand owner.<br><br>
  The brands that take action today are already identifying their growth leaks, improving their marketing systems, and building a clear scaling roadmap. The only risk of waiting is staying stuck with the same problems — inconsistent sales, wasted ad spend, and unclear growth direction.<br><br>
  The ₹99 booking amount is fully refundable. The session is risk-free. The only risk of waiting is staying stuck with the same problems — inconsistent sales, wasted ad spend, and unclear growth direction.<br><br>
  🚀 Book Your ₹99 D2C Growth Strategy Session Today.`;
checkoutHtml = checkoutHtml.replace(oldUrgencyBody, newUrgencyBody);

fs.writeFileSync(checkoutFile, checkoutHtml, 'utf8');
console.log("checkout.html fixed.");

// 2. Fix tab3.txt
const tab3File = 'd:/hellokiran/tab3.txt';
let tab3 = fs.readFileSync(tab3File, 'utf8');

tab3 = tab3.replace(/Sumit Kashyap/g, "Kiran Lambhate");
tab3 = tab3.replace(/Sumit's/g, "Kiran's");
tab3 = tab3.replace(/Sumit/g, "Kiran");

fs.writeFileSync(tab3File, tab3, 'utf8');
console.log("tab3.txt fixed.");
