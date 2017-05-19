

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

   reverseList(){

      let reverselist=null;
      let head = this.head;
      
      if(head==null || head.next ===null)
          return head;

      while(head!==null){
           let temp = head;
           head = head.next;
           temp.next = reverselist;
           reverselist = temp;

      }

      this.head=reverselist;  
   }

   
   /**
   * Delete Nth node
   */

    deleteNode(pos){
      
      let head = this.head;
      let count =0;

      if(this.head===null)
         return false;
      
      if(pos === 1 && head){
         let temp = head;
         this.head = head.next;
         temp=null;
         return true;
      }

      while(count < pos-1 && head!=null){
          count+=1;
          head = head.next;
      }

      if(head === null){
        return false;
      }else{
          let temp = head.next;
          head.next = temp.next; 
          delete temp;
          return true;
      }


    }

   /**
   *
   */

   mergeLists(head1,head2){

   }



}


module.exports = linkedList;


