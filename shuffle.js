
export default function randomnize(arr , limit){

    const result = [...arr];

    for(let i = arr.length - 1 ; i > 0 ; i--){

        let j = Math.floor(Math.random() * (i + 1));

        let swap;

        swap = result[i];
        result[i] = result[j];
        result[j] = swap;
    }

    return result.slice(0 , limit);
}

