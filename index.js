//Creating a websocket connection to the mqtt server
var client = mqtt.connect('ws://test.mosquitto.org:8080/'); //More at https://test.mosquitto.org/

//Subscribing to the topic
client.subscribe("yasser")

//Waiting for publishs in topic
client.on('message', function (topic, payload) {
	alert('Welcome ' + payload);
	client.end()
})

//Publishing in topic
client.publish('yasser', 'Yasser Veleda de Andrade');