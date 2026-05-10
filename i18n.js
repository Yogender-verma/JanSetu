/**
 * JanSetu Multilingual System
 * Supports: English, Hindi, Telugu, Urdu
 */

const translations = {
    "en": {
        "nav_home": "Home",
        "nav_problem": "The Problem",
        "nav_features": "Features",
        "nav_workflow": "Workflow",
        "nav_impact": "Impact",
        "nav_contact": "Contact",
        "nav_login": "Login",
        "nav_admin": "Admin",
        "hero_badge": "A Smart Civic-Tech Platform",
        "hero_title": "Welcome to JanSetu",
        "hero_subtitle": "Bridging Citizens and Governance with Smart Technology. Report, track, and resolve community issues with AI-powered efficiency.",
        "btn_report": "Report an Issue",
        "btn_track": "Track Complaint",
        "stat_support": "Support",
        "stat_transparent": "Transparent",
        "stat_resolution": "Resolution",
        "scroll_hint": "Tap to Report Instantly",
        "section_report_title": "Report an Issue Instantly",
        "section_report_desc": "Location auto-detected · One tap to report · No login needed",
        "detecting_location": "Detecting your location...",
        "cat_roads": "Potholes & Roads",
        "cat_roads_desc": "Damaged streets & traffic hazards",
        "cat_water": "Water Supply",
        "cat_water_desc": "Leakages & irregular supply",
        "cat_garbage": "Waste Management",
        "cat_garbage_desc": "Overflowing bins & dumping",
        "cat_electricity": "Electricity",
        "cat_electricity_desc": "Power outages & faulty lines",
        "cat_light": "Street Lighting",
        "cat_light_desc": "Dark streets & broken lamps",
        "cat_photo": "Upload Photo",
        "cat_photo_desc": "Snap & auto-report any issue",
        "tap_to_report": "Tap to Report",
        "tap_to_upload": "Tap to Upload",
        "toast_success": "Report Sent!",
        "toast_msg": "Your issue has been logged.",
        "why_title": "Why Choose JanSetu?",
        "why_desc": "Empowering both citizens and authorities with state-of-the-art tools to build better cities together.",
        "feat_ai_title": "AI-Powered Reporting",
        "feat_ai_desc": "Our smart system automatically categorizes your issues and identifies duplicates to streamline the resolution process.",
        "feat_lang_title": "Multilingual Support",
        "feat_lang_desc": "Report issues in your regional language. We break down the language barrier between citizens and government.",
        "feat_trans_title": "Total Transparency",
        "feat_trans_desc": "Track your complaint status in real-time. Know exactly which department and officer is handling your request.",
        "feat_acc_title": "Accountability",
        "feat_acc_desc": "SLAs (Service Level Agreements) ensure that authorities resolve complaints within a designated timeframe.",
        "how_title": "How It Works",
        "how_desc": "A seamless journey from identifying an issue to its final resolution.",
        "step_report": "Report",
        "step_report_desc": "Citizen captures a photo, adds details, and submits the complaint easily.",
        "step_analyze": "Analyze",
        "step_analyze_desc": "AI categorizes the issue and routes it to the correct government department.",
        "step_assign": "Assign",
        "step_assign_desc": "Officers receive the ticket, assess the situation, and plan the intervention.",
        "step_resolve": "Resolve",
        "step_resolve_desc": "The issue is fixed, and the citizen gets notified with a completion proof.",
        "impact_resolved": "Complaints Resolved",
        "impact_active": "Active Citizens",
        "impact_time": "Avg. Resolution Time",
        "impact_cities": "Cities Connected",
        "footer_desc": "Bridging the gap between citizens and governance. Leveraging smart technology to create better, safer, and cleaner cities.",
        "quick_links": "Quick Links",
        "legal": "Legal",
        "contact_us": "Contact Us",
        "rights_reserved": "© 2026 JanSetu. All rights reserved. A civic-tech initiative.",
        // Portal
        "citizen_portal": "Citizen Portal",
        "back_home": "Back to Home",
        "logout": "Logout",
        "welcome_back": "Welcome to JanSetu",
        "select_role": "Select your role to access the correct dashboard.",
        "citizen": "Citizen",
        "officer": "Officer",
        "username": "Username",
        "password": "Password",
        "login_btn": "Login to Portal",
        "dashboard_title": "Citizen Dashboard",
        "dashboard_subtitle": "Report issues, track progress, and validate community repairs.",
        "tab_report": "Report Issue",
        "tab_complaints": "My Complaints",
        "tab_notifications": "Notifications",
        "tab_validation": "Crowd Validation",
        "tab_profile": "Civic Profile",
        "quick_report": "Quick Report",
        "detailed_report": "Detailed AI Report",
        "detecting": "Detecting...",
        "ai_instruction": "Tap the issue you are facing. Our AI will instantly categorize it, assign urgency, and submit the report to the nearest officer.",
        "detailed_instruction": "Provide any detail (photo, voice, or text). Any single input is enough. Multiple inputs improve AI accuracy.",
        "upload_media": "Upload Media",
        "click_drag": "Click or drag image/video",
        "describe_issue": "Describe Issue",
        "short_title": "Short Title (e.g., Broken pipe)",
        "additional_details": "Additional details...",
        "analyze_ai": "Analyze with AI",
        "ai_results": "AI Analysis Results",
        "detected_cat": "Detected Category:",
        "urgency_level": "Urgency Level:",
        "gen_desc": "Generated Official Description:",
        "submit_report": "Submit Final Report",
        "active_tracking": "Active Tracking",
        "history": "Complaint History",
        "recent_updates": "Recent Updates",
        "my_val_status": "My Complaints Validation Status",
        "comm_verif": "Community Complaint Verification",
        "civic_score": "Civic Contribution Score",
        "standing": "Community Standing: Excellent",
        "trusted_reporter": "Trusted Reporter",
        "comm_validator": "Community Validator",
        "civic_leader": "Civic Leader",
        "recent_activity": "Recent Activity",
        "success_title": "Complaint Submitted Successfully!",
        "success_msg": "Your issue has been logged and assigned.",
        "complaint_id": "Complaint ID:",
        "sms_note": "You will receive SMS updates on the resolution progress.",
        "track_status": "Track Status",
        "report_another": "Report Another",
        // Officer Dashboard
        "officer_dash": "Officer Dashboard",
        "assigned_tasks": "Assigned Tasks",
        "territory_map": "Territory Map",
        "command_center": "Command Center",
        "task_mgmt": "Task Management",
        "sort_by": "Sort by:",
        "time_left": "Time Left to Start",
        "urgency_level_sort": "Urgency Level",
        "assigned_works": "Assigned Works",
        "progress_works": "In Progress Works",
        "completed_works": "Completed Works",
        "escalated_works": "Escalated Works",
        "pending_assignment": "Pending Assignment",
        "pothole_repair": "Pothole Repair",
        "water_leakage": "Water Leakage",
        "garbage_pile": "Garbage Pile",
        "streetlight_outage": "Streetlight Outage",
        "fallen_tree": "Fallen Tree",
        "broken_sidewalk": "Broken Sidewalk",
        "traffic_light_broken": "Traffic Light Broken",
        "stray_animals": "Stray Animals",
        "illegal_parking": "Illegal Parking",
        "update_status": "Update Status:",
        "resolved": "Resolved",
        "escalated": "Escalated",
        "in_progress": "In Progress",
        "time_to_complete": "Time Left to Complete:",
        "overdue": "Overdue",
        "hours": "Hours",
        "validation_insights": "Crowd Validation Insights",
        "total_votes": "Total Votes",
        "valid": "Valid",
        "invalid": "Invalid",
        // Admin Dashboard
        "admin_center": "Admin Center",
        "central_command": "Central Command & Control Login",
        "authenticate": "Authenticate",
        "invalid_credentials": "Invalid credentials.",
        "admin_dash": "Admin Dashboard",
        "chief_admin": "Chief Administrator",
        "sys_overview": "System Overview",
        "departments": "Departments",
        "officer_dir": "Officer Directory",
        "accountability_center": "Accountability Center",
        "sys_settings": "System Settings",
        "command_overview": "Command Overview",
        "realtime_metrics": "Real-time civic performance metrics across all zones.",
        "export_data": "Export Data",
        "broadcast_alert": "Broadcast Alert",
        "total_complaints": "Total Complaints",
        "active_complaints": "Active Complaints",
        "escalated_critical": "Escalated Critical",
        "requires_attention": "Requires attention",
        "hotspot_analysis": "Area Hotspot Analysis",
        "high_density": "High Density",
        "medium": "Medium",
        "low": "Low",
        "complaint_trends": "Complaint Trends (Last 6 Months)",
        "all_regions": "All Regions",
        "dept_perf_sla": "Department Performance SLA",
        "view_detailed": "View Detailed",
        "common_categories": "Most Common Categories",
        "accountability_perf": "Accountability & Performance",
        "high_efficiency": "High Efficiency",
        "flagged_delays": "Flagged for delays",
        "repeated_delays": "Repeated Delays (3 Escalations)",
        "full_accountability_report": "View Full Accountability Report",
        "datadriven_insights": "Data-Driven Insights",
        "escalation_command": "Escalation Command Center",
        "override_priorities": "Override All Priorities",
        "complaint_id_table": "Complaint ID",
        "responsible_party": "Responsible Party",
        "escalation_level": "Escalation Level",
        "admin_actions": "Administrative Actions",
        "reassign": "Reassign",
        "override": "Override",
        "density_zone": "Density Zone",
        "supporting_team": "Supporting Team"
    },
    "hi": {
        "nav_home": "होम",
        "nav_problem": "समस्या",
        "nav_features": "विशेषताएं",
        "nav_workflow": "कार्यप्रवाह",
        "nav_impact": "प्रभाव",
        "nav_contact": "संपर्क",
        "nav_login": "लॉगिन",
        "nav_admin": "एडमिन",
        "hero_badge": "एक स्मार्ट नागरिक-तकनीक मंच",
        "hero_title": "जनसेतु में आपका स्वागत है",
        "hero_subtitle": "स्मार्ट तकनीक के साथ नागरिकों और शासन को जोड़ना। एआई-संचालित दक्षता के साथ सामुदायिक मुद्दों की रिपोर्ट करें, ट्रैक करें और हल करें।",
        "btn_report": "शिकायत दर्ज करें",
        "btn_track": "शिकायत ट्रैक करें",
        "stat_support": "सहायता",
        "stat_transparent": "पारदर्शी",
        "stat_resolution": "समाधान",
        "scroll_hint": "तुरंत रिपोर्ट करने के लिए टैप करें",
        "section_report_title": "तुरंत शिकायत दर्ज करें",
        "section_report_desc": "स्थान स्वतः पहचाना गया · रिपोर्ट करने के लिए एक टैप · लॉगिन की आवश्यकता नहीं",
        "detecting_location": "आपका स्थान पहचाना जा रहा है...",
        "cat_roads": "गड्ढे और सड़कें",
        "cat_roads_desc": "क्षतिग्रस्त सड़कें और यातायात के खतरे",
        "cat_water": "जल आपूर्ति",
        "cat_water_desc": "रिसाव और अनियमित आपूर्ति",
        "cat_garbage": "कचरा प्रबंधन",
        "cat_garbage_desc": "उफनते कूड़ेदान और डंपिंग",
        "cat_electricity": "बिजली",
        "cat_electricity_desc": "बिजली कटौती और खराब लाइनें",
        "cat_light": "स्ट्रीट लाइटिंग",
        "cat_light_desc": "अंधेरी सड़कें और टूटे लैंप",
        "cat_photo": "फोटो अपलोड करें",
        "cat_photo_desc": "किसी भी मुद्दे की फोटो लें और ऑटो-रिपोर्ट करें",
        "tap_to_report": "रिपोर्ट करने के लिए टैप करें",
        "tap_to_upload": "अपलोड करने के लिए टैप करें",
        "toast_success": "रिपोर्ट भेजी गई!",
        "toast_msg": "आपकी समस्या दर्ज कर ली गई है।",
        "why_title": "जनसेतु क्यों चुनें?",
        "why_desc": "बेहतर शहरों के निर्माण के लिए नागरिकों और अधिकारियों दोनों को अत्याधुनिक उपकरणों के साथ सशक्त बनाना।",
        "feat_ai_title": "एआई-संचालित रिपोर्टिंग",
        "feat_ai_desc": "हमारा स्मार्ट सिस्टम स्वचालित रूप से आपकी समस्याओं को वर्गीकृत करता है और समाधान प्रक्रिया को सुव्यवस्थित करने के लिए डुप्लिकेट की पहचान करता है।",
        "feat_lang_title": "बहुभाषी समर्थन",
        "feat_lang_desc": "अपनी क्षेत्रीय भाषा में मुद्दों की रिपोर्ट करें। हम नागरिकों और सरकार के बीच भाषा की बाधा को दूर करते हैं।",
        "feat_trans_title": "पूर्ण पारदर्शिता",
        "feat_trans_desc": "वास्तविक समय में अपनी शिकायत की स्थिति ट्रैक करें। जानें कि कौन सा विभाग और अधिकारी आपका अनुरोध संभाल रहा है।",
        "feat_acc_title": "जवाबदेही",
        "feat_acc_desc": "SLA (सेवा स्तर समझौते) सुनिश्चित करते हैं कि अधिकारी एक निर्धारित समय सीमा के भीतर शिकायतों का समाधान करें।",
        "how_title": "यह कैसे काम करता है",
        "how_desc": "किसी मुद्दे की पहचान से लेकर उसके अंतिम समाधान तक का एक सहज सफर।",
        "step_report": "रिपोर्ट",
        "step_report_desc": "नागरिक फोटो लेता है, विवरण जोड़ता है, और आसानी से शिकायत दर्ज करता है।",
        "step_analyze": "विश्लेषण",
        "step_analyze_desc": "एआई मुद्दे को वर्गीकृत करता है और उसे सही सरकारी विभाग को भेजता।",
        "step_assign": "सौंपना",
        "step_assign_desc": "अधिकारियों को टिकट मिलता है, वे स्थिति का आकलन करते हैं, और हस्तक्षेप की योजना बनाते हैं।",
        "step_resolve": "समाधान",
        "step_resolve_desc": "मुद्दा हल हो जाता है, और नागरिक को पूर्णता के प्रमाण के साथ सूचित किया जाता है।",
        "impact_resolved": "शिकायतें हल की गईं",
        "impact_active": "सक्रिय नागरिक",
        "impact_time": "औसत समाधान समय",
        "impact_cities": "जुड़े हुए शहर",
        "footer_desc": "नागरिकों और शासन के बीच की दूरी को कम करना। बेहतर, सुरक्षित और स्वच्छ शहर बनाने के लिए स्मार्ट तकनीक का लाभ उठाना।",
        "quick_links": "त्वरित लिंक",
        "legal": "कानूनी",
        "contact_us": "हमसे संपर्क करें",
        "rights_reserved": "© 2026 जनसेतु। सर्वाधिकार सुरक्षित। एक नागरिक-तकनीक पहल।",
        // Portal
        "citizen_portal": "नागरिक पोर्टल",
        "back_home": "होम पर वापस जाएं",
        "logout": "लॉगआउट",
        "welcome_back": "जनसेतु में आपका स्वागत है",
        "select_role": "सही डैशबोर्ड तक पहुंचने के लिए अपनी भूमिका चुनें।",
        "citizen": "नागरिक",
        "officer": "अधिकारी",
        "username": "उपयोगकर्ता नाम",
        "password": "पासवर्ड",
        "login_btn": "पोर्टल में लॉगिन करें",
        "dashboard_title": "नागरिक डैशबोर्ड",
        "dashboard_subtitle": "मुद्दों की रिपोर्ट करें, प्रगति ट्रैक करें और सामुदायिक मरम्मत को मान्य करें।",
        "tab_report": "मुद्दा रिपोर्ट करें",
        "tab_complaints": "मेरी शिकायतें",
        "tab_notifications": "सूचनाएं",
        "tab_validation": "भीड़ सत्यापन",
        "tab_profile": "नागरिक प्रोफाइल",
        "quick_report": "त्वरित रिपोर्ट",
        "detailed_report": "विस्तृत एआई रिपोर्ट",
        "detecting": "पहचाना जा रहा है...",
        "ai_instruction": "जिस समस्या का आप सामना कर रहे हैं उस पर टैप करें। हमारा एआई तुरंत इसे वर्गीकृत करेगा, तात्कालिकता सौंपेगा और निकटतम अधिकारी को रिपोर्ट सौंपेगा।",
        "detailed_instruction": "कोई भी विवरण (फोटो, आवाज या टेक्स्ट) प्रदान करें। कोई भी एक इनपुट पर्याप्त है। एकाधिक इनपुट एआई सटीकता में सुधार करते हैं।",
        "upload_media": "मीडिया अपलोड करें",
        "click_drag": "फोटो/वीडियो क्लिक करें या खींचें",
        "describe_issue": "मुद्दे का वर्णन करें",
        "short_title": "छोटा शीर्षक (जैसे, टूटा हुआ पाइप)",
        "additional_details": "अतिरिक्त विवरण...",
        "analyze_ai": "एआई के साथ विश्लेषण करें",
        "ai_results": "एआई विश्लेषण परिणाम",
        "detected_cat": "पहचाना गया वर्ग:",
        "urgency_level": "तात्कालिकता स्तर:",
        "gen_desc": "उत्पन्न आधिकारिक विवरण:",
        "submit_report": "अंतिम रिपोर्ट जमा करें",
        "active_tracking": "सक्रिय ट्रैकिंग",
        "history": "शिकायत इतिहास",
        "recent_updates": "हाल के अपडेट",
        "my_val_status": "मेरी शिकायत सत्यापन स्थिति",
        "comm_verif": "सामुदायिक शिकायत सत्यापन",
        "civic_score": "नागरिक योगदान स्कोर",
        "standing": "सामुदायिक स्थिति: उत्कृष्ट",
        "trusted_reporter": "विश्वसनीय रिपोर्टर",
        "comm_validator": "सामुदायिक सत्यापनकर्ता",
        "civic_leader": "नागरिक नेता",
        "recent_activity": "हाल की गतिविधि",
        "success_title": "शिकायत सफलतापूर्वक जमा की गई!",
        "success_msg": "आपकी समस्या दर्ज कर ली गई है और सौंप दी गई है।",
        "complaint_id": "शिकायत आईडी:",
        "sms_note": "आपको समाधान की प्रगति पर एसएमएस अपडेट प्राप्त होंगे।",
        "track_status": "स्थिति ट्रैक करें",
        "report_another": "एक और रिपोर्ट करें",
        // Officer Dashboard
        "officer_dash": "अधिकारी डैशबोर्ड",
        "assigned_tasks": "सौपे गए कार्य",
        "territory_map": "क्षेत्र मानचित्र",
        "command_center": "कमांड सेंटर",
        "task_mgmt": "कार्य प्रबंधन",
        "sort_by": "क्रमबद्ध करें:",
        "time_left": "शुरू करने के लिए बचा समय",
        "urgency_level_sort": "तात्कालिकता स्तर",
        "assigned_works": "सौपे गए कार्य",
        "progress_works": "प्रगति में कार्य",
        "completed_works": "पूरे हुए कार्य",
        "escalated_works": "बढ़े हुए कार्य",
        "pending_assignment": "असाइनमेंट लंबित",
        "pothole_repair": "गड्ढे की मरम्मत",
        "water_leakage": "पानी का रिसाव",
        "garbage_pile": "कचरे का ढेर",
        "streetlight_outage": "स्ट्रीटलाइट बंद",
        "fallen_tree": "गिरा हुआ पेड़",
        "broken_sidewalk": "टूटा हुआ फुटपाथ",
        "traffic_light_broken": "ट्रैफिक लाइट खराब",
        "stray_animals": "आवारा पशु",
        "illegal_parking": "अवैध पार्किंग",
        "update_status": "स्थिति अपडेट करें:",
        "resolved": "हल किया गया",
        "escalated": "बढ़ाया गया",
        "in_progress": "प्रगति में",
        "time_to_complete": "पूरा करने के लिए बचा समय:",
        "overdue": "विलंबित",
        "hours": "घंटे",
        "validation_insights": "भीड़ सत्यापन अंतर्दृष्टि",
        "total_votes": "कुल वोट",
        "valid": "मान्य",
        "invalid": "अमान्य",
        // Admin Dashboard
        "admin_center": "एडमिन सेंटर",
        "central_command": "केंद्रीय कमांड और नियंत्रण लॉगिन",
        "authenticate": "प्रमाणित करें",
        "invalid_credentials": "अमान्य क्रेडेंशियल।",
        "admin_dash": "एडमिन डैशबोर्ड",
        "chief_admin": "मुख्य प्रशासक",
        "sys_overview": "सिस्टम अवलोकन",
        "departments": "विभाग",
        "officer_dir": "अधिकारी निर्देशिका",
        "accountability_center": "जवाबदेही केंद्र",
        "sys_settings": "सिस्टम सेटिंग्स",
        "command_overview": "कमांड अवलोकन",
        "realtime_metrics": "सभी क्षेत्रों में वास्तविक समय के नागरिक प्रदर्शन मेट्रिक्स।",
        "export_data": "डेटा निर्यात करें",
        "broadcast_alert": "प्रसारण अलर्ट",
        "total_complaints": "कुल शिकायतें",
        "active_complaints": "सक्रिय शिकायतें",
        "escalated_critical": "बढ़ी हुई गंभीर",
        "requires_attention": "ध्यान देने की आवश्यकता है",
        "hotspot_analysis": "क्षेत्र हॉटस्पॉट विश्लेषण",
        "high_density": "उच्च घनत्व",
        "medium": "मध्यम",
        "low": "कम",
        "complaint_trends": "शिकायत रुझान (पिछले 6 महीने)",
        "all_regions": "सभी क्षेत्र",
        "dept_perf_sla": "विभाग प्रदर्शन SLA",
        "view_detailed": "विस्तृत देखें",
        "common_categories": "सबसे आम श्रेणियां",
        "accountability_perf": "जवाबदेही और प्रदर्शन",
        "high_efficiency": "उच्च दक्षता",
        "flagged_delays": "देरी के लिए ध्वजांकित",
        "repeated_delays": "बार-बार देरी (3 वृद्धि)",
        "full_accountability_report": "पूर्ण जवाबदेही रिपोर्ट देखें",
        "datadriven_insights": "डेटा-संचालित अंतर्दृष्टि",
        "escalation_command": "एस्केलेशन कमांड सेंटर",
        "override_priorities": "सभी प्राथमिकताओं को ओवरराइड करें",
        "complaint_id_table": "शिकायत आईडी",
        "responsible_party": "जिम्मेदार पक्ष",
        "escalation_level": "एस्केलेशन स्तर",
        "admin_actions": "प्रशासनिक कार्य",
        "reassign": "पुनः सौंपें",
        "override": "ओवरराइड",
        "density_zone": "घनत्व क्षेत्र",
        "supporting_team": "सहायक टीम"
    },
    "te": {
        "nav_home": "హోమ్",
        "nav_problem": "సమస్య",
        "nav_features": "ఫీచర్లు",
        "nav_workflow": "పనితీరు",
        "nav_impact": "ప్రభావం",
        "nav_contact": "సంప్రదించండి",
        "nav_login": "లాగిన్",
        "nav_admin": "అడ్మిన్",
        "hero_badge": "ఒక స్మార్ట్ సివిక్-టెక్ ప్లాట్‌ఫారమ్",
        "hero_title": "జనసేతుకు స్వాగతం",
        "hero_subtitle": "స్మార్ట్ టెక్నాలజీతో పౌరులను మరియు పాలనను అనుసంధానించడం. AI-శక్తితో కూడిన సామర్థ్యంతో సామాజిక సమస్యలను నివేదించండి, ట్రాక్ చేయండి మరియు పరిష్కరించండి.",
        "btn_report": "ఫిర్యాదు చేయండి",
        "btn_track": "ఫిర్యాదును ట్రాక్ చేయండి",
        "stat_support": "మద్దతు",
        "stat_transparent": "పారదర్శకత",
        "stat_resolution": "పరిష్కారం",
        "scroll_hint": "తక్షణమే నివేదించడానికి ట్యాప్ చేయండి",
        "section_report_title": "తక్షణమే సమస్యను నివేదించండి",
        "section_report_desc": "స్థానం ఆటోమేటిక్‌గా గుర్తించబడింది · నివేదించడానికి ఒక ట్యాప్ · లాగిన్ అవసరం లేదు",
        "detecting_location": "మీ స్థానాన్ని గుర్తిస్తున్నాము...",
        "cat_roads": "గుంతలు & రోడ్లు",
        "cat_roads_desc": "దెబ్బతిన్న వీధులు & ట్రాఫిక్ ప్రమాదాలు",
        "cat_water": "నీటి సరఫరా",
        "cat_water_desc": "లీకేజీలు & క్రమం లేని సరఫరా",
        "cat_garbage": "వ్యర్థాల నిర్వహణ",
        "cat_garbage_desc": "నిండిపోయిన చెత్త బుట్టలు & డంపింగ్",
        "cat_electricity": "విద్యుత్",
        "cat_electricity_desc": "విద్యుత్ కోతలు & దెబ్బతిన్న లైన్లు",
        "cat_light": "వీధి దీపాలు",
        "cat_light_desc": "చీకటి వీధులు & విరిగిన దీపాలు",
        "cat_photo": "ఫోటో అప్‌లోడ్",
        "cat_photo_desc": "ఏదైనా సమస్యను ఫోటో తీసి ఆటో-రిపోర్ట్ చేయండి",
        "tap_to_report": "నివేదించడానికి ట్యాప్ చేయండి",
        "tap_to_upload": "అప్‌లోడ్ చేయడానికి ట్యాప్ చేయండి",
        "toast_success": "నివేదిక పంపబడింది!",
        "toast_msg": "మీ సమస్య నమోదు చేయబడింది.",
        "why_title": "జనసేతును ఎందుకు ఎంచుకోవాలి?",
        "why_desc": "మెరుగైన నగరాలను నిర్మించడానికి పౌరులను మరియు అధికారులను అత్యాధునిక సాధనాలతో శక్తివంతం చేయడం.",
        "feat_ai_title": "AI-శక్తితో కూడిన నివేదిక",
        "feat_ai_desc": "మా స్మార్ట్ సిస్టమ్ స్వయంచాలకంగా మీ సమస్యలను వర్గీకరిస్తుంది మరియు పరిష్కార ప్రక్రియను సులభతరం చేయడానికి డూప్లికేట్‌లను గుర్తిస్తుంది.",
        "feat_lang_title": "బహుభాషా మద్దతు",
        "feat_lang_desc": "మీ ప్రాంతీయ భాషలో సమస్యలను నివేదించండి. మేము పౌరులకు మరియు ప్రభుత్వానికి మధ్య ఉన్న భాషా అడ్డంకిని తొలగిస్తాము.",
        "feat_trans_title": "పూర్తి పారదర్శకత",
        "feat_trans_desc": "నిజ సమయంలో మీ ఫిర్యాదు స్థితిని ట్రాక్ చేయండి. ఏ విభాగం మరియు అధికారి మీ అభ్యర్థనను నిర్వహిస్తున్నారో తెలుసుకోండి.",
        "feat_acc_title": "జవాబుదారీతనం",
        "feat_acc_desc": "SLAలు (సర్వీస్ లెవల్ అగ్రిమెంట్లు) అధికారులు నిర్ణీత కాలవ్యవధిలో ఫిర్యాదులను పరిష్కరించేలా చూస్తాయి.",
        "how_title": "ఇది ఎలా పనిచేస్తుంది",
        "how_desc": "సమస్యను గుర్తించడం నుండి దాని తుది పరిష్కారం వరకు ఒక అతుకులు లేని ప్రయాణం.",
        "step_report": "నివేదించండి",
        "step_report_desc": "పౌరుడు ఫోటో తీసి, వివరాలను జోడించి, ఫిర్యాదును సులభంగా సమర్పిస్తారు.",
        "step_analyze": "విశ్లేషణ",
        "step_analyze_desc": "AI సమస్యను వర్గీకరించి సరైన ప్రభుత్వ విభాగానికి పంపుతుంది.",
        "step_assign": "కేటాయింపు",
        "step_assign_desc": "అధికారులు టికెట్‌ను స్వీకరిస్తారు, పరిస్థితిని అంచనా వేస్తారు మరియు పరిష్కార ప్రణాళికను రూపొందిస్తారు.",
        "step_resolve": "పరిష్కారం",
        "step_resolve_desc": "సమస్య పరిష్కరించబడుతుంది మరియు పౌరుడికి పూర్తి చేసిన ఆధారంతో తెలియజేయబడుతుంది.",
        "impact_resolved": "పరిష్కరించబడిన ఫిర్యాదులు",
        "impact_active": "క్రియాశీల పౌరులు",
        "impact_time": "సగటు పరిష్కార సమయం",
        "impact_cities": "అనుసంధానించబడిన నగరాలు",
        "footer_desc": "పౌరులకు మరియు పాలనకు మధ్య అంతరాన్ని తగ్గించడం. మెరుగైన, సురక్షితమైన మరియు పరిశుభ్రమైన నగరాలను రూపొందించడానికి స్మార్ట్ టెక్నాలజీని ఉపయోగించడం.",
        "quick_links": "త్వరిత లింకులు",
        "legal": "చట్టపరమైన",
        "contact_us": "మమ్మల్ని సంప్రదించండి",
        "rights_reserved": "© 2026 జనసేతు. సర్వ హక్కులు ప్రత్యేకించబడినవి. ఒక సివిక్-టెక్ చొరవ.",
        "citizen_portal": "పౌరుల పోర్టల్",
        "back_home": "హోమ్‌కు తిరిగి వెళ్ళు",
        "logout": "లాగౌట్",
        "welcome_back": "జనసేతుకు స్వాగతం",
        "select_role": "సరైన డాష్‌బోర్డ్‌ను యాక్సెస్ చేయడానికి మీ పాత్రను ఎంచుకోండి.",
        "citizen": "పౌరుడు",
        "officer": "అధికారి",
        "username": "వినియోగదారు పేరు",
        "password": "పాస్‌వర్డ్",
        "login_btn": "పోర్టల్‌కు లాగిన్ చేయండి",
        "dashboard_title": "పౌరుల డాష్‌బోర్డ్",
        "dashboard_subtitle": "సమస్యలను నివేదించండి, పురోగతిని ట్రాక్ చేయండి మరియు సామాజిక మరమ్మతులను ధృవీకరించండి.",
        "tab_report": "సమస్య నివేదిక",
        "tab_complaints": "నా ఫిర్యాదులు",
        "tab_notifications": "నోటిఫికేషన్లు",
        "tab_validation": "సమూహ ధృవీకరణ",
        "tab_profile": "సివిక్ ప్రొఫైల్",
        "quick_report": "త్వరిత నివేదిక",
        "detailed_report": "వివరణాత్మక AI నివేదిక",
        "detecting": "గుర్తిస్తున్నాము...",
        "ai_instruction": "మీరు ఎదుర్కొంటున్న సమస్యపై ట్యాప్ చేయండి. మా AI వెంటనే దానిని వర్గీకరిస్తుంది, ప్రాధాన్యతను కేటాయిస్తుంది మరియు సమీప అధికారికి నివేదికను సమర్పిస్తుంది.",
        "detailed_instruction": "ఏదైనా వివరాలను (ఫోటో, వాయిస్ లేదా టెక్స్ట్) అందించండి. ఏదైనా ఒక ఇన్‌పుట్ సరిపోతుంది.",
        "upload_media": "మీడియాను అప్‌లోడ్ చేయండి",
        "click_drag": "ఫోటో/వీడియో క్లిక్ చేయండి లేదా లాగండి",
        "describe_issue": "సమస్యను వివరించండి",
        "short_title": "చిన్న శీర్షిక (ఉదా., పగిలిన పైపు)",
        "additional_details": "అదనపు వివరాలు...",
        "analyze_ai": "AIతో విశ్లేషించండి",
        "ai_results": "AI విశ్లేషణ ఫలితాలు",
        "detected_cat": "గుర్తించబడిన వర్గం:",
        "urgency_level": "అవసరమైన స్థాయి:",
        "gen_desc": "సృష్టించబడిన అధికారిక వివరణ:",
        "submit_report": "తుది నివేదికను సమర్పించండి",
        "active_tracking": "క్రియాశీల ట్రాకింగ్",
        "history": "ఫిర్యాదుల చరిత్ర",
        "recent_updates": "ఇటీవలి అప్‌డేట్లు",
        "my_val_status": "నా ఫిర్యాదుల ధృవీకరణ స్థితి",
        "comm_verif": "కమ్యూనిటీ ఫిర్యాదు ధృవీకరణ",
        "civic_score": "సివిక్ కాంట్రిబ్యూషన్ స్కోర్",
        "standing": "కమ్యూనిటీ హోదా: అద్భుతం",
        "trusted_reporter": "విశ్వసనీయ రిపోర్టర్",
        "comm_validator": "కమ్యూనిటీ వాలిడేటర్",
        "civic_leader": "సివిక్ లీడర్",
        "recent_activity": "ఇటీవలి కార్యాచరణ",
        "success_title": "ఫిర్యాదు విజయవంతంగా సమర్పించబడింది!",
        "success_msg": "మీ సమస్య నమోదు చేయబడింది మరియు కేటాయించబడింది.",
        "complaint_id": "ఫిర్యాదు ID:",
        "sms_note": "పరిష్కార పురోగతిపై మీకు SMS అప్‌డేట్లు అందుతాయి.",
        "track_status": "స్థితిని ట్రాక్ చేయండి",
        "report_another": "మరొకటి నివేదించండి",
        // Officer Dashboard
        "officer_dash": "అధికారి డాష్‌బోర్డ్",
        "assigned_tasks": "కేటాయించిన పనులు",
        "territory_map": "ప్రాంతీయ పటం",
        "command_center": "కమాండ్ సెంటర్",
        "task_mgmt": "టాస్క్ మేనేజ్‌మెంట్",
        "sort_by": "క్రమబద్ధీకరించు:",
        "time_left": "ప్రారంభించడానికి మిగిలిన సమయం",
        "urgency_level_sort": "అవసరమైన స్థాయి",
        "assigned_works": "కేటాయించిన పనులు",
        "progress_works": "ప్రగతిలో ఉన్న పనులు",
        "completed_works": "పూర్తయిన పనులు",
        "escalated_works": "ఎస్కలేటెడ్ పనులు",
        "pending_assignment": "పెండింగ్ అసైన్‌మెంట్",
        "pothole_repair": "గుంతల మరమ్మత్తు",
        "water_leakage": "నీటి లీకేజీ",
        "garbage_pile": "చెత్త కుప్ప",
        "streetlight_outage": "వీధి దీపం వెలగడం లేదు",
        "fallen_tree": "కూలిపోయిన చెట్టు",
        "broken_sidewalk": "విరిగిన ఫుట్‌పాత్",
        "traffic_light_broken": "ట్రాఫిక్ లైట్ చెడిపోయింది",
        "stray_animals": "వీధి జంతువులు",
        "illegal_parking": "అక్రమ పార్కింగ్",
        "update_status": "స్థితిని అప్‌డేట్ చేయండి:",
        "resolved": "పరిష్కరించబడింది",
        "escalated": "ఎస్కలేట్ చేయబడింది",
        "in_progress": "ప్రగతిలో ఉంది",
        "time_to_complete": "పూర్తి చేయడానికి మిగిలిన సమయం:",
        "overdue": "గడువు ముగిసింది",
        "hours": "గంటలు",
        "validation_insights": "సమూహ ధృవీకరణ అంతర్దృష్టులు",
        "total_votes": "మొత్తం ఓట్లు",
        "valid": "చెల్లుబాటు",
        "invalid": "చెల్లనిది",
        // Admin Dashboard
        "admin_center": "అడ్మిన్ సెంటర్",
        "central_command": "సెంట్రల్ కమాండ్ & కంట్రోల్ లాగిన్",
        "authenticate": "ప్రామాణీకరించు",
        "invalid_credentials": "చెల్లని ఆధారాలు.",
        "admin_dash": "అడ్మిన్ డాష్‌బోర్డ్",
        "chief_admin": "చీఫ్ అడ్మినిస్ట్రేటర్",
        "sys_overview": "సిస్టమ్ అవలోకనం",
        "departments": "విభాగాలు",
        "officer_dir": "ఆఫీసర్ డైరెక్టరీ",
        "accountability_center": "జవాబుదారీతనం కేంద్రం",
        "sys_settings": "సిస్టమ్ సెట్టింగ్‌లు",
        "command_overview": "కమాండ్ అవలోకనం",
        "realtime_metrics": "అన్ని జోన్లలో నిజ-సమయ పౌర పనితీరు కొలమానాలు.",
        "export_data": "డేటాను ఎగుమతి చేయి",
        "broadcast_alert": "ప్రసార హెచ్చరిక",
        "total_complaints": "మొత్తం ఫిర్యాదులు",
        "active_complaints": "క్రియాశీల ఫిర్యాదులు",
        "escalated_critical": "ఎస్కలేట్ చేయబడిన క్లిష్టమైనవి",
        "requires_attention": "శ్రద్ధ అవసరం",
        "hotspot_analysis": "ప్రాంత హాట్‌స్పాట్ విశ్లేషణ",
        "high_density": "అధిక సాంద్రత",
        "medium": "మధ్యస్థం",
        "low": "తక్కువ",
        "complaint_trends": "ఫిర్యాదు ధోరణులు (గత 6 నెలలు)",
        "all_regions": "అన్ని ప్రాంతాలు",
        "dept_perf_sla": "విభాగం పనితీరు SLA",
        "view_detailed": "వివరంగా వీక్షించండి",
        "common_categories": "అత్యంత సాధారణ వర్గాలు",
        "accountability_perf": "జవాబుదారీతనం & పనితీరు",
        "high_efficiency": "అధిక సామర్థ్యం",
        "flagged_delays": "ఆలస్యాల కోసం ఫ్లాగ్ చేయబడింది",
        "repeated_delays": "పదేపదే ఆలస్యాలు (3 ఎస్కలేషన్లు)",
        "full_accountability_report": "పూర్తి జవాబుదారీ నివేదికను వీక్షించండి",
        "datadriven_insights": "డేటా-ఆధారిత అంతర్దృష్టులు",
        "escalation_command": "ఎస్కలేషన్ కమాండ్ సెంటర్",
        "override_priorities": "అన్ని ప్రాధాన్యతలను భర్తీ చేయండి",
        "complaint_id_table": "ఫిర్యాదు ID",
        "responsible_party": "బాధ్యతాయుత పక్షం",
        "escalation_level": "ఎస్కలేషన్ స్థాయి",
        "admin_actions": "పరిపాలనా చర్యలు",
        "reassign": "తిరిగి కేటాయించు",
        "override": "భర్తీ చేయి",
        "density_zone": "సాంద్రత జోన్",
        "supporting_team": "మద్దతు బృందం"
    },
    "ur": {
        "nav_home": "ہوم",
        "nav_problem": "مسئلہ",
        "nav_features": "خصوصیات",
        "nav_workflow": "کام کا طریقہ",
        "nav_impact": "اثرات",
        "nav_contact": "رابطہ کریں",
        "nav_login": "لاگ ان",
        "nav_admin": "ایڈمن",
        "hero_badge": "ایک سمارٹ سوک ٹیک پلیٹ فارم",
        "hero_title": "جن سیتو میں خوش آمدید",
        "hero_subtitle": "سمارٹ ٹیکنالوجی کے ساتھ شہریوں اور گورننس کو جوڑنا۔ AI کی طاقت سے لیس ہو کر سماجی مسائل کی رپورٹ کریں، ٹریک کریں اور حل کریں۔",
        "btn_report": "مسئلہ رپورٹ کریں",
        "btn_track": "شکایت ٹریک کریں",
        "stat_support": "سپورٹ",
        "stat_transparent": "شفاف",
        "stat_resolution": "حل",
        "scroll_hint": "فوری رپورٹ کرنے کے لیے ٹیپ کریں",
        "section_report_title": "فوری مسئلہ رپورٹ کریں",
        "section_report_desc": "مقام خودکار طور پر معلوم کیا گیا · رپورٹ کرنے کے لیے ایک ٹیپ · لاگ ان کی ضرورت نہیں",
        "detecting_location": "آپ کا مقام معلوم کیا جا رہا ہے...",
        "cat_roads": "گڑھے اور سڑکیں",
        "cat_roads_desc": "خراب سڑکیں اور ٹریفک کے خطرات",
        "cat_water": "پانی کی فراہمی",
        "cat_water_desc": "رساو اور بے قاعدہ سپلائی",
        "cat_garbage": "کچرا مینجمنٹ",
        "cat_garbage_desc": "بھرے ہوئے کچرا دان اور ڈمپنگ",
        "cat_electricity": "بجلی",
        "cat_electricity_desc": "بجلی کی بندش اور خراب لائنیں",
        "cat_light": "اسٹریٹ لائٹنگ",
        "cat_light_desc": "اندھیری سڑکیں اور ٹوٹے ہوئے لیمپ",
        "cat_photo": "فوٹو اپ لوڈ کریں",
        "cat_photo_desc": "کسی بھی مسئلے کی تصویر لیں اور خودکار رپورٹ کریں",
        "tap_to_report": "رپورٹ کے لیے ٹیپ کریں",
        "tap_to_upload": "اپ لوڈ کے لیے ٹیپ کریں",
        "toast_success": "رپورٹ بھیج دی گئی!",
        "toast_msg": "آپ کا مسئلہ درج کر لیا گیا ہے۔",
        "why_title": "جن سیتو کا انتخاب کیوں کریں؟",
        "why_desc": "بہتر شہروں کی تعمیر کے لیے شہریوں اور حکام دونوں کو جدید ترین ٹولز کے ساتھ بااختیار بنانا۔",
        "feat_ai_title": "AI پر مبنی رپورٹنگ",
        "feat_ai_desc": "ہمارا سمارٹ سسٹم خودکار طور پر آپ کے مسائل کی درجہ بندی کرتا ہے اور حل کے عمل کو آسان بنانے کے لیے ڈپلیکیٹس کی شناخت کرتا ہے۔",
        "feat_lang_title": "کثیر لسانی تعاون",
        "feat_lang_desc": "اپنی علاقائی زبان میں مسائل کی رپورٹ کریں۔ ہم شہریوں اور حکومت کے درمیان زبان کی رکاوٹ کو دور کرتے ہیں۔",
        "feat_trans_title": "مکمل شفافیت",
        "feat_trans_desc": "حقیقی وقت میں اپنی شکایت کی حیثیت کو ٹریک کریں۔ جانیں کہ کون سا محکمہ اور افسر آپ کی درخواست پر کام کر رہا ہے۔",
        "feat_acc_title": "جوابدہی",
        "feat_acc_desc": "SLAs اس بات کو یقینی بناتے ہیں کہ حکام ایک مقررہ وقت کے اندر شکایات کو حل کریں۔",
        "how_title": "یہ کیسے کام کرتا ہے",
        "how_desc": "مسئلے کی شناخت سے لے کر اس کے حتمی حل تک کا ایک ہموار سفر۔",
        "step_report": "رپورٹ",
        "step_report_desc": "شہری تصویر کھینچتا ہے، تفصیلات شامل کرتا ہے، اور آسانی سے شکایت جمع کراتا ہے۔",
        "step_analyze": "تجزیہ",
        "step_analyze_desc": "AI مسئلے کی درجہ بندی کرتا ہے اور اسے متعلقہ سرکاری محکمے کو بھیجتا ہے۔",
        "step_assign": "تفویض",
        "step_assign_desc": "افسران کو ٹکٹ ملتا ہے، وہ صورتحال کا جائزہ لیتے ہیں، اور حل کا منصوبہ بناتے ہیں۔",
        "step_resolve": "حل",
        "step_resolve_desc": "مسئلہ حل ہو جاتا ہے، اور شہری کو کام مکمل ہونے کے ثبوت کے ساتھ مطلع کیا جاتا ہے۔",
        "impact_resolved": "حل شدہ شکایات",
        "impact_active": "سرگرم شہری",
        "impact_time": "اوسط حل کا وقت",
        "impact_cities": "منسلک شہر",
        "footer_desc": "شہریوں اور گورننس کے درمیان فرق کو ختم کرنا। بہتر، محفوظ اور صاف ستھرے شہر بنانے کے لیے سمارٹ ٹیکنالوجی کا استعمال کرنا।",
        "quick_links": "فوری لنکس",
        "legal": "قانونی",
        "contact_us": "ہم سے رابطہ کریں",
        "rights_reserved": "© 2026 جن سیتو۔ جملہ حقوق محفوظ ہیں۔",
        "citizen_portal": "سٹیزن پورٹل",
        "back_home": "ہوم پر واپس جائیں",
        "logout": "لاگ آؤٹ",
        "welcome_back": "جن سیتو میں خوش آمدید",
        "select_role": "صحیح ڈیش بورڈ تک رسائی کے لیے اپنا کردار منتخب کریں۔",
        "citizen": "شہری",
        "officer": "افسر",
        "username": "صارف کا نام",
        "password": "پاس ورڈ",
        "login_btn": "پورٹل میں لاگ ان کریں",
        "dashboard_title": "سٹیزن ڈیش بورڈ",
        "dashboard_subtitle": "مسائل رپورٹ کریں، پیش رفت ٹریک کریں اور سماجی مرمت کی تصدیق کریں۔",
        "tab_report": "مسئلہ رپورٹ کریں",
        "tab_complaints": "मेरी शिकायतें",
        "tab_notifications": "اطلاعات",
        "tab_validation": "عوامی تصدیق",
        "tab_profile": "سوک پروفائل",
        "quick_report": "فوری رپورٹ",
        "detailed_report": "تفصیلی AI رپورٹ",
        "detecting": "معلوم کر رہے ہیں...",
        "ai_instruction": "جس مسئلے کا آپ سامنا کر رہے ہیں اس پر ٹیپ کریں۔ ہمارا AI فوری طور پر اس کی درجہ بندی کرے گا اور متعلقہ افسر کو بھیج دے گا۔",
        "detailed_instruction": "کوئی بھی تفصیل (تصویر، آواز یا متن) فراہم کریں۔ کوئی بھی ایک ان پٹ کافی ہے۔",
        "upload_media": "میڈیا اپ لوڈ کریں",
        "click_drag": "تصویر/ویڈیو کھینچیں یا یہاں لائیں",
        "describe_issue": "مسئلے کی تفصیل",
        "short_title": "مختصر عنوان (مثلاً ٹوٹا ہوا پائپ)",
        "additional_details": "مزید تفصیلات...",
        "analyze_ai": "AI کے ساتھ تجزیہ کریں",
        "ai_results": "AI تجزیہ کے نتائج",
        "detected_cat": "درجہ بندی:",
        "urgency_level": "فوری ضرورت کی سطح:",
        "gen_desc": "تیار کردہ سرکاری تفصیل:",
        "submit_report": "حتمی رپورٹ جمع کرائیں",
        "active_tracking": "فعال ٹریکنگ",
        "history": "شکایت کی تاریخ",
        "recent_updates": "حالیہ اپ ڈیٹس",
        "my_val_status": "میری شکایات کی تصدیق کی حیثیت",
        "comm_verif": "عوامی شکایت کی تصدیق",
        "civic_score": "سوک تعاون اسکور",
        "standing": "عوامی مقام: بہترین",
        "trusted_reporter": "قابل اعتماد رپورٹر",
        "comm_validator": "عوامی تصدیق کنندہ",
        "civic_leader": "سوک لیڈر",
        "recent_activity": "حالیہ سرگرمی",
        "success_title": "شکایت کامیابی کے ساتھ جمع ہو گئی!",
        "success_msg": "آپ کا مسئلہ درج کر لیا گیا ہے اور تفویض کر دیا گیا ہے۔",
        "complaint_id": "شکایت آئی ڈی:",
        "sms_note": "آپ کو حل کی پیش رفت پر ایس ایم ایس اپ ڈیٹس موصول ہوں گی۔",
        "track_status": "سٹیٹس ٹریک کریں",
        "report_another": "ایک اور رپورٹ کریں",
        // Officer Dashboard
        "officer_dash": "افسر ڈیش بورڈ",
        "assigned_tasks": "تفویض کردہ کام",
        "territory_map": "علاقائی نقشہ",
        "command_center": "کمانڈ سینٹر",
        "task_mgmt": "ٹاسک مینجمنٹ",
        "sort_by": "ترتیب دیں:",
        "time_left": "شروع ہونے میں وقت",
        "urgency_level_sort": "ضرورت کی سطح",
        "assigned_works": "تفویض کردہ کام",
        "progress_works": "جاری کام",
        "completed_works": "مکمل کام",
        "escalated_works": "بڑھے ہوئے کام",
        "pending_assignment": "تفویض زیر التواء",
        "pothole_repair": "گڑھوں کی مرمت",
        "water_leakage": "پانی کا رساو",
        "garbage_pile": "کچرے کا ڈھیر",
        "streetlight_outage": "اسٹریٹ لائٹ بند ہے",
        "fallen_tree": "گرا ہوا درخت",
        "broken_sidewalk": "ٹوٹا ہوا فٹ پاتھ",
        "traffic_light_broken": "ٹریفک لائٹ خراب",
        "stray_animals": "آوارہ جانور",
        "illegal_parking": "غیر قانونی پارکنگ",
        "update_status": "سٹیٹس اپ ڈیٹ کریں:",
        "resolved": "حل شدہ",
        "escalated": "بڑھا ہوا",
        "in_progress": "جاری",
        "time_to_complete": "مکمل ہونے میں وقت:",
        "overdue": "تاخیر شدہ",
        "hours": "گھنٹے",
        "validation_insights": "عوامی تصدیق کی تفصیلات",
        "total_votes": "کل ووٹ",
        "valid": "درست",
        "invalid": "غلط",
        // Admin Dashboard
        "admin_center": "ایڈمن سینٹر",
        "central_command": "مرکزی کمانڈ اور کنٹرول لاگ ان",
        "authenticate": "تصدیق کریں",
        "invalid_credentials": "غلط اسناد۔",
        "admin_dash": "ایڈمن ڈیش بورڈ",
        "chief_admin": "چیف ایڈمنسٹریٹر",
        "sys_overview": "سسٹم جائزہ",
        "departments": "محکمے",
        "officer_dir": "آفیسر ڈائریکٹری",
        "accountability_center": "احتساب مرکز",
        "sys_settings": "سسٹم کی ترتیبات",
        "command_overview": "کمانڈ جائزہ",
        "realtime_metrics": "تمام زونز میں حقیقی وقت کی شہری کارکردگی کی پیمائش۔",
        "export_data": "ڈیٹا ایکسپورٹ کریں",
        "broadcast_alert": "براڈکاسٹ الرٹ",
        "total_complaints": "کل شکایات",
        "active_complaints": "فعال شکایات",
        "escalated_critical": "شدید شکایات",
        "requires_attention": "توجہ طلب",
        "hotspot_analysis": "علاقائی ہاٹ اسپاٹ تجزیہ",
        "high_density": "زیادہ کثافت",
        "medium": "درمیانہ",
        "low": "کم",
        "complaint_trends": "شکایات کا رجحان (گزشتہ 6 ماہ)",
        "all_regions": "تمام علاقے",
        "dept_perf_sla": "محکموں کی کارکردگی SLA",
        "view_detailed": "تفصیلی دیکھیں",
        "common_categories": "سب سے عام زمرے",
        "accountability_perf": "احتساب اور کارکردگی",
        "high_efficiency": "اعلی کارکردگی",
        "flagged_delays": "تاخیر کے لیے نشان زد",
        "repeated_delays": "بار بار تاخیر (3 شکایات)",
        "full_accountability_report": "مکمل احتساب رپورٹ دیکھیں",
        "datadriven_insights": "ڈیٹا پر مبنی بصیرت",
        "escalation_command": "ایسکیلیشن کمانڈ سینٹر",
        "override_priorities": "تمام ترجیحات کو اوور رائیڈ کریں",
        "complaint_id_table": "شکایت آئی ڈی",
        "responsible_party": "ذمہ دار فریق",
        "escalation_level": "ایسکیلیشن لیول",
        "admin_actions": "انتظامی اقدامات",
        "reassign": "دوبارہ تفویض کریں",
        "override": "اوور رائیڈ",
        "density_zone": "کثافت زون",
        "supporting_team": "معاون ٹیم"
    }
};

