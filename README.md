# [alexgalea.ca](https://alexgalea.ca/)

## Updating the site

Delete the current bucket (optional):
```
aws s3 rm s3://alexgalea.ca --recursive
```
Upload the new source code:
```
aws s3 sync --acl public-read --sse --delete src s3://alexgalea.ca
aws s3 sync --acl public-read --sse --delete assets s3://alexgalea.ca/assets
```
Invalidate cloudfront cache
```
aws cloudfront create-invalidation --distribution-id E2JTJP15FWKFBS --paths '/*'
```
