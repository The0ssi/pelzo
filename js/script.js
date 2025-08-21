const filmTrack = document.getElementById('filmTrack');
    const placeholders = [
      'https://i.pinimg.com/736x/8c/11/a2/8c11a23f8b339ad1cfc99333dcf90400.jpg',
      'https://i.pinimg.com/1200x/49/67/d6/4967d68a84667eb0310a669ede7b2a88.jpg',
      'https://i.pinimg.com/1200x/98/68/de/9868de862006b4801c4e3d8c01c51532.jpg',
      'https://i.pinimg.com/736x/a4/b1/ad/a4b1ad8d9cbf6ca75b23dbd4aedbe988.jpg'
    ];
    function makeFrame(src, i){
      const f = document.createElement('div');
      f.className = 'frame';
      const img = document.createElement('img');
      img.src = src; f.appendChild(img);
      const label = document.createElement('span');
      label.className = 'film-label';
      label.textContent = 'KODAK E100';
      f.appendChild(label);
      return f;
    }
    const items = [];
    for (let r=0; r<2; r++){
      placeholders.forEach((src,i)=>{
        const f = makeFrame(src,i);
        filmTrack.appendChild(f);
        items.push(f);
      });
    }
    let x = 0; const speed = 0.15; // mais devagar
    function tick(){
      x -= speed;
      const w = items.reduce((acc,el)=> acc + el.offsetWidth + 18, 0) / 2;
      if (Math.abs(x) >= w) x = 0;
      filmTrack.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // flash ao clicar na camera
    const flash = document.getElementById('flash');
    const cam = document.getElementById('cameraCenter');
    cam.addEventListener('click', ()=>{
      flash.style.opacity = 1; flash.style.transition = 'opacity 180ms ease';
      requestAnimationFrame(()=>{ flash.style.opacity = 0; });
    });