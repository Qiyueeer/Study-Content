
/* load places which from function renderPlaces(places)*/
window.onload = () => {
     let places = staticLoadPlaces();
     /* Run function staticLoadPlaces() first*/
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            /* name */
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    /* creat the a-scene and it will set up a- scene in the main document  */
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        /* copy the lat and lng in staticLoadPlaces()*/

        let model = document.createElement('a-entity');
         /* Creat 'a-entity' and it will set up a-entity in the main document */
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');/*Scale 0.5:0.5:0.5 /*
        /* add the 3D model in coordinate and define the 'a-entity' Shows in index.html   */

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });
        /*  add to listener. */

        scene.appendChild(model);
    });
}
