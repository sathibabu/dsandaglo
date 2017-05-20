

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

      if(pos <1){
          return false;
      }
      
      let head = this.head;
      let count =0;

      if(this.head===null){
        return false;
      }
      
      if(pos === 1 && head){
         let temp = head;
         this.head = head.next;
         temp=null;
         return true;
      }

      while(count < pos-2 && head!=null){
          count+=1;
          head = head.next;
      }

      if(head === null){
        return false;
      }else{

          let temp = head.next;
          head.next = temp ? temp.next:null; 
          temp=null;
          return true;
      }


    }

   


}


/**
   * MergetLists () takes head postions of two sorted lists and returns sorted list with their head 
   * @Param {Object} head1
   * @Param {Object} head2
   */

  var mergeLists =function (head1,head2){ 

       let head3 =null;
       let curr_head3 = head3;
        
       if(head1 ==null && head2 ==null){
          return head3;
       }

       if(head1 ==null){
          head3 = head2; 
          return head3;
       }

       if(head2 ==null){
          head3 = head1; 
          return head3;
       }

       while(head1 !== null && head2 !=null){
             if(head1.value <= head2.value){
                let temp = head1;
                head1 = head1.next;
                temp.next = null;
                curr_head3 ? curr_head3.next = temp : curr_head3 = temp;
                curr_head3 = curr_head3.next;

             }else if(head2.value < head1.value){
                let temp = head2;
                head2 = head2.next;
                temp.next = null;
                curr_head3 ? curr_head3.next = temp : curr_head3 = temp; 
                curr_head3 = curr_head3.next;               
             }
       }

       if(head1===null && head2 !==null){
             curr_head3.next = head2;
       }else if(head2===null && head1 !==null){
             curr_head3.next = head1;   
       } 

       return head3; 
   }


module.exports = {linkedList,mergeLists};


