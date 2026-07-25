#!/usr/bin/env python3
"""
Script to replace 'Gandiva' text with 'Unveilr' in images
This script attempts to use OCR to detect and replace text in images.

Requirements:
    - pip install pillow pytesseract opencv-python
    - Install Tesseract OCR: brew install tesseract (macOS) or apt-get install tesseract-ocr (Linux)

Note: This is a complex task and may not work perfectly for all images.
For best results, manual editing with image editing software is recommended.
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import re

try:
    import pytesseract
    from pytesseract import Output
    TESSERACT_AVAILABLE = True
except ImportError:
    TESSERACT_AVAILABLE = False
    print("Warning: pytesseract not installed. OCR-based text replacement will not work.")
    print("Install with: pip install pytesseract")
    print("Also install Tesseract OCR: brew install tesseract")

try:
    import cv2
    import numpy as np
    CV2_AVAILABLE = True
except ImportError:
    CV2_AVAILABLE = False
    print("Warning: opencv-python not installed. Some features may not work.")
    print("Install with: pip install opencv-python")


def find_text_regions_ocr(image_path):
    """
    Use OCR to find text regions containing 'Gandiva' or similar text
    """
    if not TESSERACT_AVAILABLE:
        return []
    
    try:
        img = Image.open(image_path)
        
        # Get OCR data
        data = pytesseract.image_to_data(img, output_type=Output.DICT)
        
        text_regions = []
        n_boxes = len(data['text'])
        
        for i in range(n_boxes):
            text = data['text'][i].strip()
            # Check if text contains 'Gandiva' (case insensitive)
            if 'gandiva' in text.lower() or 'gandiva' in text.lower().replace(' ', ''):
                if int(data['conf'][i]) > 30:  # Confidence threshold
                    x, y, w, h = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
                    text_regions.append({
                        'text': text,
                        'bbox': (x, y, x + w, y + h),
                        'confidence': data['conf'][i]
                    })
        
        return text_regions
    except Exception as e:
        print(f"Error in OCR processing: {e}")
        return []


def simple_text_overlay(image_path, output_path, old_text="Gandiva", new_text="Unveilr"):
    """
    Simple approach: Try to overlay text in common locations
    This is a fallback if OCR is not available
    """
    try:
        img = Image.open(image_path).convert('RGBA')
        draw = ImageDraw.Draw(img)
        
        # Try to load a font
        try:
            font_size = 24
            # Try different font paths
            font_paths = [
                "/System/Library/Fonts/Helvetica.ttc",
                "/System/Library/Fonts/Arial.ttf",
                "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            ]
            font = None
            for path in font_paths:
                if os.path.exists(path):
                    try:
                        font = ImageFont.truetype(path, font_size)
                        break
                    except:
                        continue
            if font is None:
                font = ImageFont.load_default()
        except:
            font = ImageFont.load_default()
        
        # This is a placeholder - without OCR, we can't know where text is
        print(f"  Note: Cannot automatically detect text locations without OCR")
        print(f"  Image saved unchanged: {output_path}")
        
        img.save(output_path)
        return True
    except Exception as e:
        print(f"  Error: {e}")
        return False


def replace_text_in_image(image_path, output_path=None, old_text="Gandiva", new_text="Unveilr"):
    """
    Main function to replace text in an image
    """
    if output_path is None:
        base, ext = os.path.splitext(image_path)
        output_path = f"{base}_updated{ext}"
    
    print(f"Processing: {image_path}")
    
    if TESSERACT_AVAILABLE:
        # Try OCR-based approach
        text_regions = find_text_regions_ocr(image_path)
        
        if text_regions:
            print(f"  Found {len(text_regions)} text region(s) containing '{old_text}'")
            # For each region, we would need to:
            # 1. Inpaint to remove old text
            # 2. Add new text with matching style
            # This is complex and requires additional processing
            print(f"  Note: Text replacement requires image inpainting which is complex")
            print(f"  Consider using image editing software for best results")
        else:
            print(f"  No text regions containing '{old_text}' found via OCR")
            print(f"  Image may not contain visible text, or OCR couldn't detect it")
    
    # Fallback to simple approach (just saves image unchanged)
    return simple_text_overlay(image_path, output_path, old_text, new_text)


def main():
    """
    Main function to process all images in the unveilr-uploads directory
    """
    image_dir = "public/unveilr-uploads"
    
    if not os.path.exists(image_dir):
        print(f"Error: Directory {image_dir} not found")
        return
    
    # Get all PNG images
    image_files = [f for f in os.listdir(image_dir) if f.lower().endswith('.png')]
    
    if not image_files:
        print(f"No PNG images found in {image_dir}")
        return
    
    print("=" * 60)
    print("Image Text Replacement Tool")
    print("=" * 60)
    print()
    print(f"Found {len(image_files)} PNG image(s)")
    print()
    
    if not TESSERACT_AVAILABLE:
        print("WARNING: OCR is not available. Text replacement cannot be performed automatically.")
        print()
        print("To enable OCR-based text replacement:")
        print("  1. Install Tesseract OCR:")
        print("     macOS: brew install tesseract")
        print("     Linux: sudo apt-get install tesseract-ocr")
        print("  2. Install Python packages:")
        print("     pip install pytesseract opencv-python")
        print()
        print("For best results, manually edit images using:")
        print("  - GIMP (free)")
        print("  - Adobe Photoshop")
        print("  - Figma")
        print("  - Canva")
        print()
        return
    
    print("Processing images...")
    print()
    
    for image_file in image_files:
        image_path = os.path.join(image_dir, image_file)
        replace_text_in_image(image_path)
        print()
    
    print("=" * 60)
    print("Processing complete!")
    print("=" * 60)
    print()
    print("Note: Automatic text replacement in images is complex.")
    print("If images still contain 'Gandiva' text, consider:")
    print("  1. Manual editing with image editing software")
    print("  2. Re-generating screenshots/dashboards with 'Unveilr' branding")
    print("  3. Using professional image editing services")


if __name__ == "__main__":
    main()
