const dbUrl = 'https://join-mb-default-rtdb.europe-west1.firebasedatabase.app/';
let allUserCredential = [];
let currentUser = '';


let contacts = [];
let tasks = [];
let allSubTasks = [];
let category = ['User Story', 'Technical Task'];
let assignedTemplate = null;
let currentContact = null;
let dragElement = null;
let draggableArea = null;