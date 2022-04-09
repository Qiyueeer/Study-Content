/* load places which from function renderPlaces(places)*/
window.onload = () => {
  render();
  /* function render() */
};

const models = [
  /* Creat models */
  {
    url: './assets/myModel/scene.gltf',
    /*website*/
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },


];

let modelIndex = 0;
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute('position', model.position);
  }
  entity.setAttribute('gltf-model', model.url);
};
function render() {
    const scene = document.querySelector('a-scene');
  /* */



  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);s
  });
}


/* 1.we can handle a model's scale, and rotation in the 7 lines const Models change the Scale and rotation
   2.Directly add an additional model, which I have done. And we can select different Model
   3.addEventListener('loaded', () => { window.dispatchEvent()} I can use this kind of code to add the listener.
*/
