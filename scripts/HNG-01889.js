let intern = {
    "greeting": "Hello World, ", 
    "name": "Godwin Chiezugo ",
    "ID": "HNG-01889 ",
    "email": "gchiezugo47@gmail.com ",
    "language": "JavaScript ",
    internInfo: function (){
        return this.greeting + 'this is ' + this.name + 'with HNGi7 ID ' + this.ID + 'and email ' + this.email +'using ' + this.language + 'for stage 2 task ';
    }
};
console.log(intern.internInfo());