#!/bin/bash

# Find all files in the directory
find . -type f | while read -r file; do
    # Calculate the hash of the file
    file_hash=$(git hash-object "$file" | cut -c 1-7)
    
    # Check if the calculated hash matches the given hash
    if [ "$file_hash" = "$1" ]; then
        # Print the relative path of the file
        echo "$(realpath --relative-to="$directory" "$file")"
    fi
done
