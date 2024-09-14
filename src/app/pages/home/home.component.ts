import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';
import { CupomFormComponent } from '../../components/cupom-form/cupom-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModalConfirmComponent } from '../../components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderHomeComponent,
    CupomFormComponent,
    FooterComponent,
    ModalConfirmComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  handleClose() {
    this.isModalVisible = false;
  }
}
