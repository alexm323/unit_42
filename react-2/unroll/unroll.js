const square = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ];

function unroll(squareArray) {

    let unrolledArr = [];
    let unrolledArr2 = [];
    // want to spiral around the matrix so that we can interact with each value and place it into our unrolled array
    if(squareArray.length === 0){
        return;
    }else{
        let tempArr = []
        // the arrays in the matrix should be split up evenly 
        // want to grab the whole top row every time 
        unrolledArr = [...unrolledArr,squareArray.shift()]
        // to grab the last 'column' we can just pop off the last element and use that value to map it to our unrolled array 
        unrolledArr = [...unrolledArr,squareArray.map(row => row.pop())]
        // we should now have the top row and the right column 
        // now we want the remaining elements in the bottom row but backwards 
        unrolledArr = [...unrolledArr, squareArray.pop().reverse()]
        // now we want to grab the left column which means we map again but we need it backwards so we map the whole thing and then reverse it before adding it to our unrolledArr
        unrolledArr = [...unrolledArr,squareArray.map(row => row.shift()).reverse()]

        unrolledArr2.push(unrolledArr.flat())
        unroll(squareArray)
    }
    
    console.log(unrolledArr2)
    return unrolledArr2
}
unroll(square)
// i feel like im so close to the answer , but I am not able to think of a clever solution for this 
// i get 2 arrays back with the right numbers but I am not connecting them as I would like 

module.exports = unroll;
