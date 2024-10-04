//document.getElementById("theme").addEventListener('change', temaSeleccionado());

//Functions 
//function temaSeleccionado(){
//    let x = document.getElementById("theme").value;

//   let i = 1;
//    for (let i = 1; i <= 3; i++){
//        if(x != 'sin'){
//            document.getElementById('imagen'+i).src = '.img/' + x + i;
//        }
//        else{
//            document.getElementById('imagen'+i).src= '.img/' + x + '.jpg';
//        }
//    }
//}


document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const recipientName = document.getElementById('recipient-name');
    const cardTitle = document.getElementById('card-title');
    const cardBody = document.getElementById('card-body');
    const divider = document.getElementById('divider');
    const cardImage = document.getElementById('card-image');
    const borderFrame = document.getElementById('border-frame');
    const imageOptionsContainer = document.querySelector('.image-options'); 
    const themeSelect = document.getElementById('theme');
    const dividerColorInput = document.getElementById('divider-color');
    const frameOptions = document.querySelectorAll('input[name="frame"]');
    const recipientInput = document.getElementById('recipient-input');
    const titleInput = document.getElementById('title-input');
    const bodyInput = document.getElementById('body-input');
    const textColorInput = document.getElementById('text-color');
    const showButton = document.getElementById('show-button'); 

    // Función para actualizar las imágenes según el tema
    function updateImageOptions(images) {
        imageOptionsContainer.innerHTML = ''; 
        images.forEach((imageSrc, index) => {
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'image';
            radioInput.value = `image${index + 1}`;

            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = `Imagen ${index + 1}`;

            const label = document.createElement('label');
            label.appendChild(radioInput);
            label.appendChild(imgElement);

            radioInput.addEventListener('change', () => {
                cardImage.src = imageSrc;
            });

            imageOptionsContainer.appendChild(label);
        });
    }

    // Cambiar el tema de la tarjeta 
    function applyTheme(theme) {
        switch (theme) {
            case 'tema1':  // Tema Místico
                card.style.backgroundColor = '#E8F0FE'; 
                card.style.color = '#333'; 
                updateImageOptions([
                    'img/img1.jpeg',
                    'img/img3.jpeg',
                    'img/img4.jpeg'
                ]);
                break;
            case 'tema2':
                card.style.backgroundColor = '#FFF0E0'; 
                card.style.color = '#444'; 
                updateImageOptions([
                    'img/imgt2.1.jpeg',
                    'img/imgt2.2.jpeg',
                    'img/imgt2.3.jpeg'
                ]);
                break;
            case 'tema3':
                card.style.backgroundColor = '#F0FFF4'; 
                card.style.color = '#555'; 
                updateImageOptions([
                    'img/imgt3.1.jpeg',
                    'img/imgt3.2.jpeg',
                    'img/imgt3.3.jpeg'
                ]);
                break;
            default:
                card.style.backgroundColor = '#fff'; 
                card.style.color = '#333'; 
        }
    }

    themeSelect.addEventListener('change', () => {
        applyTheme(themeSelect.value);
    });

    // Inicializar con el tema por defecto al cargar la página
    applyTheme(themeSelect.value);

    // Cambiar el color del divisor 
    dividerColorInput.addEventListener('input', () => {
        divider.style.backgroundColor = dividerColorInput.value;
    });

    // Cambiar el marco de la tarjeta 
    frameOptions.forEach((option) => {
        option.addEventListener('change', () => {
            const selectedFrame = option.value;
            switch (selectedFrame) {
                case 'frame1':
                    borderFrame.style.border = '3px solid #4b918a'; 
                    card.style.backgroundImage = "url('./img/marco2.jpeg')"; 
                    break;
                case 'frame2':
                    borderFrame.style.border = '3px solid #b35d77'; 
                    card.style.backgroundImage = "url('./img/marco4.jpeg')"; 
                    break;
                case 'frame3':
                    borderFrame.style.border = '3px solid #f5b700'; 
                    card.style.backgroundImage = "url('./img/marco1.jpeg')"; 
                    break;
                default:
                    borderFrame.style.border = '3px solid #4b918a'; 
                    card.style.backgroundImage = ''; 
            }
        });
    });

    recipientInput.addEventListener('input', () => {
        recipientName.textContent = recipientInput.value || 'Nombre del destinatario';
    });

    titleInput.addEventListener('input', () => {
        cardTitle.textContent = titleInput.value || 'Título de la carta';
    });

    bodyInput.addEventListener('input', () => {
        cardBody.textContent = bodyInput.value || 'Texto del cuerpo de la carta.';
    });

    textColorInput.addEventListener('input', () => {
        recipientName.style.color = textColorInput.value;
        cardTitle.style.color = textColorInput.value;
        cardBody.style.color = textColorInput.value;
    });

    showButton.addEventListener('click', () => {
        const popupWindow = window.open('', '_blank', 'width=600,height=400');
        popupWindow.document.write(`
            <html>
                <head>
                    <title>Vista previa de la tarjeta</title>
                    <link rel="stylesheet" href="./css/style.css">
                </head>
                <body>
                    <div class="card-preview">
                        ${card.outerHTML}
                    </div>
                </body>
            </html>
        `);
        popupWindow.document.close();
    });
});
