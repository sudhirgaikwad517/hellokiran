const fs = require('fs');

const file = 'd:/hellokiran/checkout.html';
let html = fs.readFileSync(file, 'utf8');

// Replace Video Placeholder
const videoTarget = '<div id="ih2qvw" class="ft-video" style="background-color:#1F2937; display:flex; align-items:center; justify-content:center; color:#9CA3AF; font-size:24px; font-weight:bold; aspect-ratio:16/9; border-radius: 8px; border: 1px solid #374151;">[ Video Placeholder ]</div>';
const videoReplacement = '<div id="ih2qvw" class="ft-video embed-responsive embed-responsive-16by9" style="border-radius: 8px; overflow: hidden;"><video controls poster="https://website.hellokiran.com/assets/about-CiCp4_1t.webp" style="width: 100%; height: 100%; object-fit: cover; display: block; border: none;"><source src="https://website.hellokiran.com/assets/yoga%20coach%20success%20story%20final%2029052025%20(2)-BCiSKcAN.mp4" type="video/mp4"></video></div>';

if (html.includes(videoTarget)) {
    html = html.replace(videoTarget, videoReplacement);
    console.log("Video updated successfully.");
} else {
    console.log("Video target not found.");
}

// Replace Photo Placeholder
const photoTarget = '<div id="izxpdk" class="ft_image img-fluid ft_image-style" style="background-color:#E5E7EB; width:200px; height:200px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto; color:#9CA3AF; font-size:20px; font-weight:bold;">[ Photo ]</div>';
const photoReplacement = '<img id="izxpdk" src="https://website.hellokiran.com/assets/about-CiCp4_1t.webp" alt="Kiran Lambhate" class="ft_image img-fluid ft_image-style" style="width:200px; height:200px; border-radius:50%; object-fit:cover; margin:0 auto; display:block;">';

if (html.includes(photoTarget)) {
    html = html.replace(photoTarget, photoReplacement);
    console.log("Photo updated successfully.");
} else {
    console.log("Photo target not found.");
}

fs.writeFileSync(file, html, 'utf8');
