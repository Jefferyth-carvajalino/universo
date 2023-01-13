importScripts("https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js");
var cacheName = 'Universo-pwa';
var filesToCache = [
	'/'
];

// Give the service worker access to Firebase Messaging.


// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
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

// Retrieve an instance of Firebase Data Messaging so that it can handle background messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
	// const notificationTitle = payload.data.title;
	// const notificationOptions = payload.data;

	const { image, sound, body, icon, title } = payload.notification;
	const notificationTitle = title;


	const notificationOptions = {
		title,
		body,
		icon,
		image,
		sound,
		vibrate: [125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600]
	};

	return self.registration.showNotification(
		notificationTitle,
		notificationOptions
	);
});

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
	this.skipWaiting();
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
			.then(response => {
				return response || fetch(event.request);
			})
			.catch(() => {
				return caches.match('offline');
			})
	)
});



/* Serve cached content when offline */
// self.addEventListener('fetch', function (e) {
// 	e.respondWith(
// 		caches.match(e.request).then(function (response) {
// 			return response || fetch(e.request);
// 		})
// 	);
// });


