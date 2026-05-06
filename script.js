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
        <h3>1. Information We Collect</h3>
        <p>SecureDrive Insurance collects Nonpublic Personal Information (NPI) to provide accurate quotes. This includes your name, contact details, and vehicle VIN.</p>
        <h3>2. How We Use Your Data</h3>
        <p>Your data is used to generate real-time quotes and prevent fraudulent applications.</p>
        <h3>3. Data Security & AI</h3>
        <p>In 2026, we utilize AI-driven analytics to match you with the most relevant insurance carriers.</p>
        <h3>4. Your Rights</h3>
        <p>Contact us at <strong>privacy@securedrive.com</strong> to exercise your data rights.</p>`,
    terms: `
        <h2>Terms of Use</h2>
        <p><strong>Effective Date: April 30, 2026</strong></p>
        <h3>1. Nature of Service</h3>
        <p>SecureDrive Insurance is a lead-generation platform and not a risk-bearing insurance carrier.</p>
        <h3>2. User Accuracy</h3>
        <p>You agree to provide truthful and complete information to avoid "rate evasion."</p>
        <h3>3. Dispute Resolution</h3>
        <p>Disputes will be resolved through binding arbitration, waiving right to class-action lawsuits.</p>`,
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