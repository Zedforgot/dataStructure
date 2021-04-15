/*排序算法*/
    // console.log(ar100)
    var ar=[]
    for(var i=0;i<100000;i++){
        ar.push(parseInt((Math.random()*100)))
}
function ArrayList(...num){
    this.arr=[...num]
    // 置换方法
    ArrayList.prototype.swip=function(m,n){
        var a=this.arr[m]
            this.arr[m]=this.arr[n]
            this.arr[n]=a
    }
// 冒泡排序 从前往后逐个把最大的冒泡到最后，冒一次确定一次最后一个数，往前移一个位置
    ArrayList.prototype.bubbleSort=function(){
     var time1=new Date().getTime()
        for(var i=this.arr.length-1;i>0;i--){//轮数
            for(var r=0;r<i;r++){
                if(this.arr[r]>this.arr[r+1]){//比较效率为N^2
                    this.swip(r,r+1)//交换效率为N^2
                }
            }
        }
        var time2=new Date().getTime()
// console.log(time2-time1,'bubbleSort')
    }
// 选择排序 从前往后每个元素位的元素与后面的元素依次比较，确定最小值，移位到该位置
 ArrayList.prototype.selectSort=function(){
     for(var i=0;i<this.arr.length-1;i++){
         var smallEl=i
        for(var r=i+1;r<this.arr.length;r++){
            if(this.arr[smallEl]>this.arr[r]){//比较效率为N^2
                smallEl=r
            }
        }
        this.swip(smallEl,i)//交换效率为N
     }
     
}
//插入排序 从第二个元素位开始向后，其元素与前面的所有元素作比较，将小的元素插入到前面元素
 ArrayList.prototype.insertSort=function(){
    for(var i =1;i<this.arr.length;i++){
        var temp=this.arr[i]
        var index=i
            while(index>0&&temp<this.arr[index-1]){
                //将i元素与前者元素依次作比较，直到被比较元素位置小于0，或者已经找到比较元素对应位置
                this.arr[index]=this.arr[index-1]
                index--
            }
            this.arr[index]=temp
    }
 }
//希尔排序
 ArrayList.prototype.shellSort=function(){
    var num=Math.floor(this.arr.length/2)
    while(num>=1){
        for(var j=0;j<num;j++){
            for(var i =j+num;i<this.arr.length;i+=num){
        var temp=this.arr[i]
        var index=i
            while(index>0&&temp<this.arr[index-num]){
                //将i元素与前者元素依次作比较，直到被比较元素位置小于0，或者已经找到比较元素对应位置
                this.arr[index]=this.arr[index-num]
                index-=num
            }
            this.arr[index]=temp
    }
    }
    num=Math.floor(num/2)
    }
 }
//  快速排序，效率最高的排序
ArrayList.prototype.quickSort=function(ary=this.arr){
if(ary.length<=1){
    return ary
}
    //获取枢纽元素
    var left=ary[0]
var right=ary[ary.length-1]
var center=ary[Math.floor((ary.length-1)/2)]
var newArr=[left,center,right]
for(var i=1;i<newArr.length;i++){
    var el=newArr[i]
    var index=i
    while(arr[index-1]>el&&index>0){
        newArr[index]=newArr[index-1]
        index--
    }
    newArr[index]=el
}
// 建立左右数组，归集左右位置
var leftAry=[]
var rightAry=[]
ary.forEach(element => {
    if(element>newArr[1]){
        rightAry.push(element)
    }else if(element<newArr[1]){
        leftAry.push(element)
    }
});
// 得到该元素的正确位置
return ArrayList.prototype.quickSort(leftAry).concat(newArr[1],ArrayList.prototype.quickSort(rightAry))
}
    ArrayList.prototype.log=function(){
        return this.arr.join('-')
    }
    }
var arr=new ArrayList(23,1,9,76,21,3,19)
// arr.bubbleSort()//44219 "bubbleSort"
// arr.selectSort()//15594 "selectSort"
arr.insertSort()//11415 "insertSort"
// arr.shellSort()//214 "shellSort1"
 console.log(arr.log())
 console.log(arr.quickSort())