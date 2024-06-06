#!/bin/bash
# set -x
source ./automation/auto_config.sh
source ./automation/auto_getenv.sh

BOT_URL="https://api.telegram.org/frontend_daily_bot:7310706266:AAGhOe5ln7nMeP2K0GM7TFb9B2LBcV_JL2g/sendMessage"
TELEGRAM_CHAT_ID="-1002086247240_171"
PARSE_MODE="Markdown"
COMMIT=$(git log -1 --pretty=format:"%s")
BUILD_STATUS="SUCCESS"

#get reponame
git_url=$(basename $(git config --get remote.origin.url))
REPONAME=${git_url/\.git/''}
GIT_SHORT=$(git rev-parse --short HEAD) 
GIT_USER=$(git log -1 --pretty=format:'%an')
GIT_USER_EMAIL=$(git log -1 --pretty=format:'%ae')
#get BRANCH_NAME from  GIT
if [ -z $GIT_BRANCH ]; then
  BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
else 
  BRANCH_NAME=$GIT_BRANCH
fi
# check repository
if [ -z "$REPOSITORY" ]
then
      REPOSITORY="$REPONAME"
fi
# check REGISTRY
if [ -z "$REGISTRY" ]
then
      REGISTRY="jotamario"
fi
# check NAME CONTAINER
if [ -z "$NAME" ]
then
      NAME="$REPONAME-$BRANCH_NAME"
fi
send_msg () {
    curl -s -X POST ${BOT_URL} -d chat_id=$TELEGRAM_CHAT_ID \
        -d text="$1" -d parse_mode=${PARSE_MODE}
}

send_msg "
\`------------------------------------\`
Report 🚀*${BUILD_STATUS}!*
\`Repo 📦:  ${REPOSITORY}\`
\`Branch 🏷:      ${BRANCH_NAME}\`
\`Version ✅:      ${VERSION}\`
\`Autor ✅:      ${GIT_USER}\`
*Commit Msg 💭:*
_${COMMIT}_
[Job Log view here 🤟](${BUILD_URL})
\`-------------------------------------\`
"
