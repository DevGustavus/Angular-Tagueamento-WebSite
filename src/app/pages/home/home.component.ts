import { Component, OnInit, inject } from '@angular/core';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';
import { CupomFormComponent } from '../../components/cupom-form/cupom-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModalConfirmComponent } from '../../components/modal-confirm/modal-confirm.component';
import { GtmService } from '../../core/services/gtm.service';

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
export class HomeComponent implements OnInit {
  isModalVisible = false;

  // Injeta o serviço do GTM
  private gtmService = inject(GtmService);

  ngOnInit(): void {
    this.gtmService.logPageView({
      pathname: 'HOME_PATH',
      funcionalidade: 'HOME_FUNC',
      titulo: 'HOME_TITLE',
    });
  }

  showModal(): void {
    this.isModalVisible = true;

    this.gtmService.logEvent({
      category: 'HOME',
      action: 'CLICK_BUTTON',
      label: 'HOME_BTN_ENLIST',
    });
  }

  handleClose(): void {
    this.isModalVisible = false;
  }
}
