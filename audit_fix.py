import os

files_to_check = ['admin.html', 'admin.js', 'portal.html', 'portal.js', 'index.html']

replacements = {
    'Anita Sharma': 'Anjali Gupta',
    'Ramesh Kumar': 'Sneha Reddy',
    'Rakesh S.': 'Karan Verma',
    'Rakesh S': 'Karan Verma',
    'Anita J.': 'Neha Joshi',
    'Anita J': 'Neha Joshi',
    'Vijay K.': 'Vikram Singh',
    'Vijay K': 'Vikram Singh',
    'Officer V. Singh': 'Vikram Singh'
}

for file in files_to_check:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        for old_name, new_name in replacements.items():
            if old_name in content:
                content = content.replace(old_name, new_name)
                modified = True
        
        # Additional cleanup for consistency in admin.html Accountability & Performance
        if file == 'admin.html':
            # Fix specific details
            if 'Zone 4 • 98% Validation Success' in content:
                content = content.replace('Zone 4 • 98% Validation Success', 'Public Works • 98% Validation Success')
                modified = True
            if 'Electricity Division' in content:
                content = content.replace('Electricity Division', 'Electricity Board')
                modified = True
            if 'Electricity • 92% Validation Success' in content:
                content = content.replace('Electricity • 92% Validation Success', 'Electricity Board • 92% Validation Success')
                modified = True
        
        if file == 'admin.js':
            # Rakesh S was in admin.js? Only in admin.html perhaps. 
            pass

        if modified:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file}")

print("Audit corrections applied.")