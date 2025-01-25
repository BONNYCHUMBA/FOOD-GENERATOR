function tform () {
        const a = document.querySelector('.D3');
        a.style.display = 'none';

        const b = document.querySelector('.fact');
        b.style.display = 'none';

        document.body.style.background="url(wp10574342.webp)";

        const c = document.querySelector(".button");
        c.style.display= 'none';

        const d= document.querySelector(".hidden");
        d.style.display='block';
}

        let SELECTION_1 = ['UGALI', 'RICE', 'CHAPO', 'GITH'];
        let SELECTION_2 = ['BEEF', 'CHICKEN', 'BEANS', 'EGGS', 'FISH', 'NDENGU', 'MINJI', 'VIAZI', 'KAMANDE'];
        let GREENS = ['SPINACH', 'KALE', 'KIENYEJI','CABBAGE'];
        
        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        
        function combineWithGreens(selection1, selection2, greens) {
            let item1 = getRandomElement(selection1);
            let item2 = getRandomElement(selection2);
            let combination = item1 + ' and ' + item2;
            if (Math.random() < 0.5) {
                combination += ' with ' + getRandomElement(greens);
            }
            return combination;
        }
        
        let result = combineWithGreens(SELECTION_1, SELECTION_2, GREENS);
        




function generate_food(){
        document.body.style.background="url(wp11872788.jpg)";
        const e= document.querySelector(".hidden");
        e.style.display='none';
        const f= document.querySelector(".hidden-2");
        f.style.display='block';            
        food=document.getElementById(`food`);
        food.textContent=result;
}       


function re_run (){
              
        let SELECTION_1 = ['UGALI', 'RICE', 'CHAPO', 'GITH'];
        let SELECTION_2 = ['BEEF', 'CHICKEN', 'BEANS', 'EGGS', 'FISH', 'NDENGU', 'MINJI', 'VIAZI', 'KAMANDE'];
        let GREENS = ['SPINACH', 'KALE', 'KIENYEJI','CABBAGE'];
        
        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        
        function combineWithGreens(selection1, selection2, greens) {
            let item1 = getRandomElement(selection1);
            let item2 = getRandomElement(selection2);
            let combination = item1 + ' and ' + item2;
            if (Math.random() < 0.5) {
                combination += ' with ' + getRandomElement(greens);
            }
            return combination;
        }
        let result = combineWithGreens(SELECTION_1, SELECTION_2, GREENS);
        

        food=document.getElementById(`food`);
        food.textContent=result;

}
