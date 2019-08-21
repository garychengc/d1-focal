const  args = process.argv;
const newArr = args.slice(2,);
let output = '';
for (let i = 0; i < newArr.length; ++i) {
  output = output + newArr[i].slice(1, ) + newArr[i][0] + 'ay ';
}
console.log(output);