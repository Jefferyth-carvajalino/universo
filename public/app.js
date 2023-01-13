
var config = {
	apiKey: "AIzaSyDJ8TemWWe-zZREc6H6V2JwFcY41agigvU",
	authDomain: "universopsiquico-bb79d.firebaseapp.com",
	projectId: "universopsiquico-bb79d",
	storageBucket: "universopsiquico-bb79d.appspot.com",
	messagingSenderId: "409434719585",
	appId: "1:409434719585:web:a1dd16a0aad8515eb43120",
	// measurementId: "G-HQ5DF186RS"
};
firebase.initializeApp(config);

function showNotification(obj) {

	Notification.requestPermission(function (result) {
		// console.log(result);
		if (result === 'granted') {
			navigator.serviceWorker.ready.then(function (registration) {
				//  const notificationTitle = obj.data.title;
				// const notificationOptions = obj.data;

				const { body, icon, title, image, sound } = obj.notification;
				const notificationTitle = title;


				const notificationOptions = {
					title,
					body,
					icon,
					image,
					sound,
					vibrate: [125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600]

				};

				registration.showNotification(notificationTitle, notificationOptions);
			});
		}
	});
}

// showNotification();

const messaging = firebase.messaging();


// Handle incoming messages
// messaging.onMessage(function (payload) {
//   console.log("Notification received: ", payload);
//   Cookies.set("notificationMessage", payload.data.payload, { expires: 1 });
//   toastr["info"](payload.notification.body, payload.notification.title);
// });

// console.log("hola");

messaging.onMessage((payload) => {
	showNotification(payload);
});

// Initialize the service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')

		.then(function (registration) {
			messaging.useServiceWorker(registration);

			// Request for permission
			messaging
				.requestPermission()
				.then(function () {
					// console.log("Notification permission granted.");


				})
				.catch(function (err) {
					// console.log("Unable to get permission to notify.", err);
				});
		});
}

