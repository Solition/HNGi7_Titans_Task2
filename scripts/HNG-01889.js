let intern = {
    "greeting": "Hello World, ", 
    "name": "Godwin Chiezugo ",
    "ID": "HNG-01889 ",
    "language": "JavaScript ",
    internInfo: function (){
        return this.greeting + 'this is ' + this.name + 'with HNGi7 ID ' + this.ID + 'using ' + this.language + 'for stage 2 task';
    }
};
console.log(intern.internInfo());