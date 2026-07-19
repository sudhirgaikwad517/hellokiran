const fs = require('fs');

const file = 'd:/hellokiran/checkout.html';
let html = fs.readFileSync(file, 'utf8');

// Replace Hero Section
html = html.replace('1:1 Growth Call With <em id="i6pzf">Sumit</em>', '1:1 Growth Call With <em id="i6pzf">Kiran</em>');
html = html.replace('₹8L-10L/month and 1Cr+ a year on full automation.', '₹5L to ₹25L/Month and 50 Lakh a year on full Automation.');

// Replace What You Get On This Call
html = html.replace("Exact diagnosis of what's keeping you stuck at ₹1–2L/month — no guesswork, just clarity", "Exact diagnosis of what's stopping your brand from scaling — identify your biggest growth leaks across Meta Ads, creatives, landing pages, conversion, and customer journey.");
html = html.replace("A custom roadmap to ₹5–10L/month — specific to your niche, your offer, your market", "A personalized W.A.R.P.™ Growth Roadmap — a clear action plan built specifically for your product, audience, offer, and current growth stage.");
html = html.replace("Your personalised 21-day action plan to start implementing immediately after the call", "Your 30-Day D2C Growth Action Plan — know exactly what to fix, optimize, and implement after the session to improve performance.");
html = html.replace("How to build your AI-powered client acquisition system that works while you sleep", "A complete strategy to build your predictable sales engine — combining AI-powered creatives, Meta Ads, landing pages, WhatsApp follow-up, retargeting, and retention systems.");
html = html.replace("Answers to your biggest pricing, positioning, and scaling questions — nothing held back", "Answers to your biggest D2C growth questions — including ROAS improvement, scaling budgets, reducing RTO, increasing conversions, and building a profitable brand.");

// Replace What Happens After You Pay
html = html.replace("Pay the ₹99 refundable deposit below — takes 30 seconds", "Pay the ₹99 refundable booking amount below — it takes less than 30 seconds.");
html = html.replace("You're instantly redirected to choose your preferred date and time slot", "After payment, you'll be redirected to select your preferred date and time for your 45-minute 1:1 D2C Growth Strategy Session.");
html = html.replace("Fill a short 2-minute application so Sumit comes fully prepared for your call", "Fill out a short 2-minute application with details about your Brand & Product, Current Monthly Revenue, Meta Ads Performance, and Biggest Growth Challenges.");
html = html.replace("Receive WhatsApp + email confirmation of your confirmed slot", "Get your confirmed session details via WhatsApp + Email with all the information needed before the call.");
html = html.replace("Show up, get your custom roadmap, and ₹99 is refunded instantly — zero risk", "Join your personalized 1:1 D2C Growth Strategy Session and discover Your Biggest Revenue Leaks, Meta Ads & Creative Analysis, W.A.R.P.™ Growth Roadmap, 30-Day Scaling Action Plan. Your ₹99 booking amount will be refunded when we connect.");

// Replace Why the ₹99 Deposit?
html = html.replace("Sumit <strong id=\"i32l1o\">personally takes every call</strong> — and his time is limited to just 5 calls per week. The ₹99 deposit ensures both your time and his are treated with the respect they deserve. It filters out casual browsers so that <strong id=\"i9e7p2\">every single call is with someone genuinely serious</strong> about growing their business.", "I <strong id=\"i32l1o\">personally take every D2C Growth Strategy Session</strong>, and my time is limited to only a few sessions every week. The ₹99 refundable deposit ensures that both your time and my time are respected. It helps us filter out casual inquiries and focus only on <strong id=\"i9e7p2\">serious D2C brand owners</strong> who are genuinely looking to improve their sales, ROAS, reduce RTO, and build a scalable growth system.");
html = html.replace("You pay nothing if you show up — the <strong>full amount is refunded the moment the call begins</strong>, regardless of whether you join any program. The deposit simply protects both sides from a wasted hour. Think of it as a mutual commitment — you're serious, and so is Sumit.", "You pay nothing if you show up — the <strong>complete ₹99 amount is refunded when our strategy call begins</strong>, regardless of whether you decide to work with us further. This deposit is not a fee. It's a simple commitment from both sides: You are serious about growing your brand. And I'm serious about helping you build the right growth system. Think of it as a mutual commitment towards creating a valuable 45-minute 1:1 D2C Growth Strategy Session with Kiran Lambhate.");

// Replace order form name
html = html.replace('Free 60-Min 1:1 Growth Call With Sumit Kashyap', 'Free 60-Min 1:1 Growth Call With Kiran Lambhate');

