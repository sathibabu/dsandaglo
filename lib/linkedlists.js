

 class linkedList {
   
   constructor(){
   		this.head = null;
   }


   createNode(value){
   	  let node = {};
   	  node.value=value;
   	  node.next = null; 
      return node;
   }

   addToList(value){
     
      let node = this.createNode(value);

      if(this.head === null){
      		this.head = node;
      }else{
      	  
      	  let current = this.head;
          while(current.next!==null){
          	current=current.next;
          } 
          current.next=node;
      } 

   }

   printList(){
      let head = this.head;
      let result = [];  
      while(head!==null){
           result.push(head.value);
           head=head.next;
      }
      return result;
   }

}


module.exports = linkedList;


