/*栈结构*/
function Stack(){
    this.items=[]
    //入栈
    Stack.prototype.enter=function(item){
      this.items.push(item)
    }
    //出栈
    Stack.prototype.out=function(){
      return this.items.pop()
    }
    //  获取栈顶元素
     Stack.prototype.getTop=function(){
      return this.items[this.items.length-1]
    }
    //栈元素个数
    Stack.prototype.size=function(el){
    return this.items.length
  }
    //判断是否空栈
     Stack.prototype.isEmpty=function(){
      return this.items.length===0
    }
     //输出栈
     Stack.prototype.log=function(){
      var str='';
      while(!this.isEmpty()){
      str+=this.out()
      }
     }
  }
/*队列结构*/
function Queue(){
  this.items=[]
  //入队列
  Queue.prototype.enter=function(el){
    this.items.push(el)
  }
  //出队列
  Queue.prototype.out=function(el){
    return this.items.shift(el)
  }
  //队列第一个元素
  Queue.prototype.getFirst=function(el){
    return this.items[0]
  }
  //队列元素个数
  Queue.prototype.size=function(el){
    return this.items.length
  }
  //判断队列是否为空
  Queue.prototype.isEmpty=function(el){
    return this.items.length===0
  }
 //打印队列
 Queue.prototype.log=function(){
    return this.items.reduce((str,item)=>{
      return str+item+' '
    },'')
  }  
}

//轮流数数游戏，数个人围成圈按顺序从0开始数数，数到某个数退出人群，下个接着从0数，得出最后一个人
function passGame(personList,num){
  // 创建栈
var q=new Queue()
//将personList入栈
for(let i=0;i<personList.length;i++){
  q.enter(personList[i])
}
//开始数数字（入栈出栈）
  while(q.size()>1){
    for(let i=1;i<num;i++){
      q.enter(q.out())
    }
    q.out()//数到num，栈内num位(第一位)出栈
  }
  return q.log()
}
console.log(passGame(['a','b','c','d'],2))

