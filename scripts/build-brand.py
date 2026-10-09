# Generates logo derivatives and favicons from black_on_trans.png.
import sys
from PIL import Image, ImageDraw, ImageFont
src = Image.open(sys.argv[1]).convert('RGBA')
a = src.getchannel('A').point(lambda v: 0 if v < 24 else v)
W, H = src.size
# Mark = upper portion (circle), wordmark below.
mark_box = a.crop((0, 0, W, int(H * 0.62))).point(lambda v: 255 if v > 128 else 0).getbbox()
mark_a = a.crop(mark_box)
full_a = a.crop(a.point(lambda v: 255 if v > 128 else 0).getbbox())

def colored(alpha, rgb):
    im = Image.new('RGBA', alpha.size, rgb + (0,))
    im.putalpha(alpha)
    return im

def fit(im, size):
    im = im.copy(); im.thumbnail((size, size), Image.LANCZOS); return im

white_mark = colored(mark_a, (255, 255, 255))
for s in (96, 192):
    fit(white_mark, s).save(f'src/assets/brand/mark-white-{s}.webp', quality=90, method=6)

# Favicons: white mark on brand-blue rounded tile.
def tile(size, pad=0.16, radius=0.22):
    t = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(t)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * radius), fill=(2, 6, 23, 255))
    m = fit(white_mark, int(size * (1 - 2 * pad)))
    t.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return t
tile(32).save('public/favicon-32x32.png', optimize=True)
tile(16, pad=0.1).save('public/favicon-16x16.png', optimize=True)
tile(180, radius=0).save('public/apple-touch-icon.png', optimize=True)
tile(192).save('public/icon-192.png', optimize=True)
tile(512).save('public/icon-512.png', optimize=True)
tile(256).save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
fit(colored(full_a, (0, 0, 0)), 512).save('public/logo.png', optimize=True)

# Open Graph card 1200x630.
og = Image.new('RGB', (1200, 630), (2, 6, 23))
d = ImageDraw.Draw(og)
for x in range(0, 1200, 48): d.line([(x, 0), (x, 630)], fill=(15, 23, 42))
for y in range(0, 630, 48): d.line([(0, y), (1200, y)], fill=(15, 23, 42))
d.rectangle((0, 622, 1200, 630), fill=(37, 99, 235))
m = fit(white_mark, 200); og.paste(m, (90, 215), m)
def font(sz, bold=False):
    for f in (('arialbd.ttf' if bold else 'arial.ttf'), 'C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf'):
        try: return ImageFont.truetype(f, sz)
        except OSError: pass
    return ImageFont.load_default()
d.text((340, 225), 'SS IT Solution', font=font(68, True), fill=(255, 255, 255))
d.text((342, 320), 'Enterprise Software • Cloud Infrastructure', font=font(30), fill=(148, 163, 184))
d.text((342, 362), '• Automation Solutions', font=font(30), fill=(148, 163, 184))
og.save('public/og-image.jpg', quality=88, optimize=True)
print('mark box', mark_box)
