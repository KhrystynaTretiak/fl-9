import { Component, OnInit } from '@angular/core';

export class Lesson {
  constructor(public topic: string,
    public date: string,
    public lecturer: string) { }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  lesson: Lesson = new Lesson("", "", "");
  lessons: Lesson[] = [];

  addLesson(){
    this.lessons.push(new Lesson(this.lesson.topic, this.lesson.date, this.lesson.lecturer));
  }

  constructor() { }

  ngOnInit() {
  }

}