// Replace Testimonials
// 1
html = html.replace('Kalyan Sai', 'Ganesh Sanap');
html = html.replace('₹10 Lakhs/month', '₹8 Lakhs/month');
html = html.replace('Single client contract — Facebook Ads Agency, Bangalore. Went from struggling to find clients to landing a single deal worth ₹10L/month recurring revenue with STAYFIT India.', 'Before working with Kiran, scaling farmer reach and generating consistent enquiries was challenging. Kiran helped us improve our positioning, creatives, targeting, and marketing system. Today, we have a clear growth process to reach more farmers and scale KAD Multiplier confidently.');
// 2
html = html.replace('Sumit Singh Chauhan', 'Shivaji Kulal');
html = html.replace('₹30 Lakhs in 4 months', '₹10 Lakhs/month+ Growth Achieved');
html = html.replace('Closed his first ₹1,20,000/month deal in just 11 days — after months of charging peanuts. Following the personalized roadmap, scaled to 30 Lakhs in 4 months, changed everything.', 'Our Ayurvedic brand had strong potential, but we were struggling to create a consistent flow of quality enquiries and reach the right customers online. We needed a clear marketing strategy that could help us scale in a structured way. With Kiran\'s guidance, we improved our brand positioning, ad strategy, creatives, and customer acquisition process.');
// 3
html = html.replace('Rohit Jha', 'Ram Kale');
html = html.replace('₹20 Lakhs for his Client', '₹5 Lakhs/month+ Growth Achieved');
html = html.replace('Closed 6 premium clients in just 30 days after implementing the exact strategy from his growth call. No cold outreach needed.', 'Our skincare brand had a great product, but we were struggling to consistently reach the right customers and convert them into buyers. We needed a clear growth strategy to improve our online presence and scale our customer acquisition. After implementing Kiran\'s growth strategy, we improved our brand positioning, creatives, ad campaigns, and customer journey.');
// 4
html = html.replace('Manoj Goel', 'Rivas Fashion');
html = html.replace('From ₹300 to ₹70,000 per client', '₹7 Lakhs/month Revenue Growth Achieved');
html = html.replace('Was charging ₹300 per task — completely transformed his pricing and positioning in 30 days. Now commands premium rates with confidence.', '"Rivas Fashion had a premium product range, but the biggest challenge was reaching the right customers consistently and building a predictable online sales system. We needed a clear strategy to improve our marketing performance and increase customer acquisition. With Kiran\'s growth strategy, we improved our brand positioning, creatives, ad campaigns, and customer journey."');
// 5
html = html.replace('Sanskar Pani', 'Paridhan Collection');
html = html.replace('26X ROAS', '12X ROAS Achieved');
html = html.replace('Generated ₹6 Lakhs+ from just ₹9K in Facebook Ad spend. The AI-powered strategy from his call delivered a 26X return on ad spend.', 'Paridhan Collection had a strong product range, but the challenge was generating consistent online sales while maintaining profitable ad performance. We needed a clear strategy to reach the right customers and maximize every rupee spent on advertising. With Kiran\'s growth strategy, we optimized our creatives, targeting, offers, and campaign structure.');
// 6
html = html.replace('Nirav', 'Pravara Healthcare');
html = html.replace('₹2.5 Lakhs per client', '₹15 Lakhs+ Revenue Growth Achieved');
html = html.replace('Closed his first high-ticket deal within weeks of joining. Had never sold above ₹25K before — the confidence and framework from the call made it possible.', '"Pravara Healthcare had strong services, but the biggest challenge was building a consistent patient acquisition system and reaching the right audience online. The focus was to create a structured marketing approach that could generate quality enquiries and support business growth. With Kiran\'s growth strategy, we improved the brand positioning, creatives, campaign strategy, and customer journey."');

// Credibility
html = html.replace('Who Is Sumit Kashyap?', 'Who Is Kiran Lambhate?');
html = html.replace('https://img.flexifunnels.com/images/996/SumitKashyap1_3qqam_1254.jpeg', 'assets/images/user1.jpg'); // placeholder image for Kiran or we can use existing one, let's keep sumit's for now if not provided, or leave it blank
html = html.replace('Sumit Kashyap', 'Kiran Lambhate');
html = html.replace('Founder, GrowthX Club | Agency Growth Strategist', 'Founder, Prarambha Strategy & Marketing | D2C Growth Strategist');
html = html.replace("Sumit has spent the last 8+ years in the trenches of digital agency growth — not as a theorist, but as someone who has built, scaled, and automated agencies from zero. He's personally mentored <strong draggable=\"true\" data-highlightable=\"1\" id=\"ioh24z\">350+ agency owners and freelancers</strong>, helping them break through revenue plateaus and build systems that generate clients on autopilot. His clients have collectively generated over <strong draggable=\"true\" data-highlightable=\"1\" id=\"icabzh\">₹100 Crore+ in revenue</strong>. When you get on the call with Sumit, you're not getting recycled advice from a course — you're getting a battle-tested strategist who will dissect your specific business and hand you the exact playbook to scale.", "Kiran has spent the last 5+ years in the trenches of performance marketing and business growth — not as a theorist, but as someone who has helped businesses build scalable customer acquisition systems. He has worked with brands across D2C, Healthcare, Fashion, Agriculture, FMCG, and Service industries, helping them improve their marketing systems, generate better-quality customers, and create predictable growth. Through his proven W.A.R.P.™ 7-Step Growth System, Kiran helps D2C brands optimize their complete growth journey — from positioning and creatives to Meta Ads, landing pages, conversion, retention, and scaling. When you work with Kiran, you're not getting generic marketing advice from a course. You're getting a hands-on growth strategist who analyzes your business, identifies revenue leaks, and creates a practical roadmap to help you scale with confidence.");
html = html.replace('<div class="cred-stat-num-m3a">350+</div>', '<div class="cred-stat-num-m3a">550+</div>');
html = html.replace('<div class="cred-stat-label-c9e">Agencies Helped</div>', '<div class="cred-stat-label-c9e">Businesses Served</div>');
html = html.replace('<div class="cred-stat-num-m3a">₹100Cr+</div>', '<div class="cred-stat-num-m3a">₹25Cr+</div>');
html = html.replace('<div id="io8q3r" class="cred-stat-label-c9e">Client\'s Revenue Generated</div>', '<div id="io8q3r" class="cred-stat-label-c9e">Client Revenue Generated</div>');
html = html.replace('<div id="igqk1g" class="cred-stat-num-m3a">8+</div>', '<div id="igqk1g" class="cred-stat-num-m3a">₹5Cr+</div>');
html = html.replace('<div class="cred-stat-label-c9e">Years Experience</div>', '<div class="cred-stat-label-c9e">Meta Ad Spend Managed</div>');

