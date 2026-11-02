"""Generate a static deploy folder with the real public URL; no dependencies."""
from pathlib import Path
from urllib.parse import urlparse
from xml.sax.saxutils import escape
import argparse, os, re, shutil
root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--url', default=os.environ.get('URL', ''))
parser.add_argument('--netlify-forms', action='store_true', default=os.environ.get('NETLIFY') == 'true')
args = parser.parse_args()
url = args.url.rstrip('/')
parsed = urlparse(url)
if parsed.scheme != 'https' or not parsed.netloc or parsed.query or parsed.fragment or parsed.username:
    parser.error('Provide your public HTTPS site URL with --url, or set the Netlify URL environment variable.')
dist = root / 'dist'
if dist.exists(): shutil.rmtree(dist)
dist.mkdir()
for name in ['images', 'css', 'js', 'data']: shutil.copytree(root/name, dist/name)
for file in root.glob('*.html'): shutil.copy2(file, dist/file.name)
shutil.copy2(root/'_headers', dist/'_headers')
if args.netlify_forms:
    config = dist/'js/config.js'
    config.write_text(config.read_text().replace('netlifyForms: false', 'netlifyForms: true'))
pages = ['index.html','about.html','services.html','classes.html','enquiry.html','contact.html']
for name in pages:
    file = dist/name
    text = file.read_text()
    canonical = f'{url}/{"" if name == "index.html" else name}'
    text = re.sub(r'<link rel="canonical"[^>]*>\s*', '', text)
    text = text.replace('</head>', f'<link rel="canonical" href="{escape(canonical)}">\n<meta property="og:url" content="{escape(canonical)}">\n</head>')
    file.write_text(text)
(dist/'robots.txt').write_text(f'User-agent: *\nAllow: /\nDisallow: /thanks.html\nSitemap: {url}/sitemap.xml\n')
entries = '\n'.join(f'  <url><loc>{escape(url)}/{"" if name == "index.html" else name}</loc></url>' for name in pages)
(dist/'sitemap.xml').write_text(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{entries}\n</urlset>\n')
print(f'Deploy folder: {dist}\nCanonical URL: {url}\nNetlify Forms: {args.netlify_forms}')
