const hourKey = document.getElementById("hour");
            const minKey = document.getElementById("min");
            const secKey = document.getElementById("sec");
            const digital = document.getElementById("digital");
    
            setInterval(setClock, 1000);
    
    
            function setClock() {
                const currentDate = new Date();
                const hours = currentDate.getHours();
                const minutes = currentDate.getMinutes();
                const seconds = currentDate.getSeconds();
    
    
                const h = hours * 30 + minutes / 2;
                const m = minutes * 6;
                const s = seconds * 6;
                
                hourKey.style.transform = 'rotate(' +h +'deg)';
                minKey.style.transform = 'rotate(' +m +'deg)';
                secKey.style.transform =  'rotate(' +s +'deg)';
                digital.innerHTML = hours +':'+ minutes +':'+ seconds ;
            }
            setClock()