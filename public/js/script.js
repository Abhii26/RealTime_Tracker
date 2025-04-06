const socket = io();//because of this the connection request goes to the backend

if(navigator.geolocation){ // navigator is prebuild in window object
    navigator.geolocation.watchPosition((position)=> {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude }); //emitting the event from the front-end with the name send-location
    }, (error) => {
        console.error(error);
    }, {
        enableHighAccuracy : true,
        timeout : 5000, // 5 sec baad firse check krega
        maximumAge : 0  // koi bhi save data (caching) nhi lena, take data immediately anytime you need data you actually go and take data, don't pick cach data

    });
}

const map = L.map("map").setView([0,0], 20);  //L.map("map") -> so by this you are basically saying give me your location
//setView([0,0], 10) -> first set the view then pass [0,0] longitude and lattitude and [0,0] define center of the world, 10 -> zoom level is upto 10x

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution: "Abhishek The Coder"}).addTo(map)  //L.tileLayer() is used to get the map
// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png -> {s},{z},{x},{y} is a dynamic value 


const marker = {};

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude]);
    if (marker[id]) {
        marker[id].setLatLng([latitude, longitude]);

    } else {
        marker[id] = L.marker([latitude, longitude]).addTo(map);
        
    }

    socket.on("user-disconnected", (id) => {
        if(maker[id]){
            map.removeLayer(marker[id]);
            delete maker[id];
        }
    })

});