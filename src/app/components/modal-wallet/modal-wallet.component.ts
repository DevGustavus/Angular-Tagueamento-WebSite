import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-wallet.component.html',
  styleUrl: './modal-wallet.component.scss',
})
export class ModalWalletComponent {
  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
