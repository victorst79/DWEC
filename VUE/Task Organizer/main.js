var notes = new Vue({
    el: '#task-notes',
    data: {
        notes: [
            {
                task: "Sort desk",
                priority: 3,
                date_creation: new Date().toLocaleString(),
                complete: true
            },
            {
                task: "Update repositories",
                priority: 1,
                date_creation: new Date().toLocaleString(),
                complete: false
            },
            {
                task: "Modify keywords",
                priority: 2,
                date_creation: new Date().toLocaleString(),
                complete: false
            }
        ],
        newTask: ""
    },
    methods: {
        newNote: function(){
            console.log(this.newTask);

            var task = this.newTask;
            var priority = parseInt((Math.random() * 3 ) + 1);
            var date_creation = new Date().toLocaleString();
            var complete = false;

            this.notes.push({task,priority,date_creation,complete});
            console.log(this.notes.length);
        },

        countNotes: function(notes){
            var result = 0;
            for(let i = 0; i < notes.length; i++){
                if(notes[i].complete == false){
                    result++;
                }
            }
            return result;
        }
    }
});
