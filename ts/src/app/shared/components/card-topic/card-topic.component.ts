import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
})
export class CardTopicComponent implements OnInit {
  @Input() assunto: string;
  @Input() autor: string;
  @Input() texto: string;
  @Input() numeroLikes: string;
  @Input() numeroRespostas: string;
  showComments = false;

  constructor() {
    this.assunto = '';
    this.autor = '';
    this.texto = '';
    this.numeroLikes = '0';
    this.numeroRespostas = '0';
  }

  ngOnInit(): void {}

  toggleComments(): void {
    if (Number(this.numeroRespostas) > 1) {
      this.showComments = !this.showComments;
    }
  }
}
