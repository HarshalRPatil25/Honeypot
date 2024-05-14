#!/bin/bash

# Function to get the public IP address
get_public_ip() {
    echo $(curl -s https://api.ipify.org)
}

# Function to get latitude and longitude from IP address
get_location() {
    local ip_address="$1"
    local location_info=$(curl -s "https://ipinfo.io/${ip_address}/json")

    if [[ -z "$location_info" ]]; then
        echo "Error: Unable to fetch location information for IP $ip_address."
        exit 1
    fi

    local latitude=$(echo "$location_info" | jq -r '.loc | split(",")[0]')
    local longitude=$(echo "$location_info" | jq -r '.loc | split(",")[1]')
    
    if [[ -z "$latitude" || -z "$longitude" ]]; then
        echo "Error: Could not parse latitude or longitude."
        exit 1
    fi

    echo "{\"ip\": \"$ip_address\", \"latitude\": \"$latitude\", \"longitude\": \"$longitude\"}"
}

# Function to send data to MongoDB
send_to_mongodb() {
    local mongodb_url="$1"
    local data="$2"
    local result=$(echo "$data" | mongoimport --uri="$mongodb_url" --collection=locations --jsonArray --quiet)

    if [[ $? -ne 0 ]]; then
        echo "Error: Failed to send data to MongoDB."
        exit 1
    fi
}

# Main function
main() {
    local public_ip=$(get_public_ip)

    if [[ -z "$public_ip" ]]; then
        echo "Failed to retrieve public IP address."
        exit 1
    fi

    local location_data=$(get_location "$public_ip")
    local mongodb_url="mongodb://dipakmali100:dipak123@host:port/database"  # Update with your MongoDB connection string
    send_to_mongodb "$mongodb_url" "$location_data"

    echo "Data sent to MongoDB:"
    echo "$location_data"
}

# Run the main function
main
