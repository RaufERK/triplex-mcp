#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd "$(dirname "$0")/.."
export DOCS_PATH="${DOCS_PATH:-$(pwd)/docs}"

exec node dist/server.js