function setLanguage(lang) {
    localStorage.setItem('janSetuLang', lang);
    document.documentElement.lang = lang;
    
    // Apply translations to elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if it's an input placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // Handle RTL for Urdu
    if (lang === 'ur') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }

    // Update active state and toggle text in language switcher
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        const toggle = switcher.querySelector('.lang-dropdown-toggle');
        const langNames = { 'en': 'English', 'hi': 'हिन्दी', 'te': 'తెలుగు', 'ur': 'اردو' };
        if (toggle) {
            toggle.innerHTML = `<i class="fa-solid fa-globe"></i> ${langNames[lang] || 'Language'} <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; margin-left: 5px;"></i>`;
        }

        const options = switcher.querySelectorAll('.lang-option');
        options.forEach(opt => {
            if (opt.getAttribute('onclick') === `setLanguage('${lang}')`) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    }

    // Close dropdown after selection
    const menu = document.querySelector('.lang-dropdown-menu');
    if (menu) menu.classList.remove('show');

    // Notify other components
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Function to toggle language dropdown
function toggleLanguageDropdown(event) {
    if (event) event.stopPropagation();
    const menu = document.querySelector('.lang-dropdown-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// Function to inject language switcher into the navbar
function injectLanguageSwitcher() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Check if switcher already exists
    if (document.getElementById('language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'language-switcher';
    switcher.className = 'language-switcher';
    
    // Get current lang for initial toggle state
    const currentLang = localStorage.getItem('janSetuLang') || 'en';
    const langNames = { 'en': 'English', 'hi': 'हिन्दी', 'te': 'తెలుగు', 'ur': 'اردو' };

    switcher.innerHTML = `
        <div class="lang-dropdown">
            <button class="lang-dropdown-toggle" onclick="toggleLanguageDropdown(event)">
                <i class="fa-solid fa-globe"></i> ${langNames[currentLang]} <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; margin-left: 5px;"></i>
            </button>
            <div class="lang-dropdown-menu">
                <div class="lang-option" onclick="setLanguage('en')">English</div>
                <div class="lang-option" onclick="setLanguage('hi')">हिन्दी</div>
                <div class="lang-option" onclick="setLanguage('te')">తెలుగు</div>
                <div class="lang-option" onclick="setLanguage('ur')">اردو</div>
            </div>
        </div>
    `;

    // Add styles for the switcher if not already in CSS
    if (!document.getElementById('i18n-styles')) {
        const style = document.createElement('style');
        style.id = 'i18n-styles';
        style.textContent = `
            .language-switcher {
                margin-left: 15px;
                position: relative;
                z-index: 1000;
            }
            .lang-dropdown {
                position: relative;
            }
            .lang-dropdown-toggle {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: inherit;
                padding: 6px 12px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 0.85rem;
                display: flex;
                align-items: center;
                gap: 6px;
                transition: all 0.3s ease;
                font-weight: 500;
                backdrop-filter: blur(5px);
            }
            .lang-dropdown-toggle:hover {
                background: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.4);
            }
            .lang-dropdown-menu {
                position: absolute;
                top: calc(100% + 8px);
                right: 0;
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                min-width: 120px;
                display: none;
                overflow: hidden;
                border: 1px solid rgba(0,0,0,0.05);
                animation: slideDown 0.2s ease-out;
            }
            .lang-dropdown-menu.show {
                display: block;
            }
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .lang-option {
                padding: 10px 16px;
                font-size: 0.9rem;
                color: #333;
                cursor: pointer;
                transition: all 0.2s;
                text-align: left;
            }
            .lang-option:hover {
                background: #f8faff;
                color: var(--primary-color, #0b3b60);
            }
            .lang-option.active {
                background: #eaf2f8;
                color: var(--primary-color, #0b3b60);
                font-weight: 600;
            }
            .rtl .lang-dropdown-menu {
                right: auto;
                left: 0;
            }
            .rtl .lang-option {
                text-align: right;
            }
            .rtl {
                direction: rtl;
                text-align: right;
            }
            .rtl .nav-links {
                margin-left: 0;
                margin-right: auto;
            }
            .rtl .language-switcher {
                margin-left: 0;
                margin-right: 15px;
            }
            /* Fix for icons in RTL */
            .rtl i {
                margin-right: 0;
                margin-left: 8px;
            }
            /* Light theme specific overrides (if on index page with light navbar) */
            nav:not(.scrolled) .lang-dropdown-toggle {
                /* adjust if needed */
            }
        `;
        document.head.appendChild(style);
    }

    navLinks.appendChild(switcher);

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        const menu = document.querySelector('.lang-dropdown-menu');
        if (menu) menu.classList.remove('show');
    });
}

// Initialize i18n
document.addEventListener('DOMContentLoaded', () => {
    injectLanguageSwitcher();
    const savedLang = localStorage.getItem('janSetuLang') || 'en';
    setLanguage(savedLang);
});
