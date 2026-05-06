/* ==========================================
   1. TRUSTEDFORM INITIALIZATION
   ========================================== */
(function() {
    var tf = document.createElement('script');
    tf.type = 'text/javascript';
    tf.async = true;
    tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
      '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
      new Date().getTime() + Math.random();
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(tf, s);
})();

/* ==========================================
   2. LEGAL & STATIC DATA
   ========================================== */
const legalData = {
    privacy: `
        <h2>Privacy Policy</h2>
        <p><strong>Last Updated: April 30, 2026</strong></p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your privacy is important to us. This Privacy Policy explains how SecureDrive Insurance (“we,” “us,” or “our”) collects, uses, shares, and protects your information when you use our website and services. <br> By using this website, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the site.
        <h3>1. Who We Are</h3>
        <p>SecureDrive Insurance is an <stong>advertising and affiliate marketing website</strong> that connects users with third-party licensed insurance providers. We are <strong>not an insurance carrier</strong> and do not issue or underwrite insurance policies.</p>
        <h3>2. Information We Collect</h3>
        <p>We collect personal information you voluntarily provide when you fill out a form or otherwise interact with our site. This may include:<br></p>
        <ul>
        <li>Full name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Zip code</li>
        <li>Vehicle-related or insurance-related information</li>
        <li>IP address and geolocation</li>
        <li>Device, browser, and usage data</li>
        </ul>
        <p>We may also use cookies and tracking technologies for analytics and retargeting purposes.</p>
        <h3>3. Consent and Verification Technologies</h3>
        <p>We use <strong>Jornaya</strong> and <strong>TrustedForm</strong> to capture and verify consumer consent. These tools record your interaction with our website to ensure compliance with <strong>TCPA (Telephone Consumer Protection Act)</strong> regulations.<br>These recordings and tokens help confirm when and how you provided consent to be contacted.</p>
        <h3>4. How We Use or Share Your Information</h3>
        <p>We use the information we collect to:<br></p>
        <ul>
        <li>Connect you with the third-party insurance providers or partners</li>
        <li>Send quotes or contact you with the relevant services</li>
        <li>Improve website performance and use experience</li>
        <li>Ensure legal compliance and verify consent</li>
        <li>Communicate with you via phone, text, or email</li>
        </ul>
        <p>We may share your information with:<br></p>
        <ul>
        <li>Licensed insurance providers and agents</li>
        <li>Affiliate marketing partners</li>
        <li>Service providers who support our operations (e.g., hosting, analytics)</li>
        <li>Legal authorities if required by law</li>
        </ul>
        <p>We <strong>do not sell</strong> your personal data to unrelated third parties for unrelated marketing purposes.</p>
        <h3>5. Your Choices and Rights</h3>
        <p>You have the right to:<br></p>
        <ul>
        <li>Opt-out of marketing communications</li>
        <li>Request access to the personal data we hold about you</li>
        <li>Request correction or deletion of your data (as permitted by law)</li>
        </ul>
        <p>To exercise any of these rights, please contact us at info@securedriveins.com.</p>
        <h3>6. Cookies and Tracking Technologies</h3>
        <p>We use cookies and other tracking technologies to:<br></p>
        <ul>
        <li>Monitor site performance</li>
        <li>Analyze user behavior</li>
        <li>Customize advertising campaigns</li>
        </ul>
        <p>You can control cookie preferences through your browser settings.</p>
        <h3>7. Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse.<br>However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.</p>
        <h3>8. Third-Party Websites</h3>
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. Please review their policies before submitting personal information.</p>
        <h3>9. Children's Privacy</h3>
        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect information from children.</p>
        <h3>10. Policy Updates</h3>
        <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of the site constitutes acceptance of those changes.</p>
        <h3>11. Contact Us</h3>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at info@securedriveins.com</p>
        `,
    terms: `
        <h2>Terms of Use</h2>
        <p><strong>Effective Date: April 30, 2026</strong></p>
        <p>Welcome to <strong>SecureDrive Insurance</strong>. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of the site immediately.</p>
        <h3>1. Description of Service</h3>
        <p>SecureDrive Insurance provides a platform that connects consumers with third-party insurance agents, brokers, and carriers. We are an administrative and marketing entity and:<br></p>
        <ul>
        <li>Do not provide insurance quotes directly</li>
        <li>Do not underwrite or issue insurance policies</li>
        <li>Do not guarantee that any partner will provide a specific quote</li>
        </ul>
        <h3>2. TCPA Consent & Communication</h3>
        <p>By submitting your phone number and information, you provide express written consent to be contacted via telephone, automated dialing systems, artificial/pre-recorded messages, or text messages by <strong>SecureDrive Insurance</strong> and <strong>our partners</strong>.<br></p>
        <ul>
        <li>Consent is not a condition of purchase</li>
        <li>Message and data rates may apply</li>
        <li>You may opt-out at any time by replying "STOP" to text messages</li>
        </ul>
        <h3>3. User Eligibility</h3>
        <p>To use this website, you must be at least 18 years of age and a resident of the United States. By using this site, you represent that all information you provide is accurate and belongs to you.</p>
        <h3>4. Intellectual Property</h3>
        <p>All content, logos, designs, and code on this website are the property of <strong>Echolink Marketing</strong> and are protected by copyright and trademark laws. You may not copy, redistribute, or use our branding without express written permission.</p>
        <h3>5. Limitation of Liability</h3>
        <p>SecureDrive Insurance is not liable for any damages arising from your use of this site or any services provided by third-party partners. We provide the site "as is" without any warranties of any kind.</p>
        <h3>6. Contact Information</h3>
        <p>Questions regarding these Terms of Use should be directed to: <a href="mailto:info@securedriveins.com">info@securedriveins.com</a></p>
        `,
};

