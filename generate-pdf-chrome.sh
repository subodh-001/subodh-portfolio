#!/bin/bash

echo "📄 Generating terminal-style resume PDF using Chrome..."

# Paths
HTML_FILE="$(pwd)/build-template/src/frontend/public/assets/resume.html"
PDF_FILE="$(pwd)/build-template/src/frontend/public/assets/resume.pdf"

# Check if HTML exists
if [ ! -f "$HTML_FILE" ]; then
    echo "❌ Resume HTML file not found!"
    exit 1
fi

# Generate PDF using Chrome headless with proper settings
google-chrome --headless --disable-gpu \
    --print-to-pdf="$PDF_FILE" \
    --print-to-pdf-no-header \
    --no-pdf-header-footer \
    "file://$HTML_FILE" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Terminal-style resume PDF generated successfully!"
    echo "📍 Location: $PDF_FILE"
    
    # Copy to dist folder
    cp "$PDF_FILE" "$(pwd)/build-template/src/frontend/dist/assets/resume.pdf" 2>/dev/null
    echo "✅ Copied to dist folder"
else
    echo "❌ Failed to generate PDF"
    exit 1
fi
