import os

file = 'admin.html'

with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix avatars
content = content.replace('name=Ramesh+Kumar', 'name=Sneha+Reddy')
content = content.replace('name=Anita+Sharma', 'name=Anjali+Gupta')
content = content.replace('name=Rakesh+S', 'name=Karan+Verma')
content = content.replace('name=Anita+J', 'name=Neha+Joshi')
content = content.replace('name=Vijay+K', 'name=Vikram+Singh')

with open(file, 'w', encoding='utf-8') as f:
    f.write(content)

print('Avatars fixed in admin.html')
