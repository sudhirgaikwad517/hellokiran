const fs = require('fs');

const destFile = 'd:/hellokiran/checkout.html';
let html = fs.readFileSync(destFile, 'utf8');

// Update FAQ Questions
html = html.replace('<div id="i3g4ph">Is this really just ₹99? What\'s the catch?</div>', '<div id="i3g4ph">Q 1 Is this really just ₹99? What\'s the catch?</div>');
html = html.replace('<div id="i4icro">Will this just be a sales pitch disguised as a strategy call?</div>', '<div id="i4icro">Q 2 Will this just be a sales pitch disguised as a strategy call?</div>');
html = html.replace('<div id="i7qjpf">How quickly will I get my ₹99 back?</div>', '<div id="i7qjpf">Q 3 How quickly will I get my ₹99 back?</div>');
html = html.replace('<div id="ixwp4e">What if I need to reschedule?</div>', '<div id="ixwp4e">Q 4 What if I need to reschedule my call?</div>');
html = html.replace('<div id="if0lg3">Is my payment information safe?</div>', '<div id="if0lg3">Q 5 Is my payment information safe?</div>');

// Update FAQ Answers
html = html.replace('<div id="ieby9f">There is no catch. The ₹99 is a refundable deposit — it ensures you\'re serious about showing up. The moment we connect on the call, it\'s refunded to you. The call itself is completely free. Kiran does this because he genuinely believes that once you experience the value, you\'ll want to continue the relationship.</div>', '<div id="ieby9f">There is no catch. The ₹99 is a refundable booking deposit to ensure that only serious D2C brand owners reserve a strategy session. Once we connect on the call, your ₹99 is refunded. The strategy session is designed to give you real clarity on your brand\'s growth opportunities, even if you decide not to work with us further.</div>');

html = html.replace('<div id="ijae3n">No. Kiran\'s reputation is built on delivering massive value upfront. You\'ll walk away with a genuine, actionable roadmap — even if you never spend another rupee. If we believe we can help you scale, we\'ll explain the next steps. If we\'re not the right fit, we\'ll tell you honestly. No pressure. No forced selling.</div>', '<div id="ijae3n">No. This is a genuine D2C Growth Strategy Session, not a pressure sales call. You\'ll receive a practical analysis of your:<br>✅ Meta Ads Performance<br>✅ Creative Strategy<br>✅ Product Positioning<br>✅ Landing Page & Conversion Journey<br>✅ RTO & Customer Acquisition Challenges.<br>If we believe we can help you scale, we\'ll explain the next steps. If we\'re not the right fit, we\'ll tell you honestly. No pressure. No forced selling.</div>');

html = html.replace('<div id="iyel1g">The refund is initiated the moment your call begins. Depending on your bank, it typically reflects within 3–5 business days. UPI refunds are usually even faster — often within hours.</div>', '<div id="iyel1g">Your refund process is initiated when the strategy call begins. The timeline depends on your payment method and bank processing.</div>');

html = html.replace('<div id="iujjnk">Life happens — we get it. You can reschedule your call up to 6 hours before the appointment with no penalty. Your deposit remains valid. Simply reply to your confirmation email or WhatsApp message to reschedule.</div>', '<div id="iujjnk">No problem. You can reschedule your session by contacting us through WhatsApp or your confirmation message. Your booking remains valid, and we\'ll help you find another suitable time slot.</div>');

html = html.replace('<div id="imr89o">100%. All payments are processed through Razorpay — India\'s most trusted payment gateway used by companies like Airtel, Facebook, and Swiggy. Your data is encrypted with 256-bit SSL and we never store your card details. This is as secure as buying on Amazon.</div>', '<div id="imr89o">Yes. All payments are processed through secure payment gateways with industry-standard security. Your payment details are encrypted, and we never store your card or payment information. Your information and privacy are always protected.</div>');

// Add Q 6
const q6HTML = `
<div id="q6_container" style="margin-top:18px; padding-top:18px; border-top:1px solid #1F2937;">
    <div id="q6_question" style="font-size:15px; font-weight:700; color:#F9FAFB; margin-bottom:6px;">Q 6 Still Have Questions?</div>
    <div id="q6_answer" style="font-size:13px; color:#9CA3AF; line-height:1.7;">Your brand doesn't need more random ads. It needs a clear D2C Growth System. Book your ₹99 D2C Growth Strategy Session and discover what's stopping your brand from scaling. 🚀</div>
</div>
</div></div><!-- END: OBJECTION HANDLING SECTION -->`;

html = html.replace('</div></div><!-- END: OBJECTION HANDLING SECTION -->', q6HTML);

// Update Footer
html = html.replace('© 2026 GrowthX Club by Sumit Kashyap | All Rights Reserved', '© 2026 Prarambha Strategy & Marketing | All Rights Reserved');
html = html.replace('Results vary based on individual effort and market conditions. Testimonials are from real GrowthX Club members and represent their individual experiences. Past results do not guarantee future performance.', 'Results vary based on individual effort and market conditions. Testimonials are from real clients and represent their individual experiences. Past results do not guarantee future performance.');

fs.writeFileSync(destFile, html, 'utf8');
console.log('FAQ update complete.');
