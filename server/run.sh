#!/bin/bash --login
# The --login ensures the bash configuration is loaded,
# enabling Conda.
set -euo pipefail
conda activate reddit_words
exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 main:app