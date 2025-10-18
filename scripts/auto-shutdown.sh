#!/bin/bash
# Auto-shutdown script for development environment
# Run this via cron or AWS Lambda

# Terminate environment at night (adjust timezone as needed)
current_hour=$(date +%H)
if [ $current_hour -ge 22 ] || [ $current_hour -le 7 ]; then
    eb terminate --force
fi
