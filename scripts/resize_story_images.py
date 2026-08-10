import os
from PIL import Image

TARGET_WIDTH = 1400
QUALITY = 85

JOBS = [
    ("capitulos-Emerald", "docs/assets/story-emerald", "cap", "ch", 20),
    ("capitulos - Dark Secret", "docs/assets/story-dark-secret", "cap", "ds-ch", 18),
]

for src_dir, dst_dir, src_prefix, dst_prefix, count in JOBS:
    os.makedirs(dst_dir, exist_ok=True)
    for n in range(1, count + 1):
        src_path = os.path.join(src_dir, f"{src_prefix}{n}.png")
        dst_path = os.path.join(dst_dir, f"{dst_prefix}{n}.jpg")
        im = Image.open(src_path)
        if im.mode in ("RGBA", "P"):
            bg = Image.new("RGB", im.size, (0, 0, 0))
            bg.paste(im.convert("RGBA"), mask=im.convert("RGBA").split()[3])
            im = bg
        else:
            im = im.convert("RGB")
        w, h = im.size
        new_h = round(h * TARGET_WIDTH / w)
        im = im.resize((TARGET_WIDTH, new_h), Image.LANCZOS)
        im.save(dst_path, "JPEG", quality=QUALITY, optimize=True)
        print(f"{src_path} -> {dst_path} ({os.path.getsize(dst_path)//1024} KB)")