// Journey
html = html.replace('Sumit\'s private calendar', 'Kiran\'s private calendar');
html = html.replace('Sumit comes to the call fully prepared', 'Kiran comes to the call fully prepared');
html = html.replace('reach ₹10L-15L/month.', 'scale your D2C brand with better ROAS, more orders, and a predictable growth system.');
html = html.replace('Sumit does this because he genuinely believes that once you experience the value, you\'ll want to continue the relationship.', 'Kiran does this because he genuinely believes that once you experience the value, you\'ll want to continue the relationship.');
html = html.replace('Sumit\'s reputation is built on delivering massive value upfront.', 'Kiran\'s reputation is built on delivering massive value upfront.');
html = html.replace('If GrowthX Club is a fit, Sumit will mention it. If it\'s not, he\'ll tell you that too. Zero pressure, always.', 'If we believe we can help you scale, we\'ll explain the next steps. If we\'re not the right fit, we\'ll tell you honestly. Zero pressure. No forced selling.');

// Upsell insertion
const upsellHTML = `
<!-- START: UPSELL SECTION -->
<div class="upsell-card-v3a fade-in-up-anim-q4j visible-state-r7h">
    <div class="upsell-badge-e7h">🔥 LIMITED OFFER</div>
    <h3 class="upsell-head-p1c">Unlock the D2C Growth Blueprint to Scale Your Brand Towards ₹25L/Month</h3>
    <p class="upsell-subhead-k8d">Step-by-Step Blueprint to Build a Predictable D2C Growth System. ONLY Available After Your Strategy Session!</p>
    <div style="margin-bottom: 20px;">
        <img src="images/image2.png" alt="D2C Growth Blueprint" style="max-width: 100%; border-radius: 8px;">
    </div>
    <ul class="upsell-list-f4r">
        <li>✅ Revenue & Growth Calculations to Understand Your Scaling Path</li>
        <li>✅ Proven Strategies to Improve ROAS, Increase Orders & Reduce RTO</li>
        <li>✅ Creative Testing Framework to Find Winning Ads Faster</li>
        <li>✅ Complete Customer Journey Optimization Strategy</li>
    </ul>
    <div class="upsell-price-g7m">
        <s>₹499</s> <strong>₹199</strong> 
    </div>
    <label class="save-info-checkbox-m7k" style="margin-bottom:16px;">
        <input type="checkbox" id="chbox_4jdzongxwrpqrx3g"> Yes! Add this to my order
    </label>
</div>

<div class="upsell-card-v3a fade-in-up-anim-q4j visible-state-r7h" style="margin-top: 20px;">
    <div class="upsell-badge-e7h">🔥 LIMITED OFFER</div>
    <h3 class="upsell-head-p1c">Proven D2C Growth Offer Template For Brand Owners</h3>
    <p class="upsell-subhead-k8d">Create Offers That Increase Conversions & Drive More Sales. 77%+ D2C Brand Owners Use This Framework.</p>
    <div style="margin-bottom: 20px;">
        <img src="images/image1.png" alt="Offer Template" style="max-width: 100%; border-radius: 8px;">
    </div>
    <ul class="upsell-list-f4r">
        <li>🔥 Step-by-step D2C Offer Creation Template</li>
        <li>🔥 10 Proven Offer Hooks & 10 Psychological Triggers</li>
        <li>🔥 Bonus: Quick-Start Guide & Customer Avatar Worksheet</li>
        <li>🔥 Winning Offer Examples</li>
    </ul>
    <div class="upsell-price-g7m">
        <s>₹1499</s> <strong>₹399</strong>
    </div>
    <label class="save-info-checkbox-m7k" style="margin-bottom:16px;">
        <input type="checkbox" id="chbox_5w7p8q7je9gqj360"> Yes! Add this to my order
    </label>
</div>
<!-- END: UPSELL SECTION -->
`;

html = html.replace('<!-- START: UPSELL SECTION --><!-- END: UPSELL SECTION -->', upsellHTML);

// Save updated html
fs.writeFileSync(file, html, 'utf8');
console.log('Update complete.');
