#!/bin/bash

# Read the contents of files.txt and remove each file
# while IFS= read -r filename; do
#     # Remove the file
#     rm "./$filename"
#     echo "Removed $filename"
# done < ~/Downloads/files.txt

while IFS= read -r filename; do
    # Compute hash of the file
    hash=$(gitB hash-object --no-filters "$filename")
    # Print the hash
    echo "Hash of $filename: $hash"
    # Run git log to find the commit corresponding to the hash
    gitB --no-pager log --raw --pretty=oneline -b f875dcb --find-object="$hash"
    echo "----------------------------------------------"
done < ~/Downloads/files.txt

# echo "Read all files."

# Read the contents of files.txt and process each filename
# while IFS= read -r filename; do
#     # Find all occurrences of the file with the given name
#     # finds=$(find . -iname "$filename")

#     # Iterate over each path found
#     # while IFS= read -r path; do
#         # Print the original path
#     echo "Original path: $path"

#     # Remove "UNSTAGED/" from the path
#     newpath="${path//UNSTAGED\//}"

#     # Print the modified path
#     mkdir -p "$(dirname "$newpath")"
#     mv -i "$path" "$newpath"
#     echo "Moved to: $newpath"

#     git add "$newpath"
#     echo "Added to git."

#         # Run git log to find the commit corresponding to the file
#         # Example: git log --find-object="$newpath"
#     # done <<< "$finds"

#     echo "----------------------------------------------"
# done < ~/Downloads/files.txt