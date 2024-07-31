
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.10, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('brain-container').appendChild(renderer.domElement);

// Load the 3D brain model
const loader = new THREE.GLTFLoader();
loader.load('../Media/model.glb', function(gltf) {
    const brain = gltf.scene;
    scene.add(brain);
    const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(ambientLight);
    scene.add(directionalLight);

    /*
    const nlpPart = brain.getObjectByName('NLP');
    const imagePart = brain.getObjectByName('Image');
    const generativePart = brain.getObjectByName('GenerativeAI');

    nlpPart.userData = { URL: "gpt.html" };
    imagePart.userData = { URL: "aguacate.html" };
    generativePart.userData = { URL: "spotify.html" };*/



    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseClick(event) {
        
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(brain.children, true);

        if (intersects.length > 0) {
            console.log("Click")
            const object = intersects[0].object;
            if (object.userData.URL) {
                window.location.href = object.userData.URL;
            }
        }
    }

    window.addEventListener('click', onMouseClick, false);
    
    // Set camera position and animate the scene
    camera.position.z = 5;
    camera.position.y = 2;
    camera.position.x = 0;
    function animate() {
        requestAnimationFrame(animate);
        brain.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function(error) {
    console.error(error);
});