/*链表结构*/
function linkList(){
  this.head=null
  this.length=0
  
  function linkNode(data){
  this.data=data
  this.next=null
}
  //增加节点
  linkList.prototype.append=function(data){
      var node=new linkNode(data)
    if(this.length===0){//如果链表长度为空，代表此节点是第一个节点，让head指向此节点
      this.head=node
    }else{//如果链表长度不为空，代表此节点不是第一个节点，让链表中最后一个节点中next指向此节点
      //找链表中最后一个节点
      var currentNode=this.head
      while(currentNode.next){//当currentNode的next为空，说明当前currentNode是最后一个节点
        currentNode=currentNode.next
      }
      currentNode.next=node
    }
this.length++//链表长度+1
  }
  //输出链表
  linkList.prototype.log=function(){
  var str=''
  var currentNode=this.head
  while(currentNode){
    str+=currentNode.data+' '
    currentNode=currentNode.next
  }
  return str
}
  //插入节点
  linkList.prototype.insert=function(position,data){
    var node=new linkNode(data)
    if(position<0||position>this.length){
      return
    }else if(position===0){
    //插入到第一个节点
      node.next=this.head//将之前第一个节点变成指向此节点next
      this.head=node//此节点指向head，取代之前第一个节点
    }else{
    //插入到后面任意一个节点
      var lastNode=this.head
      for(var i=0;i<position-1;i++){
        lastNode=lastNode.next//找到position位置之前的节点，用position前一个位置节点的next表示
      }
      //此节点替换position位置原本的节点，此节点next指向position位置原本的节点
      node.next=lastNode.next
      lastNode.next=node
    }
this.length++//链表长度+1
  }
  //查找节点
  linkList.prototype.get=function(position){
    if(position<0||position>this.length-1){
      console.error('查找节点失败')
    return 
    }
    var currentNode=this.head
    for(var i=0;i<position;i++){
      currentNode=currentNode.next
    }
    return currentNode.data
  }
  //查找对应节点索引
  linkList.prototype.indexOf=function(data){
    var currentNode=this.head
    var index=0
    while(data!==currentNode.data){
      currentNode=currentNode.next
      if(currentNode===null){//当currentNode为null，说明已经找遍了整个链表，返回-1
      return -1//指链表中没有对应节点
    }
      index++
    }
      return index
  }
  //修改节点data
  linkList.prototype.update=function(position,data){
    if(position<0||position>this.length-1){
      console.error('修改节点失败')
    return 
    }
    var currentNode=this.head
    for(var i=0;i<position;i++){
      currentNode=currentNode.next
    }
    currentNode.data=data
  }
  //根据位置删除节点data
  linkList.prototype.removeAt=function(position){
    if(position<0||position>this.length-1){
      console.error('删除节点失败')
    return 
    }
    if(position==0){
    this.head=this.head.next
    }else{
      var lastNode=this.head
    for(var i=0;i<position-1;i++){
      lastNode=lastNode.next//
    }
    lastNode.next=lastNode.next.next
    }
    this.length--
  }
  //根据元素删除节点
  linkList.prototype.remove=function(el){
      var sign=0
    if(el==this.head.data){
      this.head=this.head.next
    }else{
      var currentNode=this.head
    var lastNode=null
    for(var i=0;i<this.length-1;i++){
      lastNode=currentNode
      currentNode=currentNode.next
    if(el==currentNode.data){
      sign++
      break;
    }
    }
    if(sign==0){
    console.error('删除失败')
    }
    lastNode.next=currentNode.next
    }
        // lastNode.next=currentNode.next
  this.length--
  }
}
// 双向链表
function doublyLinkedList(){
  this.head=null
  this.tail=null
  this.length=0;
  //创建节点
  function Node(data){
    this.prev=null
    this.data=data
    this.next=null
  }
  //增加节点
  doublyLinkedList.prototype.append=function(data){
    var node=new Node(data)
    if(this.length==0){//此节点为第一个节点时
      this.head=node
    }else{
      // var currentNode=this.head
      // while(currentNode.next){
      //   currentNode=currentNode.next
      // }
      node.prev=this.tail
      this.tail.next=node
    }
    this.tail=node
    this.length++
  }
  //打印
  doublyLinkedList.prototype.log=function(){
    var currentNode=this.head
    var str=typeof currentNode.data==='object'?JSON.stringify(currentNode.data):currentNode.data//考虑到链表节点data是对象
    while(currentNode.next){
      currentNode=currentNode.next
      str=typeof currentNode.data==='object'?str+' '+JSON.stringify(currentNode.data):str+' '+currentNode.data
        }
    return str
  }
  //向前打印链表
  doublyLinkedList.prototype.forwardString=function(){
    var currentNode=this.tail
    var str=currentNode.data
    while(currentNode.prev){
      currentNode=currentNode.prev
      str=str+' '+currentNode.data
        }
    return str
  }
  //向后打印链表
  doublyLinkedList.prototype.backwardString=function(){
return this.log()
  }
  //插入元素
  doublyLinkedList.prototype.insert=function(position,data){
    var node=new Node(data)
    if(position<0||position>this.length){
      console.error('insert失败')
      return
    }
    if(position==this.length){//往后添加元素
      this.append(data)
    }else{
      if(position==0){//往第一个节点插入元素
        this.head.prev=node
        node.next=this.head
        this.head=node
      }else{//往中间节点插入元素
        var lastNode=this.head
      for(var i=0;i<position-1;i++){
        lastNode=lastNode.next//找到pisition位置前一个节点
      }
      //修改prev,next指向
      lastNode.next.prev=node
      node.prev=lastNode
      node.next=lastNode.next
      lastNode.next=node
      }
    }
    this.length++
  }
  //获取元素
  doublyLinkedList.prototype.get=function(position){
    if(position<0||position>=this.length){
      console.error('get失败')
      return
    }
    var currentNode=this.head
    for(var i=0;i<position;i++){
      currentNode=currentNode.next
    }
    return currentNode.data
  }
  //获取对应元素索引
  doublyLinkedList.prototype.indexOf=function(el){
    var currentNode=this.head
    var sign=0//设置标记
    for(var i=0;i<this.length;i++){
      if(el==currentNode.data){
        sign++
        break;
      }
      currentNode=currentNode.next
    }
    if(sign==0){//如果标记仍然为0,则说明没有找到相同元素
      return -1
    }
    return i
  }
  //更新position位置元素
  doublyLinkedList.prototype.update=function(position,el){
    if(position<0||position>=this.length){
      console.error('update失败')
      return
    }
    var currentNode=this.head
    for(var i=0;i<position;i++){
      currentNode=currentNode.next
    }
    currentNode.data=el
  }
  //删除position位置元素
  doublyLinkedList.prototype.removeAt=function(position){
    if(position<0||position>=this.length){
      console.error('removeAt失败')
      return
    }
if(this.length==1){//链表只有一个节点
this.head=null
this.tail=null
}else{
  if(position==0){//删除第一个节点
      this.head=this.head.next
      this.head.next.prev=null
    }else if(position==this.length-1){////删除最后一个节点
      var currentNode=this.head
        // 
        while(currentNode.next){
          currentNode=currentNode.next
        }
        currentNode.prev.next=null
        this.tail=currentNode.prev
  }else{//删除链表中间的元素
      var lastNode=this.head
    for(var i=0;i<position-1;i++){//找到position位置前一个元素
      lastNode=lastNode.next
    }
    lastNode.next.next.prev=lastNode
    lastNode.next=lastNode.next.next
    }
}
this.length--
  }
  //删除链表中el元素
  doublyLinkedList.prototype.remove=function(el){
    if(this.indexOf(el)==-1){
      console.error('remove失败,没有找到该元素')
    return
    }
    this.removeAt(this.indexOf(el))
    
  }
  //判断链表是否为空
  doublyLinkedList.prototype.isEmpty=function(){
return this.length==0
  }
}

