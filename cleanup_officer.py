import re

with open('officer.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for the crowd validation insight block
pattern = r'<div style="margin-top: 1rem;">\s+<div style="display:flex; justify-content:space-between; margin-bottom:4px;">\s+<small style="color:var\(--text-muted\); font-weight:600;">Crowd Validation\s+Insights</small>.*?</div>\s+</div>\s+</div>'

# Let's try a simpler regex that matches the structure
# It starts with the div and contains "Crowd Validation Insights"
# And ends with the three closing divs

pattern = r'<div style="margin-top: 1rem;">\s+<div style="display:flex; justify-content:space-between; margin-bottom:4px;">\s+<small[^>]*>Crowd Validation\s+Insights</small>.*?</div>\s+</div>\s+</div>\s+</div>'

# Wait, looking at officer.html view:
# 136:                         <div style="margin-top: 1rem;">
# 137:                             <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
# 138:                                 <small style="color:var(--text-muted); font-weight:600;">Crowd Validation
# 139:                                     Insights</small>
# 140:                                 <small style="color:var(--text-muted);">Total Votes: 172</small>
# 141:                             </div>
# 142:                             <div
# 143:                                 style="width:100%; background:#f1f1f1; border-radius:4px; height:8px; display:flex; overflow:hidden;">
# 144:                                 <div style="width:95%; background:var(--accent-color);"></div>
# 145:                                 <div style="width:5%; background:#e74c3c;"></div>
# 146:                             </div>
# 147:                             <div
# 148:                                 style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.85rem;">
# 149:                                 <span style="color:var(--accent-color); font-weight:600;"><i
# 150:                                         class="fa-solid fa-thumbs-up"></i> 95% Valid (164)</span>
# 151:                                 <span style="color:#e74c3c; font-weight:600;"><i class="fa-solid fa-thumbs-down"></i> 5%
# 152:                                     Invalid (8)</span>
# 153:                             </div>
# 154:                         </div>

# The closing tag is at line 154.

new_content = re.sub(pattern, '', content, flags=re.DOTALL)

# Also remove the metric card:
metric_card_pattern = r'<div class="metric-card" style="padding: 1.25rem;">\s+<div class="metric-icon text-white"\s+style="background:#8e44ad; width:45px; height:45px; font-size:1.1rem;"><i\s+class="fa-solid fa-check-double"></i></div>\s+<div class="metric-data">\s+<h3>89%</h3>\s+<p style="font-size:0.85rem;">Validation Success %</p>\s+</div>\s+</div>'
new_content = re.sub(metric_card_pattern, '', new_content, flags=re.DOTALL)

# Remove "Pending Validations" row
row_pattern = r'<div style="display:flex; justify-content:space-between; align-items:center;">\s+<span style="font-size:0.95rem;">Pending Validations</span>\s+<strong style="color:#f39c12;">8</strong>\s+</div>'
new_content = re.sub(row_pattern, '', new_content, flags=re.DOTALL)

# Update modal text
new_content = new_content.replace('The AI verification was successful and the issue has been routed to the citizen for crowd validation.', 'The AI verification was successful and the issue has been marked as resolved.')

with open('officer.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Cleaned officer.html")
