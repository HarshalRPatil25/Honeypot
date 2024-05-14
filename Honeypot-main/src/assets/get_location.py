import requests

def get_location():
    try:
        response = requests.get('https://ipinfo.io/json')
        data = response.json()
        location = data.get('loc')
        if location:
            latitude, longitude = location.split(',')
            return float(latitude), float(longitude)
    except Exception as e:
        print("Error:", e)
    return None

if __name__ == "__main__":
    location = get_location()
    if location:
        print("Latitude:", location[0])
        print("Longitude:", location[1])
    else:
        print("Failed to retrieve location.")
