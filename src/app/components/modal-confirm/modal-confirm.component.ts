import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss',
})
export class ModalConfirmComponent {
  @Input() isVisible = false;
  @Output() isclosed = new EventEmitter<void>();

  constructor(private router: Router) {}

  closeModal() {
    this.isVisible = false;
    this.isclosed.emit();
  }

  acceptAction() {
    this.router.navigate(['/donation']);
  }
}
