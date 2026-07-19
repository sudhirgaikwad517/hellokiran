const fs = require('fs');

const file = 'd:/hellokiran/checkout.html';
let html = fs.readFileSync(file, 'utf8');

const newUpsellHTML = `<!-- START: UPSELL SECTION -->
<div class="upsell-card-v3a fade-in-up-anim-q4j visible-state-r7h" style="background-color: #fcfcf4; border: 2px dashed red; padding: 20px; border-radius: 4px; color: #000; text-align: left; margin-bottom: 20px;">
    <label style="display: flex; align-items: center; margin-bottom: 15px; cursor: pointer;">
        <input type="checkbox" id="chbox_4jdzongxwrpqrx3g" style="width: 20px; height: 20px; margin-right: 10px;">
        <span style="background-color: #ffff00; color: #000; font-weight: bold; padding: 3px 8px; font-size: 14px;">✅ Yes! I Want This!</span>
    </label>
    
    <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">🚀 Unlock the D2C Growth Blueprint to Scale Your Brand Towards ₹25L/Month</div>
    <div style="font-size: 16px; margin-bottom: 5px;"><s>₹499</s> <span style="color: #28a745; font-weight: bold;">₹199 😍</span></div>
    
    <div style="color: #6c757d; font-size: 13px; font-weight: bold; margin-bottom: 15px;">90%+ D2C Brand Owners Choose This Growth Blueprint</div>
    
    <ul style="list-style: none; padding: 0; margin-bottom: 15px; font-size: 14px; line-height: 1.6;">
        <li>✅ Step-by-Step Blueprint to Build a Predictable D2C Growth System</li>
        <li>✅ Revenue & Growth Calculations to Understand Your Scaling Path</li>
        <li>✅ Proven Strategies to Improve ROAS, Increase Orders & Reduce RTO</li>
        <li>✅ Creative Testing Framework to Find Winning Ads Faster</li>
        <li>✅ Complete Customer Journey Optimization Strategy</li>
    </ul>
    
    <div style="font-size: 14px; margin-bottom: 15px;">
        <span style="color: red; font-weight: bold;">⚡ Limited-Time Offer:</span> Get This Exclusive D2C Growth Blueprint For Just <s>₹499</s> <span style="font-weight: bold;">₹199</span><br>
        ONLY Available After Your Strategy Session! 🚀
    </div>
    
    <div style="font-size: 12px; color: #6c757d; border-top: 1px dashed #e5e5e5; padding-top: 15px;">
        <span style="color: red; font-weight: bold;">🔥 LIMITED OFFER:</span> You can unlock this exclusive one-time resource by selecting the checkbox above. This offer is available only for serious D2C brand owners who want to build a predictable growth system.
    </div>
</div>

<div class="upsell-card-v3a fade-in-up-anim-q4j visible-state-r7h" style="background-color: #000000; border: 2px dashed red; padding: 20px; border-radius: 4px; color: #ffffff; text-align: left; margin-top: 20px;">
    <label style="display: flex; align-items: center; margin-bottom: 15px; cursor: pointer;">
        <input type="checkbox" id="chbox_5w7p8q7je9gqj360" style="width: 20px; height: 20px; margin-right: 10px;">
        <span style="background-color: #ffff00; color: #000; font-weight: bold; padding: 3px 8px; font-size: 14px;">✅ Add to My Cart!</span>
    </label>
    
    <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">🚀 Proven D2C Growth Offer Template For Brand Owners</div>
    <div style="font-size: 15px; font-weight: bold; margin-bottom: 5px;">Create Offers That Increase Conversions & Drive More Sales</div>
    <div style="font-size: 16px; margin-bottom: 5px; color: #9ca3af;"><s>₹1499</s> <span style="color: #39ff14; font-weight: bold;">₹399 🔥</span></div>
    
    <div style="color: #ffff00; font-size: 14px; font-weight: bold; margin-bottom: 15px;">77%+ D2C Brand Owners Use This Framework To Improve Their Offers</div>
    
    <div style="font-size: 14px; margin-bottom: 15px;">
        <span style="text-decoration: underline; font-weight: bold;">A plug-and-play offer creation system</span> designed to help you create irresistible offers that make customers choose your brand over competitors.<br>
        <span style="font-weight: bold; font-size: 15px; display: inline-block; margin-top: 10px;">Here's What You'll Get:</span>
    </div>
    
    <ul style="list-style: none; padding: 0; margin-bottom: 15px; font-size: 14px; line-height: 1.6;">
        <li>🔥 Step-by-step D2C Offer Creation Template to build high-converting offers for your products</li>
        <li>🔥 10 Proven Offer Hooks to increase customer attention and buying intent</li>
        <li>🔥 10 Psychological Triggers to overcome customer objections and improve conversions</li>
        <li>🔥 Bonus: Quick-Start Guide to implement your offer strategy in under 30 minutes</li>
        <li>🔥 Customer Avatar & Pain Point Worksheet to create offers that connect with your ideal buyers</li>
        <li>🔥 Winning Offer Examples from successful D2C categories</li>
    </ul>
    
    <div style="font-size: 14px; margin-bottom: 15px;">
        <span style="color: #39ff14; font-weight: bold;">⚡ Stop Losing Customers Because Your Offer Isn't Clear</span><br>
        Create offers that improve:<br>
        ✅ Conversion Rate<br>
        ✅ Customer Trust<br>
        ✅ Average Order Value<br>
        ✅ Purchase Decisions
    </div>
    
    <div style="font-size: 15px; font-weight: bold; margin-bottom: 5px;">
        <span style="color: #39ff14;">🔥 Limited-Time Offer: Get This D2C Offer Creation Blueprint For Just <s>₹1499</s> ₹399 Only!</span>
    </div>
    <div style="font-size: 12px; margin-bottom: 10px; color: #d1d5db;">(Grab it now before this exclusive offer disappears!)</div>
</div>
<!-- END: UPSELL SECTION -->`;

const startMarker = '<!-- START: UPSELL SECTION -->';
const endMarker = '<!-- END: UPSELL SECTION -->';
const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker) + endMarker.length;

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + newUpsellHTML + html.substring(endIndex);
    fs.writeFileSync(file, html, 'utf8');
    console.log("Upsell styles successfully applied.");
} else {
    console.log("Markers not found.");
}
