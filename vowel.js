const countv=(str)=>{
    let count=0;
    for(let i of str){
        if( i==='a'||  i==='e'|| i==='i'|| i==='o'||i==='u'){
            count+=1;
        }
    }
    console.log(count);

}
