with open('admin.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace "Validation Success" with "Resolution Rate"
new_content = content.replace('98% Validation Success', '98% Resolution Rate')
new_content = new_content.replace('92% Validation Success', '92% Resolution Rate')

with open('admin.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Cleaned admin.html")
