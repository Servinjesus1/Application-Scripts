#!/bin/bash
# Delete git tracked files only
# Leaves untracked files alone
# After running, `.git` may be moved or deleted.
git rm "*"
# To undo, run `git restore "*"`