"""Create an empty commission workspace. Stdlib only; no app, network or shell calls."""
from pathlib import Path
import argparse,json,hashlib,sys

def create(output,publication_id=None):
    target=Path(output)
    if not target.is_absolute(): raise ValueError('Output must be an absolute path')
    if target.exists() or target.is_symlink(): raise ValueError('Output already exists; choose a fresh directory')
    for parent in target.parents:
        if parent.is_symlink() or (hasattr(parent,'is_junction') and parent.is_junction()):
            raise ValueError('Output through a link or junction is not supported')
    skill=Path(__file__).resolve().parent.parent
    # Validate every built-in template before creating any output.
    profile=json.loads((skill/'assets/publication-profile.blank.json').read_text('utf-8'))
    record=json.loads((skill/'assets/commission-record.blank.json').read_text('utf-8'))
    review=(skill/'assets/editor-review.blank.md').read_bytes()
    profile['publication_id']=publication_id; record['publication_id']=publication_id
    target.mkdir(parents=True,exist_ok=False)
    for name in ['00_intake','01_trial','02_layout','03_review','04_delivery','90_checks']:
        (target/name).mkdir()
    outputs={'publication-profile.json':(json.dumps(profile,ensure_ascii=False,indent=2)+'\n').encode(),
             'commission.json':(json.dumps(record,ensure_ascii=False,indent=2)+'\n').encode(),
             '03_review/editor-review.md':review}
    for name,data in outputs.items(): (target/name).write_bytes(data)
    receipt={'scope':'workspace scaffolding only','application_execution':'not_executed','status':'created',
             'files':[{'path':n,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()} for n,b in outputs.items()]}
    (target/'90_checks/scaffold-receipt.json').write_bytes((json.dumps(receipt,ensure_ascii=False,indent=2)+'\n').encode())
    return receipt

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output',required=True);parser.add_argument('--publication-id')
    args=parser.parse_args()
    try: print(json.dumps(create(args.output,args.publication_id),ensure_ascii=False))
    except (OSError,ValueError,json.JSONDecodeError) as e:
        print(json.dumps({'status':'failed','error':str(e)},ensure_ascii=False));sys.exit(2)
