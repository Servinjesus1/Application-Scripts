#!/bin/bash

# Function to calculate the hash of a file
calculate_hash() {
    gitB hash-object --no-filters "$1"
}

# Function to check if the output of git log is more than one line long
log_is_single_line() {
    local log_line_count=$(gitB log --find-object="$1" | wc -l)
    # echo "DEBUG: Number of lines in log for $1: $log_line_count"
    [[ $log_line_count -eq 0 ]]
}

# Check if the input file exists
if [ ! -f "$1" ]; then
    echo "Input file not found!"
    exit 1
fi

# Read the list of files from the input file
while IFS= read -r file; do
    # Calculate the hash of the file
    file_hash=$(calculate_hash "$file")
    
    # Check if the output of git log is more than one line long
    if log_is_single_line "$file_hash"; then
        echo "File: $file, Hash: $file_hash"
    fi
done < "$1"