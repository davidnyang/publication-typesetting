"""Read-only integrity check. Standard library only; no network or app access."""
import hashlib
import json
import sys
from pathlib import Path, PurePosixPath

def verify(root):
    root = Path(root).resolve()
    manifest_path = root / 'bundle-manifest.json'
    if manifest_path.is_symlink():
        raise ValueError('Manifest must not be a symlink')
    data = json.loads(manifest_path.read_text(encoding='utf-8'))
    expected = set()
    errors = []
    for entry in data['files']:
        name = entry['path']
        rel = PurePosixPath(name)
        if not name or rel.is_absolute() or '..' in rel.parts or ':' in name or '\\' in name or name == 'bundle-manifest.json' or name in expected:
            raise ValueError('Unsafe or duplicate manifest path')
        expected.add(name)
        target = root.joinpath(*rel.parts)
        if any(p.is_symlink() for p in [target, *target.parents] if p != root and root in p.parents):
            raise ValueError('Symlink in manifest path')
        resolved = target.resolve()
        if not resolved.is_relative_to(root):
            raise ValueError('Path escapes bundle')
        if not target.is_file():
            errors.append({'path':name,'error':'missing'})
            continue
        blob = target.read_bytes()
        if len(blob) != entry['bytes'] or hashlib.sha256(blob).hexdigest() != entry['sha256']:
            errors.append({'path':name,'error':'content mismatch'})
    actual = {p.relative_to(root).as_posix() for p in root.rglob('*') if p.is_file() and '.git' not in p.relative_to(root).parts}
    extras = sorted(actual - expected - {'bundle-manifest.json'})
    return {'checked_files':len(expected), 'errors':errors, 'unlisted_files':extras, 'ok':not errors and not extras}

if __name__ == '__main__':
    try:
        result = verify(sys.argv[1] if len(sys.argv)>1 else '.')
        print(json.dumps(result,ensure_ascii=False))
        sys.exit(0 if result['ok'] else 1)
    except (OSError,ValueError,KeyError,TypeError) as exc:
        print(json.dumps({'ok':False,'error':str(exc)},ensure_ascii=False))
        sys.exit(2)
