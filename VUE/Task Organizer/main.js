Vue.component("todo", {
    template: "#note",
    props: ["name"]
});

var notes = new Vue({
    el: '#task-notes',
    data: {
        notes: [
            {
                task: "Sort desk",
                priority: 3,
                date_creation: new Date().toLocaleString(),
                state: "complete"
            },
            {
                task: "Update repositories",
                priority: 1,
                date_creation: new Date().toLocaleString(),
                state: "complete"
            },
            {
                task: "Modify keywords",
                priority: 2,
                date_creation: new Date().toLocaleString(),
                state: "incomplete"
            }
        ],
        newTask: "",
        stateTask: []
    },
    methods: {
        newNote: function(){
            var task = this.newTask;
            var priority = parseInt((Math.random() * 3 ) + 1);
            var date_creation = new Date().toLocaleString();
            var state = "incomplete";

            this.notes.push({task,priority,date_creation,state});
        },

        countNotes: function(notes){
            var result = 0;
            for(let i = 0; i < notes.length; i++){
                if(notes[i].state == "incomplete"){
                    result++;
                }
            }
            return result;
        }
    },
    computed: {
        notesFilter: function(){
            var self = this;
            return self.notes.filter(function(note){
                console.log(self.stateTask);
                return note.state == self.stateTask[0] || note.state == self.stateTask[1];
            });
        }
    }
});
