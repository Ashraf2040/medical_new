#!/bin/bash

# Set the repository URL
REPO_URL="git@github.com:Amubasshir/medical.git"

# Increase buffer size
git config --global http.postBuffer 524288000

# Increase timeout settings
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

# Change the remote URL to SSH
git remote set-url origin $REPO_URL

# Attempt to pull with the new settings
git pull
