"""Rebuild zone_map_clean.png from zone_map.png (map only, no title bar or key)."""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "clients" / "simon-james"
SRC = ROOT / "zone_map.png"
OUT = ROOT / "zone_map_clean.png"

full = Image.open(SRC).convert("RGB")
# Right of baked-in key (extends to ~x720), below purple header
crop = full.crop((725, 70, 1318, 1172))
a = np.array(crop)
lav = np.array([243, 239, 247], dtype=np.uint8)
white = (a[:, :, 0] > 248) & (a[:, :, 1] > 248) & (a[:, :, 2] > 248)
a[white] = lav
col_std = a.std(axis=(0, 2))
left = next(x for x in range(a.shape[1]) if col_std[x] > 30)
right = next(x for x in range(a.shape[1] - 1, -1, -1) if col_std[x] > 25)
Image.fromarray(a[:, max(0, left - 2) : right + 3]).save(OUT, optimize=True)
print(f"Wrote {OUT}")