//集合
function Set(){
  this.items={}
  //add
  Set.prototype.add=function(value){
    if(this.has(value)){
      console.error('add失败')
      return 
    }else{
      this.items[value]=value
    }
  }
  //判断集合内是否有该属性
  Set.prototype.has=function(value){
    return this.items.hasOwnProperty(value)
  }
  //remove集合内b该属性
  Set.prototype.remove=function(value){
    if(!this.items.hasOwnProperty(value)){
      console.error('remove失败')
      return 
    }else{
      delete this.items[value]
    }
  }
  //clear集合
  Set.prototype.clear=function(value){
    this.items={}
  }
  //集合内的元素个数
  Set.prototype.size=function(value){
    return Object.keys(this.items).length
  }
  //集合内所有元素值
  Set.prototype.values=function(){
    return Object.values(this.items )
  }

  //集合间的操作
  //并集 对于给定的两个集合,返回一个包含两个集合中所有元素的新集合
  Set.prototype.union=function(otherSet){
    //创建新集合
    var unionSet=new Set()
    //将otherSet集合里元素放入set
    for(var i =0;i<otherSet.size();i++){
      unionSet.add(otherSet.values()[i])
    }
    //从此集合内筛选出unionSet集合内没有的元素,将其添加到unionSet里
    for(var i=0;i<this.size();i++){
      if(unionSet.has(this.values()[i])){
        continue
      }
      unionSet.add(this.values()[i])
    }
    return unionSet
  }
  //交集 对于给定的两个集合,返回一个包含两个集合中共有元素的新集合
  Set.prototype.intersection=function(otherSet){
    //创建新集合
    var intersection=new Set()
    //筛选出此集合内和otherSet集合共有的元素,将其添加到intersection里
    for(var i=0;i<otherSet.size();i++){
      if(this.has(otherSet.values()[i])){
        intersection.add(otherSet.values()[i])
      }
    }
    return intersection
  }
  //差集 对于给定的两个集合,返回一个包含所有存在于第一个集合且不存在第二个集合的元素的新集合
  Set.prototype.difference=function(otherSet){
    //创建新集合
    var difference=new Set()
    //将此集合元素添加到set中
    for(var i=0;i<this.size();i++){
      difference.add(this.values()[i])
    }
    //筛选出此集合中otherSet集合没有的元素,将其添加到intersection里
    for(var i=0;i<otherSet.size();i++){
      if(difference.has(otherSet.values()[i])){
        difference.remove(otherSet.values()[i])
      }
    }
    return difference
  }
  //子集 验证一个给定集合是否是另一个集合的子集
  Set.prototype.subset=function(otherSet){
    // 验证此集合中每个元素,在otherSet中都能找到
    for(var i=0;i<this.size();i++){
      if(!otherSet.has(this.values[i])){
        return false
      }
      return true
    }
  }
}
//哈希表创建
  //字符串哈希化数字下标重复,用链地址法解决重复元素下标
  function HashTable(){
    //数组本身
    this.storage=[]
    //count代表数组中放入的元素个数,"count/storage.length"代表装载因子,装载因子过大,不利于数组继续添加元素,
    // 数组越来越满,字符串哈希化数字下标越有可能重复,影响哈希表操作效率
    this.count=0
    //数组中一共可以存放多少元素
    this.limit=10
  HashTable.prototype.hashFunc=function (str,size){//哈希函数
// 1.将字符串转化成数字hashCode
    var hashCode=0; //定义hashCode变量
    //霍纳法则(秦九韶公式),计算hashCode值 str->Unicode编码
    for(var i=0;i<str.length;i++){
      hashCode=hashCode*37+str.charCodeAt(i)//37代表一个常量,换任意十位质数皆可
    }
// 2.将数字hashCode压缩到一个数组(长度范围)中
// 取余操作
return hashCode%size
  }
  HashTable.prototype.put=function (key,value){//哈希表插入操作
    //哈希化字符串,获取索引值
      var index=this.hashFunc(key,this.limit)
    //将字符串插入数组中对应索引值处
    //判断数组中此索引值处有无桶
    if(this.storage[index]){// 如果有桶,循环遍历桶中是否有该key
        var currentNode=this.storage[index].head
        var flag=false//默认桶中没有该key
      for(var i=0;i<this.storage[index].length;i++){//循环遍历桶中是否有该key
        if(Object.keys(currentNode.data)[0]==key){
          flag=true//如果有key，设置flag为true
          break;
        }
        currentNode=currentNode.next
      }
      if(flag){//如果有key,修改对应key的value;
        this.storage[index].update(i,{[key]:value})
      }else{//如果没有key,桶中添加该元素
        this.storage[index].append({[key]:value})
        this.count++
      }
    }else{// 如果没有桶,添加桶,桶中添加该元素
    var linkedList=new doublyLinkedList()
    linkedList.append({[key]:value})
    this.storage[index]=linkedList
    this.count++
    }
    if(this.count/this.limit>0.75){//如果装载因子大于0.75，给哈希表进行扩容操作
      this.resize(this.limit*2)
    }
  }
  HashTable.prototype.get=function(key){
  //获取key索引值
  var index=this.hashFunc(key,this.limit)
  //判断是否有桶
  if(!this.storage[index])return null//没桶的话，返回null
    var currentNode=this.storage[index].head
    // console.log(index)
  // console.log(this.storage[8])
    while(currentNode){
      if(Object.keys(currentNode.data)[0]==key){//有桶的话，遍历桶中元素，返回对应value
        return currentNode.data[Object.keys(currentNode.data)[0]]
      }
      currentNode=currentNode.next
    }
    return null//遍历后没有值，返回Null
  }
  HashTable.prototype.remove=function(key){
    //获取key索引值
    var index=this.hashFunc(key,this.limit)
    // 索引值处有无桶，没桶的话，警告返回
    if(!this.storage[index]){
      console.error('remove失败，没找到对应链表')
      return
    }
    //遍历寻找对应索引值桶中key元素，找到删除，没找到，警告返回
    var currentNode=this.storage[index].head
    var i=0
    while(currentNode){
      if(currentNode.data[key]){
        this.storage[index].removeAt(i)
        this.count--
        // 如果装载因子小于0.25，进行缩小容量，装载因子最小为7
        if(this.count>7&&this.count/this.limit<0.25){
          this.resize(Math.floor(this.limit/2))
        }
        return
      }
      i++
      currentNode=currentNode.next
    }
    console.error('remove失败，没找到对应元素')
  }
  //哈希表元素个数
  HashTable.prototype.size=function(){
    return this.count
  }
  //哈希表元素个数
  HashTable.prototype.size=function(){
    return this.count
  }
  HashTable.prototype.resize=function(newLimit){
    if(newLimit==this.limit) return
    // 重置哈希表属性
    var oldStorage=this.storage
    this.storage=[]
    this.count=0
    this.limit=newLimit
    // 遍历表中元素，重新执行put方法，添加到新的数组中
    for(var i=0;i<oldStorage.length;i++){
      if(!oldStorage[i]||oldStorage[i].length==0){//如果没有桶或者桶中无元素，去下一个桶中找元素
        continue
      }
      var currentNode=oldStorage[i].head
      while(currentNode){
        this.put(Object.keys(currentNode.data)[0],currentNode.data[Object.keys(currentNode.data)[0]])
        currentNode=currentNode.next
      }
    }
  }
  }

  //二叉搜索树
