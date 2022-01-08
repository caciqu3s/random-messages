import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message.service';
import { QuoteService } from '../shared/services/quote.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  phoneNumber: string = '';
  message: string = '';

  constructor(private messageService: MessageService, private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((data: any) => this.message = data.value);
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.message, this.phoneNumber).subscribe(data => alert('Text sended!'))
  }

}
