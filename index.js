window.onload = () => {
    colorRender();

}



document.getElementById("start").onclick = () => {isEqual(choosenColors,activeColors )};

let start = () => {
    document.getElementById("blue").classList.add("is-active");
}



const colors = ['blue','green','red','yellow'];
let activeColors = [];
let choosenColors = [];



let colorRender = () => {
    let ind = Math.floor(Math.random() * colors.length);

    document.getElementById(colors[ind]).classList.add("is-active");
    activeColors.push(colors[ind]);
    choosenColors = [];
    setTimeout(() => {document.getElementById(colors[ind]).classList.remove("is-active");}, 200);
    console.log(activeColors)
}
// activeColorsArray, choosenColorsArray

let isEqual = (currentLevel) => {

    if (activeColors[currentLevel] === choosenColors[currentLevel]) {
        if (choosenColors.length === activeColors.length){
        //   setTimeout(function () {
        //     colorRender();
        //   }, 1000);
        colorRender();
        }
      }
      else {
        activeColors = [];
      }

}    

const gameColors = document.getElementsByClassName('color');

const colorPressed = event => {
    choosenColors.push(event.target.id);

    console.log(activeColors)
    console.log(choosenColors)
    isEqual(choosenColors.length - 1)
}
    

for (let color of gameColors) {
    color.addEventListener("click", colorPressed);
  }









// let chooseColor = () => {
    
//     for (let color of gameColors) {
//         color.addEventListener("click", colorPressed);
//       }

// }


// TESTS!!!!!!!!!!!!!!!!!!!!!

// function Equal()
//     {
     
//      var a = [1, 2, 3, 5];
//      var b = [1, 2, 4, 5];
      
//       // If length is not equal
//     //   if(a.length!=b.length)
//     //    return "False";
//     //   else
//     //   {
       
//       // Comparing each element of array
//        for(let i=0;i<a.length;i++)
//        if(f[i]!=t[i]) {
//         // console.log(f[i]);
//         // console.log(t[i]);
//        return "False";
       

//        }return "True";
//     //   }
//     }
//     var v = Equal();
//     // console.log(v);

const compareArrays = (a, b) =>
 
  a.every((element, index) => element === b[index]);

  let kar = [];
  const f = ['blue','green','red','yellow'];
  
  const t = ['blue','green','yellow']; 

  kar = f.slice(0,t.length)

//   console.log(f.slice(0,t.length))
//   console.log(kar === t)
//   console.log(kar)
//   console.log(t)
//   f.copyWithin(2,0)
//   console.log(f.slice(0,t.length) === kar)

function Equal(a, b)
    {
    return a.join() == b.join();
    }

    // console.log(Equal(kar, t))





    // let newChoosenColorsArray = [];
    // const f = ['blue','green','red','yellow'];
  
    // const t = ['red','green','red'];   

    //     console.log(activeColorsArray)
    //     console.log(choosenColorsArray)

    // if (activeColorsArray[0] === choosenColorsArray[0]) {
    //     return true
    // }
    // else if (activeColorsArray[0] === choosenColorsArray[0] && activeColorsArray.length !== choosenColorsArray.length) {

    
        // let newChoosenColorsArray = activeColorsArray.slice(0,choosenColorsArray.length)

        // console.log(newChoosenColorsArray)
        // console.log(choosenColorsArray)

        // return JSON.stringify(newChoosenColorsArray) === JSON.stringify(choosenColorsArray) ? true : false;
    
        // let newChoosenColorsArray = activeColorsArray.slice(0,choosenColorsArray.length)

        // console.log(newChoosenColorsArray)
        // console.log(choosenColorsArray)
        // console.log(JSON.stringify(newChoosenColorsArray))
        // console.log(activeColors)

        // return JSON.stringify(newChoosenColorsArray) === JSON.stringify(choosenColorsArray) ? true : false;
    // }
    // else {
    //     return false
// }

    

//   console.log(f.splice(0,t.length))
//   console.log(kar === t)
//   console.log(kar)
//   console.log(t)
//   f.copyWithin(2,0)
//   console.log(f.splice(0,t.length) === kar)

// function Equal(a, b)
//     {
//     return a.join() == b.join();
//     }

//     console.log(Equal(kar, t))



// }



// if (activeColors[0] === choosenColors[0] && activeColors.length === choosenColors.length) {
    //     colorRender();
    // }
    // else if (activeColors.length !== choosenColors.length) {
    //     if (isEqual(activeColors, choosenColors) && activeColors.length === choosenColors.length) {
    //         colorRender();
    //         // chooseColor();
    //     }
    //     else {
    //         alert('false 104')
    //     }
    // }
    // // else if (isEqual(activeColors, choosenColors)) {
    // //     colorRender();
    // // }
    // // else if (activeColors.length !== choosenColors.length) {
    // //     // alert('ok')
    // // }
    // else if (activeColors[0] !== choosenColors[0]) {
    //     alert('false 114') 
    // }
    // else {
        
    //     alert('false 118')
    // }
    // // colorRender(); 
    // console.log(choosenColors)
    
// }

// console.log(choosenColors)
// console.log(activeColors)

  