function BinarySearchTree(){
  //节点类
  function Node(key){
    this.key=key
    this.left=null
    this.right=null
  }
  // 插入操作
  BinarySearchTree.prototype.insert=function(key){
    //创建节点
    var node =new Node(key)
    //判断root是否有值，如果没值， root指向该节点
    if(!this.root){
      this.root=node
      return
    }
    function compareNode(node,newNode){//node代表被比较节点，newNode代表插入节点
    // 大于被比较节点则与被比较节点右子节点比较，截止到右子节点为null，将插入节点放入该位置
    if(node.key<newNode.key){
      if(!node.right){
        node.right=newNode
      }else{
        compareNode(node.right,newNode)
      }
    }else{
      // 小于被比较节点则与被比较节点左子节点比较，截止到左子节点为null，将插入节点放入该位置
      if(!node.left){
        node.left=newNode
      }else{
        compareNode(node.left,newNode)
      }
    }
  }
    // 如果有值，轮流比较节点中大小
    compareNode(this.root,node)
  }
  BinarySearchTree.prototype.preLog=function(){//先序打印
    // 初始str
    var str=''
    // 轮流给str赋值二叉搜索树的节点
function nodeStr(node) {
  if(!node)return
  str+=node.key+' '
  nodeStr(node.left)
  nodeStr(node.right)
}
//node=11
//node=11.left=7
//node=7.left=5
//node=5.left=3
//node=3.left=null
//node=3.right=null，node=3执行结束，返回node=5，执行node=5.right
//node=5.right=6
//node=6.left=null
//node=6.right=null，node=6执行结束，返回node=5，node=5执行结束，返回node=7，执行node=7.right
//node=7.right=9
// 。。。。
nodeStr(this.root)
    return str
  }
  BinarySearchTree.prototype.max=function(){//最大值
    var currentNode=this.root
    while(currentNode.right){
      currentNode=currentNode.right
    }
    return currentNode.key
  }
  BinarySearchTree.prototype.min=function(){//最小值
    var currentNode=this.root
    while(currentNode.left){
      currentNode=currentNode.left
    }
    return currentNode.key
  }
  BinarySearchTree.prototype.get=function(key){//查询节点
    //递归方法
    function searchNode (node,key) {
      if(!node){
        console.error('没找到对应node')
        return 
      }
      if(node.key==key)return node;
      if(node.key<key)return searchNode(node.right,key)
      if(node.key>key)return searchNode(node.left,key)
    }
    return searchNode(this.root,key)
    //循环方法
    // var node=this.root//循环判断node的值
    // while(node){
    //   if(node.key<key){
    //     node=node.right//赋值node的值
    //   }else if(node.key>key){
    //     node=node.left
    //   }else{
    //     return true
    //   }
    // }
    // console.error('没找到对应node')
    // return false
  }
  BinarySearchTree.prototype.remove=function(key){//删除
    // 寻找节点
    var parentNode=null
    function searchNode(node) {
      // 没有找到节点
      if(!node){
    console.error('没找到对应node')
    return 
    }
      if(node.key==key)return node
      parentNode=node
      if(node.key<key)return searchNode(node.right,key)
      if(node.key>key)return searchNode(node.left,key)
    }
     currentNode=searchNode(this.root)
    if(!currentNode)return//如果没找到对应节点
    //根据节点情况分类做删除操作
    // 如果对应节点为叶子节点（没有子节点）
    if(!currentNode.left&&!currentNode.right){
      //如果该二叉搜索树只有一个根节点
      if(currentNode==this.root){
        this.root=null
        return
      }
      // 判断是父节点的左右子节点
      if(currentNode.key<parentNode.key){//如果是父节点的左子节点
        parentNode.left=null
      }else{//如果是父节点的右子节点
        parentNode.right=null
      }
    }
    if(currentNode.left&&currentNode.right){ // 如果对应节点为有两个子节点
      // 寻找前驱后继节点,此例为寻找后继节点
      var successor=currentNode.right//后继节点在删除节点的右子树中
      while(successor.left){
        successorParent=successor
        successor=successor.left
      }
      //如果删除的是根节点
      if(currentNode==this.root){
      this.root=successor
      }else if(currentNode==parentNode.left){//如果删除的是父节点的左子节点
      parentNode.left=successor
      }else{//如果删除的是父节点的右子节点
      parentNode.right=successor
      }
      successor.left=currentNode.left//把该节点的左子树赋值给后继节点的left
      // 判断所删除节点右子树是树(多个节点)还是一个节点,// 如果是节点,不用给后继节点赋值,继续为null
      if(successor.key!=currentNode.right.key){// 如果是树,要给后继节点赋所删除节点的右子树
      successorParent.left=successor.right// 考虑到后继节点有右子节点,将后继节点的父节点指向后继节点的right,后继节点right有值,就指向此值,没有就指向Null
        successor.right=currentNode.right
      }
    }else if(currentNode.left||currentNode.right){// 如果对应节点为只有一个子节点
      // 如果对应节点为根节点
      if(currentNode==this.root){
        this.root=currentNode.left||currentNode.right
        return
      }
      // 判断是父节点的左右子节点
      if(currentNode.key<parentNode.key){//如果是父节点的左子节点
        parentNode.left=currentNode.left||currentNode.right//‘或’表示让父节点指向currentNode的子节点，不管是左是右，因为currentNode只有一个子节点
      }else{//如果是父节点的右子节点
        parentNode.right=currentNode.left||currentNode.right
      }
    } 
  }
  //
}