class Student {
    constructor(name, rno) {
        this.studname = name;
        this.rollno = rno;
    }
    stud_info() {
        console.log("Using Inheritance Details of Students are displayed:")
        return `Student's Name: ${this.studname}\nRoll No.: ${this.rollno}`;
    }
}

class Education extends Student {
    constructor(name, rno, coll, branch) {
        super(name, rno);
        this.college = coll;
        this.branch = branch;
    }
    edu_info() {
        return `College Name: ${this.college}\nBranch: ${this.branch}`;
    }
}

class Hobbies extends Education {
    constructor(name, rno, coll, branch, hob, mrk) {
        super(name, rno, coll, branch)
        this.hobby = hob;
        this.marks = mrk;
    }
    hob() {
        return `Hobbies: ${this.hobby}\nMarks in Physics: ${this.marks}`;
    }
}

var StudObj = new Hobbies("Bhanu", 62, "Xavier Institute Of Engineering", "Information Technology", "Cricket", 63);
console.log(StudObj.stud_info());
console.log(StudObj.edu_info());
console.log(StudObj.hob());
