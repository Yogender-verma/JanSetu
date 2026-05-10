/**
 * JanSetu AI Chatbot Assistant
 * Provides multi-role support for Citizens, Officers, and Admins.
 */

(function() {
    // 1. Inject Styles
    const styles = `
        #jansetu-chatbot {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 10000;
            font-family: 'Inter', sans-serif;
        }
        #chatbot-toggle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #0B3B60;
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        #chatbot-toggle:hover {
            transform: scale(1.1);
            background: #185A8D;
        }
        #chatbot-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            height: 480px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            display: none;
            flex-direction: column;
            overflow: hidden;
            animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .chatbot-header {
            background: #0B3B60;
            color: white;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .chatbot-header i { font-size: 20px; }
        .chatbot-header div h4 { margin: 0; font-size: 1rem; }
        .chatbot-header div p { margin: 0; font-size: 0.75rem; opacity: 0.8; }
        
        #chatbot-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: #f8faff;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .chat-msg {
            max-width: 80%;
            padding: 10px 14px;
            border-radius: 12px;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        .chat-msg.bot {
            align-self: flex-start;
            background: white;
            color: #333;
            border-bottom-left-radius: 2px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .chat-msg.user {
            align-self: flex-end;
            background: #0B3B60;
            color: white;
            border-bottom-right-radius: 2px;
        }
        .chatbot-input {
            padding: 15px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
        }
        .chatbot-input input {
            flex: 1;
            border: 1px solid #ddd;
            padding: 10px 15px;
            border-radius: 20px;
            outline: none;
            font-size: 0.9rem;
        }
        .chatbot-input input:focus { border-color: #0B3B60; }
        .chatbot-input button {
            background: #0B3B60;
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.2s;
        }
        .chatbot-input button:hover { background: #185A8D; }

        .rtl #chatbot-window { right: auto; left: 0; }
        .rtl .chatbot-header { flex-direction: row-reverse; text-align: right; }
        .rtl #chatbot-messages { text-align: right; }
        .rtl .chat-msg.bot { align-self: flex-end; border-bottom-left-radius: 12px; border-bottom-right-radius: 2px; }
        .rtl .chat-msg.user { align-self: flex-start; border-bottom-right-radius: 12px; border-bottom-left-radius: 2px; }
        .rtl .chatbot-input { flex-direction: row-reverse; }
    `;

    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);

    // 2. Create Chatbot HTML
    const chatbotDiv = document.createElement('div');
    chatbotDiv.id = 'jansetu-chatbot';
    chatbotDiv.innerHTML = `
        <div id="chatbot-window">
            <div class="chatbot-header">
                <i class="fa-solid fa-robot"></i>
                <div>
                    <h4 data-i18n="bot_name">JanSetu Assistant</h4>
                    <p data-i18n="bot_status">Online | Multi-Role Support</p>
                </div>
            </div>
            <div id="chatbot-messages">
                <div class="chat-msg bot" data-i18n="bot_welcome">Hello! I am your JanSetu AI assistant. How can I help you today?</div>
            </div>
            <form class="chatbot-input" id="chatbot-form">
                <input type="text" id="chatbot-input-field" placeholder="Ask a question..." autocomplete="off">
                <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
        <button id="chatbot-toggle">
            <i class="fa-solid fa-message"></i>
        </button>
    `;
    document.body.appendChild(chatbotDiv);

    // 3. Logic
    const toggleBtn = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const chatForm = document.getElementById('chatbot-form');
    const chatInput = document.getElementById('chatbot-input-field');
    const chatMessages = document.getElementById('chatbot-messages');

    toggleBtn.addEventListener('click', () => {
        const isVisible = chatWindow.style.display === 'flex';
        chatWindow.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) chatInput.focus();
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        chatInput.value = '';

        // Add typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-msg bot typing';
        typingDiv.innerHTML = '<i class="fa-solid fa-ellipsis fa-fade"></i>';
        typingDiv.id = 'typing-indicator';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();
            
            const response = getBotResponse(text);
            addMessage(response, 'bot');
        }, 1200);
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg ${sender}`;
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(query) {
        const q = query.toLowerCase().replace(/[^\w\s\u0900-\u097F\u0C00-\u0C7F\u0600-\u06FF]/g, '');
        const lang = localStorage.getItem('janSetuLang') || 'en';

        const responses = {
            en: {
                hello: ["Hello there! How can I assist you with JanSetu today?", "Hi! I'm here to help. What's on your mind?", "Greetings! Need help with your civic reports?"],
                login: "To access the platform, please follow these steps:\n1. Navigate to the Login section.\n2. Enter your registered Username.\n3. Provide your secure Password.\n4. Click 'Login' to enter your dashboard.",
                time: "Great question! Standard issues are resolved in 24-48 hours. Emergency issues like water leaks or power outages are usually handled within 6-12 hours.",
                track: "To check your status, go to the 'My Complaints' tab. Each report has a live timeline showing exactly where it is in the process.",
                thanks: ["You're very welcome!", "Happy to help!", "Anytime! Let me know if you need anything else."],
                praise: "Thank you! I strive to make JanSetu easier for everyone.",
                admin: "As an Admin, you have the highest authority. You can view all departmental analytics and use the 'Escalation Command Center' to override priorities.",
                officer: "Officers handle the ground work. Once you log in, you'll see tasks assigned to your zone. You can update progress and mark issues as resolved.",
                default: "I'm not quite sure I follow. Could you ask about login details, how long repairs take, or how to see your report status?"
            },
            hi: {
                hello: ["नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?", "हैलो! जनसेतु में आपका स्वागत है।", "नमस्ते! क्या आप किसी रिपोर्ट के बारे में पूछना चाहते हैं?"],
                login: "लॉगिन करने के लिए इन चरणों का पालन करें:\n1. लॉगिन सेक्शन पर जाएं।\n2. अपना उपयोगकर्ता नाम (Username) दर्ज करें।\n3. अपना पासवर्ड (Password) दर्ज करें।\n4. अपने डैशबोर्ड में प्रवेश करने के लिए 'लॉगिन' पर क्लिक करें।",
                time: "आमतौर पर समस्याओं का समाधान 24-48 घंटों में होता है। बिजली और पानी जैसी जरूरी सेवाओं को 6-12 घंटों में प्राथमिकता दी जाती है।",
                track: "अपनी रिपोर्ट देखने के लिए 'My Complaints' सेक्शन में जाएं।",
                thanks: ["आपका स्वागत है!", "मुझे खुशी है कि मैं मदद कर पाया।"],
                default: "क्षमा करें, मैं समझ नहीं पाया। क्या आप लॉगिन, समाधान के समय या रिपोर्ट की स्थिति के बारे में पूछना चाहते हैं?"
            },
            te: {
                hello: ["నమస్కారం! నేను మీకు ఎలా సహాయం చేయగలను?", "హలో! జన్ సేతుకు స్వాగతం."],
                login: "లాగిన్ చేయడానికి ఈ దశలను అనుసరించండి:\n1. లాగిన్ విభాగానికి వెళ్ళండి.\n2. మీ వినియోగదారు పేరును (Username) నమోదు చేయండి.\n3. మీ పాస్‌వర్డ్‌ను (Password) నమోదు చేయండి.\n4. లాగిన్ బటన్ క్లిక్ చేయండి.",
                time: "చాలా వరకు 24-48 గంటల్లో పరిష్కరించబడతాయి. అత్యవసర సమస్యలు 6-12 గంటల్లో పరిష్కరించబడతాయి.",
                track: "మీ నివేదిక స్థితిని 'My Complaints' విభాగంలో చూడవచ్చు.",
                thanks: ["ధన్యవాదాలు!", "సహాయం చేసినందుకు సంతోషంగా ఉంది."],
                default: "క్షమించండి, నాకు అర్థం కాలేదు. లాగిన్ లేదా రిపోర్ట్ స్థితి గురించి అడగండి."
            },
            ur: {
                hello: ["ہیلو! میں آپ کی کیسے مدد کر سکتا ہوں؟", "سلام! جن سیتو میں خوش آمدید۔"],
                login: "لاگ ان کرنے کے لیے ان مراحل پر عمل کریں:\n1. لاگ ان سیکشن پر جائیں۔\n2. اپنا صارف نام (Username) درج کریں۔\n3. اپنا پاس ورڈ (Password) درج کریں۔\n4. لاگ ان بٹن پر کلک کریں۔",
                time: "عام طور پر مسائل 24-48 گھنٹوں میں حل ہو جاتے ہیں۔ بجلی اور پانی جیسی خدمات کو 6-12 گھنٹوں میں ترجیح دی جاتی ہے۔",
                track: "اپنی رپورٹ دیکھنے کے لیے 'My Complaints' سیکشن میں جائیں۔",
                thanks: ["شکریہ!", "مدد کر کے خوشی ہوئی۔"],
                default: "معذرت، میں سمجھ نہیں سکا۔ کیا آپ لاگین یا رپورٹ کی صورتحال کے بارے میں پوچھنا چاہتے ہیں؟"
            }
        };

        const res = responses[lang] || responses['en'];

        // Conversational Matching
        if (match(q, ['hi', 'hello', 'hey', 'hii', 'नमस्ते', 'హలో', 'ہیلو', 'salam'])) return pick(res.hello);
        if (match(q, ['thanks', 'thank', 'ty', 'शुक्रिया', 'धन्यवाद', 'ధన్యవాదాలు', 'شکریہ'])) return pick(res.thanks);
        if (match(q, ['good', 'nice', 'great', 'awesome', 'अछा', 'మంచిది', 'بہت اچھا'])) return res.praise || pick(res.thanks);

        // Functional Matching
        if (match(q, ['login', 'user', 'pass', 'sign', 'cred', 'लॉगिन', 'లాగిన్', 'لاگ ان'])) return res.login;
        if (match(q, ['time', 'when', 'solved', 'solve', 'long', 'fix', 'कब', 'ఎప్పుడు', 'حل'])) return res.time;
        if (match(q, ['track', 'status', 'check', 'my report', 'स्थिति', 'స్థితి', 'صورتحال'])) return res.track;
        if (match(q, ['admin', 'override', 'control'])) return res.admin || res.default;
        if (match(q, ['officer', 'duty', 'work'])) return res.officer || res.default;

        return res.default;
    }

    function match(query, keywords) {
        return keywords.some(k => query.includes(k));
    }

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Support RTL if lang is ur
    function checkRTL() {
        const lang = localStorage.getItem('janSetuLang');
        if (lang === 'ur') {
            chatbotDiv.classList.add('rtl');
            chatInput.placeholder = "سوال پوچھیں...";
        } else {
            chatbotDiv.classList.remove('rtl');
            chatInput.placeholder = "Ask a question...";
        }
    }
    
    checkRTL();
    window.addEventListener('storage', checkRTL); // Sync if lang changes
    // Also listen for custom lang change event if setLanguage emits one
    document.addEventListener('languageChanged', checkRTL);

})();