const stateMapping = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    Florida: "FL",
    Georgia: "GA",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY",
};

/* ==========================================
   3. CORE DOM LOGIC
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const leadForm = document.getElementById("leadForm");
    const stateSelect = document.getElementById("state");
    const modal = document.getElementById("legalModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-btn");
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxkjTB8kbypn64nssb-Of8OpcXQ08mrvr7FWWLxc7q5rF0mMVk5_9xBiFi4pR5rJW8Tpw/exec";

    // --- Populate States ---
    if (stateSelect) {
        for (const [fullName, abbr] of Object.entries(stateMapping)) {
            let option = document.createElement("option");
            option.value = abbr;
            option.textContent = fullName;
            stateSelect.appendChild(option);
        }
    }

    // --- Modal Functions ---
    const openModal = (type) => {
        modalBody.innerHTML = legalData[type];
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    };

    const closeModal = () => {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    };

    // --- Legal Link Listeners ---
    document
        .querySelectorAll('a[href="privacy.html"], a[href="terms.html"]')
        .forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const type = link.getAttribute("href").includes("privacy")
                    ? "privacy"
                    : "terms";
                openModal(type);
            });
        });

    if (closeBtn) closeBtn.onclick = closeModal;
    window.onclick = (e) => {
        if (e.target == modal) closeModal();
    };

    /* ==========================================
       4. FORM SUBMISSION HANDLER
       ========================================== */
    if (leadForm) {
        leadForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // UI Feedback
            const btn = leadForm.querySelector(".submit-btn");
            const originalText = btn.innerText;
            btn.innerText = "PROCESSING...";
            btn.disabled = true;
            btn.style.opacity = "0.7";

            // Fetch IP Address
            let userIp = "Unknown";
            try {
                const response = await fetch(
                    "https://api.ipify.org?format=json"
                );
                const data = await response.json();
                userIp = data.ip;
            } catch (error) {
                console.error("IP Fetch failed:", error);
            }

            // Consolidate All Data
            const formData = {
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                state: document.getElementById("state").value,
                zip: document.getElementById("zip").value,
                ipAddress: userIp,
                trustedFormUrl:
                    document.getElementById("xxTrustedFormCertUrl")?.value ||
                    "",
            };

            console.log("Submitting to SecureDrive:", formData);

            // Submit to Google Sheets
            try {
                await fetch(scriptURL, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(formData),
                });

                alert("Success! Your quote request has been received.");
                leadForm.reset();
            } catch (error) {
                console.error("Submission error:", error);
                alert(
                    "There was an issue submitting your request. Please try again."
                );
            } finally {
                // Reset Button
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.opacity = "1";
            }
        });
    }
});
