import { eventHandler as _event } from './node_modules/eventUtil.js';

var btn = document.getElementById('btn');
console.log(_event);

function doclick() {
    console.log(this);
    _event.remove(btn, 'click', doclick);
}
_event.add(btn, 'click', doclick);