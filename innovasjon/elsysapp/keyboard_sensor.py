"""

keyboard_sensor.py


This file repeatedly gets data from the user and sends it to a remote server using HTTP.

It also retrieves CSRF-cookies from the server to be used when sending.


05.10.2020


Christoffer-Robin Vaksdal

chris.vaksdal@gmail.com

"""



import json

import requests



SITE_URL = "http://127.0.0.1:8000/elsysapp/sensor/" # Where to send data.



# Returns user input as int. If blocking, repeat until success.

def getSensorID():
    sensor_id = [1,2,3]
    return sensor_id



def getSensorData():
    return [2,4,2]


def getCookies():

        # Performs GET-request and returns cookies in response.

        return requests.get(SITE_URL).cookies





if __name__ == "__main__":
        data = {}

        cookies = getCookies()

        csrf_token = cookies["csrftoken"]

        headers = {'content-type': 'application/json', "X-CSRFToken": csrf_token}       # Add content-type and csrf-token to headers.


        data = { "sensorID": getSensorID() }    # Dictionary for holding data to be sent.


        for i in range(10):     # Repeatedly send data to remote server via POST-request.

                data["sensorData"] = getSensorData()


                response = requests.post(SITE_URL, data=data, cookies=cookies, headers=headers)  # Send data to server.


                if(response.status_code == 200):

                        print("Hurra! Dataen er sendt.")

                else:

                        print("Noe gikk galt.")

                        print("HTTP-Status: {}\n".format(response.status_code))

