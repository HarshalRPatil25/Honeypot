# Function to retrieve public IP address
get_public_ip() {
    curl -s ifconfig.me
}

# Function to send email with IP address
send_email() {
    local ip_address="$1"
    local recipient_email="$2"
    local subject="Public IP Address"
    local body="The public IP address of the device is: $ip_address"

    echo "$body" | mail -s "$subject" "$recipient_email"
}

# Main function
main() {
    local ip_address=$(get_public_ip)
    # local recipient_email="malidipakb2002@gmail.com"  # Change this to the recipient's email address
    local recipient_email=$(mail_id)  # Change this to the recipient's email address

    if [ -n "$ip_address" ]; then
        send_email "$ip_address" "$recipient_email"
        echo "Email sent with IP address: $ip_address"
    else
        echo "Failed to retrieve IP address."
    fi
}

# Run the main function
main
