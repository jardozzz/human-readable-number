module.exports = function toReadable (number) {
    const ones=["","one","two","three","four","five","six","seven","eight","nine",'ten'];
  const teens=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  if(number==0){
      return("zero")
  }
  else if(number<11){
      return (ones[number])
  }
  else if (number<20){
      return(teens[number-11])}
  else if (number<100){
        return(tens[Math.floor(number/10)-2]+" "+ones[number%10]).trim()
      }
      else {
        return(ones[Math.floor(number/100)]+" hundred "+(number%100!=0? toReadable(number%100):"")).trim()
      }
  }
    
