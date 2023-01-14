const imglist = document.getElementById("imgList");
const alertZone = document.getElementById("alertZone");
const alertContent = document.getElementById("alertContent");
const imgContent = document.getElementById("imgContent");


(() => {
    const close = document.createElement('img');
    close.src = 'https://e7.pngegg.com/pngimages/406/834/png-clipart-computer-icons-encapsulated-postscript-close-angle-logo-thumbnail.png';
    close.style.width = '20px';
    close.style.position = 'relative';
    close.style.right = '20px';
    close.style.bottom = '280px';

    const imgDB = [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];

    const render = () => {
        const handleMouseClick = e => {
            show_img(e.target)
        };

        const handleCloseClick = e => {
            imglist.addEventListener("click", handleMouseClick);
            alertZone.innerHTML = '';
            document.body.style.background = 'white';
            imglist.style.opacity = '100%'
        };

        imglist.addEventListener("click", handleMouseClick);

        imgDB.forEach(e => {
            let temp = document.createElement('img');
            temp.src = e;
            temp.style.width = '80px';
            temp.style.height = '80px';
            imglist.appendChild(temp);
        })

        const show_img = (e) => {
            imglist.removeEventListener("click", handleMouseClick);
            alertZone.innerHTML = ``
            alertZone.style.textAlign = 'center';
            let tmp = document.createElement('img');
            tmp.src = e.src;
            tmp.style.width = '350px';
            tmp.style.height = '300px';
            tmp.style.borderRadius = '5px';
            alertZone.appendChild(tmp);
            imglist.style.opacity = '50%';
            document.body.style.background = 'rgba(0, 0, 0, .5)';
            close.addEventListener('click', handleCloseClick);
            alertZone.appendChild(close);
        }
    }

    render();

})();
