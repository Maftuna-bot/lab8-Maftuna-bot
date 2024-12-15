function skillsMember() {
    var member = {
        name: 'Sergey',
        age: 30,
        skills: ['Javascript', 'HTML', 'CSS'],
        salary: 1000,
        position: 'Developer',
        experience: 5, // новое свойство
        getSkills: function() {
            return this.skills;
        },
        getPosition: function() {
            return this.position;
        },
        getExperience: function() { // новый метод
            return this.experience;
        }
    };

    return member;
}