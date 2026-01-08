# Use MQTTs protocol to transfer data to AWS IoT

## Register your device on the AWS IoT page to obtain the client certificate and private key.

- Click on [Things](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/thinghub) to enter the page.

```{figure} ../../media/awsiot-things.png
:align: center
```

- Click on `Create Things` to go to the creation page.

```{figure} ../../media/awsiot-things1.png
:align: center
```

- Click `Next` to go to Specify things properties

```{figure} ../../media/awsiot-things2.png
:align: center
```

- After entering the Thing name, click `Next` to proceed to Configure device certificate.

```{figure} ../../media/awsiot-things3.png
:align: center
```

- Click `Next` to go to Attach policies to certificate

```{figure} ../../media/awsiot-things4.png
:align: center
```

- Click `Create policy` to enter the Create policy page, enter a policy name, copy the content below into the JSON input box, and click `Create` to complete the creation.

```{code-block} json
:caption: Policy document
:emphasize-lines: 2,3
:lineno-start: 1

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Publish",
        "iot:Receive",
        "iot:PublishRetain"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:Subscribe",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:Connect",
      "Resource": "*"
    }
  ]
}

```

```{figure} ../../media/awsiot-things5.png
:align: center
```

- Return to the `Attach policies to certificate` page, check the box for the policy you created, and click `Create Things` to complete the creation process.

```{figure} ../../media/awsiot-things6.png
:align: center
```

- First download the certificate and private key, then click `Done` to complete the Create Things process.

```{figure} ../../media/awsiot-things7.png
:align: center
```
-


## Configure Scanner

### Set MQTT mode
```{figure} ../../media/AT2BMQTTMODE3D4.png
:align: center
```


### Set MQTT Port to 8883


```{figure} ../../media/AT2BMQTTPORT3D8883.png
:align: center
```


### Set Client Certificate
 
```{raw} html

    <iframe src="../../plugins/wifi-mqtts-Certificate.html" height="700px" width="100%"></iframe>

```

``` {tip}
If the QR code is too large, we recommend taking a screenshot and sending it to your phone. Then, turn your phone screen brightness to maximum before scanning it with a barcode scanner.
```


### Set Private Key

```{raw} html

    <iframe src="../../plugins/wifi-mqtts-PrivateKey.html" height="700px" width="100%"></iframe>

```

``` {tip}
If the QR code is too large, we recommend taking a screenshot and sending it to your phone. Then, turn your phone screen brightness to maximum before scanning it with a barcode scanner.
```

### Configure WiFi and Broker

``` {tip}
After entering the corresponding WiFi information and service address, the scanner will actively connect to AWS IoT. Once the connection is successful, the green indicator light on the scanner will stay on.
```

```{raw} html
    <iframe src="../../plugins/wifi-mqtts.html" height="1000px" width="100%"></iframe>
```

## MQTT test client
- Click on [MQTT test client](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/test) to enter the page.
- After entering the topic you want to subscribe to and clicking `Subscribe`, use the barcode scanner to scan the barcode and receive the data from the scanner.

```{figure} ../../media/awsiot-test.png
:align: center
```

