#!/bin/bash
# Script to automate commits with meaningful messages

# List of commit messages for projects
commit_messages=(
    "readme add new projects"
    "updated readme"
)

# Create a dummy file to modify
FILE_NAME="dummy.txt"

# Check if file exists, else create it
if [ ! -f "$FILE_NAME" ]; then
    echo "Initializing dummy file" > "$FILE_NAME"
    git add "$FILE_NAME"
    git commit -m "Initial commit for automation"
fi

# Loop through commit messages and create commits
for i in "${!commit_messages[@]}"
do
    echo "Update for ${commit_messages[i]}" >> "$FILE_NAME"  # Modify the file
    git add "$FILE_NAME"                                    # Stage changes
    git commit -m "${commit_messages[i]}"                   # Create commit
    echo "Created commit: ${commit_messages[i]}"
done

# Push changes to GitHub
git push origin main
