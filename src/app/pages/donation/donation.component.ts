import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { FormInputsComponent } from "../../components/form/form-inputs/form-inputs.component";
import { CupomFormComponent } from "../../components/cupom-form/cupom-form.component";
import { ModalConfirmComponent } from "../../components/modal-confirm/modal-confirm.component";
import { ModalWalletComponent } from "../../components/modal-wallet/modal-wallet.component";
import { PriceInputComponent } from "../../components/form/price-input/price-input.component";
import { PeopleInputComponent } from "../../components/form/people-input/people-input.component";

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [FooterComponent, ProductListComponent, FormInputsComponent, CupomFormComponent, ModalConfirmComponent, ModalWalletComponent, PriceInputComponent, PeopleInputComponent],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {

}
