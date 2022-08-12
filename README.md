# okadoc-packages
Research Lerna Monorepo

```
# publish
lerna exec "npm publish --registry http://localhost:4873"

# unpublish
lerna exec "npm unpublish \$LERNA_PACKAGE_NAME --force --registry http://localhost:4873"
```

## Local Publish
yarn prepublish
yarn bootstrap (link each dependencies)
yarn publish-dev